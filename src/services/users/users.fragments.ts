import { gql } from '@gql';

export const USER_FRAGMENT = gql(`
  fragment UserFragment on User {
    id
    email

    first_name
    last_name
    language
    phone_number
    timezone
    is_admin
    referral_code

    updated_at
    created_at
    profile_picture_file {
      public_url
    }
  }
`);

export const USER_WITH_ORGANIZATIONS_FRAGMENT = gql(`
  fragment UserWithOrganizationFragment on User {
    ...UserFragment

    organizations {
      id
      role
      is_current_organization_user_seat_available
      organization_id
      organization {
        ...OrganizationFragment
      }
    }
  }
`);
