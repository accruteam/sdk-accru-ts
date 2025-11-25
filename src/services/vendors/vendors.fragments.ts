import { gql } from '@gql';

export const VENDOR_FRAGMENT = gql(`
  fragment OrganizationVendorFragment on OrganizationVendor {
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

export const VENDOR_BILL_SUMMARY_FRAGMENT = gql(`
  fragment OrganizationVendorBillSummaryFragment on OrganizationVendor {
    bill_summary {
      data {
        totalCount
        edges {
            cursor
            node {
              id
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
              bill_date
              due_date
              vendor_email
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

      total_open_bill_count
      total_overdue_bill_count

      total_amount
      paid_amount
      overdue_amount
      balance
    }
  }
`);

export const VENDOR_ADDITIONAL_DATA_FRAGMENT = gql(`
  fragment OrganizationVendorAdditionalDataFragment on OrganizationVendor {
    ...OrganizationVendorBillSummaryFragment

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
      created_at
      updated_at
    }
  }
`);
