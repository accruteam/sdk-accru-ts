import { gql } from '@gql';

export const INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_SUMMARY_QUERY = gql(`
  query UnconnectedCustomerOrganizationInvoiceSummary(
    $uniqueCode: String!
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

export const INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_ONE_INVOICE_QUERY =
  gql(`
  query UnconnectedCustomerOrganizationInvoice($uniqueCode: String!, $token: String!, $organizationInvoiceId: String!) {
    unconnectedCustomerOrganizationInvoice(unique_code: $uniqueCode, token: $token, organization_invoice_id: $organizationInvoiceId) {
      ...OrganizationInvoiceFragment
    }
  }
`);

export const INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_PDF_MUTATION = gql(`
  mutation UnconnectedCustomerOrganizationInvoiceGetPDF(
    $uniqueCode: String!
    $token: String!

    $organizationInvoiceId: String!
    $acctProvider: ACCT_PROVIDER
  ) {
    unconnectedCustomerOrganizationInvoiceGetPDF(
      unique_code: $uniqueCode
      token: $token

      organization_invoice_id: $organizationInvoiceId
      acct_provider: $acctProvider
    )
  }
`);
