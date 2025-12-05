import { gql } from '@gql';

export const STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY = gql(`
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

    $statementSessionToken: String
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

      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);

export const STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY = gql(`
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

export const STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION =
  gql(`
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

export const STATEMENT_AS_CUSTOMER_SYNC_MUTATION = gql(`
  mutation UserCustomerOrganizationSynchronize($organizationId: String!, $organizationVendorId: String!) {
    userCustomerOrganizationSynchronize(organization_id: $organizationId, organization_vendor_id: $organizationVendorId)
  }
`);
