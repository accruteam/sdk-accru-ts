import { gql } from '@gql';

/* -------------------------------------------------------------------------- */
/*        STATEMENT · AS UNCONNECTED CUSTOMER (unconnectedCustomer*)           */
/* -------------------------------------------------------------------------- */

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY =
  gql(`
  query UnconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRules(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $organizationInvoiceId: String!
  ) {
    unconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRules(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      organization_invoice_id: $organizationInvoiceId
    ) {
      ...OrganizationAccruPayInvoicePaymentRulesFragment
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY =
  gql(`
  query UnconnectedCustomerOrganizationAccruPayPendingPayments(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    unconnectedCustomerOrganizationAccruPayPendingPayments(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
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

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayStartCardPayment(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
    $statementSessionToken: String
    $storePaymentMethod: Boolean
    $elevationToken: String
  ) {
    unconnectedCustomerOrganizationAccruPayStartCardPayment(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
      statement_session_token: $statementSessionToken
      store_payment_method: $storePaymentMethod
      elevation_token: $elevationToken
    ) {
      ...OrganizationAccruPayPaymentSessionFragment
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransaction(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $organizationCustomerPaymentMethodId: String!
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $statementSessionToken: String
    $elevationToken: String
  ) {
    unconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransaction(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      organization_customer_payment_method_id: $organizationCustomerPaymentMethodId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      statement_session_token: $statementSessionToken
      elevation_token: $elevationToken
    ) {
      ...OrganizationAccruPayPaymentMethodTransactionResultFragment
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayInitiateAchPayment(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $clientRequestNonce: String!
    $paymentAmount: BigInt!
    $selectedInvoiceIds: [String!]!
    $invoiceDistribution: [OrganizationAccruPayInvoiceDistributionSchema!]
    $billingAddress: OrganizationAccruPayBillingAddressSchema
    $updateCustomerBillingAddress: Boolean
    $accountNumber: String!
    $routingNumber: String!
    $statementSessionToken: String
    $storePaymentMethod: Boolean
    $elevationToken: String
  ) {
    unconnectedCustomerOrganizationAccruPayInitiateAchPayment(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      client_request_nonce: $clientRequestNonce
      payment_amount: $paymentAmount
      selected_invoice_ids: $selectedInvoiceIds
      invoice_distribution: $invoiceDistribution
      billing_address: $billingAddress
      update_customer_billing_address: $updateCustomerBillingAddress
      account_number: $accountNumber
      routing_number: $routingNumber
      statement_session_token: $statementSessionToken
      store_payment_method: $storePaymentMethod
      elevation_token: $elevationToken
    ) {
      ...OrganizationAccruPayAchPaymentResultFragment
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_REQUEST_PAYMENT_ELEVATION_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayRequestPaymentElevation(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
  ) {
    unconnectedCustomerOrganizationAccruPayRequestPaymentElevation(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
    ) {
      expires_at
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_PAYMENT_ELEVATION_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayVerifyPaymentElevation(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $code: String!
  ) {
    unconnectedCustomerOrganizationAccruPayVerifyPaymentElevation(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      code: $code
    ) {
      token
      expires_at
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY =
  gql(`
  query UnconnectedCustomerOrganizationAccruPayPaymentMethods(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $elevationToken: String
  ) {
    unconnectedCustomerOrganizationAccruPayPaymentMethods(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      elevation_token: $elevationToken
    ) {
      ...OrganizationAccruPayPaymentMethodFragment
    }
  }
`);

export const STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationAccruPayVerifyCardPayment(
    $uniqueCode: String!
    $token: String!
    $organizationId: String
    $paymentId: String!
    $statementSessionToken: String
  ) {
    unconnectedCustomerOrganizationAccruPayVerifyCardPayment(
      unique_code: $uniqueCode
      token: $token
      organization_id: $organizationId
      payment_id: $paymentId
      statement_session_token: $statementSessionToken
    ) {
      ...OrganizationAccruPayPaymentSessionVerificationFragment
    }
  }
`);
