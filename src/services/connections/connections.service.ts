import {
  UserOrganizationConnectionAcceptMutation,
  UserOrganizationConnectionAcceptMutationVariables,
  UserOrganizationConnectionInviteCustomerMutation,
  UserOrganizationConnectionInviteCustomerMutationVariables,
  UserOrganizationConnectionInviteVendorMutationVariables,
  UserOrganizationConnectionQuery,
  UserOrganizationConnectionQueryVariables,
  UserOrganizationConnectionRejectMutation,
  UserOrganizationConnectionRejectMutationVariables,
  UserOrganizationConnectionsQuery,
  UserOrganizationConnectionsQueryVariables,
  UserOrganizationCustomerConnLockMutation,
  UserOrganizationCustomerConnLockMutationVariables,
  UserOrganizationCustomerConnUnlockMutation,
  UserOrganizationCustomerConnUnlockMutationVariables,
  UserOrganizationVendorConnLockMutation,
  UserOrganizationVendorConnLockMutationVariables,
  UserOrganizationVendorConnUnlockMutation,
  UserOrganizationVendorConnUnlockMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client/core';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  ACCEPT_CONNECTION_MUTATION,
  CUSTOMER_INVITE_VENDOR_MUTATION,
  GET_ALL_CONNECTIONS_QUERY,
  GET_CONNECTION_QUERY,
  REJECT_CONNECTION_MUTATION,
  UPDATE_CUSTOMER_CONN_LOCK_MUTATION,
  UPDATE_CUSTOMER_CONN_UNLOCK_MUTATION,
  UPDATE_VENDOR_CONN_LOCK_MUTATION,
  UPDATE_VENDOR_CONN_UNLOCK_MUTATION,
  VENDOR_INVITE_CUSTOMER_MUTATION,
} from './connections.queries';

export default class Connections {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationConnectionsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationConnectionsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_CONNECTIONS_QUERY,
      variables,
    });

    return processResponseAsList(data.userOrganizationConnections);
  };

  public getOne = async (
    variables: UserOrganizationConnectionQueryVariables,
  ): Promise<Res<UserOrganizationConnectionQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CONNECTION_QUERY,
      variables,
    });

    return data.userOrganizationConnection;
  };

  public inviteCustomer = async (
    variables: UserOrganizationConnectionInviteCustomerMutationVariables,
  ): Promise<Res<UserOrganizationConnectionInviteCustomerMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: VENDOR_INVITE_CUSTOMER_MUTATION,
      variables,
    });

    return data!.userOrganizationConnectionInviteCustomer;
  };

  public inviteVendor = async (
    variables: UserOrganizationConnectionInviteVendorMutationVariables,
  ): Promise<Res<UserOrganizationConnectionInviteCustomerMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CUSTOMER_INVITE_VENDOR_MUTATION,
      variables,
    });

    return data!.userOrganizationConnectionInviteVendor;
  };

  public acceptConnection = async (
    variables: UserOrganizationConnectionAcceptMutationVariables,
  ): Promise<Res<UserOrganizationConnectionAcceptMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ACCEPT_CONNECTION_MUTATION,
      variables,
    });

    return data!.userOrganizationConnectionAccept;
  };

  public rejectConnection = async (
    variables: UserOrganizationConnectionRejectMutationVariables,
  ): Promise<Res<UserOrganizationConnectionRejectMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: REJECT_CONNECTION_MUTATION,
      variables,
    });

    return data!.userOrganizationConnectionReject;
  };

  public customerLock = async (
    variables: UserOrganizationCustomerConnLockMutationVariables,
  ): Promise<Res<UserOrganizationCustomerConnLockMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_CONN_LOCK_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerConnLock;
  };

  public customerUnlock = async (
    variables: UserOrganizationCustomerConnUnlockMutationVariables,
  ): Promise<Res<UserOrganizationCustomerConnUnlockMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_CONN_UNLOCK_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerConnUnlock;
  };

  public vendorLock = async (
    variables: UserOrganizationVendorConnLockMutationVariables,
  ): Promise<Res<UserOrganizationVendorConnLockMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_VENDOR_CONN_LOCK_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorConnLock;
  };

  public vendorUnlock = async (
    variables: UserOrganizationVendorConnUnlockMutationVariables,
  ): Promise<Res<UserOrganizationVendorConnUnlockMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_VENDOR_CONN_UNLOCK_MUTATION,
      variables,
    });

    return data!.userOrganizationVendorConnUnlock;
  };
}
