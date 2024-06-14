import { gql } from '@gql';

export const GET_TRANSACTION_PDF_MUTATION = gql(`
  mutation UserOrganizationInvoiceTransactionGetPDF(
    $organizationId: String!
    $organizationInvoiceTransactionId: String!
    $acctProvider: ACCT_PROVIDER
  ) {
    userOrganizationInvoiceTransactionGetPDF(
      organization_id: $organizationId
      organization_invoice_transaction_id: $organizationInvoiceTransactionId
      acct_provider: $acctProvider
    )
  }
`);
