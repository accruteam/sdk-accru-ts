import { ApolloClient } from '@apollo/client';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  UserOrganizationVendorCreateMutation,
  UserOrganizationVendorCreateMutationVariables,
  UserOrganizationVendorQuery,
  UserOrganizationVendorQueryVariables,
  UserOrganizationVendorUpdateMutation,
  UserOrganizationVendorUpdateMutationVariables,
  UserOrganizationVendorsQuery,
  UserOrganizationVendorsQueryVariables,
} from '@gql/graphql';
import { Res } from '@utils/response.type';
import {
  GET_ALL_VENDORS_QUERY,
  GET_VENDOR_QUERY,
  UPDATE_VENDOR_MUTATION,
  CREATE_VENDOR_MUTATION,
} from './vendors.queries';

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

  public create = async (
    variables: UserOrganizationVendorCreateMutationVariables,
  ): Promise<Res<UserOrganizationVendorCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CREATE_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorCreate;
  };

  public update = async (
    variables: UserOrganizationVendorUpdateMutationVariables,
  ): Promise<Res<UserOrganizationVendorUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_VENDOR_MUTATION,
      variables,
    });
    return data!.userOrganizationVendorUpdate;
  };
}
