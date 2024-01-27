import {
  QueryOptions,
  type ApolloClient,
  MutationOptions,
} from '@apollo/client';
import {
  UserOrganizationBaseSettingsQuery,
  UserOrganizationBaseSettingsQueryVariables,
  UserOrganizationCollaboratorDeleteMutation,
  UserOrganizationCollaboratorDeleteMutationVariables,
  UserOrganizationCollaboratorsQuery,
  UserOrganizationCollaboratorsQueryVariables,
  UserOrganizationInviteCollaboratorCreateMutation,
  UserOrganizationInviteCollaboratorCreateMutationVariables,
  UserOrganizationLogoPictureRemoveMutation,
  UserOrganizationLogoPictureRemoveMutationVariables,
  UserOrganizationQuery,
  UserOrganizationQueryVariables,
  UserOrganizationUpdateMutation,
  UserOrganizationUpdateMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  DELETE_ORGANIZATION_COLLABORATOR_MUTATION,
  DELETE_ORGANIZATION_LOGO_MUTATION,
  GET_ORGANIZATION_BASE_SETTINGS_QUERY,
  GET_ORGANIZATION_COLLABORATORS_QUERY,
  GET_ORGANIZATION_QUERY,
  INVITE_ORGANIZATION_COLLABORATOR_MUTATION,
  UPDATE_ORGANIZATION_MUTATION,
} from './organizations.queries';

export default class Organizations {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UserOrganizationQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: GET_ORGANIZATION_QUERY,
      variables,
    });

    return data.userOrganization;
  };

  public getSettings = async (
    variables: UserOrganizationBaseSettingsQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UserOrganizationBaseSettingsQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: GET_ORGANIZATION_BASE_SETTINGS_QUERY,
      variables,
    });

    return data.userOrganization;
  };

  public update = async (
    variables: UserOrganizationUpdateMutationVariables,
    apolloClientOptions?: MutationOptions,
  ): Promise<Res<UserOrganizationUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      ...apolloClientOptions,
      mutation: UPDATE_ORGANIZATION_MUTATION,
      variables,
    });

    return data.userOrganization;
  };

  public getCollaborators = async (
    variables: UserOrganizationCollaboratorsQueryVariables,
  ): Promise<Res<UserOrganizationCollaboratorsQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ORGANIZATION_COLLABORATORS_QUERY,
      variables,
    });

    return data.userOrganizationCollaborators;
  };

  public inviteCollaborator = async (
    variables: UserOrganizationInviteCollaboratorCreateMutationVariables,
  ): Promise<Res<UserOrganizationInviteCollaboratorCreateMutation>> => {
    const { data } = await this.apolloClient.query({
      query: INVITE_ORGANIZATION_COLLABORATOR_MUTATION,
      variables,
    });

    return data.userOrganizationInviteCollaboratorCreate;
  };

  public deleteCollaborator = async (
    variables: UserOrganizationCollaboratorDeleteMutationVariables,
  ): Promise<Res<UserOrganizationCollaboratorDeleteMutation>> => {
    const { data } = await this.apolloClient.query({
      query: DELETE_ORGANIZATION_COLLABORATOR_MUTATION,
      variables,
    });

    return data.userOrganizationCollaboratorDelete;
  };

  public deleteOrganizationLogo = async (
    variables: UserOrganizationLogoPictureRemoveMutationVariables,
  ): Promise<Res<UserOrganizationLogoPictureRemoveMutation>> => {
    const { data } = await this.apolloClient.query({
      query: DELETE_ORGANIZATION_LOGO_MUTATION,
      variables,
    });

    return data.userOrganizationLogoPictureRemove;
  };
}
