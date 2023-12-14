import { USER_QUERY } from './users.queries';
import { ApolloClient } from '@apollo/client';

export default class Statements {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public async getCurrent() {
    const { data } = await this.apolloClient.query({ query: USER_QUERY });
    return data.user;
  }
}

