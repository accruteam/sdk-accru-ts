import { ApolloClient } from '@apollo/client/core';
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

  constructor(private apolloClient: ApolloClient<unknown>) {
    this.notifications = new CustomerNotifications(apolloClient);
    this.statementLogs = new CustomerStatementLogs(apolloClient);
  }

  public get = async (
    variables: UserOrganizationCustomersQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationCustomersQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_ALL_CUSTOMERS_QUERY,
      variables,
    });
    return processResponseAsList(data.userOrganizationCustomers);
  };

  public getOne = async (
    variables: UserOrganizationCustomerQueryVariables,
  ): Promise<Res<UserOrganizationCustomerQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return data.userOrganizationCustomer;
  };
}
