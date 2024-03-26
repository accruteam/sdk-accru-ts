import { gql } from '@gql';

export const USER_CLOSE_SESSION_MUTATION = gql(`
  mutation UserSessionsClose {
    userSessionsClose {
      id
    }
  }
`);

export const USER_QUERY = gql(`
  query User {
    user {
      id
      email
      organizations {
        id
        organization_id
        organization {
          name
          email
        }
      }
      first_name
      last_name
      language
      phone_number
      timezone
      updated_at
      created_at
      profile_picture_file {
        public_url
      }
    }
  }
`);

export const USER_ORGANIZATION_USER_INVITE_QUERY = gql(`
  query UnauthorizedUserOrganizationUserInvite(
    $code: String!
    $email: String!
    $organizationId: String!
    $organizationInviteId: String!
  ) {
    unauthorizedUserOrganizationUserInvite(
      code: $code
      email: $email
      organization_id: $organizationId
      organization_invite_id: $organizationInviteId
    ) {
      invited_by
      organization_name
      organization_id
    }
  }
`);

export const EMAIL_SIGNUP_MUTATION = gql(`
  mutation UserSignUpWithEmailStart($data: UserSignUpWithEmailStartSchema!) {
    userSignUpWithEmailStart(data: $data)
  }
`);

export const SIGNUP_CODE_VERIFICATION_MUTATION = gql(`
  mutation UserSignUpWithEmailVerify($data: UserSignUpWithEmailVerifySchema!) {
    userSignUpWithEmailVerify(data: $data)
  }
`);

export const ACCEPT_ORG_INVITE_MUTATE = gql(`
  mutation UserOrganizationUserInviteAccept(
    $code: String!
    $organizationInviteId: String!
    $organizationId: String!
  ) {
    userOrganizationUserInviteAccept(
      code: $code
      organization_invite_id: $organizationInviteId
      organization_id: $organizationId
    ) {
      role
    }
  }
`);

export const EMAIL_VERIFICATION_MUTATION = gql(`
  mutation UserSignUpWithEmailFinishSchema(
    $data: UserSignUpWithEmailFinishSchema!
  ) {
    userSignUpWithEmailFinish(data: $data)
  }
`);

export const PASSWORD_RESET_START_MUTATION = gql(`
  mutation UserPasswordResetStart($data: UserPasswordResetStartSchema!) {
    userPasswordResetStart(data: $data)
  }
`);

export const PASSWORD_RESET_FINISH_MUTATION = gql(`
  mutation UserPasswordResetFinish($userPasswordResetFinishData2: UserPasswordResetFinishSchema!) {
    userPasswordResetFinish(data: $userPasswordResetFinishData2)
  }
`);

export const INTUIT_LOGIN_START_MUTATION = gql(`
  mutation UserAuthProviderGetOAuthUrl($authProvider: AUTH_PROVIDER!) {
    userAuthProviderGetOAuthUrl(auth_provider: $authProvider)
  }
`);

export const INTUIT_LOGIN_FINISH_MUTATION = gql(`
  mutation UserAuthProviderGetOAuthToken($authProvider: AUTH_PROVIDER!, $authorizationToken: String!) {
    userAuthProviderGetOAuthToken(auth_provider: $authProvider, authorization_token: $authorizationToken)
  }
`);
