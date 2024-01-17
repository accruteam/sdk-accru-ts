import { ApolloClient } from '@apollo/client';
import {
  UserCustomerOrganizationInvoiceStatementQuery,
  UserCustomerOrganizationInvoiceStatementQueryVariables,
} from '@api/gql/graphql';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import { GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY } from './statements.queries';

export default class Statements {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (
    variables: UserCustomerOrganizationInvoiceStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserCustomerOrganizationInvoiceStatementQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY,
      variables,
    });

    return {
      ...data.userCustomerOrganizationInvoiceStatement,
      ...processResponseAsList(
        data.userCustomerOrganizationInvoiceStatement.data,
      ),
    };
  };

  public getOne = async (): Promise<any> => {};

  public create = async (): Promise<any> => {};

  public update = async (): Promise<any> => {};

  public del = async (): Promise<any> => {};
}
