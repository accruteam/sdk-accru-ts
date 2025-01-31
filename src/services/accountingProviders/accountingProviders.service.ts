import { type ApolloClient } from '@apollo/client/core';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  UnauthorizedUserOrganizationAcctProviderConnCheckConnectionMutation,
  UnauthorizedUserOrganizationAcctProviderConnCheckConnectionMutationVariables,
  UserOrganizationAcctProviderConnCheckConnectionMutation,
  UserOrganizationAcctProviderConnCheckConnectionMutationVariables,
  UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutation,
  UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutationVariables,
  UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutation,
  UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutationVariables,
  UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation,
  UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables,
  UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation,
  UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables,
  UserOrganizationAcctProviderConnDisconnectMutation,
  UserOrganizationAcctProviderConnDisconnectMutationVariables,
  UserOrganizationAcctProviderConnUpdateMutation,
  UserOrganizationAcctProviderConnUpdateMutationVariables,
  UserOrganizationAcctProviderConnectMutation,
  UserOrganizationAcctProviderConnectMutationVariables,
  UserOrganizationAcctProviderGetOAuthUrlMutation,
  UserOrganizationAcctProviderGetOAuthUrlMutationVariables,
  UserOrganizationAcctProviderQuery,
  UserOrganizationAcctProviderQueryVariables,
  UserOrganizationAcctProviderSynchronizationQuery,
  UserOrganizationAcctProviderSynchronizationQueryVariables,
  UserOrganizationAcctProviderSynchronizationsQuery,
  UserOrganizationAcctProviderSynchronizationsQueryVariables,
  UserOrganizationAcctProviderSynchronizeMutation,
  UserOrganizationAcctProviderSynchronizeMutationVariables,
  UserOrganizationAcctProvidersQuery,
  UserOrganizationAcctProvidersQueryVariables,
} from '@api/gql/graphql';
import {
  ACCT_PROVIDER_CONN_VERIFY_MUTATION,
  ACCT_PROVIDER_CONN_VERIFY_UNAUTHORIZED_MUTATION,
  CONNECT_ACCT_PROVIDER_MUTATION,
  DISCONNECT_ACCT_PROVIDER_MUTATION,
  GET_ACCT_PROVIDER_CONN_QUERY,
  GET_ACCT_PROVIDER_OAUTH_URL_MUTATION,
  GET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION,
  GET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION,
  GET_ACCT_PROVIDER_SYNC_QUERY,
  GET_ALL_ACCT_PROVIDER_CONNS_QUERY,
  GET_ALL_ACCT_PROVIDER_SYNCS_QUERY,
  SET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION,
  SET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION,
  SYNC_ACCT_PROVIDER_MUTATION,
  UPDATE_ACCT_PROVIDER_CONN_MUTATION,
} from './accountingProviders.queries';

export default class AccountingProviders {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public getPullOptions = async (
    variables: UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutationVariables,
  ): Promise<
    Res<UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnConfigurationPullOptionsGet;
  };

  public setPullOptions = async (
    variables: UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutationVariables,
  ): Promise<
    Res<UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: SET_ACCT_PROVIDER_PULL_OPTIONS_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnConfigurationPullOptionsSet;
  };

  public getPushOptions = async (
    variables: UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables,
  ): Promise<
    Res<UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnConfigurationPushOptionsGet;
  };

  public setPushOptions = async (
    variables: UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables,
  ): Promise<
    Res<UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: SET_ACCT_PROVIDER_PUSH_OPTIONS_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnConfigurationPushOptionsSet;
  };

  public disconnect = async (
    variables: UserOrganizationAcctProviderConnDisconnectMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderConnDisconnectMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: DISCONNECT_ACCT_PROVIDER_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnDisconnect;
  };

  public update = async (
    variables: UserOrganizationAcctProviderConnUpdateMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderConnUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_ACCT_PROVIDER_CONN_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnUpdate;
  };

  public connect = async (
    variables: UserOrganizationAcctProviderConnectMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderConnectMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CONNECT_ACCT_PROVIDER_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnect;
  };

  public getOAuthUrl = async (
    variables: UserOrganizationAcctProviderGetOAuthUrlMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderGetOAuthUrlMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_ACCT_PROVIDER_OAUTH_URL_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderGetOAuthUrl;
  };

  public sync = async (
    variables: UserOrganizationAcctProviderSynchronizeMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderSynchronizeMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: SYNC_ACCT_PROVIDER_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderSynchronize;
  };

  public get = async (
    variables: UserOrganizationAcctProvidersQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationAcctProvidersQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_ACCT_PROVIDER_CONNS_QUERY,
      variables,
    });
    return processResponseAsList(data.userOrganizationAcctProviders);
  };

  public getOne = async (
    variables: UserOrganizationAcctProviderQueryVariables,
  ): Promise<Res<UserOrganizationAcctProviderQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ACCT_PROVIDER_CONN_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return data.userOrganizationAcctProvider;
  };

  public getSync = async (
    variables: UserOrganizationAcctProviderSynchronizationsQueryVariables,
  ): Promise<
    ListResponse<Res<UserOrganizationAcctProviderSynchronizationsQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_ACCT_PROVIDER_SYNCS_QUERY,
      variables,
    });
    return processResponseAsList(
      data.userOrganizationAcctProviderSynchronizations,
    );
  };

  public getOneSync = async (
    variables: UserOrganizationAcctProviderSynchronizationQueryVariables,
  ): Promise<Res<UserOrganizationAcctProviderSynchronizationQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ACCT_PROVIDER_SYNC_QUERY,
      variables,
    });
    return data.userOrganizationAcctProviderSynchronization;
  };

  public verifyConnection = async (
    variables: UserOrganizationAcctProviderConnCheckConnectionMutationVariables,
  ): Promise<Res<UserOrganizationAcctProviderConnCheckConnectionMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ACCT_PROVIDER_CONN_VERIFY_MUTATION,
      variables,
    });
    return data!.userOrganizationAcctProviderConnCheckConnection;
  };

  public verifyConnectionUnauthorized = async (
    variables: UnauthorizedUserOrganizationAcctProviderConnCheckConnectionMutationVariables,
  ): Promise<
    Res<UnauthorizedUserOrganizationAcctProviderConnCheckConnectionMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ACCT_PROVIDER_CONN_VERIFY_UNAUTHORIZED_MUTATION,
      variables,
    });
    return data!.unauthorizedUserOrganizationAcctProviderConnCheckConnection;
  };
}
