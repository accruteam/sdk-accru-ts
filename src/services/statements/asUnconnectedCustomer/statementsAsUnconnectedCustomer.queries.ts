import { gql } from '@gql';

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY =
  gql(`
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

    $statementSessionToken: String
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

      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY =
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

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION =
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

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_SYNC_MUTATION = gql(`
  mutation UnconnectedCustomerSynchronize($uniqueCode: String!, $token: String!) {
    unconnectedCustomerSynchronize(unique_code: $uniqueCode, token: $token)
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_REQUEST_ORGANIZATION_STATEMENT_TOKEN_QUERY =
  gql(`
  mutation UnconnectedCustomerOrganizationStatementRequestToken(
    $uniqueCode: String!
  ) {
    unconnectedCustomerOrganizationStatementRequestToken(
      unique_code: $uniqueCode
    )
}
`);
