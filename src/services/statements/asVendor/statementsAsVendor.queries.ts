import { gql } from '@gql';

export const STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_QUERY = gql(`
  query UserOrganizationCustomerStatement(
    $organizationId: String!
    $organizationCustomerId: String!
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
    userOrganizationCustomerStatement(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId

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

export const STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_QUERY = gql(`
  query UserOrganizationCustomerStatementLine(
    $organizationId: String!,
    $organizationCustomerId: String!,
    $organizationCustomerStatementLineId: Int,
    $organizationInvoiceId: String,
    $organizationInvoiceTransactionId: String,
  ) {
    userOrganizationCustomerStatementLine(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      organization_invoice_id: $organizationInvoiceId
      organization_invoice_transaction_id: $organizationInvoiceTransactionId
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

export const STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_PDF_QUERY = gql(`
  query UserOrganizationCustomerStatementLineGetPDF(
    $organizationId: String!
    $organizationCustomerId: String!
    $organizationCustomerStatementLineId: Int!,

    $acctProvider: ACCT_PROVIDER
  ) {
    userOrganizationCustomerStatementLineGetPDF(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      acct_provider: $acctProvider
    )
  }
`);

export const STATEMENT_AS_VENDOR_SYNC_CUSTOMER_MUTATION = gql(`
  mutation UserOrganizationCustomerSynchronize($organizationId: String!, $organizationCustomerId: String!) {
    userOrganizationCustomerSynchronize(organization_id: $organizationId, organization_customer_id: $organizationCustomerId)
  }
`);

export const STATEMENT_AS_VENDOR_SEND_CUSTOMER_STATEMENT_EMAIL_MUTATION = gql(`
  mutation UserOrganizationCustomerSendStatementEmail($targets: [UserOrganizationCustomerSendStatementEmailSchema!]!, $organizationId: String!) {
    userOrganizationCustomerSendStatementEmail(targets: $targets, organization_id: $organizationId)
  }
`);

export const STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINK_MUTATION = gql(`
  mutation UserOrganizationCustomerGetStatementLink($organizationId: String!, $organizationCustomerId: String!, $expiresAt: DateTime) {
    userOrganizationCustomerGetStatementLink(organization_id: $organizationId, organization_customer_id: $organizationCustomerId, expires_at: $expiresAt)
  }
`);
