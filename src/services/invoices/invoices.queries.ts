import { gql } from '@gql';

export const SEND_INVOICE_EMAIL_MUTATION = gql(`
  mutation UserOrganizationCustomerSendInvoiceEmail(
    $organizationId: String!
    $targets: [UserOrganizationCustomerSendInvoiceEmailSchema!]!
  ) {
    userOrganizationCustomerSendInvoiceEmail(
      organization_id: $organizationId
      targets: $targets
    ) {
        ...BatchItemResultFragment
    }
  }
`);
