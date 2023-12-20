import { ApolloClient } from '@apollo/client';
import {
  GET_ALL_CUSTOMERS_QUERY,
  GET_CUSTOMER_QUERY,
  UPDATE_CUSTOMER_MUTATION,
  CREATE_CUSTOMER_MUTATION,
} from './customers.queries';
import getEdgesAsList from '../../utils/listAsEdges';
import {
  CustomersGetOneVariables,
  CustomersGetVariables,
  CustomersGetResponse,
  CustomersGetOneResponse,
  CustomersCreateVariables,
  CustomersCreateResponse,
  CustomersUpdateVariables,
  CustomersUpdateResponse,
} from './customers.types';

export default class Customers {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: CustomersGetVariables
  ): Promise<CustomersGetResponse> => {
    const response = await this.apolloClient.query({
      query: GET_ALL_CUSTOMERS_QUERY,
      variables,
    });
    return {
      data: getEdgesAsList(response.data.userOrganizationCustomers.edges),
    };
  };

  public getOne = async (
    variables: CustomersGetOneVariables
  ): Promise<CustomersGetOneResponse> => {
    const result = await this.apolloClient.query({
      query: GET_CUSTOMER_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return { data: result.data.userOrganizationCustomer };
  };

  public create = async (
    variables: CustomersCreateVariables
  ): Promise<CustomersCreateResponse> => {
    const response = await this.apolloClient.mutate({
      mutation: CREATE_CUSTOMER_MUTATION,
      variables,
    });
    return response.data.userOrganizationCustomerCreate;
  };

  public update = async (
    variables: CustomersUpdateVariables
  ): Promise<CustomersUpdateResponse> => {
    const response = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_MUTATION,
      variables,
    });
    return response.data.userOrganizationCustomerUpdate;
  };
};
