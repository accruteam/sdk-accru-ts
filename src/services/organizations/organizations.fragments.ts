import { gql } from '@gql';

export const ORGANIZATION_FRAGMENT = gql(`
  fragment OrganizationFragment on Organization {
    id
    name
    email
    website
    unique_name
    unique_code
    phone_number
    address_line_1
    address_number
    address_line_2
    address_city
    address_state
    address_zip_code
    address_country_code_iso_3
    address_lat
    address_lng
    primary_contact_name
    business_name
    business_industry
    business_number_of_employees
    business_address_line_1
    business_address_number
    business_address_line_2
    business_address_city
    business_address_state
    business_address_zip_code
    business_address_country_code_iso_3
    business_address_lat
    business_address_lng
    business_tax_code_type
    business_tax_code
    timezone
    language

    created_at
    updated_at

    logo_picture_file_id
    logo_picture_file {
      public_url
    }

    setting_receive_customer_notification_mode

    current_email_verification_id
    current_phone_number_verification_id

    subscription_level
    subscription_data {
      ...OrganizationSubscriptionDataFragment
    }

    acct_provider_conns {
      edges {
        node {
          ...OrganizationAcctProviderConnFragment
        }
      }
    }
  }
`);

export const ORGANIZATION_USER_FRAGMENT = gql(`
  fragment OrganizationUserFragment on OrganizationUser {
    id
    role
    is_current_organization_user_seat_available
    receive_invoice_reminders
    receive_customer_notification_mode
    created_at
    updated_at
    organization_id
    user_id
    user {
      id
      email
      phone_number
      first_name
      last_name
      language
      profile_picture_file_id
      profile_picture_file {
        public_url
      }
      current_email_verification_id
      current_phone_number_verification_id
    }
  }
`);

export const ORGANIZATION_INVITE_QUERY_FRAGMENT = gql(`
  fragment OrganizationInviteFragment on OrganizationInvite {
    id
    email
    role
    code
    expires_at
    accepted_at
    canceled_at
    rejected_at
    created_at
    updated_at
    organization_id
    organization {
        id
        name
        logo_picture_file {
            public_url
        }
    }
    created_by_user_id
    created_by_user {
        id
        first_name
        last_name
        email
        profile_picture_file {
            public_url
        }
    }
  }
`);

export const ORGANIZATION_SUBSCRIPTION_DATA_FRAGMENT = gql(`
  fragment OrganizationSubscriptionDataFragment on OrganizationSubscriptionData {
    subscription_level
    organization_user_seats
    requires_user_action
    requires_provider_refresh
    active_subscriptions {
        id
        provider
        provider_status
    }
    active_plans {
        item_type
        status
    }
    active_modules {
        item_type
        status
    }
    active_addons {
        item_type
        quantity
        status
    }
  }
`);
