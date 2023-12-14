import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloLink, concat } from 'apollo-link';;

export const createApolloClient = ({ token, baseUrl }) => {
  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        // Authorization: token.length > 0 && `Bearer ${token}`,
        Authorization: `Bearer ${token}`,
      },
    });
    return forward(operation);
  });

  const httpLink = new HttpLink({ uri: baseUrl });

  return new ApolloClient({
    link: concat(authMiddleware, httpLink),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
