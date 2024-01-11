import { type ApolloClient } from '@apollo/client';
import {
  UserOrganizationReminderSettingsQueryVariables,
  UserOrganizationReminderSettingsQuery,
  UserOrganizationReminderSettingQuery,
  UserOrganizationReminderSettingQueryVariables,
  UserOrganizationReminderSettingCreateMutation,
  UserOrganizationReminderSettingCreateMutationVariables,
  UserOrganizationReminderSettingDeleteMutation,
  UserOrganizationReminderSettingDeleteMutationVariables,
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
    const { data } = await this.apolloClient.query({
      query: CREATE_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingCreate;
  };

  public del = async (
    variables: UserOrganizationReminderSettingDeleteMutationVariables,
  ): Promise<Res<UserOrganizationReminderSettingDeleteMutation>> => {
    const { data } = await this.apolloClient.query({
      query: DELETE_REMINDER_SETTING_MUTATION,
      variables,
    });
    return data!.userOrganizationReminderSettingDelete;
  };
}
