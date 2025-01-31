import {
  UserOrganizationSubscriptionsQuery,
  UserOrganizationSubscriptionsQueryVariables,
  UserOrganizationSubscriptionQuery,
  UserOrganizationSubscriptionQueryVariables,
  UserOrganizationSubscriptionCancelMutationVariables,
  UserOrganizationSubscriptionCancelMutation,
  UserOrganizationSubscriptionCalculatePricingMutationVariables,
  UserOrganizationSubscriptionCalculatePricingMutation,
  UserOrganizationSubscriptionGetPrePurchaseTransactionDataMutationVariables,
  UserOrganizationSubscriptionGetPrePurchaseTransactionDataMutation,
  UserOrganizationSubscriptionStartPurchaseMutationVariables,
  UserOrganizationSubscriptionStartPurchaseMutation,
  UserOrganizationSubscriptionCompletePurchaseMutationVariables,
  UserOrganizationSubscriptionCompletePurchaseMutation,
  UserOrganizationSubscriptionDefaultPricingSetupQueryVariables,
  UserOrganizationSubscriptionDefaultPricingSetupQuery,
  UserOrganizationSubscriptionVerifyCouponMutation,
  UserOrganizationSubscriptionVerifyCouponMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client/core';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING_MUTATION,
  ORGANIZATION_SUBSCRIPTION_CANCEL_MUTATION,
  ORGANIZATION_SUBSCRIPTION_COMPLETE_PURCHASE,
  ORGANIZATION_SUBSCRIPTION_GET_DEFAULT_PRICING_QUERY,
  ORGANIZATION_SUBSCRIPTION_GET_MANY_QUERY,
  ORGANIZATION_SUBSCRIPTION_GET_ONE_QUERY,
  ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA_MUTATION,
  ORGANIZATION_SUBSCRIPTION_START_PURCHASE_MUTATION,
  ORGANIZATION_SUBSCRIPTION_VERIFY_COUPON_MUTATION,
} from './subscriptions.queries';

export default class Subscriptions {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (
    variables: UserOrganizationSubscriptionsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationSubscriptionsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: ORGANIZATION_SUBSCRIPTION_GET_MANY_QUERY,
      variables,
    });

    return processResponseAsList(data.userOrganizationSubscriptions);
  };

  public getOne = async (
    variables: UserOrganizationSubscriptionQueryVariables,
  ): Promise<Res<UserOrganizationSubscriptionQuery>> => {
    const { data } = await this.apolloClient.query({
      query: ORGANIZATION_SUBSCRIPTION_GET_ONE_QUERY,
      variables,
    });

    return data.userOrganizationSubscription;
  };

  public getDefaultPricing = async (
    variables: UserOrganizationSubscriptionDefaultPricingSetupQueryVariables,
  ): Promise<Res<UserOrganizationSubscriptionDefaultPricingSetupQuery>> => {
    const { data } = await this.apolloClient.query({
      query: ORGANIZATION_SUBSCRIPTION_GET_DEFAULT_PRICING_QUERY,
      variables,
    });

    return data.userOrganizationSubscriptionDefaultPricingSetup;
  };

  public verifyCoupon = async (
    variables: UserOrganizationSubscriptionVerifyCouponMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionVerifyCouponMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_VERIFY_COUPON_MUTATION,
      variables,
    });

    return data!.userOrganizationSubscriptionVerifyCoupon;
  };

  public calculatePricing = async (
    variables: UserOrganizationSubscriptionCalculatePricingMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionCalculatePricingMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING_MUTATION,
      variables,
    });

    return data!.userOrganizationSubscriptionCalculatePricing;
  };

  public getPreTransactionData = async (
    variables: UserOrganizationSubscriptionGetPrePurchaseTransactionDataMutationVariables,
  ): Promise<
    Res<UserOrganizationSubscriptionGetPrePurchaseTransactionDataMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA_MUTATION,
      variables,
    });

    return data!.userOrganizationSubscriptionGetPrePurchaseTransactionData;
  };

  public startPurchase = async (
    variables: UserOrganizationSubscriptionStartPurchaseMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionStartPurchaseMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_START_PURCHASE_MUTATION,
      variables,
    });

    return data!.userOrganizationSubscriptionStartPurchase;
  };

  public completePurchase = async (
    variables: UserOrganizationSubscriptionCompletePurchaseMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionCompletePurchaseMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_COMPLETE_PURCHASE,
      variables,
    });

    return data!.userOrganizationSubscriptionCompletePurchase;
  };

  public cancel = async (
    variables: UserOrganizationSubscriptionCancelMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionCancelMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_CANCEL_MUTATION,
      variables,
    });

    return data!.userOrganizationSubscriptionCancel;
  };
}
