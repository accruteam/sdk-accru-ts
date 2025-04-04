import { gql } from '@gql';

export const CUSTOMER_FRAGMENT = gql(`
  fragment OrganizationCustomerFragment on OrganizationCustomer {
    id

    provider
    provider_code
    provider_errors
    provider_warnings
    last_successful_sync_id
    last_successful_sync_at
    last_sync_succeeded
    last_sync_id
    last_sync_at

    is_active
    email
    name
    unique_code
    phone_number
    tax_code_type
    tax_code
    created_at
    updated_at

    has_sync_errors
    last_sync_at
    latest_acct_provider_balance

    balance
    overdue_amount
  }
`);

export const CUSTOMER_INVOICE_SUMMARY_FRAGMENT = gql(`
  fragment OrganizationCustomerInvoiceSummaryFragment on OrganizationCustomer {
    invoice_summary {
      data {
        totalCount
        edges {
            cursor
            node {
              id

              provider
              provider_code
              provider_errors
              provider_warnings
              last_successful_sync_id
              last_successful_sync_at
              last_sync_succeeded
              last_sync_id
              last_sync_at

              file_id
              file {
                public_url
              }
              unique_code
              number
              currency_code
              description
              amount
              tax_amount
              discount_amount
              total_amount
              paid_amount
              invoice_date
              due_date
              customer_email
              created_at
              updated_at
              status
              latest_acct_provider_status
            }
        }
        pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
        }
      }

      total_open_invoice_count
      total_overdue_invoice_count

      total_amount
      paid_amount
      overdue_amount
      balance
    }
  }
`);

export const CUSTOMER_ADDITIONAL_DATA_FRAGMENT = gql(`
  fragment OrganizationCustomerAdditionalDataFragment on OrganizationCustomer {
    ...OrganizationCustomerInvoiceSummaryFragment,

    conn_locked_data_at
    connection {
      ...OrganizationConnectionFragment
    }

    contacts {
      id
      name
      email
      phone_number
      is_default
      send_invoice_reminders
      created_at
      updated_at
    }
  }
`);
