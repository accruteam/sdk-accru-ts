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
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client';
import { Res } from '@utils/response.type';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING,
  ORGANIZATION_SUBSCRIPTION_CANCEL_QUERY,
  ORGANIZATION_SUBSCRIPTION_COMPLETE_PURCHASE,
  ORGANIZATION_SUBSCRIPTION_GET_MANY_QUERY,
  ORGANIZATION_SUBSCRIPTION_GET_ONE_QUERY,
  ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA,
  ORGANIZATION_SUBSCRIPTION_START_PURCHASE,
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

  public cancel = async (
    variables: UserOrganizationSubscriptionCancelMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionCancelMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_CANCEL_QUERY,
      variables,
    });

    return data!.userOrganizationSubscriptionCancel;
  };

  public calculatePricing = async (
    variables: UserOrganizationSubscriptionCalculatePricingMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionCalculatePricingMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_CALCULATE_PRICING,
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
      mutation: ORGANIZATION_SUBSCRIPTION_GET_PRE_TRANSACTION_DATA,
      variables,
    });

    return data!.userOrganizationSubscriptionGetPrePurchaseTransactionData;
  };

  public startPurchase = async (
    variables: UserOrganizationSubscriptionStartPurchaseMutationVariables,
  ): Promise<Res<UserOrganizationSubscriptionStartPurchaseMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: ORGANIZATION_SUBSCRIPTION_START_PURCHASE,
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
}
