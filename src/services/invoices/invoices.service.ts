import { ApolloClient } from '@apollo/client';
import { INVOICES_GET_STATEMENT_QUERY, SEND_INVOICE_EMAIL_MUTATION } from './invoices.queries';
import { CurrencyOptions, StandardQueryOptions } from '../types';

interface InvoiceSendEmailVariables {
  organizationId: String,
  targets: Array<{
    organization_invoice_id: String,
    send_to_primary_contact: String,
    contact_ids: String,
  }>
}
type InvoiceSendResponse = any;

type InvoiceStatuses = String

interface InvoicesGetListVariables extends StandardQueryOptions {
  organizationId: String;
  organizationCustomerId: String;

  currency: CurrencyOptions;
  startDate: Date;
  endDate: Date;
  status: InvoiceStatuses;
  isOverdue: Boolean;
}

export default class Invoices {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (variables: InvoicesGetListVariables): Promise<any> => {
    const response = await this.apolloClient.query({
      query: INVOICES_GET_STATEMENT_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });
    return response;
  };

  public getOne = async (): Promise<any> => {};
  public create = async (): Promise<any> => {};
  public update = async (): Promise<any> => {};

  public sendEmail = async (
    variables: InvoiceSendEmailVariables
  ): Promise<InvoiceSendResponse> => {
    const response = await this.apolloClient.mutate({
      mutation: SEND_INVOICE_EMAIL_MUTATION,
      variables,
    });
    
    return response.data.userOrganizationCustomerSendInvoiceEmail;
  };

  public del = async (): Promise<any> => {};
}
