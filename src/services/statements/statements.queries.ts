import { gql } from '@gql';

export const ORGANIZATION_CUSTOMER_STATEMENT_INVOICE_LINE_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementInvoiceLineFragment on OrganizationCustomerStatementInvoiceLine {
    id
    amount
    code
    created_at
    currency_code
    date
    due_date
    organization_customer_id
    organization_invoice_id
    paid_amount
    running_balance
    invoice_status
    type
    updated_at

    organization_invoice {
      provider
      provider_code

      payment_options {
        method
        url
        payload
      }
    }
  }
`);

export const ORGANIZATION_CUSTOMER_STATEMENT_TRANSACTION_LINE_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementTransactionLineFragment on OrganizationCustomerStatementTransactionLine {
    amount
    code
    created_at
    currency_code
    date
    due_date
    id
    organization_customer_id
    organization_invoice_transaction_id
    paid_amount
    running_balance
    transaction_status
    type
    updated_at

    organization_invoice_transaction {
      provider
      provider_code

      links {
        id
        amount
        organization_invoice_id
      }
    }
  }
`);

export const CUSTOMER_STATEMENT_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementFragment on OrganizationCustomerStatement {
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
          ... on OrganizationCustomerStatementInvoiceLine {
            ...OrganizationCustomerStatementInvoiceLineFragment
          }
          ... on OrganizationCustomerStatementTransactionLine {
            ...OrganizationCustomerStatementTransactionLineFragment
          }
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

    total_open_invoice_count
    total_overdue_invoice_count
  }
`);

export const GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UserCustomerOrganizationStatement(
    $organizationId: String!
    $organizationVendorId: String!
    $type: STATEMENT_LINE_TYPE
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime
    $isOverdue: Boolean
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userCustomerOrganizationStatement(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      type: $type

      currency: $currency
      start_date: $startDate
      end_date: $endDate
      is_overdue: $isOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);

export const GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF = gql(`
  mutation UserCustomerOrganizationStatementLineGetPDF(
    $organizationId: String!
    $organizationVendorId: String!

    $organizationCustomerStatementLineId: Int!,
    $acctProvider: ACCT_PROVIDER
  ) {
    userCustomerOrganizationStatementLineGetPDF(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      acct_provider: $acctProvider
    )
  }
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY =
  gql(`
  mutation UnconnectedCustomerOrganizationStatementRequestToken(
    $uniqueCode: String!
  ) {
    unconnectedCustomerOrganizationStatementRequestToken(
      unique_code: $uniqueCode
    )
}
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UnconnectedCustomerOrganizationStatement(
    $uniqueCode: String!
    $token: String!
    $type: STATEMENT_LINE_TYPE
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime
    $isOverdue: Boolean
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    unconnectedCustomerOrganizationStatement(
      unique_code: $uniqueCode
      token: $token

      type: $type

      currency: $currency
      start_date: $startDate
      end_date: $endDate
      is_overdue: $isOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationStatementLineGetPDF(
    $uniqueCode: String!
    $token: String!

    $organizationCustomerStatementLineId: Int!,
    $acctProvider: ACCT_PROVIDER
  ) {
    unconnectedCustomerOrganizationStatementLineGetPDF(
      unique_code: $uniqueCode
      token: $token

      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      acct_provider: $acctProvider
    )
  }
`);

export const GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY = gql(`
  query UserCustomerOrganizationStatementLine(
    $organizationCustomerStatementLineId: Int,
    $organizationId: String!,
    $organizationInvoiceId: String,
    $organizationInvoiceTransactionId: String,
    $organizationVendorId: String!
  ) {
    userCustomerOrganizationStatementLine(
      organization_customer_statement_line_id: $organizationCustomerStatementLineId,
      organization_id: $organizationId,
      organization_invoice_id: $organizationInvoiceId,
      organization_invoice_transaction_id: $organizationInvoiceTransactionId,
      organization_vendor_id: $organizationVendorId
    ) {
      ... on OrganizationCustomerStatementInvoiceLine {
        ...OrganizationCustomerStatementInvoiceLineFragment
      }
      ... on OrganizationCustomerStatementTransactionLine {
        ...OrganizationCustomerStatementTransactionLineFragment
      }
    }
  }
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY =
  gql(`
  query UnconnectedCustomerOrganizationStatementLine(
    $organizationCustomerStatementLineId: Int,
    $organizationId: String,
    $organizationInvoiceId: String,
    $organizationInvoiceTransactionId: String,
    $token: String!,
    $uniqueCode: String!
  ) {
    unconnectedCustomerOrganizationStatementLine(
      organization_customer_statement_line_id: $organizationCustomerStatementLineId,
      organization_id: $organizationId,
      organization_invoice_id: $organizationInvoiceId,
      organization_invoice_transaction_id: $organizationInvoiceTransactionId,
      token: $token,
      unique_code: $uniqueCode
    ) {
      ... on OrganizationCustomerStatementInvoiceLine {
        ...OrganizationCustomerStatementInvoiceLineFragment
      }
      ... on OrganizationCustomerStatementTransactionLine {
        ...OrganizationCustomerStatementTransactionLineFragment
      }
    }
  }
`);

export const GET_AS_CUSTOMER_INVOICE_SUMMARY_QUERY = gql(`
  query UserCustomerOrganizationInvoiceSummary(
    $organizationId: String!
    $organizationVendorId: String!

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
    userCustomerOrganizationInvoiceSummary(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

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

export const GET_AS_CUSTOMER_INVOICE_PDF_MUTATION = gql(`
  mutation UserCustomerOrganizationInvoiceGetPDF(
    $organizationId: String!
    $organizationVendorId: String!

    $organizationInvoiceId: String!
    $acctProvider: ACCT_PROVIDER
  ) {
    userCustomerOrganizationInvoiceGetPDF(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      organization_invoice_id: $organizationInvoiceId
      acct_provider: $acctProvider
    )
  }
`);

export const SYNC_AS_CUSTOMER_MUTATION = gql(`
  mutation UserCustomerOrganizationSynchronize($organizationId: String!, $organizationVendorId: String!) {
    userCustomerOrganizationSynchronize(organization_id: $organizationId, organization_vendor_id: $organizationVendorId)
  }
`);

export const SYNC_AS_UNCONNECTED_CUSTOMER_MUTATION = gql(`
  mutation UnconnectedCustomerSynchronize($uniqueCode: String!, $token: String!) {
    unconnectedCustomerSynchronize(unique_code: $uniqueCode, token: $token)
  }
`);
