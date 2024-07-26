import { ApolloClient, QueryOptions } from '@apollo/client';
import {
  UnconnectedCustomerOrganizationProjectChangeRequestAcceptMutation,
  UnconnectedCustomerOrganizationProjectChangeRequestAcceptMutationVariables,
  UnconnectedCustomerOrganizationProjectChangeRequestActionRequestTokenMutation,
  UnconnectedCustomerOrganizationProjectChangeRequestActionRequestTokenMutationVariables,
  UnconnectedCustomerOrganizationProjectChangeRequestRejectMutation,
  UnconnectedCustomerOrganizationProjectChangeRequestRejectMutationVariables,
  UnconnectedCustomerOrganizationProjectQuery,
  UnconnectedCustomerOrganizationProjectQueryVariables,
  UnconnectedCustomerOrganizationProjectsQuery,
  UnconnectedCustomerOrganizationProjectsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_UNCONNECTED_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_ACTION_REQUEST_TOKEN_AS_UNCONNECTED_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_UNCONNECTED_CUSTOMER_MUTATION,
  ORGANIZATION_PROJECT_GET_MANY_AS_UNCONNECTED_CUSTOMER_QUERY,
  ORGANIZATION_PROJECT_GET_ONE_AS_UNCONNECTED_CUSTOMER_QUERY,
} from './projects.queries';

export default class AsCustomerProjects {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UnconnectedCustomerOrganizationProjectsQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<
    ListResponse<Res<UnconnectedCustomerOrganizationProjectsQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_MANY_AS_UNCONNECTED_CUSTOMER_QUERY,
      variables,
    });

    return processResponseAsList(data.unconnectedCustomerOrganizationProjects);
  };

  public getOne = async (
    variables: UnconnectedCustomerOrganizationProjectQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UnconnectedCustomerOrganizationProjectQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: ORGANIZATION_PROJECT_GET_ONE_AS_UNCONNECTED_CUSTOMER_QUERY,
      variables,
    });

    return data.unconnectedCustomerOrganizationProject;
  };

  public requestActionToken = async (
    variables: UnconnectedCustomerOrganizationProjectChangeRequestActionRequestTokenMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationProjectChangeRequestActionRequestTokenMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        ORGANIZATION_PROJECT_CHANGE_REQUEST_ACTION_REQUEST_TOKEN_AS_UNCONNECTED_CUSTOMER_MUTATION,
      variables,
    });

    return data!
      .unconnectedCustomerOrganizationProjectChangeRequestActionRequestToken;
  };

  public acceptChangeRequest = async (
    variables: UnconnectedCustomerOrganizationProjectChangeRequestAcceptMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationProjectChangeRequestAcceptMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_UNCONNECTED_CUSTOMER_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationProjectChangeRequestAccept;
  };

  public rejectChangeRequest = async (
    variables: UnconnectedCustomerOrganizationProjectChangeRequestRejectMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationProjectChangeRequestRejectMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_UNCONNECTED_CUSTOMER_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationProjectChangeRequestReject;
  };
}
