import type { AccruClientContext } from '@/types/context.types';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  UserOrganizationVendorQuery,
  UserOrganizationVendorQueryVariables,
  UserOrganizationVendorsQuery,
  UserOrganizationVendorsQueryVariables,
} from '@gql/graphql';
import { Res } from '@utils/response.type';
import { GET_ALL_VENDORS_QUERY, GET_VENDOR_QUERY } from './vendors.queries';

export default class Vendors {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserOrganizationVendorsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationVendorsQuery>>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ALL_VENDORS_QUERY,
      variables,
    });

    return processResponseAsList(data!.userOrganizationVendors);
  };

  public getOne = async (
    variables: UserOrganizationVendorQueryVariables,
  ): Promise<Res<UserOrganizationVendorQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_VENDOR_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return data!.userOrganizationVendor;
  };
}
