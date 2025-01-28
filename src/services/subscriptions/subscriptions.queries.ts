import { gql } from '@gql';

export const ORGANIZATION_PAYMENT_METHOD_FRAGMENT = gql(`
  fragment OrganizationPaymentMethodFragment on OrganizationPaymentMethod {
    id
    payment_method
    payment_provider
    bound_mode
    bound_id
    is_enabled
    is_default
    billing_first_name
    billing_last_name
    billing_email
    billing_phone_number
    billing_address_line_1
    billing_address_number
    billing_address_line_2
    billing_address_city
    billing_address_state
    billing_address_zip_code
    billing_address_country_code_iso_3
    archived_at
    created_at
    updated_at
    payment_method_info {
      ... on OrganizationPaymentMethodCreditCardInfo {
        type
        card_number_masked
        card_brand
      }
      ... on OrganizationPaymentMethodGenericInfo {
        type
      }
    }
    organization_id
  }
`);

export const ORGANIZATION_SUBSCRIPTION_TRANSACTION_FRAGMENT = gql(`
  fragment OrganizationSubscriptionTransactionFragment on OrganizationSubscriptionTransaction {
    id
    transaction_provider
    provider_transaction_code
    transaction_code
    amount
    currency
    started_at
    succeeded_at
    failed_at
    reverted_at
    transaction_date
    due_date
    procedure
    subscription_item_ids
    period_ends_at
    period_sequence
    period_starts_at
    created_at
    updated_at
    status
    organization_subscription_id
    organization_payment_method_id
  }
`);

export const ORGANIZATION_COUPON_FRAGMENT = gql(`
  fragment OrganizationCouponFragment on OrganizationCoupon {
    id
    campaign
    category
    subdivision
    is_activation_unlimited
    activated_at
    expires_at
    archived_at
    created_at
    updated_at
    status
    organization_id
    category_description
    subdivision_description
  }
`);

export const ORGANIZATION_SUBSCRIPTION_ITEM_FRAGMENT = gql(`
  fragment OrganizationSubscriptionItemFragment on OrganizationSubscriptionItem {
    id
    quantity
    unit_price
    started_at
    canceled_at
    item_type
    created_at
    updated_at
    status
    category
    classification
    organization_subscription_id
  }
`);

