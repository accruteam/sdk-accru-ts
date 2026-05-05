import type { AccruClientContext } from '@/types/context.types';
import {
  UserOrganizationCustomerQuery,
  UserOrganizationCustomerQueryVariables,
  UserOrganizationCustomersQuery,
  UserOrganizationCustomersQueryVariables,
} from '@api/gql/graphql';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  GET_ALL_CUSTOMERS_QUERY,
  GET_CUSTOMER_QUERY,
} from './customers.queries';
import CustomerNotifications from './customerNotifications.service';
import CustomerStatementLogs from './customerStatementLogs.service';

export default class Customers {
  public readonly notifications: CustomerNotifications;
  public readonly statementLogs: CustomerStatementLogs;

  constructor(private context: AccruClientContext) {
    this.notifications = new CustomerNotifications(context);
    this.statementLogs = new CustomerStatementLogs(context);
  }

  public get = async (
    variables: UserOrganizationCustomersQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationCustomersQuery>>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_ALL_CUSTOMERS_QUERY,
      variables,
    });
    return processResponseAsList(data!.userOrganizationCustomers);
  };

  public getOne = async (
    variables: UserOrganizationCustomerQueryVariables,
  ): Promise<Res<UserOrganizationCustomerQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_CUSTOMER_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return data!.userOrganizationCustomer;
  };
}
