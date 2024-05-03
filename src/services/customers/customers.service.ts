import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationCustomerCreateMutation,
  UserOrganizationCustomerCreateMutationVariables,
  UserOrganizationCustomerGetStatementLinkMutation,
  UserOrganizationCustomerGetStatementLinkMutationVariables,
  UserOrganizationCustomerQuery,
  UserOrganizationCustomerQueryVariables,
  UserOrganizationCustomerSendStatementEmailMutation,
  UserOrganizationCustomerSendStatementEmailMutationVariables,
  UserOrganizationCustomerStatementLineQuery,
  UserOrganizationCustomerStatementLineQueryVariables,
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
  GET_CUSTOMER_STATEMENT_LINE_QUERY,
  SEND_CUSTOMERS_STATEMENT_MUTATION,
  GET_CUSTOMER_STATEMENT_LINK_MUTATION,
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

    return {
      ...data.userOrganizationCustomerStatement,
      ...processResponseAsList(data.userOrganizationCustomerStatement.data),
    };
  };

  public getStatementLine = async (
    variables: UserOrganizationCustomerStatementLineQueryVariables,
  ): Promise<Res<UserOrganizationCustomerStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_LINE_QUERY,
      variables,
    });

    return data!.userOrganizationCustomerStatementLine;
  };

  public sendStatementEmail = async (
    variables: UserOrganizationCustomerSendStatementEmailMutationVariables,
  ): Promise<Res<UserOrganizationCustomerSendStatementEmailMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: SEND_CUSTOMERS_STATEMENT_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerSendStatementEmail;
  };

  public getStatementLink = async (
    variables: UserOrganizationCustomerGetStatementLinkMutationVariables,
  ): Promise<Res<UserOrganizationCustomerGetStatementLinkMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_CUSTOMER_STATEMENT_LINK_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerGetStatementLink;
  };
}