export const ORGANIZATION_SUBSCRIPTION_FRAGMENT = gql(`
  fragment OrganizationSubscriptionFragment on OrganizationSubscription {
    id
    price_total_amount
    price_currency
    price_tier
    current_period_ends_at
    current_period_starts_at
    canceled_at
    renew_interval
    next_payment_at
    provider
    provider_status
    provider_plan_code
    provider_subscription_code
    provider_last_verified_at
    has_outdated_price
    created_at
    updated_at
    status
    payment_status

    organization_id
    organization_coupon_id

    organization_payment_method_id
    organization_payment_method {
      ...OrganizationPaymentMethodFragment
    }

    items {
      ...OrganizationSubscriptionItemFragment
    }

    transactions {
      ...OrganizationSubscriptionTransactionFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_DEFAULT_PRICING_FRAGMENT = gql(`
  fragment OrganizationSubscriptionDefaultPricingFragment on OrganizationSubscriptionDefaultPricing {
    organization_id
    organization_coupon_id
    organization_coupon {
      ...OrganizationCouponFragment
    }

    price_tier
    price_currency

    options {
      renew_interval
      options {
        base_item {
          item_type
          category
          additional_organization_seats

          original_unit_price
          unit_price

          is_purchase_available

          current_item_pending_purchase_subscription {
            ...OrganizationSubscriptionFragment
          }

          current_item_active_until
          current_item_subscription {
            ...OrganizationSubscriptionFragment
          }
        }
        available_addon_items {
          item_type
          is_purchase_available
          original_unit_price
          unit_price
        }
      }
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_CALCULATED_PRICING_FRAGMENT = gql(`
  fragment OrganizationSubscriptionCalculatedPricingFragment on OrganizationSubscriptionCalculatedPricing {
    organization_id
    organization_coupon_id
    organization_coupon {
      ...OrganizationCouponFragment
    }
    price_tier
    price_currency
    renew_interval
    selected_base_item {
      item_type
      original_unit_price
      unit_price
      category
    }
    selected_addon_items {
      item_type
      quantity
      original_unit_price
      unit_price
    }
    original_price_total_amount
    price_total_amount
    provider
  }
`);

export const ORGANIZATION_SUBSCRIPTION_GET_MANY_QUERY = gql(`
  query UserOrganizationSubscriptions(
    $organizationId: String!
    $organizationCouponId: String
    $organizationPaymentMethodId: String

    $provider: ORGANIZATION_SUBSCRIPTION_PROVIDER
    $providerStatus: ORGANIZATION_SUBSCRIPTION_PROVIDER_STATUS
    $providerPlanCode: String
    $providerSubscriptionCode: String

    $containsItem: ORGANIZATION_SUBSCRIPTION_ITEM

    $renewInterval: ORGANIZATION_SUBSCRIPTION_RENEW_INTERVAL

    $priceTier: ORGANIZATION_SUBSCRIPTION_PRICE_TIER

    $status: ORGANIZATION_SUBSCRIPTION_STATUS

    $started: Boolean
    $canceled: Boolean
    $expired: Boolean

    $hasOutdatedPrice: Boolean
    $hasError: Boolean

    $skip: Int
    $take: Int

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationSubscriptions(
      organization_id: $organizationId
      organization_coupon_id: $organizationCouponId
      organization_payment_method_id: $organizationPaymentMethodId

      provider: $provider
      provider_status: $providerStatus
      provider_plan_code: $providerPlanCode
      provider_subscription_code: $providerSubscriptionCode

      contains_item: $containsItem

      renew_interval: $renewInterval

      price_tier: $priceTier

      status: $status

      started: $started
      canceled: $canceled
      expired: $expired

      has_outdated_price: $hasOutdatedPrice
      has_error: $hasError

      skip: $skip
      take: $take

      after: $after
      first: $first

      before: $before
      last: $last

      sorting: $sorting
    ) {
      edges {
        node {
          ...OrganizationSubscriptionFragment
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      totalCount
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_GET_ONE_QUERY = gql(`
  query UserOrganizationSubscription(
    $organizationId: String!
    $subscriptionId: String!
  ) {
    userOrganizationSubscription(
      organization_id: $organizationId
      organization_subscription_id: $subscriptionId
    ) {
      ...OrganizationSubscriptionFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_GET_DEFAULT_PRICING_QUERY = gql(`
  query UserOrganizationSubscriptionDefaultPricingSetup($organizationId: String!, $organizationCouponId: String) {
    userOrganizationSubscriptionDefaultPricingSetup(
      organization_id: $organizationId
      organization_coupon_id: $organizationCouponId
    ) {
      ...OrganizationSubscriptionDefaultPricingFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_VERIFY_COUPON_MUTATION = gql(`
  mutation UserOrganizationSubscriptionVerifyCoupon($organizationId: String!, $code: String!) {
    userOrganizationSubscriptionVerifyCoupon(organization_id: $organizationId, code: $code) {
      ...OrganizationCouponFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING_MUTATION = gql(`
  mutation UserOrganizationSubscriptionCalculatePricing($data: UserOrganizationSubscriptionCalculatePricingSchema!, $organizationId: String!) {
    userOrganizationSubscriptionCalculatePricing(data: $data, organization_id: $organizationId) {
      ...OrganizationSubscriptionCalculatedPricingFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA_MUTATION = gql(`
  mutation UserOrganizationSubscriptionGetPrePurchaseTransactionData(
    $organizationId: String!
  ) {
    userOrganizationSubscriptionGetPrePurchaseTransactionData(
      organization_id: $organizationId
    ) {
      ... on NuveiTransactionProviderPreTransactionData {
        transaction_provider
        environment
        merchant_id
        merchant_site_id
      }

      ... on AccruPayTransactionProviderPreTransactionData {
        transaction_provider
        environment
        merchant_id
        merchant_site_id
      }
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_START_PURCHASE_MUTATION = gql(`
  mutation UserOrganizationSubscriptionStartPurchase(
    $organizationId: String!
    $data: UserOrganizationSubscriptionStartPurchaseSchema!
  ) {
    userOrganizationSubscriptionStartPurchase(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationSubscriptionTransactionFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_COMPLETE_PURCHASE = gql(`
  mutation UserOrganizationSubscriptionCompletePurchase(
    $organizationId: String!
    $organizationSubscriptionId: String!
    $organizationSubscriptionTransactionId: String!
  ) {
    userOrganizationSubscriptionCompletePurchase(
      organization_id: $organizationId
      organization_subscription_id: $organizationSubscriptionId
      organization_subscription_transaction_id: $organizationSubscriptionTransactionId
    ) {
      ...OrganizationSubscriptionFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_CANCEL_MUTATION = gql(`
  mutation UserOrganizationSubscriptionCancel(
    $organizationId: String!
    $organizationSubscriptionId: String!
  ) {
    userOrganizationSubscriptionCancel(
      organization_id: $organizationId
      organization_subscription_id: $organizationSubscriptionId
    ) {
      ...OrganizationSubscriptionFragment
    }
  }
`);
