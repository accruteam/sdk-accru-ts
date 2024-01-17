import { ApolloClient } from '@apollo/client';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  UserOrganizationBillCreateMutation,
  UserOrganizationBillCreateMutationVariables,
  UserOrganizationBillQuery,
  UserOrganizationBillQueryVariables,
  UserOrganizationBillStatementQuery,
  UserOrganizationBillStatementQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  BILL_CREATE_MUTATION,
  BILL_GET_QUERY,
  BILLS_GET_STATEMENT_QUERY,
} from './bills.queries';

export default class Bills {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationBillStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationBillStatementQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: BILLS_GET_STATEMENT_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data.userOrganizationBillStatement,
      ...processResponseAsList(data.userOrganizationBillStatement.data),
    };
  };

  public getOne = async (
    variables: UserOrganizationBillQueryVariables,
  ): Promise<Res<UserOrganizationBillQuery>> => {
    const { data } = await this.apolloClient.query({
      query: BILL_GET_QUERY,
      variables,
    });

    return data.userOrganizationBill;
  };

  public create = async (
    variables: UserOrganizationBillCreateMutationVariables,
  ): Promise<Res<UserOrganizationBillCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: BILL_CREATE_MUTATION,
      variables,
    });
    return data!.userOrganizationBillCreate;
  };

  public update = async (): Promise<any> => {};

  public del = async (): Promise<any> => {};
}
