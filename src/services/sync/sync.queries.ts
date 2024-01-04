import { gql } from '@gql';

export const SYNC_PROVIDER = gql(`
  mutation userOrganizationAcctProviderSynchronize(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $push: Boolean!
    $pull: Boolean!
  ) {
    userOrganizationAcctProviderSynchronize(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      pull: $pull
      push: $push
    ) {
      id
      name
    }
  }
`);
