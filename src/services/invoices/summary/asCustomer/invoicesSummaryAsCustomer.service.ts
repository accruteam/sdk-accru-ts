import {
  UserCustomerOrganizationInvoiceSummaryQuery,
  UserCustomerOrganizationInvoiceSummaryQueryVariables,
  UserCustomerOrganizationInvoiceGetPDFMutation,
  UserCustomerOrganizationInvoiceGetPDFMutationVariables,
  UserCustomerOrganizationInvoiceQueryVariables,
  UserCustomerOrganizationInvoiceQuery,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  processResponseAsList,
  ChildrenEdgeListResponse,
} from '@utils/processResponseAsList';
import type { AccruClientContext } from '@/types/context.types';
import {
  INVOICES_SUMMARY_AS_CUSTOMER_GET_PDF_MUTATION,
  INVOICES_SUMMARY_AS_CUSTOMER_GET_SUMMARY_QUERY,
  INVOICES_SUMMARY_AS_CUSTOMER_GET_ONE_INVOICE_QUERY,
} from './invoicesSummaryAsCustomer.queries';

export default class InvoicesSummaryAsCustomer {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserCustomerOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserCustomerOrganizationInvoiceSummaryQuery>>
  > => {
    const { data } = await this.context.apolloClient.query({
      query: INVOICES_SUMMARY_AS_CUSTOMER_GET_SUMMARY_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data!.userCustomerOrganizationInvoiceSummary,
      ...processResponseAsList(
        data!.userCustomerOrganizationInvoiceSummary.data,
      ),
    };
  };

  public getOne = async (
    variables: UserCustomerOrganizationInvoiceQueryVariables,
  ): Promise<Res<UserCustomerOrganizationInvoiceQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: INVOICES_SUMMARY_AS_CUSTOMER_GET_ONE_INVOICE_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationInvoice;
  };

  public getPdf = async (
    variables: UserCustomerOrganizationInvoiceGetPDFMutationVariables,
  ): Promise<Res<UserCustomerOrganizationInvoiceGetPDFMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: INVOICES_SUMMARY_AS_CUSTOMER_GET_PDF_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationInvoiceGetPDF;
  };
}
