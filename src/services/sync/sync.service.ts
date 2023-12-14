import { ApolloClient } from '@apollo/client';
import { SYNC_PROVIDER } from './sync.queries';

export default class Sync {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public sync = async ({ organizationId, accountProvider }: any) => {
    const synchronization = await this.apolloClient.mutate({
      mutation: SYNC_PROVIDER,
      variables: {
        organizationId,
        accountProvider,
        pull: true,
        push: false,
      },
    });
    return synchronization;
  };
}
