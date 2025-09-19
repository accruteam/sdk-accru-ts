import { gql } from '@gql';

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
