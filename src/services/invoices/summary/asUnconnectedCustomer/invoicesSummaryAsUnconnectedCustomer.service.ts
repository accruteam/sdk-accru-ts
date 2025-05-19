import {
  UnconnectedCustomerOrganizationInvoiceSummaryQuery,
  UnconnectedCustomerOrganizationInvoiceSummaryQueryVariables,
  UnconnectedCustomerOrganizationInvoiceGetPDFMutation,
  UnconnectedCustomerOrganizationInvoiceGetPDFMutationVariables,
  UnconnectedCustomerOrganizationInvoiceQueryVariables,
  UnconnectedCustomerOrganizationInvoiceQuery,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  processResponseAsList,
  ChildrenEdgeListResponse,
} from '@utils/processResponseAsList';
import { ApolloClient } from '@apollo/client';
import {
  INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_PDF_MUTATION,
  INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_SUMMARY_QUERY,
  INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_ONE_INVOICE_QUERY,
} from './invoicesSummaryAsUnconnectedCustomer.queries';

export default class InvoicesSummaryAsUnconnectedCustomer {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UnconnectedCustomerOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<
      Res<UnconnectedCustomerOrganizationInvoiceSummaryQuery>
    >
  > => {
    const { data } = await this.apolloClient.query({
      query: INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_SUMMARY_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data.unconnectedCustomerOrganizationInvoiceSummary,
      ...processResponseAsList(
        data.unconnectedCustomerOrganizationInvoiceSummary.data,
      ),
    };
  };

  public getOne = async (
    variables: UnconnectedCustomerOrganizationInvoiceQueryVariables,
  ): Promise<Res<UnconnectedCustomerOrganizationInvoiceQuery>> => {
    const { data } = await this.apolloClient.query({
      query: INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_ONE_INVOICE_QUERY,
      variables,
    });

    return data.unconnectedCustomerOrganizationInvoice;
  };

  public getPdf = async (
    variables: UnconnectedCustomerOrganizationInvoiceGetPDFMutationVariables,
  ): Promise<Res<UnconnectedCustomerOrganizationInvoiceGetPDFMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: INVOICES_SUMMARY_AS_UNCONNECTED_CUSTOMER_GET_PDF_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationInvoiceGetPDF;
  };
}
