import {
  UnconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRulesQuery,
  UnconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRulesQueryVariables,
  UnconnectedCustomerOrganizationAccruPayPendingPaymentsQuery,
  UnconnectedCustomerOrganizationAccruPayPendingPaymentsQueryVariables,
  UnconnectedCustomerOrganizationAccruPayStartCardPaymentMutation,
  UnconnectedCustomerOrganizationAccruPayStartCardPaymentMutationVariables,
  UnconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutation,
  UnconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutationVariables,
  UnconnectedCustomerOrganizationAccruPayInitiateAchPaymentMutation,
  UnconnectedCustomerOrganizationAccruPayInitiateAchPaymentMutationVariables,
  UnconnectedCustomerOrganizationAccruPayVerifyCardPaymentMutation,
  UnconnectedCustomerOrganizationAccruPayVerifyCardPaymentMutationVariables,
  UnconnectedCustomerOrganizationAccruPayRequestPaymentElevationMutation,
  UnconnectedCustomerOrganizationAccruPayRequestPaymentElevationMutationVariables,
  UnconnectedCustomerOrganizationAccruPayVerifyPaymentElevationMutation,
  UnconnectedCustomerOrganizationAccruPayVerifyPaymentElevationMutationVariables,
  UnconnectedCustomerOrganizationAccruPayPaymentMethodsQuery,
  UnconnectedCustomerOrganizationAccruPayPaymentMethodsQueryVariables,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_REQUEST_PAYMENT_ELEVATION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_PAYMENT_ELEVATION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
} from './accruPayAsUnconnectedCustomer.queries';

export default class AccruPayAsUnconnectedCustomer {
  constructor(private context: AccruClientContext) {}

  public resolveInvoicePaymentRules = async (
    variables: UnconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRulesQueryVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRulesQuery>
  > => {
    const { data } = await this.context.apolloClient.query({
      query:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
      variables,
    });

    return data!
      .unconnectedCustomerOrganizationAccruPayResolveInvoicePaymentRules;
  };

  public getPendingPayments = async (
    variables: UnconnectedCustomerOrganizationAccruPayPendingPaymentsQueryVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayPendingPaymentsQuery>
  > => {
    const { data } = await this.context.apolloClient.query({
      query:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayPendingPayments;
  };

  public startCardPayment = async (
    variables: UnconnectedCustomerOrganizationAccruPayStartCardPaymentMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayStartCardPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayStartCardPayment;
  };

  public createPaymentMethodTransaction = async (
    variables: UnconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
      variables,
    });

    return data!
      .unconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransaction;
  };

  public initiateAchPayment = async (
    variables: UnconnectedCustomerOrganizationAccruPayInitiateAchPaymentMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayInitiateAchPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayInitiateAchPayment;
  };

  public verifyCardPayment = async (
    variables: UnconnectedCustomerOrganizationAccruPayVerifyCardPaymentMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayVerifyCardPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayVerifyCardPayment;
  };

  public requestPaymentElevation = async (
    variables: UnconnectedCustomerOrganizationAccruPayRequestPaymentElevationMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayRequestPaymentElevationMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_REQUEST_PAYMENT_ELEVATION_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayRequestPaymentElevation;
  };

  public verifyPaymentElevation = async (
    variables: UnconnectedCustomerOrganizationAccruPayVerifyPaymentElevationMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayVerifyPaymentElevationMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_PAYMENT_ELEVATION_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayVerifyPaymentElevation;
  };

  public getPaymentMethods = async (
    variables: UnconnectedCustomerOrganizationAccruPayPaymentMethodsQueryVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationAccruPayPaymentMethodsQuery>
  > => {
    const { data } = await this.context.apolloClient.query({
      query:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
      variables,
    });

    return data!.unconnectedCustomerOrganizationAccruPayPaymentMethods;
  };
}
