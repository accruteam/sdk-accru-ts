import { type ApolloClient } from '@apollo/client/core';
import {
  UserOrganizationReminderSettingsQueryVariables,
  UserOrganizationReminderSettingsQuery,
  UserOrganizationReminderSettingQuery,
  UserOrganizationReminderSettingQueryVariables,
  UserOrganizationReminderSettingCreateMutation,
  UserOrganizationReminderSettingCreateMutationVariables,
  UserOrganizationReminderSettingDeleteMutation,
  UserOrganizationReminderSettingDeleteMutationVariables,
  UserOrganizationReminderSettingUpdateMutation,
  UserOrganizationReminderSettingUpdateMutationVariables,
  UserOrganizationReminderSettingGlobalUpdateMutationVariables,
  UserOrganizationReminderSettingGlobalUpdateMutation,
} from '@api/gql/graphql';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  CREATE_REMINDER_SETTING_MUTATION,
  DELETE_REMINDER_SETTING_MUTATION,
  GET_ALL_REMINDER_SETTINGS_QUERY,
  GET_REMINDER_SETTING_MUTATION,
  UPDATE_REMINDER_GLOBAL_SETTING_MUTATION,
  UPDATE_REMINDER_SETTING_MUTATION,
} from './reminders.queries';

export default class ReminderSettings {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationReminderSettingsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationReminderSettingsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_REMINDER_SETTINGS_QUERY,
      variables,
    });
    return processResponseAsList(data.userOrganizationReminderSettings);
  };

  public getOne = async (
    variables: UserOrganizationReminderSettingQueryVariables,
  ): Promise<Res<UserOrganizationReminderSettingQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data.userOrganizationReminderSetting;
  };

  public create = async (
    variables: UserOrganizationReminderSettingCreateMutationVariables,
  ): Promise<Res<UserOrganizationReminderSettingCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CREATE_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingCreate;
  };

  public update = async (
    variables: UserOrganizationReminderSettingUpdateMutationVariables,
  ): Promise<Res<UserOrganizationReminderSettingUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingUpdate;
  };

  public del = async (
    variables: UserOrganizationReminderSettingDeleteMutationVariables,
  ): Promise<Res<UserOrganizationReminderSettingDeleteMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: DELETE_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingDelete;
  };

  public updateGlobalSettings = async (
    variables: UserOrganizationReminderSettingGlobalUpdateMutationVariables,
  ): Promise<Res<UserOrganizationReminderSettingGlobalUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_REMINDER_GLOBAL_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingGlobalUpdate;
  };
}
