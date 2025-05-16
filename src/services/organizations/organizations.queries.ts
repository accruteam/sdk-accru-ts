import { gql } from '@gql';

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
