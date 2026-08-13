import { gql } from '@gql';

/* -------------------------------------------------------------------------- */
/*               STATEMENT · AS CUSTOMER (userCustomerOrganization)            */
/* -------------------------------------------------------------------------- */

export const STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY =
  gql(`
  query UserCustomerOrganizationAccruPayResolveInvoicePaymentRules(
    $organizationId: String!
    $organizationVendorId: String!
    $organizationInvoiceId: String!
  ) {
    userCustomerOrganizationAccruPayResolveInvoicePaymentRules(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_invoice_id: $organizationInvoiceId
    ) {
      ...OrganizationAccruPayInvoicePaymentRulesFragment
    }
  }
`);

export const STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY = gql(`
  query UserCustomerOrganizationAccruPayPendingPayments(
    $organizationId: String!
    $organizationVendorId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userCustomerOrganizationAccruPayPendingPayments(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
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

export const STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY = gql(`
  query UserCustomerOrganizationAccruPayPaymentMethods(
    $organizationId: String!
    $organizationVendorId: String!
  ) {
    userCustomerOrganizationAccruPayPaymentMethods(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
    ) {
      ...OrganizationAccruPayPaymentMethodFragment
    }
  }
`);

export const STATEMENT_AS_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION = gql(`
  mutation UserCustomerOrganizationAccruPayStartCardPayment(
    $organizationId: String!
    $organizationVendorId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
    $statementSessionToken: String
  ) {
    userCustomerOrganizationAccruPayStartCardPayment(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationAccruPayPaymentSessionFragment
    }
  }
`);

export const STATEMENT_AS_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION =
  gql(`
  mutation UserCustomerOrganizationAccruPayCreatePaymentMethodTransaction(
    $organizationId: String!
    $organizationVendorId: String!
    $organizationCustomerPaymentMethodId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $statementSessionToken: String
  ) {
    userCustomerOrganizationAccruPayCreatePaymentMethodTransaction(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_customer_payment_method_id: $organizationCustomerPaymentMethodId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationAccruPayPaymentMethodTransactionResultFragment
    }
  }
`);

export const STATEMENT_AS_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION =
  gql(`
  mutation UserCustomerOrganizationAccruPayInitiateAchPayment(
    $organizationId: String!
    $organizationVendorId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
    $accountNumber: String!
    $routingNumber: String!
    $statementSessionToken: String
  ) {
    userCustomerOrganizationAccruPayInitiateAchPayment(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
      account_number: $accountNumber
      routing_number: $routingNumber
      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationAccruPayAchPaymentResultFragment
    }
  }
`);

export const STATEMENT_AS_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION = gql(`
  mutation UserCustomerOrganizationAccruPayVerifyCardPayment(
    $organizationId: String!
    $organizationVendorId: String!
    $paymentId: String!
    $statementSessionToken: String
  ) {
    userCustomerOrganizationAccruPayVerifyCardPayment(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      payment_id: $paymentId
      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationAccruPayPaymentSessionVerificationFragment
    }
  }
`);
