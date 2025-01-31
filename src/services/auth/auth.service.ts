import {
  UnauthorizedUserOrganizationUserInviteQuery,
  UnauthorizedUserOrganizationUserInviteQueryVariables,
  UserAuthProviderGetOAuthTokenMutation,
  UserAuthProviderGetOAuthTokenMutationVariables,
  UserAuthProviderGetOAuthUrlMutation,
  UserAuthProviderGetOAuthUrlMutationVariables,
  UserOrganizationUserInviteAcceptMutation,
  UserOrganizationUserInviteAcceptMutationVariables,
  UserOrganizationUserInvitesQuery,
  UserOrganizationUserInvitesQueryVariables,
  UserPasswordResetFinishMutation,
  UserPasswordResetFinishMutationVariables,
  UserPasswordResetStartMutation,
  UserPasswordResetStartMutationVariables,
  UserSessionsCloseMutation,
  UserSessionsCloseMutationVariables,
  UserSignUpWithEmailFinishSchemaMutation,
  UserSignUpWithEmailFinishSchemaMutationVariables,
  UserSignUpWithEmailStartMutation,
  UserSignUpWithEmailStartMutationVariables,
  UserSignUpWithEmailVerifyMutation,
  UserSignUpWithEmailVerifyMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client/core';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  USER_CLOSE_SESSION_MUTATION,
  EMAIL_SIGNUP_MUTATION,
  SIGNUP_CODE_VERIFICATION_MUTATION,
  EMAIL_VERIFICATION_MUTATION,
  USER_ORGANIZATION_USER_INVITE_QUERY,
  ACCEPT_ORG_INVITE_MUTATE,
  PASSWORD_RESET_START_MUTATION,
  PASSWORD_RESET_FINISH_MUTATION,
  INTUIT_LOGIN_START_MUTATION,
  INTUIT_LOGIN_FINISH_MUTATION,
  USER_GET_ORGANIZATION_INVITES_QUERY,
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

  public getInvites = async (
    variables: UserOrganizationUserInvitesQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationUserInvitesQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: USER_GET_ORGANIZATION_INVITES_QUERY,
      variables,
    });

    return processResponseAsList(data.userOrganizationUserInvites);
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

  public startResetPassword = async (
    variables: UserPasswordResetStartMutationVariables,
  ): Promise<Res<UserPasswordResetStartMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: PASSWORD_RESET_START_MUTATION,
      variables,
    });
    return data!.userPasswordResetStart;
  };

  public finishResetPassword = async (
    variables: UserPasswordResetFinishMutationVariables,
  ): Promise<Res<UserPasswordResetFinishMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: PASSWORD_RESET_FINISH_MUTATION,
      variables,
    });
    return data!.userPasswordResetFinish;
  };

  public startIntuitLogin = async (
    variables: UserAuthProviderGetOAuthUrlMutationVariables,
  ): Promise<Res<UserAuthProviderGetOAuthUrlMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: INTUIT_LOGIN_START_MUTATION,
      variables,
    });
    return data!.userAuthProviderGetOAuthUrl;
  };

  public finishIntuitLogin = async (
    variables: UserAuthProviderGetOAuthTokenMutationVariables,
  ): Promise<Res<UserAuthProviderGetOAuthTokenMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: INTUIT_LOGIN_FINISH_MUTATION,
      variables,
    });
    return data!.userAuthProviderGetOAuthToken;
  };
}
