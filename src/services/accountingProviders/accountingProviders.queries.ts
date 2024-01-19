import { gql } from '@gql';

export const ACCT_PROVIDER_CONN_FRAGMENT = gql(`
  fragment OrganizationAcctProviderConnFragment on OrganizationAcctProviderConn {
    id
    acct_provider_code
    code
    payload
    conn_expires_at
    automatic_pull_enabled
    automatic_push_enabled
    disconnected_at
    created_at
    updated_at
    organization_id

    synchronizations(skip: 0, take: 1, finished: true) {
      edges {
        node {
          ...OrganizationAcctProviderConnSynchronizationFragment
        }
      }
    }
  }
`);

export const ACCT_PROVIDER_SYNC_FRAGMENT = gql(`
  fragment OrganizationAcctProviderConnSynchronizationFragment on OrganizationAcctProviderConnSynchronization {
    id
    trigger_code
    pull
    push
    errors
    started_at
    finished_at
    failed_at
    succeeded_at
    local_read_success_count
    local_create_success_count
    local_update_success_count
    local_delete_success_count
    local_read_failure_count
    local_create_failure_count
    local_update_failure_count
    local_delete_failure_count
    remote_read_success_count
    remote_create_success_count
    remote_update_success_count
    remote_delete_success_count
    remote_read_failure_count
    remote_create_failure_count
    remote_update_failure_count
    remote_delete_failure_count
    sync_cluster_code
    status_description
    created_at
    updated_at
    organization_id
    organization_acct_provider_conn_id
  }
`);

export const GET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnConfigurationPullOptionsGet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderConnConfigurationPullOptionsGet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
    )
  }
`);

export const SET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnConfigurationPullOptionsSet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $payload: JSON!
  ) {
    userOrganizationAcctProviderConnConfigurationPullOptionsSet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      payload: $payload
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const GET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnConfigurationPushOptionsGet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderConnConfigurationPushOptionsGet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
    )
  }
`);

export const SET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnConfigurationPushOptionsSet(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $payload: JSON!
  ) {
    userOrganizationAcctProviderConnConfigurationPushOptionsSet(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      payload: $payload
    ) {
      ...OrganizationAcctProviderConnFragment
    }
  }
`);

export const DISCONNECT_ACCT_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAcctProviderConnDisconnect(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
  ) {
    userOrganizationAcctProviderConnDisconnect(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
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
      acct_provider_code: $accountProvider
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
    $automaticPush: Boolean!
  ) {
    userOrganizationAcctProviderConnect(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      url: $url
      automatic_pull_enabled: $automaticPull
      automatic_push_enabled: $automaticPush
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
      acct_provider_code: $accountProvider
    )
  }
`);

export const SYNC_ACCT_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAcctProviderSynchronize(
    $organizationId: String!
    $accountProvider: ACCT_PROVIDER!
    $pull: Boolean!
    $push: Boolean!
  ) {
    userOrganizationAcctProviderSynchronize(
      organization_id: $organizationId
      acct_provider_code: $accountProvider
      pull: $pull
      push: $push
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
