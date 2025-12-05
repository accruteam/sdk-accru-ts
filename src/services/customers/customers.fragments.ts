import { gql } from '@gql';

export const CUSTOMER_FRAGMENT = gql(`
  fragment OrganizationCustomerFragment on OrganizationCustomer {
    id

    provider
    provider_code
    provider_url
    provider_errors
    provider_warnings
    last_successful_sync_id
    last_successful_sync_at
    last_sync_succeeded
    last_sync_id
    last_sync_at
    has_sync_errors

    is_active
    email
    name
    unique_code
    phone_number
    tax_code_type
    tax_code
    created_at
    updated_at

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
              provider_url
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

    address_line_1
    address_number
    address_line_2
    address_city
    address_state
    address_zip_code
    address_country_code_iso_3
    address_lat
    address_lng

    language
    timezone

    contacts {
      id
      name
      email
      phone_number
      is_default
      receive_invoice_reminders
      email_copy_mode
      created_at
      updated_at
    }
  }
`);

export const ORGANIZATION_CUSTOMER_STATEMENT_LOG_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementLogFragment on OrganizationCustomerStatementLog {
    id
    access_type
    created_at
    updated_at
    last_activity_at

    organization_customer_id
    organization_customer_name
    vendor_organization_id
    customer_organization_id
    user_id
    statement_session_token

    statement_current_balance
    statement_total_open_invoice_count
    statement_total_overdue_invoice_count

    agent_info_ip
    agent_info_browser_name
    agent_info_browser_version
    agent_info_os
    agent_info_is_desktop
    agent_info_is_mobile

    location_city
    location_country
    location_region
    location_timezone
    location_latitude
    location_longitude
  }
`);
