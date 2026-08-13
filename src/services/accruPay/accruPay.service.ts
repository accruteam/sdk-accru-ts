import {
  UserOrganizationAccruPayConnectionQuery,
  UserOrganizationAccruPayConnectionQueryVariables,
  UserOrganizationAccruPayConnectMutation,
  UserOrganizationAccruPayConnectMutationVariables,
  UserOrganizationAccruPayDisconnectMutation,
  UserOrganizationAccruPayDisconnectMutationVariables,
  UserOrganizationAccruPayUpdateConnectionSettingsMutation,
  UserOrganizationAccruPayUpdateConnectionSettingsMutationVariables,
  UserOrganizationAccruPayTransactionProvidersQuery,
  UserOrganizationAccruPayTransactionProvidersQueryVariables,
  UserOrganizationAccruPaySetTransactionProviderMutation,
  UserOrganizationAccruPaySetTransactionProviderMutationVariables,
  UserOrganizationAccruPayCustomerSettingsQuery,
  UserOrganizationAccruPayCustomerSettingsQueryVariables,
  UserOrganizationAccruPayUpsertCustomerSettingMutation,
  UserOrganizationAccruPayUpsertCustomerSettingMutationVariables,
  UserOrganizationAccruPayInvoiceSettingsQuery,
  UserOrganizationAccruPayInvoiceSettingsQueryVariables,
  UserOrganizationAccruPayUpsertInvoiceSettingMutation,
  UserOrganizationAccruPayUpsertInvoiceSettingMutationVariables,
  UserOrganizationAccruPayPendingPaymentsQuery,
  UserOrganizationAccruPayPendingPaymentsQueryVariables,
  UserOrganizationAccruPayPaymentHistoryQuery,
  UserOrganizationAccruPayPaymentHistoryQueryVariables,
  UserOrganizationAccruPayResolvePaymentMutation,
  UserOrganizationAccruPayResolvePaymentMutationVariables,
  UserOrganizationAccruPayReversePaymentMutation,
  UserOrganizationAccruPayReversePaymentMutationVariables,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import { Res } from '@utils/response.type';
import AccruPayAsCustomer from './asCustomer/accruPayAsCustomer.service';
import AccruPayAsUnconnectedCustomer from './asUnconnectedCustomer/accruPayAsUnconnectedCustomer.service';
import AccruPayAsVendor from './asVendor/accruPayAsVendor.service';
import {
  ACCRUPAY_CONNECT_MUTATION,
  ACCRUPAY_DISCONNECT_MUTATION,
  ACCRUPAY_RESOLVE_PAYMENT_MUTATION,
  ACCRUPAY_REVERSE_PAYMENT_MUTATION,
  ACCRUPAY_UPDATE_CONNECTION_SETTINGS_MUTATION,
  ACCRUPAY_SET_TRANSACTION_PROVIDER_MUTATION,
  ACCRUPAY_UPSERT_CUSTOMER_SETTING_MUTATION,
  ACCRUPAY_UPSERT_INVOICE_SETTING_MUTATION,
  GET_ACCRUPAY_CONNECTION_QUERY,
  GET_ACCRUPAY_TRANSACTION_PROVIDERS_QUERY,
  GET_ACCRUPAY_CUSTOMER_SETTINGS_QUERY,
  GET_ACCRUPAY_INVOICE_SETTINGS_QUERY,
  GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
  GET_ACCRUPAY_PAYMENT_HISTORY_QUERY,
} from './accruPay.queries';

export default class AccruPay {
  public readonly asVendor: AccruPayAsVendor;
  public readonly asCustomer: AccruPayAsCustomer;
  public readonly asUnconnectedCustomer: AccruPayAsUnconnectedCustomer;

  constructor(private context: AccruClientContext) {
    this.asVendor = new AccruPayAsVendor(context);
    this.asCustomer = new AccruPayAsCustomer(context);
    this.asUnconnectedCustomer = new AccruPayAsUnconnectedCustomer(context);
  }

  /* ------------------------------- Connection ------------------------------ */

  public getConnection = async (
    variables: UserOrganizationAccruPayConnectionQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayConnectionQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_CONNECTION_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayConnection;
  };

  public connect = async (
    variables: UserOrganizationAccruPayConnectMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayConnectMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_CONNECT_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayConnect;
  };

  public disconnect = async (
    variables: UserOrganizationAccruPayDisconnectMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayDisconnectMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_DISCONNECT_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayDisconnect;
  };

  public updateConnectionSettings = async (
    variables: UserOrganizationAccruPayUpdateConnectionSettingsMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayUpdateConnectionSettingsMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_UPDATE_CONNECTION_SETTINGS_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayUpdateConnectionSettings;
  };

  public getTransactionProviders = async (
    variables: UserOrganizationAccruPayTransactionProvidersQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayTransactionProvidersQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_TRANSACTION_PROVIDERS_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayTransactionProviders;
  };

  public setTransactionProvider = async (
    variables: UserOrganizationAccruPaySetTransactionProviderMutationVariables,
  ): Promise<Res<UserOrganizationAccruPaySetTransactionProviderMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_SET_TRANSACTION_PROVIDER_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPaySetTransactionProvider;
  };

  /* ----------------------------- Customer rules ---------------------------- */

  public getCustomerSettings = async (
    variables: UserOrganizationAccruPayCustomerSettingsQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayCustomerSettingsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_CUSTOMER_SETTINGS_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayCustomerSettings;
  };

  public upsertCustomerSetting = async (
    variables: UserOrganizationAccruPayUpsertCustomerSettingMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayUpsertCustomerSettingMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_UPSERT_CUSTOMER_SETTING_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayUpsertCustomerSetting;
  };

  /* ----------------------------- Invoice rules ----------------------------- */

  public getInvoiceSettings = async (
    variables: UserOrganizationAccruPayInvoiceSettingsQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayInvoiceSettingsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_INVOICE_SETTINGS_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayInvoiceSettings;
  };

  public upsertInvoiceSetting = async (
    variables: UserOrganizationAccruPayUpsertInvoiceSettingMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayUpsertInvoiceSettingMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_UPSERT_INVOICE_SETTING_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayUpsertInvoiceSetting;
  };

  /* -------------------------------- Payments ------------------------------- */

  public getPendingPayments = async (
    variables: UserOrganizationAccruPayPendingPaymentsQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayPendingPaymentsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayPendingPayments;
  };

  public getPaymentHistory = async (
    variables: UserOrganizationAccruPayPaymentHistoryQueryVariables,
  ): Promise<Res<UserOrganizationAccruPayPaymentHistoryQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ACCRUPAY_PAYMENT_HISTORY_QUERY,
      variables,
    });

    return data!.userOrganizationAccruPayPaymentHistory;
  };

  public resolvePayment = async (
    variables: UserOrganizationAccruPayResolvePaymentMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayResolvePaymentMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_RESOLVE_PAYMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayResolvePayment;
  };

  public reversePayment = async (
    variables: UserOrganizationAccruPayReversePaymentMutationVariables,
  ): Promise<Res<UserOrganizationAccruPayReversePaymentMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: ACCRUPAY_REVERSE_PAYMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationAccruPayReversePayment;
  };
}
