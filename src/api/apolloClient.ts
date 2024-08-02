import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { withScalars } from 'apollo-link-scalars';
import {
  GraphQLError,
  GraphQLScalarType,
  IntrospectionQuery,
  Kind,
  buildClientSchema,
} from 'graphql';
import introspectionResult from './gql/schema.graphql.json';

interface IAccruClientParams {
  baseUrl: string;

  token?: string;
  getAuthToken?: () => Promise<string>;
}

// eslint-disable-next-line func-names
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const BigIntScalar = new GraphQLScalarType({
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
    } catch (err) {
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
  baseUrl,
  getAuthToken,
  token,
}: IAccruClientParams) => {
  const scalarLink = withScalars({
    schema,
    typesMap: {
      BigInt: BigIntScalar,
    },
  });

  const httpLink = createHttpLink({ uri: baseUrl });

  const authLink = setContext(async (_, { headers }) => {
    const selectedToken =
      typeof getAuthToken === 'function'
        ? (await getAuthToken()) || token
        : token;

    return {
      headers: {
        ...headers,
        ...(selectedToken && {
          authorization: `Bearer ${selectedToken}`,
        }),
      },
    };
  });

  return new ApolloClient({
    link: ApolloLink.from([authLink, scalarLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export type { IAccruClientParams };
export default createApolloClient;
