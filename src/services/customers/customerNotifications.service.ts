import { ApolloClient } from '@apollo/client/core';
import {
  UserOrganizationCustomerNotificationQuery,
  UserOrganizationCustomerNotificationQueryVariables,
  UserOrganizationCustomerNotificationsQuery,
  UserOrganizationCustomerNotificationsQueryVariables,
} from '@api/gql/graphql';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  GET_CUSTOMER_NOTIFICATION_QUERY,
  GET_CUSTOMER_NOTIFICATIONS_QUERY,
} from './customers.queries';

export default class CustomerNotifications {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationCustomerNotificationsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationCustomerNotificationsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_NOTIFICATIONS_QUERY,
      variables,
    });
    return processResponseAsList(data.userOrganizationCustomerNotifications);
  };

  public getOne = async (
    variables: UserOrganizationCustomerNotificationQueryVariables,
  ): Promise<Res<UserOrganizationCustomerNotificationQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_NOTIFICATION_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return data.userOrganizationCustomerNotification;
  };
}
