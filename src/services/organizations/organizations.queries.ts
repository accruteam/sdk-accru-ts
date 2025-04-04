import { gql } from '@gql';

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

export const ORGANIZATION_QUERY_FRAGMENT = gql(`
  fragment OrganizationFragment on Organization {
    id
    name
    email
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

    current_email_verification_id
    current_phone_number_verification_id

    subscription_level
    subscription_data {
      ...OrganizationSubscriptionDataFragment
    }

    setting_receive_customer_notification_mode
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

export const GET_ORGANIZATION_QUERY = gql(`
  query UserOrganization ($organizationId: String!) {
    userOrganization(organization_id: $organizationId) {
      ...OrganizationFragment
    }
  }
`);

export const GET_ORGANIZATION_BASE_SETTINGS_QUERY = gql(`
  query UserOrganizationBaseSettings(
    $organizationId: String!
  ) {
    userOrganization(
      organization_id: $organizationId
    ) {
      setting_send_invoice_due_reminders
      setting_send_invoice_overdue_reminders
      setting_allow_invoice_due_snooze_reminders
      setting_allow_invoice_overdue_snooze_reminders
    }
  }
`);

export const CREATE_ORGANIZATION_MUTATION = gql(`
  mutation UserOrganizationCreate($data: UserOrganizationCreateSchema!){
    userOrganizationCreate(data: $data) {
      id
      email
      name
      phone_number
      primary_contact_name
    }
  }
`);

export const GET_ORGANIZATION_COLLABORATORS_QUERY = gql(`
  query UserOrganizationCollaborators(
    $organizationId: String!
  ) {
    userOrganizationCollaborators(
      organization_id: $organizationId
    ) {
      ...OrganizationUserFragment
    }
  }
`);

export const INVITE_ORGANIZATION_COLLABORATOR_MUTATION = gql(`
  mutation UserOrganizationInviteCollaboratorCreate($data: UserOrganizationInviteCollaboratorCreateSchema!, $organizationId: String!) {
    userOrganizationInviteCollaboratorCreate(data: $data, organization_id: $organizationId) {
      expires_at
    }
  }
`);

export const DELETE_ORGANIZATION_COLLABORATOR_INVITE_MUTATION = gql(`
  mutation UserOrganizationInviteCollaboratorCancel($organizationId: String!, $organizationInviteId: String!) {
    userOrganizationInviteCollaboratorCancel(organization_id: $organizationId, organization_invite_id: $organizationInviteId) {
      ...OrganizationInviteFragment
    }
  }
`);

export const RESEND_ORGANIZATION_COLLABORATOR_INVITE_MUTATION = gql(`
  mutation UserOrganizationInviteCollaboratorResend($organizationId: String!, $organizationInviteId: String!) {
    userOrganizationInviteCollaboratorResend(organization_id: $organizationId, organization_invite_id: $organizationInviteId) {
      ...OrganizationInviteFragment
    }
  }
`);

export const GET_ORGANIZATION_COLLABORATOR_INVITES_QUERY = gql(`
  query UserOrganizationInviteCollaborators(
    $organizationId: String!,

    $accepted: Boolean,
    $canceled: Boolean,
    $expired: Boolean,
    $rejected: Boolean,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationInviteCollaborators(
      organization_id: $organizationId,

      accepted: $accepted,
      canceled: $canceled,
      expired: $expired,
      rejected: $rejected,

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      totalCount
      edges {
        cursor
        node {
          ...OrganizationInviteFragment
        }
      }
      pageInfo {
          startCursor
          endCursor
          hasPreviousPage
          hasNextPage
      }
    }
  }
`);

export const UPDATE_ORGANIZATION_COLLABORATOR_MUTATION = gql(`
  mutation UserOrganizationCollaboratorUpdate($data: UserOrganizationCollaboratorUpdateSchema!, $organizationUserId: String!, $organizationId: String!) {
    userOrganizationCollaboratorUpdate(data: $data, organization_user_id: $organizationUserId, organization_id: $organizationId) {
      role
    }
  }
`);

export const DELETE_ORGANIZATION_COLLABORATOR_MUTATION = gql(`
  mutation UserOrganizationCollaboratorDelete($organizationUserId: String!, $organizationId: String!) {
    userOrganizationCollaboratorDelete(organization_user_id: $organizationUserId, organization_id: $organizationId) {
      id
    }
  }
`);

export const UPDATE_ORGANIZATION_MUTATION = gql(`
  mutation UserOrganizationUpdate(
    $organizationId: String!
    $data: UserOrganizationUpdateSchema!
  ) {
    userOrganizationUpdate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationFragment
    }
  }
`);

export const DELETE_ORGANIZATION_LOGO_MUTATION = gql(`
  mutation UserOrganizationLogoPictureRemove($organizationId: String!) {
    userOrganizationLogoPictureRemove(organization_id: $organizationId) {
      logo_picture_file {
        public_url
      }
    }
  }
`);

export const SEND_GENERIC_INVITE_TO_ACCRU_EMAIL_MUTATION = gql(`
  mutation UserOrganizationSendGenericInviteMail($organizationId: String!, $email: String!) {
    userOrganizationSendGenericInviteMail(organization_id: $organizationId, email: $email)
  }
`);

export const UPDATE_ORGANIZATION_EMAIL_START_MUTATION = gql(`
  mutation UserOrganizationEmailVerifyOrChangeStart($organizationId: String!, $data: UserOrganizationEmailVerifyOrChangeStartSchema!) {
    userOrganizationEmailVerifyOrChangeStart(organization_id: $organizationId, data: $data)
  }
`);

export const UPDATE_ORGANIZATION_EMAIL_FINISH_MUTATION = gql(`
  mutation UserOrganizationEmailVerifyOrChangeFinish($organizationId: String!, $data: UserOrganizationEmailVerifyOrChangeFinishSchema!) {
    userOrganizationEmailVerifyOrChangeFinish(organization_id: $organizationId, data: $data) {
      ...OrganizationFragment
    }
  }
`);
