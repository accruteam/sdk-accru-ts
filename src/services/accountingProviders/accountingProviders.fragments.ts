import { gql } from '@gql';

export const ACCT_PROVIDER_CONN_FRAGMENT = gql(`
  fragment OrganizationAcctProviderConnFragment on OrganizationAcctProviderConn {
    id
    acct_provider

    code
    url
    payload

    customer_add_url
    invoice_add_url
    vendor_add_url
    bill_add_url

    name
    email
    phone_number
    website_url

    primary_contact_name

    business_name
    business_industry
    business_number_of_employees

    timezone
    language

    business_tax_code_type
    business_tax_code

    address_line_1
    address_number
    address_line_2
    address_city
    address_state
    address_zip_code
    address_country_code_iso_3
    address_lat
    address_lng

    business_address_line_1
    business_address_number
    business_address_line_2
    business_address_city
    business_address_state
    business_address_zip_code
    business_address_country_code_iso_3
    business_address_lat
    business_address_lng

    automatic_pull_enabled

    status
    disconnected_at
    conn_expires_at

    organization_id

    last_conn_at
    last_successful_sync_id
    last_successful_sync_at
    last_sync_succeeded
    last_sync_id
    last_sync_at

    created_at
    updated_at

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
    data {
        customer { items }
        invoice { items }
        invoice_transaction { items }
        vendor { items }
        bill { items }
        bill_transaction { items }
    }
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
    scope_description

    organization_id
    organization_acct_provider_conn_id
  }
`);
