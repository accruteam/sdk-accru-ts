import { gql } from '@api/gql';

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
    created_at
    updated_at
    status
    organization_subscription_id
    organization_payment_method_id
  }
`);

export const ORGANIZATION_COUPON_FRAGMENT = gql(`
  fragment organizationCoupon on OrganizationCoupon {
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
    description
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
    organization_subscription_id
  }
`);

export const ORGANIZATION_SUBSCRIPTION_PRICING_FRAGMENT = gql(`
  fragment OrganizationSubscriptionPricingFragment on OrganizationSubscriptionPricing {
    price_tier
    price_currency
    price_total_amount
    renew_interval
    provider

    base_item {
        item_type
        quantity
        unit_price
    }
    addon_items {
        item_type
        quantity
        unit_price
    }

    organization_coupon_id
    organization_coupon {
        ...organizationCoupon
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_FRAGMENT = gql(`
  fragment OrganizationSubscriptionFragment on OrganizationSubscription {
    id
    price_total_amount
    price_currency
    price_tier
    started_at
    canceled_at
    current_period_started_at
    current_period_finishes_at
    expires_at
    renew_interval
    next_renew_at
    provider
    provider_status
    provider_error
    provider_plan_code
    provider_subscription_code
    provider_last_verified_at
    has_outdated_price
    created_at
    updated_at
    status

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

export const ORGANIZATION_SUBSCRIPTION_GET_MANY_QUERY = gql(`
  query UserOrganizationSubscriptions(
    $organizationId: String!

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

export const ORGANIZATION_SUBSCRIPTION_CANCEL_QUERY = gql(`
  mutation UserOrganizationSubscriptionCancel(
    $organizationId: String!
    $subscriptionId: String!
  ) {
    userOrganizationSubscriptionCancel(
      organization_id: $organizationId
      organization_subscription_id: $subscriptionId
    ) {
      ...OrganizationSubscriptionFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING = gql(`
  mutation UserOrganizationSubscriptionCalculatePricing(
    $organizationId: String!
    $data: UserOrganizationSubscriptionCalculatePricingSchema!
  ) {
    userOrganizationSubscriptionCalculatePricing(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationSubscriptionPricingFragment
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA = gql(`
  mutation UserOrganizationSubscriptionGetPrePurchaseTransactionData(
    $organizationId: String!
  ) {
    userOrganizationSubscriptionGetPrePurchaseTransactionData(
      organization_id: $organizationId
    ) {
      ... on NuveiTransactionProviderPreTransactionData {
        transaction_provider
        environment
        merchant_id,
        merchant_site_id
      }
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_START_PURCHASE = gql(`
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
