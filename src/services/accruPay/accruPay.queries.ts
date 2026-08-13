import { gql } from '@gql';

/* -------------------------------------------------------------------------- */
/*                              VENDOR · CONNECTION                            */
/* -------------------------------------------------------------------------- */

export const GET_ACCRUPAY_CONNECTION_QUERY = gql(`
  query UserOrganizationAccruPayConnection($organizationId: String!) {
    userOrganizationAccruPayConnection(organization_id: $organizationId) {
      ...MaskedOrganizationAccruPayConnectionFragment
    }
  }
`);

export const ACCRUPAY_CONNECT_MUTATION = gql(`
  mutation UserOrganizationAccruPayConnect(
    $organizationId: String!
    $apiSecret: String!
  ) {
    userOrganizationAccruPayConnect(
      organization_id: $organizationId
      api_secret: $apiSecret
    ) {
      ...MaskedOrganizationAccruPayConnectionFragment
    }
  }
`);

export const ACCRUPAY_DISCONNECT_MUTATION = gql(`
  mutation UserOrganizationAccruPayDisconnect(
    $organizationId: String!
    $connectionId: String!
  ) {
    userOrganizationAccruPayDisconnect(
      organization_id: $organizationId
      connection_id: $connectionId
    ) {
      ...OrganizationAccruPayConnectionFragment
    }
  }
`);

export const ACCRUPAY_UPDATE_CONNECTION_SETTINGS_MUTATION = gql(`
  mutation UserOrganizationAccruPayUpdateConnectionSettings(
    $organizationId: String!
    $connectionId: String!
    $data: UserOrganizationAccruPayUpdateConnectionSettingsSchema!
  ) {
    userOrganizationAccruPayUpdateConnectionSettings(
      organization_id: $organizationId
      connection_id: $connectionId
      data: $data
    ) {
      ...OrganizationAccruPayConnectionFragment
    }
  }
`);

export const GET_ACCRUPAY_TRANSACTION_PROVIDERS_QUERY = gql(`
  query UserOrganizationAccruPayTransactionProviders($organizationId: String!) {
    userOrganizationAccruPayTransactionProviders(organization_id: $organizationId) {
      ...OrganizationAccruPayTransactionProviderFragment
    }
  }
`);

export const ACCRUPAY_SET_TRANSACTION_PROVIDER_MUTATION = gql(`
  mutation UserOrganizationAccruPaySetTransactionProvider(
    $organizationId: String!
    $connectionId: String!
    $transactionProviderId: String!
  ) {
    userOrganizationAccruPaySetTransactionProvider(
      organization_id: $organizationId
      connection_id: $connectionId
      transaction_provider_id: $transactionProviderId
    ) {
      ...OrganizationAccruPayConnectionFragment
    }
  }
`);

/* -------------------------------------------------------------------------- */
/*                            VENDOR · CUSTOMER RULES                          */
/* -------------------------------------------------------------------------- */

export const GET_ACCRUPAY_CUSTOMER_SETTINGS_QUERY = gql(`
  query UserOrganizationAccruPayCustomerSettings(
    $organizationId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationAccruPayCustomerSettings(
      organization_id: $organizationId
      after: $after
      first: $first
      before: $before
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
    ) {
      ...OrganizationAccruPayCustomerSettingFragment
    }
  }
`);

export const ACCRUPAY_UPSERT_CUSTOMER_SETTING_MUTATION = gql(`
  mutation UserOrganizationAccruPayUpsertCustomerSetting(
    $organizationId: String!
    $data: UserOrganizationAccruPayCustomerSettingSchema!
  ) {
    userOrganizationAccruPayUpsertCustomerSetting(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationAccruPayCustomerSettingFragment
    }
  }
`);

/* -------------------------------------------------------------------------- */
/*                            VENDOR · INVOICE RULES                           */
/* -------------------------------------------------------------------------- */

export const GET_ACCRUPAY_INVOICE_SETTINGS_QUERY = gql(`
  query UserOrganizationAccruPayInvoiceSettings(
    $organizationId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationAccruPayInvoiceSettings(
      organization_id: $organizationId
      after: $after
      first: $first
      before: $before
      last: $last
      skip: $skip
      take: $take
      sorting: $sorting
    ) {
      ...OrganizationAccruPayInvoiceSettingFragment
    }
  }
`);

export const ACCRUPAY_UPSERT_INVOICE_SETTING_MUTATION = gql(`
  mutation UserOrganizationAccruPayUpsertInvoiceSetting(
    $organizationId: String!
    $data: UserOrganizationAccruPayInvoiceSettingSchema!
  ) {
    userOrganizationAccruPayUpsertInvoiceSetting(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationAccruPayInvoiceSettingFragment
    }
  }
`);

/* -------------------------------------------------------------------------- */
/*                              VENDOR · PAYMENTS                              */
/* -------------------------------------------------------------------------- */

export const GET_ACCRUPAY_PENDING_PAYMENTS_QUERY = gql(`
  query UserOrganizationAccruPayPendingPayments(
    $organizationId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationAccruPayPendingPayments(
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

export const GET_ACCRUPAY_PAYMENT_HISTORY_QUERY = gql(`
  query UserOrganizationAccruPayPaymentHistory(
    $organizationId: String!
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationAccruPayPaymentHistory(
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

export const ACCRUPAY_RESOLVE_PAYMENT_MUTATION = gql(`
  mutation UserOrganizationAccruPayResolvePayment(
    $organizationId: String!
    $paymentId: String!
    $resolutionMode: ORGANIZATION_ACCRUPAY_RESOLUTION_MODE!
    $invoicePaymentId: String
    $resolutionDistribution: [OrganizationAccruPayResolutionDistributionSchema!]
    $notifyCustomerOfDiscrepancy: Boolean
  ) {
    userOrganizationAccruPayResolvePayment(
      organization_id: $organizationId
      payment_id: $paymentId
      resolution_mode: $resolutionMode
      invoice_payment_id: $invoicePaymentId
      resolution_distribution: $resolutionDistribution
      notify_customer_of_discrepancy: $notifyCustomerOfDiscrepancy
    )
  }
`);

export const ACCRUPAY_REVERSE_PAYMENT_MUTATION = gql(`
  mutation UserOrganizationAccruPayReversePayment(
    $organizationId: String!
    $paymentId: String!
    $reversalMode: ORGANIZATION_ACCRUPAY_REVERSAL_MODE!
  ) {
    userOrganizationAccruPayReversePayment(
      organization_id: $organizationId
      payment_id: $paymentId
      reversal_mode: $reversalMode
    )
  }
`);
