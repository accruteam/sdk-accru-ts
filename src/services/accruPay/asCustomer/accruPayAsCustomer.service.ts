import {
  UserCustomerOrganizationAccruPayResolveInvoicePaymentRulesQuery,
  UserCustomerOrganizationAccruPayResolveInvoicePaymentRulesQueryVariables,
  UserCustomerOrganizationAccruPayPendingPaymentsQuery,
  UserCustomerOrganizationAccruPayPendingPaymentsQueryVariables,
  UserCustomerOrganizationAccruPayPaymentMethodsQuery,
  UserCustomerOrganizationAccruPayPaymentMethodsQueryVariables,
  UserCustomerOrganizationAccruPayStartCardPaymentMutation,
  UserCustomerOrganizationAccruPayStartCardPaymentMutationVariables,
  UserCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutation,
  UserCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutationVariables,
  UserCustomerOrganizationAccruPayInitiateAchPaymentMutation,
  UserCustomerOrganizationAccruPayInitiateAchPaymentMutationVariables,
  UserCustomerOrganizationAccruPayVerifyCardPaymentMutation,
  UserCustomerOrganizationAccruPayVerifyCardPaymentMutationVariables,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
  STATEMENT_AS_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
  STATEMENT_AS_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
  STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
  STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
} from './accruPayAsCustomer.queries';

export default class AccruPayAsCustomer {
  constructor(private context: AccruClientContext) {}

  public resolveInvoicePaymentRules = async (
    variables: UserCustomerOrganizationAccruPayResolveInvoicePaymentRulesQueryVariables,
  ): Promise<
    Res<UserCustomerOrganizationAccruPayResolveInvoicePaymentRulesQuery>
  > => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayResolveInvoicePaymentRules;
  };

  public getPendingPayments = async (
    variables: UserCustomerOrganizationAccruPayPendingPaymentsQueryVariables,
  ): Promise<Res<UserCustomerOrganizationAccruPayPendingPaymentsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayPendingPayments;
  };

  public getPaymentMethods = async (
    variables: UserCustomerOrganizationAccruPayPaymentMethodsQueryVariables,
  ): Promise<Res<UserCustomerOrganizationAccruPayPaymentMethodsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayPaymentMethods;
  };

  public startCardPayment = async (
    variables: UserCustomerOrganizationAccruPayStartCardPaymentMutationVariables,
  ): Promise<Res<UserCustomerOrganizationAccruPayStartCardPaymentMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayStartCardPayment;
  };

  public createPaymentMethodTransaction = async (
    variables: UserCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationAccruPayCreatePaymentMethodTransactionMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayCreatePaymentMethodTransaction;
  };

  public initiateAchPayment = async (
    variables: UserCustomerOrganizationAccruPayInitiateAchPaymentMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationAccruPayInitiateAchPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayInitiateAchPayment;
  };

  public verifyCardPayment = async (
    variables: UserCustomerOrganizationAccruPayVerifyCardPaymentMutationVariables,
  ): Promise<
    Res<UserCustomerOrganizationAccruPayVerifyCardPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_CUSTOMER_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationAccruPayVerifyCardPayment;
  };
}
