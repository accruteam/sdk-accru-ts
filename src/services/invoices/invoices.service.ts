import type { AccruClientContext } from '@/types/context.types';
import {
  UserOrganizationCustomerSendInvoiceEmailMutation,
  UserOrganizationCustomerSendInvoiceEmailMutationVariables,
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
import { SEND_INVOICE_EMAIL_MUTATION } from './invoices.queries';
import {
  INVOICES_SUMMARY_AS_VENDOR_GET_SUMMARY_QUERY,
  INVOICES_SUMMARY_AS_VENDOR_GET_ONE_INVOICE_QUERY,
} from './summary/asVendor/invoicesSummaryAsVendor.queries';
import InvoicesSummary from './summary/invoicesSummary.service';

export default class Invoices {
  public readonly summary: InvoicesSummary;

  constructor(private context: AccruClientContext) {
    this.summary = new InvoicesSummary(this.context);
  }

  public get = async (
    variables: UserOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationInvoiceSummaryQuery>>
  > => {
    const { data } = await this.context.apolloClient.query({
      query: INVOICES_SUMMARY_AS_VENDOR_GET_SUMMARY_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data!.userOrganizationInvoiceSummary,
      ...processResponseAsList(data!.userOrganizationInvoiceSummary.data),
    };
  };

  public getOne = async (
    variables: UserOrganizationInvoiceQueryVariables,
  ): Promise<Res<UserOrganizationInvoiceQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: INVOICES_SUMMARY_AS_VENDOR_GET_ONE_INVOICE_QUERY,
      variables,
    });

    return data!.userOrganizationInvoice;
  };

  public sendEmail = async (
    variables: UserOrganizationCustomerSendInvoiceEmailMutationVariables,
  ): Promise<Res<UserOrganizationCustomerSendInvoiceEmailMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: SEND_INVOICE_EMAIL_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerSendInvoiceEmail;
  };
}
