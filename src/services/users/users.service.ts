import { ApolloClient } from '@apollo/client';
import { UserQuery } from '@gql/graphql';
import { Res } from '@utils/response.type';
import { USER_QUERY } from './users.queries';

export default class UsersService {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public async getCurrent(): Promise<Res<UserQuery>> {
    const { data } = await this.apolloClient.query({ query: USER_QUERY });
    return data.user;
  }
}
