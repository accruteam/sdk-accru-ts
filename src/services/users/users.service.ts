import { ApolloClient } from '@apollo/client/core';
import {
  UserEmailVerifyOrChangeFinishMutation,
  UserEmailVerifyOrChangeFinishMutationVariables,
  UserEmailVerifyOrChangeStartMutation,
  UserEmailVerifyOrChangeStartMutationVariables,
  UserHandleLoginAttemptMutationVariables,
  UserPasswordChangeFinishMutation,
  UserPasswordChangeFinishMutationVariables,
  UserPasswordChangeStartMutation,
  UserPasswordChangeStartMutationVariables,
  UserPhoneNumberVerifyOrChangeFinishMutation,
  UserPhoneNumberVerifyOrChangeFinishMutationVariables,
  UserPhoneNumberVerifyOrChangeStartMutation,
  UserPhoneNumberVerifyOrChangeStartMutationVariables,
  UserProfilePictureRemoveMutation,
  UserProfilePictureRemoveMutationVariables,
  UserQuery,
  UserUpdateDataMutation,
  UserUpdateDataMutationVariables,
} from '@gql/graphql';
import { Res } from '@utils/response.type';
import {
  USER_QUERY,
  UPDATE_USER_MUTATION,
  UPDATE_USER_EMAIL_START_MUTATION,
  UPDATE_USER_EMAIL_FINISH_MUTATION,
  UPDATE_USER_PHONE_START_MUTATION,
  UPDATE_USER_PHONE_FINISH_MUTATION,
  UPDATE_USER_PASSWORD_START_MUTATION,
  UPDATE_USER_PASSWORD_FINISH_MUTATION,
  UPDATE_USER_DELETE_PROFILE_PICTURE_MUTATION,
  USER_HANDLE_LOGIN_ATTEMPT_MUTATION,
} from './users.queries';

export default class UsersService {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public async getCurrent(): Promise<Res<UserQuery>> {
    const { data } = await this.apolloClient.query({ query: USER_QUERY });
    return data.user;
  }

  public update = async (
    variables: UserUpdateDataMutationVariables,
  ): Promise<Res<UserUpdateDataMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_MUTATION,
      variables,
    });
    return data!.userUpdateData;
  };

  public updateEmail = async (
    variables: UserEmailVerifyOrChangeStartMutationVariables,
  ): Promise<Res<UserEmailVerifyOrChangeStartMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_EMAIL_START_MUTATION,
      variables,
    });
    return data;
  };

  public verifyUpdatedEmail = async (
    variables: UserEmailVerifyOrChangeFinishMutationVariables,
  ): Promise<Res<UserEmailVerifyOrChangeFinishMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_EMAIL_FINISH_MUTATION,
      variables,
    });

    return data!.userEmailVerifyOrChangeFinish;
  };

  public updatePhoneNumber = async (
    variables: UserPhoneNumberVerifyOrChangeStartMutationVariables,
  ): Promise<Res<UserPhoneNumberVerifyOrChangeStartMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_PHONE_START_MUTATION,
      variables,
    });
    return data;
  };

  public verifyUpdatedPhoneNumber = async (
    variables: UserPhoneNumberVerifyOrChangeFinishMutationVariables,
  ): Promise<Res<UserPhoneNumberVerifyOrChangeFinishMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_PHONE_FINISH_MUTATION,
      variables,
    });

    return data!.userPhoneNumberVerifyOrChangeFinish;
  };

  public updatePassword = async (
    variables: UserPasswordChangeStartMutationVariables,
  ): Promise<Res<UserPasswordChangeStartMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_PASSWORD_START_MUTATION,
      variables,
    });

    return data;
  };

  public verifyPassword = async (
    variables: UserPasswordChangeFinishMutationVariables,
  ): Promise<Res<UserPasswordChangeFinishMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_PASSWORD_FINISH_MUTATION,
      variables,
    });

    return data!.userPasswordChangeFinish;
  };

  public removeProfilePicture = async (
    variables: UserProfilePictureRemoveMutationVariables,
  ): Promise<Res<UserProfilePictureRemoveMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_USER_DELETE_PROFILE_PICTURE_MUTATION,
      variables,
    });

    return data!.userProfilePictureRemove;
  };

  public handleLoginAttempt = async (
    variables: UserHandleLoginAttemptMutationVariables,
  ): Promise<void> => {
    await this.apolloClient.mutate({
      mutation: USER_HANDLE_LOGIN_ATTEMPT_MUTATION,
      variables,
    });
  };
}
