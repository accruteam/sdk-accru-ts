import { ApolloClient } from '@apollo/client';
import { SYNC_PROVIDER } from './sync.queries';

export default class Sync {
  constructor(private apolloClient: ApolloClient<unknown>) {}

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
