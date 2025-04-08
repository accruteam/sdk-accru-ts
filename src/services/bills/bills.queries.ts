import { gql } from '@gql';

export const BILL_QUERY_FRAGMENT = gql(`
  fragment OrganizationBillFragment on OrganizationBill {
    id
    unique_code
    number

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

    currency_code
    description
    payload
    amount
    tax_amount
    discount_amount
    total_amount
    bill_date
    due_date
    vendor_email
    vendor_address_line_1
    vendor_address_number
    vendor_address_line_2
    vendor_address_city
    vendor_address_state
    vendor_address_zip_code
    vendor_address_country_code_iso_3
    vendor_address_lat
    vendor_address_lng
    created_at
    updated_at

    conn_linked_invoice_id
    conn_locked_data_at

    organization_id
    organization {
      name
    }
    organization_vendor_id
    organization_vendor {
      name
      email
      balance
    }

    file_id
    file {
      public_url
    }

    has_sync_errors
    last_sync_at
    latest_acct_provider_balance
    latest_acct_provider_status
    latest_acct_provider_is_overdue

    status
    is_overdue
    paid_amount
    paid_at
    balance

    transaction_links {
      id
      amount
      organization_bill_id

      created_at
      updated_at

      organization_bill_transaction_id
      organization_bill_transaction {
        id
      }
    }
  }
`);

export const BILL_SUMMARY_FRAGMENT = gql(`
  fragment OrganizationBillSummaryFragment on OrganizationBillSummary {
    vendor_organization_id
    vendor_organization {
      name
      email
      phone_number
      address_line_1
      address_number
      address_line_2
      address_city
      address_state
      address_zip_code
      address_country_code_iso_3
      address_lat
      address_lng
      logo_picture_file {
        public_url
      }
    }

    customer_organization_vendor_id
    customer_organization_vendor {
      id
      name
    }

    customer_organization_id
    customer_organization {
      id
      name
    }

    data {
      totalCount
      edges {
        cursor
        node {
          ...OrganizationBillFragment
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }

    status

    total_open_bill_count
    total_overdue_bill_count

    total_amount
    paid_amount
    overdue_amount
    balance

    start_date
    end_date
    due_start_date
    due_end_date
    currency

    has_sync_errors
    last_sync_at
    latest_acct_provider_balance
  }
`);

export const BILLS_GET_SUMMARY_QUERY = gql(`
  query UserOrganizationBillSummary(
    $organizationId: String!
    $organizationVendorId: String
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime

    $status: BILL_STATUS
    $isOverdue: Boolean

    $latestAcctProviderStatus: BILL_STATUS
    $latestAcctProviderIsOverdue: Boolean

    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationBillSummary(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      currency: $currency
      start_date: $startDate
      end_date: $endDate

      status: $status
      is_overdue: $isOverdue

      latest_acct_provider_status: $latestAcctProviderStatus
      latest_acct_provider_is_overdue: $latestAcctProviderIsOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationBillSummaryFragment
    }
  }
`);

export const BILL_GET_QUERY = gql(`
  query UserOrganizationBill(
    $organizationId: String!
    $organizationBillId: String!
  ) {
    userOrganizationBill(
      organization_id: $organizationId
      organization_bill_id: $organizationBillId
    ) {
      ...OrganizationBillFragment
    }
  }
`);

export const BILL_CREATE_MUTATION = gql(`
  mutation UserOrganizationBillCreate(
    $organizationId: String!
    $data: UserOrganizationBillSchema!
  ) {
    userOrganizationBillCreate(organization_id: $organizationId, data: $data) {
      ...OrganizationBillFragment
    }
  }
`);
