import { DocumentNode, gql } from '@apollo/client';

export const CONNECT_INTUIT_MUTATION = gql`
  mutation userOrganizationAcctProviderConnect(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $url: String!
    $automaticPull: Boolean!
    $automaticPush: Boolean!
  ) {
    userOrganizationAcctProviderConnect(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      url: $url
      automatic_pull_enabled: $automaticPull
      automatic_push_enabled: $automaticPush
    ) {
      id
      code
      conn_expires_at
      created_at
      updated_at
      organization_id
      acct_provider_code
    }
  }
`;

const GET_INTUIT_OAUTH_MUTATION = gql`
  mutation userOrganizationAcctProviderGetOAuthUrl(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderGetOAuthUrl(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
    )
  }
`;
const GET_PUSH_OPTIONS_MUTATION = gql`
  mutation userOrganizationAcctProviderConnConfigurationPushOptionsGet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderConnConfigurationPushOptionsGet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
    )
  }
`;

const SET_PUSH_OPTIONS_MUTATION = gql`
  mutation userOrganizationAcctProviderConnConfigurationPushOptionsSet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $payload: JSON!
  ) {
    userOrganizationAcctProviderConnConfigurationPushOptionsSet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      payload: $payload
    ) {
      id
      code
      payload
      conn_expires_at
      organization_id
      acct_provider_code
    }
  }
`;