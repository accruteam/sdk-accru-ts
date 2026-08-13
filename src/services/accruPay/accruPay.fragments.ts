import { gql } from '@gql';

export const ACCRUPAY_CONNECTION_FRAGMENT = gql(`
  fragment OrganizationAccruPayConnectionFragment on OrganizationAccruPayConnection {
    id

    organization_id
    provider_code

    accrupay_environment
    merchant_public_id

    status

    integration_enabled
    ach_enabled
    card_enabled

    transaction_provider_id
    transaction_provider

    created_by_user_id

    connected_at
    disconnected_at
    restored_at

    created_at
    updated_at
  }
`);

export const MASKED_ACCRUPAY_CONNECTION_FRAGMENT = gql(`
  fragment MaskedOrganizationAccruPayConnectionFragment on MaskedOrganizationAccruPayConnection {
    id

    organization_id
    provider_code

    accrupay_environment
    merchant_public_id
    masked_secret

    status

    integration_enabled
    ach_enabled
    card_enabled

    transaction_provider_id
    transaction_provider

    created_by_user_id

    connected_at
    disconnected_at
    restored_at

    created_at
    updated_at
  }
`);

export const ACCRUPAY_TRANSACTION_PROVIDER_FRAGMENT = gql(`
  fragment OrganizationAccruPayTransactionProviderFragment on OrganizationAccruPayTransactionProvider {
    id
    provider
    provider_code
    status
  }
`);

export const ACCRUPAY_CUSTOMER_SETTING_FRAGMENT = gql(`
  fragment OrganizationAccruPayCustomerSettingFragment on OrganizationAccruPayCustomerSetting {
    id

    organization_id
    organization_customer_id

    accrupay_enabled
    ach_enabled
    card_enabled

    created_at
    updated_at
  }
`);

export const ACCRUPAY_INVOICE_SETTING_FRAGMENT = gql(`
  fragment OrganizationAccruPayInvoiceSettingFragment on OrganizationAccruPayInvoiceSetting {
    id

    organization_id
    organization_invoice_id

    accrupay_enabled
    ach_enabled
    card_enabled

    created_at
    updated_at
  }
`);

export const ACCRUPAY_PAYMENT_INVOICE_LINK_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentInvoiceLinkFragment on OrganizationAccruPayPaymentInvoiceLink {
    id

    organization_accrupay_payment_id
    organization_invoice_id
    number
    unique_code

    amount

    created_at
    updated_at
  }
`);

export const ACCRUPAY_PAYMENT_TRANSACTION_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentTransactionFragment on OrganizationAccruPayPaymentTransaction {
    id

    organization_accrupay_payment_id
    accrupay_transaction_id

    provider_action
    provider_status

    payment_method_type
    payment_method_details

    amount
    currency_code
    transaction_date

    created_at
    updated_at
  }
`);

export const ACCRUPAY_PAYMENT_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentFragment on OrganizationAccruPayPayment {
    id

    organization_id
    organization_customer_id
    organization_accrupay_connection_id

    client_request_nonce
    merchant_internal_transaction_code

    accrupay_session_id
    provider_session_status
    start_error

    amount
    currency_code
    exact

    payment_method

    invoice_payment_id

    resolution_mode
    resolved_at
    resolved_by_user_id
    resolution_distribution

    invoice_links {
      ...OrganizationAccruPayPaymentInvoiceLinkFragment
    }

    transactions {
      ...OrganizationAccruPayPaymentTransactionFragment
    }

    created_at
    updated_at
  }
`);

export const ACCRUPAY_INVOICE_PAYMENT_RULES_FRAGMENT = gql(`
  fragment OrganizationAccruPayInvoicePaymentRulesFragment on OrganizationAccruPayInvoicePaymentRules {
    accrupay_enabled
    ach_enabled
    card_enabled
    has_saved_payment_methods
    requires_elevation
    transaction_provider
    billing_address_suggestion {
      address_line_1
      address_line_2
      city
      state
      zip_code
      country
      phone_number
    }
    billing_first_name
    billing_last_name
    billing_email
    vendor_name
    vendor_email
    vendor_phone
    vendor_website
    vendor_address
  }
`);

export const ACCRUPAY_PAYMENT_SESSION_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentSessionFragment on OrganizationAccruPayPaymentSession {
    merchant_public_id
    session_id
    transaction_id
  }
`);

export const ACCRUPAY_PAYMENT_SESSION_VERIFICATION_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentSessionVerificationFragment on OrganizationAccruPayPaymentSessionVerification {
    state
  }
`);

export const ACCRUPAY_ACH_PAYMENT_RESULT_FRAGMENT = gql(`
  fragment OrganizationAccruPayAchPaymentResultFragment on OrganizationAccruPayAchPaymentResult {
    payment_id
    state
  }
`);

export const ACCRUPAY_PAYMENT_METHOD_TRANSACTION_RESULT_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentMethodTransactionResultFragment on OrganizationAccruPayPaymentMethodTransactionResult {
    payment_id
    state
  }
`);

export const ACCRUPAY_PAYMENT_METHOD_FRAGMENT = gql(`
  fragment OrganizationAccruPayPaymentMethodFragment on OrganizationAccruPayPaymentMethod {
    id
    method_type
    is_default
    is_enabled
    status
    card_brand
    card_number_masked
    card_exp_month
    card_exp_year
    ach_account_number_masked
    ach_routing_number
    ach_bank_name
    expires_at
    billing {
      first_name
      last_name
      email
      phone
      line_1
      line_2
      city
      state
      country
      postal_code
    }
    created_at
  }
`);
