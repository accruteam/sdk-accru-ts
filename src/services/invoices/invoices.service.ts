import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationCustomerSendInvoiceEmailMutation,
  UserOrganizationCustomerSendInvoiceEmailMutationVariables,
  UserOrganizationInvoiceQuery,
  UserOrganizationInvoiceQueryVariables,
  UserOrganizationInvoiceStatementQuery,
  UserOrganizationInvoiceStatementQueryVariables,
} from '@api/gql/graphql';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  INVOICES_GET_STATEMENT_QUERY,
  INVOICE_GET_QUERY,
  SEND_INVOICE_EMAIL_MUTATION,
} from './invoices.queries';

export default class Invoices {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationInvoiceStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationInvoiceStatementQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: INVOICES_GET_STATEMENT_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data.userOrganizationInvoiceStatement,
      data: processResponseAsList(data.userOrganizationInvoiceStatement.data),
    };
  };

  public getOne = async (
    variables: UserOrganizationInvoiceQueryVariables,
  ): Promise<Res<UserOrganizationInvoiceQuery>> => {
    const { data } = await this.apolloClient.query({
      query: INVOICE_GET_QUERY,
      variables,
    });

    return data.userOrganizationInvoice;
  };

  public create = async (): Promise<any> => {};

  public update = async (): Promise<any> => {};

  public sendEmail = async (
    variables: UserOrganizationCustomerSendInvoiceEmailMutationVariables,
  ): Promise<Res<UserOrganizationCustomerSendInvoiceEmailMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: SEND_INVOICE_EMAIL_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerSendInvoiceEmail;
  };

  public del = async (): Promise<any> => {};
}
