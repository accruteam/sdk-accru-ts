import { gql } from '@gql';

export const USER_CLOSE_SESSION_MUTATION = gql(`
  mutation UserSessionsClose {
    userSessionsClose {
      id
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
      target_account_exists
    }
  }
`);

export const USER_GET_ORGANIZATION_INVITES_QUERY = gql(`
  query UserOrganizationUserInvites(
    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationUserInvites(
      after: $after,
      first: $first,

      before: $before,
      last: $last,

      skip: $skip,
      take: $take,

      sorting: $sorting
    ) {
      edges {
        node {
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

export const USER_ACCT_PROVIDER_OAUTH_START_MUTATION = gql(`
  mutation UserAcctProviderGetOAuthUrl($acctProvider: ACCT_PROVIDER!) {
    userAcctProviderGetOAuthUrl(acct_provider: $acctProvider)
  }
`);

export const USER_ACCT_PROVIDER_OAUTH_FINISH_MUTATION = gql(`
  mutation UserAcctProviderExchangeToken($acctProvider: ACCT_PROVIDER!, $authorizationToken: String!) {
    userAcctProviderExchangeToken(acct_provider: $acctProvider, authorization_token: $authorizationToken)
  }
`);

export const USER_AND_ORGANIZATION_ACCT_PROVIDER_OAUTH_START_MUTATION = gql(`
  mutation UserAndOrganizationAcctProviderGetOAuthUrl($acctProvider: ACCT_PROVIDER!) {
    userAndOrganizationAcctProviderGetOAuthUrl(acct_provider: $acctProvider)
  }
`);

export const USER_AND_ORGANIZATION_ACCT_PROVIDER_OAUTH_FINISH_MUTATION = gql(`
  mutation UserAndOrganizationAcctProviderExchangeToken($acctProvider: ACCT_PROVIDER!, $authorizationToken: String!, $referredByCode: String) {
    userAndOrganizationAcctProviderExchangeToken(acct_provider: $acctProvider, authorization_token: $authorizationToken, referred_by_code: $referredByCode) {
      status
      token
      user {
        ...UserFragment
      }
      organization {
        ...OrganizationFragment
      }
    }
  }
`);
