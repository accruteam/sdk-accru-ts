import { gql } from '@gql';

export const ACCT_PROVIDER_CONN_FRAGMENT = gql(`
  fragment OrganizationAcctProviderConnFragment on OrganizationAcctProviderConn {
    id
    acct_provider
    code
    payload
    conn_expires_at
    automatic_pull_enabled
    automatic_push_enabled
    disconnected_at
    created_at
    updated_at
    organization_id
    status

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
