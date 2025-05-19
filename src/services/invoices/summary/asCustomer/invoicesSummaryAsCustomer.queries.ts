import { gql } from '@gql';

export const INVOICES_SUMMARY_AS_CUSTOMER_GET_SUMMARY_QUERY = gql(`
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

export const INVOICES_SUMMARY_AS_CUSTOMER_GET_ONE_INVOICE_QUERY = gql(`
  query UserCustomerOrganizationInvoice($organizationId: String!, $organizationVendorId: String!, $organizationInvoiceId: String!) {
    userCustomerOrganizationInvoice(organization_id: $organizationId, organization_vendor_id: $organizationVendorId, organization_invoice_id: $organizationInvoiceId) {
      ...OrganizationInvoiceFragment
    }
  }
`);

export const INVOICES_SUMMARY_AS_CUSTOMER_GET_PDF_MUTATION = gql(`
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
