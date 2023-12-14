import { GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY } from './statements.queries';

import { ApolloClient } from '@apollo/client';

export default class Statements {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (params: any) => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY,
      variables: params,
    });

    return data.userCustomerOrganizationInvoiceStatement;
  };
  public getOne = async (): Promise<any> => {}
  public create = async (): Promise<any> => {}
  public update = async (): Promise<any> => {}
  public del = async (): Promise<any> => {}
}
