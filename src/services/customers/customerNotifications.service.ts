import type { AccruClientContext } from '@/types/context.types';
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
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserOrganizationCustomerNotificationsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationCustomerNotificationsQuery>>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_CUSTOMER_NOTIFICATIONS_QUERY,
      variables,
    });
    return processResponseAsList(data!.userOrganizationCustomerNotifications);
  };

  public getOne = async (
    variables: UserOrganizationCustomerNotificationQueryVariables,
  ): Promise<Res<UserOrganizationCustomerNotificationQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_CUSTOMER_NOTIFICATION_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return data!.userOrganizationCustomerNotification;
  };
}
