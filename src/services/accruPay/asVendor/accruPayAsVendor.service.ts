import {
  UserOrganizationCustomerAccruPayResolveInvoicePaymentRulesQuery,
  UserOrganizationCustomerAccruPayResolveInvoicePaymentRulesQueryVariables,
  UserOrganizationCustomerAccruPayPendingPaymentsQuery,
  UserOrganizationCustomerAccruPayPendingPaymentsQueryVariables,
  UserOrganizationCustomerAccruPayStartCardPaymentMutation,
  UserOrganizationCustomerAccruPayStartCardPaymentMutationVariables,
  UserOrganizationCustomerAccruPayCreatePaymentMethodTransactionMutation,
  UserOrganizationCustomerAccruPayCreatePaymentMethodTransactionMutationVariables,
  UserOrganizationCustomerAccruPayInitiateAchPaymentMutation,
  UserOrganizationCustomerAccruPayInitiateAchPaymentMutationVariables,
  UserOrganizationCustomerAccruPayVerifyCardPaymentMutation,
  UserOrganizationCustomerAccruPayVerifyCardPaymentMutationVariables,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_VENDOR_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_VENDOR_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
  STATEMENT_AS_VENDOR_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
  STATEMENT_AS_VENDOR_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_VENDOR_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
  STATEMENT_AS_VENDOR_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
} from './accruPayAsVendor.queries';

export default class AccruPayAsVendor {
  constructor(private context: AccruClientContext) {}

  public resolveInvoicePaymentRules = async (
    variables: UserOrganizationCustomerAccruPayResolveInvoicePaymentRulesQueryVariables,
  ): Promise<
    Res<UserOrganizationCustomerAccruPayResolveInvoicePaymentRulesQuery>
  > => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_VENDOR_GET_ACCRUPAY_INVOICE_PAYMENT_RULES_QUERY,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayResolveInvoicePaymentRules;
  };

  public getPendingPayments = async (
    variables: UserOrganizationCustomerAccruPayPendingPaymentsQueryVariables,
  ): Promise<Res<UserOrganizationCustomerAccruPayPendingPaymentsQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_VENDOR_GET_ACCRUPAY_PENDING_PAYMENTS_QUERY,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayPendingPayments;
  };

  public startCardPayment = async (
    variables: UserOrganizationCustomerAccruPayStartCardPaymentMutationVariables,
  ): Promise<Res<UserOrganizationCustomerAccruPayStartCardPaymentMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayStartCardPayment;
  };

  public createPaymentMethodTransaction = async (
    variables: UserOrganizationCustomerAccruPayCreatePaymentMethodTransactionMutationVariables,
  ): Promise<
    Res<UserOrganizationCustomerAccruPayCreatePaymentMethodTransactionMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_VENDOR_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayCreatePaymentMethodTransaction;
  };

  public initiateAchPayment = async (
    variables: UserOrganizationCustomerAccruPayInitiateAchPaymentMutationVariables,
  ): Promise<
    Res<UserOrganizationCustomerAccruPayInitiateAchPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayInitiateAchPayment;
  };

  public verifyCardPayment = async (
    variables: UserOrganizationCustomerAccruPayVerifyCardPaymentMutationVariables,
  ): Promise<
    Res<UserOrganizationCustomerAccruPayVerifyCardPaymentMutation>
  > => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_ACCRUPAY_VERIFY_CARD_PAYMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerAccruPayVerifyCardPayment;
  };
}
