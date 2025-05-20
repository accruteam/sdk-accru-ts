import {
  UserOrganizationInvoiceSummaryQuery,
  UserOrganizationInvoiceSummaryQueryVariables,
  UserOrganizationInvoiceGetPDFMutation,
  UserOrganizationInvoiceGetPDFMutationVariables,
  UserOrganizationInvoiceQueryVariables,
  UserOrganizationInvoiceQuery,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  processResponseAsList,
  ChildrenEdgeListResponse,
} from '@utils/processResponseAsList';
import { ApolloClient } from '@apollo/client';
import {
  INVOICES_SUMMARY_AS_VENDOR_GET_PDF_MUTATION,
  INVOICES_SUMMARY_AS_VENDOR_GET_SUMMARY_QUERY,
  INVOICES_SUMMARY_AS_VENDOR_GET_ONE_INVOICE_QUERY,
} from './invoicesSummaryAsVendor.queries';

export default class InvoicesSummaryAsVendor {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationInvoiceSummaryQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: INVOICES_SUMMARY_AS_VENDOR_GET_SUMMARY_QUERY,
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
      query: INVOICES_SUMMARY_AS_VENDOR_GET_ONE_INVOICE_QUERY,
      variables,
    });

    return data.userOrganizationInvoice;
  };

  public getPdf = async (
    variables: UserOrganizationInvoiceGetPDFMutationVariables,
  ): Promise<Res<UserOrganizationInvoiceGetPDFMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: INVOICES_SUMMARY_AS_VENDOR_GET_PDF_MUTATION,
      variables,
    });

    return data!.userOrganizationInvoiceGetPDF;
  };
}
