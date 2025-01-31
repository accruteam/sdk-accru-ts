import {
  AdminOrganizationsQuery,
  AdminOrganizationsQueryVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client/core';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import { GET_ADMIN_ORGANIZATION_QUERY } from './adminOrganizations.queries';

export default class AdminOrganizations {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: AdminOrganizationsQueryVariables,
  ): Promise<ListResponse<Res<AdminOrganizationsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ADMIN_ORGANIZATION_QUERY,
      variables,
    });
    return processResponseAsList(data.adminOrganizations);
  };
}
