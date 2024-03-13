import { gql } from '@gql';

export const INVOICE_QUERY_FRAGMENT = gql(`
  fragment OrganizationInvoiceFragment on OrganizationInvoice {
    id
    unique_code
    number
    currency_code
    description
    payload
    amount
    tax_amount
    discount_amount
    total_amount
    invoice_date
    due_date
    customer_email
    customer_address_line_1
    customer_address_number
    customer_address_line_2
    customer_address_city
    customer_address_state
    customer_address_zip_code
    customer_address_country_code_iso_3
    customer_address_lat
    customer_address_lng
    archived_at
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

    organization_acct_provider_conn_invoices {
      id
      code
      payload
      last_sync_at
      last_sync_success
      last_sync_id

      organization_invoice_id

      organization_acct_provider_conn_id
      organization_acct_provider_conn {
        acct_provider_code
      }
    }

    file_id
    file {
      public_url
    }

    has_sync_errors

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
      item_type
      item_id

      created_at
      updated_at

      organization_transaction_id
      organization_transaction {
        id
      }
    }
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

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      vendor_organization_id
      vendor_organization {
        id
        name
      }
      vendor_organization_customer_id
      vendor_organization_customer {
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
      total_amount
      paid_amount
      overdue_amount
      start_date
      end_date
      currency
      status
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
      archived_at
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

export const GET_ACCT_PROVIDER_INVOICE_PDF_MUTATION = gql(`
  mutation UserOrganizationInvoiceGetAcctProviderPDF(
    $organizationId: String!
    $organizationInvoiceId: String!
    $acctProviderCode: ACCT_PROVIDER!
  ) {
    userOrganizationInvoiceGetAcctProviderPDF(
      organization_id: $organizationId
      organization_invoice_id: $organizationInvoiceId
      acct_provider_code: $acctProviderCode
    )
  }
`);
