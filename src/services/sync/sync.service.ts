import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationAcctProviderSynchronizeMutation,
  UserOrganizationAcctProviderSynchronizeMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { SYNC_PROVIDER } from './sync.queries';

export default class Sync {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public sync = async (
    variables: UserOrganizationAcctProviderSynchronizeMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderSynchronizeMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: SYNC_PROVIDER,
      variables,
    });

    return data!.userOrganizationAcctProviderSynchronize;
  };
}
