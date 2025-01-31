import { type ApolloClient } from '@apollo/client/core';
import {
  UserOrganizationCustomerContactCreateMutation,
  UserOrganizationCustomerContactCreateMutationVariables,
  UserOrganizationCustomerContactDeleteMutationVariables,
  UserOrganizationCustomerContactUpdateMutation,
  UserOrganizationCustomerContactUpdateMutationVariables,
  UserOrganizationCustomerContactsQuery,
  UserOrganizationCustomerContactsQueryVariables,
  UserOrganizationVendorContactDeleteMutation,
  UserOrganizationVendorContactDeleteMutationVariables,
  UserOrganizationVendorContactUpdateMutation,
  UserOrganizationVendorContactUpdateMutationVariables,
  userOrganizationVendorContactCreateMutation,
  userOrganizationVendorContactCreateMutationVariables,
  userOrganizationVendorContactsQuery,
  userOrganizationVendorContactsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  CREATE_CONTACT_MUTATION,
  CREATE_CUSTOMER_CONTACT_QUERY,
  DELETE_CONTACT_MUTATION,
  DELETE_CUSTOMER_CONTACT_MUTATION,
  GET_CONTACTS_QUERY,
  GET_CUSTOMERS_CONTACTS_QUERY,
  UPDATE_CONTACT_MUTATION,
  UPDATE_CUSTOMER_CONTACT_MUTATION,
} from './contacts.queries';

export default class Contacts {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public getCustomerContacts = async (
    variables: UserOrganizationCustomerContactsQueryVariables,
  ): Promise<Res<UserOrganizationCustomerContactsQuery>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_CUSTOMERS_CONTACTS_QUERY,
      variables,
    });

    return data!.userOrganizationCustomerContacts;
  };

  public getVendorContacts = async (
    variables: userOrganizationVendorContactsQueryVariables,
  ): Promise<Res<userOrganizationVendorContactsQuery>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_CONTACTS_QUERY,
      variables,
    });

    return data!.userOrganizationVendorContacts;
  };

  public createVendorContact = async (
    variables: userOrganizationVendorContactCreateMutationVariables,
  ): Promise<Res<userOrganizationVendorContactCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CREATE_CONTACT_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorContactCreate;
  };

  public createCustomerContact = async (
    variables: UserOrganizationCustomerContactCreateMutationVariables,
  ): Promise<Res<UserOrganizationCustomerContactCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CREATE_CUSTOMER_CONTACT_QUERY,
      variables,
    });

    return data!.userOrganizationCustomerContactCreate;
  };

  public updateVendorContact = async (
    variables: UserOrganizationVendorContactUpdateMutationVariables,
  ): Promise<Res<UserOrganizationVendorContactUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_CONTACT_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorContactUpdate;
  };

  public updateCustomerContact = async (
    variables: UserOrganizationCustomerContactUpdateMutationVariables,
  ): Promise<Res<UserOrganizationCustomerContactUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_CONTACT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerContactUpdate;
  };

  public deleteCustomerContact = async (
    variables: UserOrganizationCustomerContactDeleteMutationVariables,
  ): Promise<Res<UserOrganizationCustomerContactCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: DELETE_CUSTOMER_CONTACT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerContactDelete;
  };

  public deleteVendorContact = async (
    variables: UserOrganizationVendorContactDeleteMutationVariables,
  ): Promise<Res<UserOrganizationVendorContactDeleteMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: DELETE_CONTACT_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorContactDelete;
  };

  public update = async (): Promise<any> => {};

  public del = async (): Promise<any> => {};
}
