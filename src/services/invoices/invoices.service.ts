import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationCustomerSendInvoiceEmailMutation,
  UserOrganizationCustomerSendInvoiceEmailMutationVariables,
  UserOrganizationInvoiceCreateMutation,
  UserOrganizationInvoiceCreateMutationVariables,
  UserOrganizationInvoiceQuery,
  UserOrganizationInvoiceQueryVariables,
  UserOrganizationInvoiceSummaryQuery,
  UserOrganizationInvoiceSummaryQueryVariables,
} from '@api/gql/graphql';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  INVOICES_GET_SUMMARY_QUERY,
  INVOICE_CREATE_MUTATION,
  INVOICE_GET_QUERY,
  SEND_INVOICE_EMAIL_MUTATION,
} from './invoices.queries';

export default class Invoices {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationInvoiceSummaryQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: INVOICES_GET_SUMMARY_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data.userOrganizationInvoiceSummary,
      ...processResponseAsList(data.userOrganizationInvoiceSummary.data),
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

  public create = async (
    variables: UserOrganizationInvoiceCreateMutationVariables,
  ): Promise<Res<UserOrganizationInvoiceCreateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: INVOICE_CREATE_MUTATION,
      variables,
    });

    return data!.userOrganizationInvoiceCreate;
  };

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
