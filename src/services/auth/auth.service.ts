import {
  UnauthorizedUserOrganizationUserInviteQuery,
  UnauthorizedUserOrganizationUserInviteQueryVariables,
  UserOrganizationUserInviteAcceptMutation,
  UserOrganizationUserInviteAcceptMutationVariables,
  UserSessionsCloseMutation,
  UserSessionsCloseMutationVariables,
  UserSignUpWithEmailFinishSchemaMutation,
  UserSignUpWithEmailFinishSchemaMutationVariables,
  UserSignUpWithEmailStartMutation,
  UserSignUpWithEmailStartMutationVariables,
  UserSignUpWithEmailVerifyMutation,
  UserSignUpWithEmailVerifyMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client';
import { Res } from '@utils/response.type';
import {
  USER_CLOSE_SESSION_MUTATION,
  EMAIL_SIGNUP_MUTATION,
  SIGNUP_CODE_VERIFICATION_MUTATION,
  EMAIL_VERIFICATION_MUTATION,
  USER_ORGANIZATION_USER_INVITE_QUERY,
  ACCEPT_ORG_INVITE_MUTATE,
} from './auth.queries';

export default class Auth {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public startEmailSignup = async (
    variables: UserSignUpWithEmailStartMutationVariables,
  ): Promise<Res<UserSignUpWithEmailStartMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: EMAIL_SIGNUP_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailStart;
  };

  public verifyEmailSignup = async (
    variables: UserSignUpWithEmailVerifyMutationVariables,
  ): Promise<Res<UserSignUpWithEmailVerifyMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: SIGNUP_CODE_VERIFICATION_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailVerify;
  };

  public setEmailSignupPassword = async (
    variables: UserSignUpWithEmailFinishSchemaMutationVariables,
  ): Promise<Res<UserSignUpWithEmailFinishSchemaMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: EMAIL_VERIFICATION_MUTATION,
      variables,
    });
    return data!.userSignUpWithEmailFinish;
  };

  public getInviteData = async (
    variables: UnauthorizedUserOrganizationUserInviteQueryVariables,
  ): Promise<Res<UnauthorizedUserOrganizationUserInviteQuery>> => {
    const { data } = await this.apolloClient.query({
      query: USER_ORGANIZATION_USER_INVITE_QUERY,
      variables,
    });
    return data!.unauthorizedUserOrganizationUserInvite;
  };

  public acceptInvite = async (
    variables: UserOrganizationUserInviteAcceptMutationVariables,
  ): Promise<Res<UserOrganizationUserInviteAcceptMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ACCEPT_ORG_INVITE_MUTATE,
      variables,
    });
    return data!.userOrganizationUserInviteAccept;
  };

  public closeSession = async (
    variables: UserSessionsCloseMutationVariables,
  ): Promise<Res<UserSessionsCloseMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: USER_CLOSE_SESSION_MUTATION,
      variables,
    });
    return data!.userSessionsClose;
  };
}
