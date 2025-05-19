import { ApolloClient } from '@apollo/client/core';
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
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationVendorsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationVendorsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_VENDORS_QUERY,
      variables,
    });

    return processResponseAsList(data.userOrganizationVendors);
  };

  public getOne = async (
    variables: UserOrganizationVendorQueryVariables,
  ): Promise<Res<UserOrganizationVendorQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_VENDOR_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return data.userOrganizationVendor;
  };
}
