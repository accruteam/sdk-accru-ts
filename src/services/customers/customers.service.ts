import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationCustomerCreateMutation,
  UserOrganizationCustomerCreateMutationVariables,
  UserOrganizationCustomerQuery,
  UserOrganizationCustomerQueryVariables,
  UserOrganizationCustomerStatementQuery,
  UserOrganizationCustomerStatementQueryVariables,
  UserOrganizationCustomerUpdateMutation,
  UserOrganizationCustomerUpdateMutationVariables,
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
  UPDATE_CUSTOMER_MUTATION,
  CREATE_CUSTOMER_MUTATION,
  GET_CUSTOMER_STATEMENT_QUERY,
} from './customers.queries';

export default class Customers {
  constructor(private apolloClient: ApolloClient<unknown>) {}

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

  public create = async (
    variables: UserOrganizationCustomerCreateMutationVariables,
  ): Promise<Res<UserOrganizationCustomerCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: CREATE_CUSTOMER_MUTATION,
      variables,
    });
    return data!.userOrganizationCustomerCreate;
  };

  public update = async (
    variables: UserOrganizationCustomerUpdateMutationVariables,
  ): Promise<Res<UserOrganizationCustomerUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: UPDATE_CUSTOMER_MUTATION,
      variables,
    });
    return data!.userOrganizationCustomerUpdate;
  };

  public getStatement = async (
    variables: UserOrganizationCustomerStatementQueryVariables,
  ): Promise<Res<UserOrganizationCustomerStatementQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_QUERY,
      variables,
    });
    return data.userOrganizationCustomerStatement;
  };
}
