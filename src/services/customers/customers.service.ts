import { ApolloClient } from '@apollo/client';
import {
  GET_ALL_CUSTOMERS_QUERY,
  GET_CUSTOMER_QUERY,
  UPDATE_CUSTOMER_MUTATION,
  CREATE_CUSTOMER_MUTATION,
} from './customers.queries';
import getEdgesAsList from '../../utils/listAsEdges';
import { GetCustomerQuery } from './customers.types';

export default class Customers {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (variables: GetCustomerQuery): Promise<any>  => {
    const response = await this.apolloClient.query({
      query: GET_ALL_CUSTOMERS_QUERY,
      fetchPolicy: 'no-cache',
      variables
    });
    const edges = getEdgesAsList(response.data.userOrganizationCustomers.edges);
    return { data: edges, response: response.data.userOrganizationCustomers };
  };

  public getOne = async ({ organizationId, organizationCustomerId }: any): Promise<any> => {
    const result = await this.apolloClient.query({
      query: GET_CUSTOMER_QUERY,
      fetchPolicy: 'no-cache',
      variables: {
        organizationId,
        organizationCustomerId,
      },
    });
    return { data: result.data.userOrganizationCustomer };
  };

  public create = async ({ data, organizationId }: any): Promise<any> => {
    const newCustomer = await this.apolloClient.mutate({
      mutation: CREATE_CUSTOMER_MUTATION,
      variables: {
        organizationId,
        data,
      },
    });
    return newCustomer;
  };

  public updateCustomer = async ({ organizationId, organizationCustomerId, data }: any): Promise<any> => {
    const updatedCustomer = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_MUTATION,
      variables: {
        organizationId,
        organizationCustomerId,
        data,
      },
    });
    return updatedCustomer;
  };
};
