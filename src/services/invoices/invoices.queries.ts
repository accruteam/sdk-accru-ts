import { gql } from '@gql';

export const INVOICE_QUERY_FRAGMENT = gql(`
  fragment OrganizationInvoiceFragment on OrganizationInvoice {
    id
    unique_code
    number

    provider
    provider_code
    provider_errors
    provider_warnings
    last_successful_sync_id
    last_successful_sync_at
    last_sync_succeeded
    last_sync_id
    last_sync_at

    currency_code
    description
    amount
    tax_amount
    discount_amount
    total_amount
    invoice_date
    due_date
    created_at
    updated_at

    organization_id
    organization {
      name
    }
    organization_customer_id
    organization_customer {
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

    email_sent_at

    payment_options {
        method
        url
        payload
    }

    transaction_links {
      id
      amount
      organization_invoice_id

      created_at
      updated_at

      organization_invoice_transaction_id
      organization_invoice_transaction {
        id
      }
    }
  }
`);

export const INVOICE_SUMMARY_FRAGMENT = gql(`
  fragment OrganizationInvoiceSummaryFragment on OrganizationInvoiceSummary {
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

    vendor_organization_customer_id
    vendor_organization_customer {
      name
      email
    }

    customer_organization_id
    customer_organization {
      name
      email
    }

    data {
      totalCount
      edges {
        cursor
        node {
          ...OrganizationInvoiceFragment
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

    total_open_invoice_count
    total_overdue_invoice_count

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

    one_to_thirty_days_due_amount
    thirty_one_to_sixty_days_due_amount
    sixty_plus_days_due_amount

    latest_acct_provider_one_to_thirty_days_due_amount
    latest_acct_provider_thirty_one_to_sixty_days_due_amount
    latest_acct_provider_sixty_plus_days_due_amount
  }
`);

export const INVOICES_GET_SUMMARY_QUERY = gql(`
  query UserOrganizationInvoiceSummary(
    $organizationId: String!
    $organizationCustomerId: String
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime

    $status: INVOICE_STATUS
    $isOverdue: Boolean

    $latestAcctProviderStatus: INVOICE_STATUS
    $latestAcctProviderIsOverdue: Boolean

    $customerName: String
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationInvoiceSummary(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId

      currency: $currency
      start_date: $startDate
      end_date: $endDate

      status: $status
      is_overdue: $isOverdue

      latest_acct_provider_status: $latestAcctProviderStatus
      latest_acct_provider_is_overdue: $latestAcctProviderIsOverdue

      customer_name: $customerName

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationInvoiceSummaryFragment
    }
  }
`);

export const INVOICE_GET_QUERY = gql(`
  query UserOrganizationInvoice(
    $organizationId: String!
    $organizationInvoiceId: String!
  ) {
    userOrganizationInvoice(
      organization_id: $organizationId
      organization_invoice_id: $organizationInvoiceId
    ) {
      ...OrganizationInvoiceFragment
    }
  }
`);

export const INVOICE_CREATE_MUTATION = gql(`
  mutation UserOrganizationInvoiceCreate(
    $data: UserOrganizationInvoiceSchema!
    $organizationId: String!
  ) {
    userOrganizationInvoiceCreate(
      data: $data
      organization_id: $organizationId
    ) {
      amount
      balance
      created_at
      currency_code
      id
      is_overdue
      invoice_date
      status
      email_sent_at
      paid_at
      paid_amount
      total_amount
    }
  }
`);

export const SEND_INVOICE_EMAIL_MUTATION = gql(`
  mutation UserOrganizationCustomerSendInvoiceEmail(
    $organizationId: String!
    $targets: [UserOrganizationCustomerSendInvoiceEmailSchema!]!
  ) {
    userOrganizationCustomerSendInvoiceEmail(
      organization_id: $organizationId
      targets: $targets
    )
  }
`);

export const GET_INVOICE_PDF_MUTATION = gql(`
  mutation UserOrganizationInvoiceGetPDF(
    $organizationId: String!
    $organizationInvoiceId: String!
    $acctProvider: ACCT_PROVIDER
  ) {
    userOrganizationInvoiceGetPDF(
      organization_id: $organizationId
      organization_invoice_id: $organizationInvoiceId
      acct_provider: $acctProvider
    )
  }
`);

export const GET_AS_UNCONNECTED_CUSTOMER_INVOICE_SUMMARY_QUERY = gql(`
  query UnconnectedCustomerOrganizationInvoiceSummary(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime

    $status: INVOICE_STATUS
    $isOverdue: Boolean

    $latestAcctProviderStatus: INVOICE_STATUS
    $latestAcctProviderIsOverdue: Boolean

    $customerName: String
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    unconnectedCustomerOrganizationInvoiceSummary(
      unique_code: $uniqueCode
      email: $email
      token: $token

      currency: $currency
      start_date: $startDate
      end_date: $endDate

      status: $status
      is_overdue: $isOverdue

      latest_acct_provider_status: $latestAcctProviderStatus
      latest_acct_provider_is_overdue: $latestAcctProviderIsOverdue

      customer_name: $customerName

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationInvoiceSummaryFragment
    }
  }
`);

export const GET_AS_UNCONNECTED_CUSTOMER_INVOICE_PDF_MUTATION = gql(`
  mutation UnconnectedCustomerOrganizationInvoiceGetPDF(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationInvoiceId: String!
    $acctProvider: ACCT_PROVIDER
  ) {
    unconnectedCustomerOrganizationInvoiceGetPDF(
      unique_code: $uniqueCode
      email: $email
      token: $token

      organization_invoice_id: $organizationInvoiceId
      acct_provider: $acctProvider
    )
  }
`);
