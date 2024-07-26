import { ApolloClient, QueryOptions } from '@apollo/client';
import {
  UserOrganizationProjectChangeRequestAcceptMutation,
  UserOrganizationProjectChangeRequestAcceptMutationVariables,
  UserOrganizationProjectChangeRequestCancelMutation,
  UserOrganizationProjectChangeRequestCancelMutationVariables,
  UserOrganizationProjectChangeRequestCreateMutation,
  UserOrganizationProjectChangeRequestCreateMutationVariables,
  UserOrganizationProjectChangeRequestRejectMutation,
  UserOrganizationProjectChangeRequestRejectMutationVariables,
  UserOrganizationProjectChangeRequestUpdateMutation,
  UserOrganizationProjectChangeRequestUpdateMutationVariables,
  UserOrganizationProjectCreateMutation,
  UserOrganizationProjectCreateMutationVariables,
  UserOrganizationProjectDeleteMutation,
  UserOrganizationProjectDeleteMutationVariables,
  UserOrganizationProjectQuery,
  UserOrganizationProjectQueryVariables,
  UserOrganizationProjectUpdateMutation,
  UserOrganizationProjectUpdateMutationVariables,
  UserOrganizationProjectsQuery,
  UserOrganizationProjectsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_CREATE_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_DELETE_AS_VENDOR_MUTATION,
  ORGANIZATION_PROJECT_GET_MANY_AS_VENDOR_QUERY,
  ORGANIZATION_PROJECT_GET_ONE_AS_VENDOR_QUERY,
  ORGANIZATION_PROJECT_UPDATE_AS_VENDOR_MUTATION,
} from './projects.queries';

export default class AsVendorProjects {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationProjectsQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<ListResponse<Res<UserOrganizationProjectsQuery>>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_MANY_AS_VENDOR_QUERY,
      variables,
    });

    return processResponseAsList(data.userOrganizationProjects);
  };

  public getOne = async (
    variables: UserOrganizationProjectQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UserOrganizationProjectQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_ONE_AS_VENDOR_QUERY,
      variables,
    });

    return data.userOrganizationProject;
  };

  public create = async (
    variables: UserOrganizationProjectCreateMutationVariables,
  ): Promise<Res<UserOrganizationProjectCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CREATE_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectCreate;
  };

  public update = async (
    variables: UserOrganizationProjectUpdateMutationVariables,
  ): Promise<Res<UserOrganizationProjectUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_UPDATE_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectUpdate;
  };

  public delete = async (
    variables: UserOrganizationProjectDeleteMutationVariables,
  ): Promise<Res<UserOrganizationProjectDeleteMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_DELETE_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectDelete;
  };

  public createChangeRequest = async (
    variables: UserOrganizationProjectChangeRequestCreateMutationVariables,
  ): Promise<Res<UserOrganizationProjectChangeRequestCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectChangeRequestCreate;
  };

  public updateChangeRequest = async (
    variables: UserOrganizationProjectChangeRequestUpdateMutationVariables,
  ): Promise<Res<UserOrganizationProjectChangeRequestUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectChangeRequestUpdate;
  };

  public cancelChangeRequest = async (
    variables: UserOrganizationProjectChangeRequestCancelMutationVariables,
  ): Promise<Res<UserOrganizationProjectChangeRequestCancelMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectChangeRequestCancel;
  };

  public acceptChangeRequest = async (
    variables: UserOrganizationProjectChangeRequestAcceptMutationVariables,
  ): Promise<Res<UserOrganizationProjectChangeRequestAcceptMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectChangeRequestAccept;
  };

  public rejectChangeRequest = async (
    variables: UserOrganizationProjectChangeRequestRejectMutationVariables,
  ): Promise<Res<UserOrganizationProjectChangeRequestRejectMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationProjectChangeRequestReject;
  };
}
