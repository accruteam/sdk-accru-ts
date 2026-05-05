import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import {
  CombinedGraphQLErrors,
  CombinedProtocolErrors,
  ServerError,
} from '@apollo/client/errors';
import { SetContextLink } from '@apollo/client/link/context';
import { HttpLink } from '@apollo/client/link/http';
import { withScalars } from 'apollo-link-scalars';
import { DateTimeISOResolver } from 'graphql-scalars';
import {
  GraphQLError,
  GraphQLFormattedError,
  GraphQLScalarType,
  IntrospectionQuery,
  Kind,
  buildClientSchema,
} from 'graphql';
import introspectionResult from './gql/schema.graphql.json';
import packageInfo from '../../package.json';

const ACCRU_SDK_NAME = packageInfo.name || '@accru/client';
const ACCRU_SDK_VERSION = packageInfo.version || 'UNKNOWN';

const AccruEnvironmentUrls = {
  production: 'https://api.accru.co/graphql',
  qa: 'https://api.qa.accru.co/graphql',
};

interface IAccruClientParams {
  environment?: keyof typeof AccruEnvironmentUrls;

  /** Overrides the environment base URL */
  url?: string;

  getAuthToken?: () => Promise<string>;

  onAuthError?: () => void;
  onGraphQLError?: (errors: ReadonlyArray<GraphQLFormattedError>) => void;
  onNetworkError?: (error: GraphQLFormattedError) => void;
}

if (!(BigInt.prototype as any).toJSON) {
  // eslint-disable-next-line func-names
  (BigInt.prototype as any).toJSON = function () {
    return this.toString();
  };
}

const BigIntResolver = new GraphQLScalarType({
  name: 'BigInt',
  description:
    'The `BigInt` scalar type represents non-fractional signed whole numeric values.',
  serialize(outputValue: any) {
    const bigint = BigInt(outputValue.toString());
    if (outputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${outputValue}`);
    return bigint;
  },
  parseValue(inputValue: any) {
    const bigint = BigInt(inputValue.toString());
    if (inputValue.toString() !== bigint.toString())
      throw new GraphQLError(`BigInt cannot represent value: ${inputValue}`);
    return bigint;
  },
  parseLiteral(ast: any) {
    if (ast.kind !== Kind.INT && ast.kind !== Kind.STRING)
      throw new GraphQLError(
        `BigInt cannot represent non-integer value: ${ast}`,
      );
    try {
      const bigint = BigInt(ast.value);
      if (ast.value !== bigint.toString()) throw new Error();
      return bigint;
    } catch {
      throw new GraphQLError(`BigInt cannot represent value: ${ast.value}`);
    }
  },
  extensions: {
    codegenScalarType: 'bigint',
    jsonSchema: {
      type: 'integer',
      format: 'int64',
    },
  },
});

const schema = buildClientSchema(
  introspectionResult as unknown as IntrospectionQuery,
);

export const createApolloClient = ({
  environment,

  url,

  getAuthToken,

  onGraphQLError,
  onNetworkError,
  onAuthError,
}: IAccruClientParams) => {
  const errorLink = new ErrorLink(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      if (error.errors.length && typeof onGraphQLError === 'function')
        onGraphQLError(error.errors);

      if (
        error.errors.some(err => err.extensions?.code === 'UNAUTHENTICATED') &&
        typeof onAuthError === 'function'
      )
        onAuthError();

      return;
    }

    if (CombinedProtocolErrors.is(error)) {
      if (typeof onNetworkError === 'function') onNetworkError(error);
      return;
    }

    if (ServerError.is(error)) {
      if (typeof onNetworkError === 'function') onNetworkError(error);
      return;
    }

    if (error && typeof onNetworkError === 'function')
      onNetworkError(error instanceof Error ? error : new Error(String(error)));
  });

  const scalarLink = withScalars({
    schema,
    typesMap: {
      BigInt: BigIntResolver,
      DateTimeISO: DateTimeISOResolver,
    },
  });

  const authLink = new SetContextLink(async prevContext => {
    const selectedToken =
      typeof getAuthToken === 'function'
        ? (await getAuthToken()) || null
        : null;

    return {
      headers: {
        ...(prevContext?.headers ?? {}),
        ...(selectedToken && {
          authorization: `Bearer ${selectedToken}`,
        }),
        'accru-webapp-sdk-name': ACCRU_SDK_NAME,
        'accru-webapp-sdk-version': ACCRU_SDK_VERSION,
      },
    };
  });

  const selectedEnvironmentUrl =
    AccruEnvironmentUrls[environment || 'production'];
  if (!selectedEnvironmentUrl && !url) throw new Error('Invalid environment.');

  const httpLink = new HttpLink({
    uri: url || selectedEnvironmentUrl,
  });

  return new ApolloClient({
    link: ApolloLink.from([errorLink, scalarLink, authLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
      },
      query: {
        fetchPolicy: 'no-cache',
      },
      mutate: {
        fetchPolicy: 'no-cache',
      },
    },
  });
};

export type { IAccruClientParams };
export default createApolloClient;
