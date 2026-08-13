import { gql } from '@gql';

/* -------------------------------------------------------------------------- */
/*                  STATEMENT · AS VENDOR (userOrganizationCustomer)           */
/* -------------------------------------------------------------------------- */

export const STATEMENT_AS_VENDOR_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY =
  gql(`
  query UserOrganizationCustomerAccruPayResolveInvoicePaymentRules(
    $organizationId: String!
    $organizationCustomerId: String!
    $organizationInvoiceId: String!
  ) {
    userOrganizationCustomerAccruPayResolveInvoicePaymentRules(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      organization_invoice_id: $organizationInvoiceId
    ) {
      ...OrganizationAccruPayInvoicePaymentRulesFragment
    }
  }
`);

export const STATEMENT_AS_VENDOR_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY = gql(`
  query UserOrganizationCustomerAccruPayPendingPayments(
    $organizationId: String!
    $organizationCustomerId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationCustomerAccruPayPendingPayments(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      after: $after
      first: $first
      before: $before
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
    ) {
      ...OrganizationAccruPayPaymentFragment
    }
  }
`);

export const STATEMENT_AS_VENDOR_ACCRUPAY_START_CARD_PAYMENT_MUTATION = gql(`
  mutation UserOrganizationCustomerAccruPayStartCardPayment(
    $organizationId: String!
    $organizationCustomerId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
  ) {
    userOrganizationCustomerAccruPayStartCardPayment(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
    ) {
      ...OrganizationAccruPayPaymentSessionFragment
    }
  }
`);

export const STATEMENT_AS_VENDOR_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION =
  gql(`
  mutation UserOrganizationCustomerAccruPayCreatePaymentMethodTransaction(
    $organizationId: String!
    $organizationCustomerId: String!
    $organizationCustomerPaymentMethodId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
  ) {
    userOrganizationCustomerAccruPayCreatePaymentMethodTransaction(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      organization_customer_payment_method_id: $organizationCustomerPaymentMethodId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
    ) {
      ...OrganizationAccruPayPaymentMethodTransactionResultFragment
    }
  }
`);

export const STATEMENT_AS_VENDOR_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION = gql(`
  mutation UserOrganizationCustomerAccruPayInitiateAchPayment(
    $organizationId: String!
    $organizationCustomerId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
    $accountNumber: String!
    $routingNumber: String!
  ) {
    userOrganizationCustomerAccruPayInitiateAchPayment(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
      account_number: $accountNumber
      routing_number: $routingNumber
    ) {
      ...OrganizationAccruPayAchPaymentResultFragment
    }
  }
`);

export const STATEMENT_AS_VENDOR_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION = gql(`
  mutation UserOrganizationCustomerAccruPayVerifyCardPayment(
    $organizationId: String!
    $paymentId: String!
  ) {
    userOrganizationCustomerAccruPayVerifyCardPayment(
      organization_id: $organizationId
      payment_id: $paymentId
    ) {
      ...OrganizationAccruPayPaymentSessionVerificationFragment
    }
  }
`);
