import { gql } from '@gql';

export const GET_TRANSACTION_ACCT_PROVIDER_PDF_MUTATION = gql(`
  mutation UserOrganizationTransactionGetAcctProviderPdf(
    $organizationId: String!
    $organizationTransactionId: String!
    $acctProviderCode: ACCT_PROVIDER!
  ) {
    userOrganizationTransactionGetAcctProviderPDF(
      organization_id: $organizationId
      organization_transaction_id: $organizationTransactionId
      acct_provider_code: $acctProviderCode
    )
  }
`);
