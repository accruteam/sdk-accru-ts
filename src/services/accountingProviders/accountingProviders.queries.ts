import { gql } from '@gql';

export const DISCONNECT_ACCT_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnDisconnect(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderConnDisconnect(
      organization_id: $organizationId
      acct_provider: $accountProvider
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const UPDATE_ACCT_PROVIDER_CONN_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnUpdate(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $data: UserOrganizationAcctProviderConnUpdateSchema!
  ) {
    userOrganizationAcctProviderConnUpdate(
      organization_id: $organizationId
      acct_provider: $accountProvider
      data: $data
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const CONNECT_ACCT_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnect(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $url: String!
    $automaticPull: Boolean!
  ) {
    userOrganizationAcctProviderConnect(
      organization_id: $organizationId
      acct_provider: $accountProvider
      url: $url
      automatic_pull_enabled: $automaticPull
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const GET_ACCT_PROVIDER_OAUTH_URL_MUTATION = gql(`
  mutation UserOrganizationAcctProviderGetOAuthUrl(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderGetOAuthUrl(
      organization_id: $organizationId
      acct_provider: $accountProvider
    )
  }
`);

export const SYNC_ACCT_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAcctProviderSynchronize(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderSynchronize(
      organization_id: $organizationId
      acct_provider: $accountProvider
    )
  }
`);

export const GET_ALL_ACCT_PROVIDER_CONNS_QUERY = gql(`
  query UserOrganizationAcctProviders(
    $organizationId: String!,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
    ) {
      userOrganizationAcctProviders(
        organization_id: $organizationId

        after: $after
        first: $first

        before: $before
        last: $last

        skip: $skip
        take: $take

        sorting: $sorting
      ) {
          totalCount
          edges {
            cursor
            node {
              ...OrganizationAcctProviderConnFragment
            }
          }
          pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
          }
        }
    }
`);

export const GET_ACCT_PROVIDER_CONN_QUERY = gql(`
  query UserOrganizationAcctProvider(
    $organizationId: String!,
    $organizationAcctProviderConnId: String!
  ) {
    userOrganizationAcctProvider(
      organization_id: $organizationId,
      organization_acct_provider_conn_id: $organizationAcctProviderConnId
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const GET_ALL_ACCT_PROVIDER_SYNCS_QUERY = gql(`
  query UserOrganizationAcctProviderSynchronizations(
    $organizationId: String!,
    $organizationAcctProviderConnId: String,

    $scope: ORGANIZATION_ACCT_PROVIDER_SYNCHRONIZATION_SCOPE,
    $finished: Boolean,
    $failed: Boolean,
    $succeeded: Boolean,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
    ) {
      userOrganizationAcctProviderSynchronizations(
        organization_id: $organizationId
        organization_acct_provider_conn_id: $organizationAcctProviderConnId

        scope: $scope
        finished: $finished
        failed: $failed
        succeeded: $succeeded

        after: $after
        first: $first

        before: $before
        last: $last

        skip: $skip
        take: $take

        sorting: $sorting
      ) {
          totalCount
          edges {
            cursor
            node {
              ...OrganizationAcctProviderConnSynchronizationFragment
            }
          }
          pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
          }
        }
    }
`);

export const GET_ACCT_PROVIDER_SYNC_QUERY = gql(`
  query UserOrganizationAcctProviderSynchronization(
    $organizationId: String!,
    $organizationAcctProviderConnSynchronizationId: String!
  ) {
    userOrganizationAcctProviderSynchronization(
      organization_id: $organizationId,
      organization_acct_provider_conn_synchronization_id: $organizationAcctProviderConnSynchronizationId
    ) {
      ...OrganizationAcctProviderConnSynchronizationFragment
    }
  }
`);

export const ACCT_PROVIDER_CONN_VERIFY_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnCheckConnection(
    $organizationId: String!

    $acctProvider: ACCT_PROVIDER!
    $acctProviderConnCode: String!
  ) {
    userOrganizationAcctProviderConnCheckConnection(
      organization_id: $organizationId
      acct_provider: $acctProvider
      acct_provider_conn_code: $acctProviderConnCode
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const ACCT_PROVIDER_CONN_VERIFY_UNAUTHORIZED_MUTATION = gql(`
  mutation UnauthorizedUserOrganizationAcctProviderConnCheckConnection(
    $acctProvider: ACCT_PROVIDER!
    $acctProviderConnCode: String!
  ) {
    unauthorizedUserOrganizationAcctProviderConnCheckConnection(
      acct_provider: $acctProvider
      acct_provider_conn_code: $acctProviderConnCode
    )
  }
`);
