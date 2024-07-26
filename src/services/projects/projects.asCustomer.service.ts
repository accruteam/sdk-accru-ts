import { ApolloClient, QueryOptions } from '@apollo/client';
import {
  UserCustomerOrganizationProjectChangeRequestAcceptMutation,
  UserCustomerOrganizationProjectChangeRequestAcceptMutationVariables,
  UserCustomerOrganizationProjectChangeRequestCancelMutation,
  UserCustomerOrganizationProjectChangeRequestCancelMutationVariables,
  UserCustomerOrganizationProjectChangeRequestCreateMutation,
  UserCustomerOrganizationProjectChangeRequestCreateMutationVariables,
  UserCustomerOrganizationProjectChangeRequestRejectMutation,
  UserCustomerOrganizationProjectChangeRequestRejectMutationVariables,
  UserCustomerOrganizationProjectChangeRequestUpdateMutation,
  UserCustomerOrganizationProjectChangeRequestUpdateMutationVariables,
  UserCustomerOrganizationProjectQuery,
  UserCustomerOrganizationProjectQueryVariables,
  UserCustomerOrganizationProjectsQuery,
  UserCustomerOrganizationProjectsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_GET_MANY_AS_CUSTOMER_QUERY,
  ORGANIZATION_PROJECT_GET_ONE_AS_CUSTOMER_QUERY,
} from './projects.queries';

export default class AsCustomerProjects {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserCustomerOrganizationProjectsQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<ListResponse<Res<UserCustomerOrganizationProjectsQuery>>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_MANY_AS_CUSTOMER_QUERY,
      variables,
    });

    return processResponseAsList(data.userCustomerOrganizationProjects);
  };

  public getOne = async (
    variables: UserCustomerOrganizationProjectQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UserCustomerOrganizationProjectQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_ONE_AS_CUSTOMER_QUERY,
      variables,
    });

    return data.userCustomerOrganizationProject;
  };

  public createChangeRequest = async (
    variables: UserCustomerOrganizationProjectChangeRequestCreateMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationProjectChangeRequestCreateMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationProjectChangeRequestCreate;
  };

  public updateChangeRequest = async (
    variables: UserCustomerOrganizationProjectChangeRequestUpdateMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationProjectChangeRequestUpdateMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationProjectChangeRequestUpdate;
  };

  public cancelChangeRequest = async (
    variables: UserCustomerOrganizationProjectChangeRequestCancelMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationProjectChangeRequestCancelMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationProjectChangeRequestCancel;
  };

  public acceptChangeRequest = async (
    variables: UserCustomerOrganizationProjectChangeRequestAcceptMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationProjectChangeRequestAcceptMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationProjectChangeRequestAccept;
  };

  public rejectChangeRequest = async (
    variables: UserCustomerOrganizationProjectChangeRequestRejectMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationProjectChangeRequestRejectMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationProjectChangeRequestReject;
  };
}
