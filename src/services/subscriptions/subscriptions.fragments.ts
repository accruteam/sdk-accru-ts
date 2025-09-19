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
