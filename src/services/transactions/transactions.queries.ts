import { gql } from '@gql';

export const GET_TRANSACTION_ACCT_PROVIDER_PDF_MUTATION = gql(`
  mutation UserOrganizationInvoiceTransactionGetAcctProviderPdf(
    $organizationId: String!
    $organizationInvoiceTransactionId: String!
    $acctProvider: ACCT_PROVIDER!
  ) {
    userOrganizationInvoiceTransactionGetAcctProviderPDF(
      organization_id: $organizationId
      organization_invoice_transaction_id: $organizationInvoiceTransactionId
      acct_provider: $acctProvider
    )
  }
`);
