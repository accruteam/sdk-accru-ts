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

export const INTUIT_AUTH_PROVIDER_GET_OAUTH_REQUEST_MUTATION = gql(`
  mutation UserAuthProviderGetOAuthUrl {
    userAuthProviderGetOAuthUrl(auth_provider_code: INTUIT)
  }
`);

export const INTUIT_GET_CUSTOM_TOKEN_MUTATION = gql(`
  mutation UserAuthProviderGetOAuthToken(
    $authProviderCode: AUTH_PROVIDER!
    $authorizationToken: String!
  ) {
    userAuthProviderGetOAuthToken(
      auth_provider_code: $authProviderCode
      authorization_token: $authorizationToken
    )
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
