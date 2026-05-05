import {
  AdminOrganizationsQuery,
  AdminOrganizationsQueryVariables,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import { GET_ADMIN_ORGANIZATION_QUERY } from './adminOrganizations.queries';

export default class AdminOrganizations {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: AdminOrganizationsQueryVariables,
  ): Promise<ListResponse<Res<AdminOrganizationsQuery>>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ADMIN_ORGANIZATION_QUERY,
      variables,
    });
    return processResponseAsList(data!.adminOrganizations);
  };
}
