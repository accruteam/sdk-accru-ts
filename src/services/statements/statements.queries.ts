import { gql } from '@gql';

export const ORGANIZATION_CUSTOMER_STATEMENT_INVOICE_LINE_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementInvoiceLineFragment on OrganizationCustomerStatementInvoiceLine {
    amount
    code
    created_at
    currency_code
    date
    due_date
    id
    organization_customer_id
    organization_invoice_id
    paid_amount
    running_balance
    invoice_status
    type
    updated_at

    organization_invoice {
      payment_options {
        method
        url
        payload
      }

      organization_acct_provider_conn_invoices {
        organization_acct_provider_conn {
          acct_provider
          status
        }
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
      links {
        id
        amount
        organization_invoice_id
      }

      organization_acct_provider_conn_invoice_transactions {
        organization_acct_provider_conn {
          acct_provider
          status
        }
      }
    }
  }
`);

export const CUSTOMER_STATEMENT_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementFragment on OrganizationCustomerStatement {
    vendor_organization_id
    vendor_organization {
      id
      name
    }
    vendor_organization_customer_id
    vendor_organization_customer {
      id
      name
      email
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

    currency

    one_to_thirty_days_due_amount
    thirty_one_to_sixty_days_due_amount
    sixty_plus_days_due_amount
  }
`);

export const GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UserCustomerOrganizationStatement(
    $organizationId: String!
    $organizationVendorId: String!
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
  mutation UserCustomerOrganizationStatementLineGeneratePdf(
    $organizationId: String!
    $organizationVendorId: String!

    $organizationCustomerStatementLineId: Int!,
    $acctProvider: ACCT_PROVIDER!
  ) {
    userCustomerOrganizationStatementLineGeneratePDF(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      acct_provider: $acctProvider
    )
  }
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY =
  gql(`
  mutation UnconnectedUserCustomerOrganizationStatementRequestToken(
    $uniqueCode: String!
    $email: String!
  ) {
    unconnectedUserCustomerOrganizationStatementRequestToken(
      unique_code: $uniqueCode
      email: $email
    )
}
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UnconnectedUserCustomerOrganizationStatement(
    $uniqueCode: String!
    $email: String!
    $token: String!
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
    unconnectedUserCustomerOrganizationStatement(
      unique_code: $uniqueCode
      email: $email
      token: $token

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
  mutation UnconnectedUserCustomerOrganizationStatementLinePdf(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationCustomerStatementLineId: Int!,
    $acctProvider: ACCT_PROVIDER!
  ) {
    unconnectedUserCustomerOrganizationStatementLinePDF(
      unique_code: $uniqueCode
      email: $email
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

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY = // THIS ONE
  gql(`
  query UnconnectedUserCustomerOrganizationStatementLine(
    $email: String!,
    $organizationCustomerStatementLineId: Int,
    $organizationId: String,
    $organizationInvoiceId: String,
    $organizationInvoiceTransactionId: String,
    $token: String!,
    $uniqueCode: String!
  ) {
    unconnectedUserCustomerOrganizationStatementLine(
      email: $email,
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
