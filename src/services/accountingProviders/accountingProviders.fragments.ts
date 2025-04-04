import { gql } from '@gql';

export const ACCT_PROVIDER_CONN_FRAGMENT = gql(`
  fragment OrganizationAcctProviderConnFragment on OrganizationAcctProviderConn {
    id
    acct_provider
    code
    payload
    conn_expires_at
    automatic_pull_enabled
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
    mode
    force
    provider
    errors
    warnings
    started_at
    finished_at
    failed_at
    succeeded_at

    read_success
    read_failure
    skipped
    create_success
    create_failure
    update_success
    update_failure
    delete_failure
    delete_success
    process_failure
    process_success

    created_at
    updated_at

    scope
    scope_id

    organization_id
    organization_acct_provider_conn_id
  }
`);
