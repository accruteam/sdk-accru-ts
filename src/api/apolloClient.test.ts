import type { GraphQLFormattedError } from 'graphql';
import { gql } from '@apollo/client';
import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest';

import { createApolloClient, type IAccruClientParams } from './apolloClient';

const TEST_QUERY = gql`
  query ApolloClientTestQuery {
    __typename
  }
`;

const readHeader = (
  headers: HeadersInit | undefined,
  name: string,
): string | undefined => {
  if (!headers) return undefined;

  if (headers instanceof Headers) return headers.get(name) || undefined;

  if (Array.isArray(headers)) {
    const found = headers.find(
      ([headerName]) => headerName.toLowerCase() === name.toLowerCase(),
    );
    return found?.[1];
  }

  const asRecord = headers as Record<string, string | undefined>;
  return (
    asRecord[name] ||
    asRecord[name.toLowerCase()] ||
    asRecord[name.toUpperCase()]
  );
};

describe('createApolloClient', () => {
  let mockOnGraphQLError: ReturnType<
    typeof vi.fn<(errors: ReadonlyArray<GraphQLFormattedError>) => void>
  >;
  let mockOnNetworkError: ReturnType<typeof vi.fn>;
  let mockOnAuthError: ReturnType<typeof vi.fn<() => void>>;
  let mockGetAuthToken: ReturnType<typeof vi.fn<() => Promise<string>>>;
  let baseParams: IAccruClientParams;

  beforeEach(() => {
    mockOnGraphQLError =
      vi.fn<(errors: ReadonlyArray<GraphQLFormattedError>) => void>();
    mockOnNetworkError = vi.fn();
    mockOnAuthError = vi.fn<() => void>();
    mockGetAuthToken = vi.fn(async () => 'test-jwt');

    baseParams = {
      environment: 'qa',
      getAuthToken: mockGetAuthToken,
      onGraphQLError: mockOnGraphQLError,
      onNetworkError: mockOnNetworkError as NonNullable<
        IAccruClientParams['onNetworkError']
      >,
      onAuthError: mockOnAuthError,
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Client creation', () => {
    it('creates Apollo client with valid parameters', () => {
      const client = createApolloClient(baseParams);
      expect(client).toBeDefined();
      expect(client.cache).toBeDefined();
      expect(client.link).toBeDefined();
    });

    it('uses production GraphQL URL when environment omitted', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ data: { __typename: 'Query' } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

      const client = createApolloClient({
        getAuthToken: mockGetAuthToken,
        onGraphQLError: mockOnGraphQLError,
        onNetworkError: mockOnNetworkError as NonNullable<
          IAccruClientParams['onNetworkError']
        >,
        onAuthError: mockOnAuthError,
      });

      await client.query({ query: TEST_QUERY });

      expect(globalThis.fetch).toHaveBeenCalledTimes(1);
      expect(vi.mocked(globalThis.fetch).mock.calls[0]![0]).toBe(
        'https://api.accru.co/graphql',
      );
    });

    it('uses qa GraphQL URL when environment is qa', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ data: { __typename: 'Query' } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

      const client = createApolloClient(baseParams);

      await client.query({ query: TEST_QUERY });

      expect(vi.mocked(globalThis.fetch).mock.calls[0]![0]).toBe(
        'https://api.qa.accru.co/graphql',
      );
    });

    it('uses custom url when provided', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ data: { __typename: 'Query' } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

      const client = createApolloClient({
        ...baseParams,
        url: 'https://custom-api.example.com/graphql',
      });

      await client.query({ query: TEST_QUERY });

      expect(vi.mocked(globalThis.fetch).mock.calls[0]![0]).toBe(
        'https://custom-api.example.com/graphql',
      );
    });

    it('throws when environment is invalid and url missing', () => {
      expect(() =>
        createApolloClient({
          ...baseParams,
          environment: 'invalid' as any,
          url: undefined,
        }),
      ).toThrow('Invalid environment.');
    });
  });

  describe('Error handling', () => {
    it('calls onGraphQLError and onAuthError for UNAUTHENTICATED GraphQL errors', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            errors: [
              {
                message: 'Unauthorized',
                extensions: { code: 'UNAUTHENTICATED' },
              },
            ],
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient(baseParams);

      await expect(client.query({ query: TEST_QUERY })).rejects.toBeDefined();

      expect(mockOnGraphQLError).toHaveBeenCalledTimes(1);
      const graphQLErrorArgs = mockOnGraphQLError.mock.calls[0]![0];
      expect(graphQLErrorArgs).toHaveLength(1);
      expect(graphQLErrorArgs[0]?.extensions?.code).toBe('UNAUTHENTICATED');
      expect(mockOnAuthError).toHaveBeenCalledTimes(1);
      expect(mockOnNetworkError).not.toHaveBeenCalled();
    });

    it('calls onGraphQLError without onAuthError when GraphQL error is not unauthenticated', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(
          JSON.stringify({
            errors: [
              {
                message: 'Bad input',
                extensions: { code: 'BAD_USER_INPUT' },
              },
            ],
          }),
          {
            status: 200,
            headers: { 'content-type': 'application/json' },
          },
        ),
      );

      const client = createApolloClient(baseParams);

      await expect(client.query({ query: TEST_QUERY })).rejects.toBeDefined();

      expect(mockOnGraphQLError).toHaveBeenCalledTimes(1);
      expect(mockOnAuthError).not.toHaveBeenCalled();
    });

    it('calls onNetworkError when fetch rejects with Error', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(
        new Error('Network request failed'),
      );

      const client = createApolloClient(baseParams);

      await expect(client.query({ query: TEST_QUERY })).rejects.toBeDefined();

      expect(mockOnNetworkError).toHaveBeenCalledTimes(1);
      expect(mockOnGraphQLError).not.toHaveBeenCalled();
      expect(mockOnAuthError).not.toHaveBeenCalled();
    });

    it('normalizes non-Error rejected values for onNetworkError', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue('boom');

      const client = createApolloClient(baseParams);

      await expect(client.query({ query: TEST_QUERY })).rejects.toBeDefined();

      expect(mockOnNetworkError).toHaveBeenCalledTimes(1);
      const normalizedError = mockOnNetworkError.mock.calls[0]![0] as Error;
      expect(normalizedError).toBeInstanceOf(Error);
      expect(normalizedError.message).toContain('boom');
    });
  });

  describe('Error handlers optional', () => {
    it('creates client when error handlers omitted', () => {
      const client = createApolloClient({
        environment: 'qa',
        getAuthToken: mockGetAuthToken,
      });
      expect(client).toBeDefined();
    });

    it('rejects query when fetch fails and handlers omitted', async () => {
      vi.spyOn(globalThis, 'fetch').mockRejectedValue(
        new Error('Network request failed'),
      );

      const client = createApolloClient({
        environment: 'qa',
        getAuthToken: mockGetAuthToken,
      });

      await expect(client.query({ query: TEST_QUERY })).rejects.toBeDefined();
    });
  });

  describe('BigInt JSON serialization', () => {
    it('serializes BigInt via toJSON used by apolloClient setup', () => {
      createApolloClient(baseParams);
      const bigIntValue = BigInt('12345678901234567890');
      expect((bigIntValue as unknown as { toJSON(): string }).toJSON()).toBe(
        '12345678901234567890',
      );
    });
  });

  describe('Authentication and SDK headers', () => {
    it('sends Bearer token and Accru SDK headers on requests', async () => {
      mockGetAuthToken.mockResolvedValueOnce('token-from-provider');

      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ data: { __typename: 'Query' } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

      const client = createApolloClient({
        ...baseParams,
        getAuthToken: mockGetAuthToken,
      });

      await client.query({ query: TEST_QUERY });

      expect(globalThis.fetch).toHaveBeenCalledTimes(1);
      const requestInit = vi.mocked(globalThis.fetch).mock.calls[0]![1] as
        | RequestInit
        | undefined;
      const headers = requestInit?.headers;

      expect(readHeader(headers, 'authorization')).toBe(
        'Bearer token-from-provider',
      );
      expect(readHeader(headers, 'accru-webapp-sdk-name')).toBe(
        '@accru/client',
      );
      expect(readHeader(headers, 'accru-webapp-sdk-version')).toBeTruthy();
    });

    it('omits authorization header when getAuthToken omitted', async () => {
      vi.spyOn(globalThis, 'fetch').mockResolvedValue(
        new Response(JSON.stringify({ data: { __typename: 'Query' } }), {
          status: 200,
          headers: { 'content-type': 'application/json' },
        }),
      );

      const client = createApolloClient({
        environment: 'qa',
        onGraphQLError: mockOnGraphQLError,
      });

      await client.query({ query: TEST_QUERY });

      const requestInit = vi.mocked(globalThis.fetch).mock.calls[0]![1] as
        | RequestInit
        | undefined;
      expect(readHeader(requestInit?.headers, 'authorization')).toBeUndefined();
      expect(
        readHeader(requestInit?.headers, 'accru-webapp-sdk-version'),
      ).toBeTruthy();
    });
  });

  describe('Cache defaults', () => {
    it('sets no-cache fetch policy on query, watchQuery, and mutate', () => {
      const client = createApolloClient(baseParams);

      expect(client.defaultOptions?.query?.fetchPolicy).toBe('no-cache');
      expect(client.defaultOptions?.watchQuery?.fetchPolicy).toBe('no-cache');
      expect(client.defaultOptions?.mutate?.fetchPolicy).toBe('no-cache');
    });
  });
});
