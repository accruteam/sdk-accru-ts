import { ApolloClient } from '@apollo/client';
import { BILL_CREATE_MUTATION, BILL_GET_QUERY, BILLS_GET_STATEMENT_QUERY } from './bills.queries';
import { BillsGetOneVariables, BillGetVariables, BillsCreateVariables } from './bills.types';
import getEdgesAsList from '../../utils/listAsEdges';

export default class Bills {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (variables: BillGetVariables): Promise<any> => {
    const response = await this.apolloClient.query({
      query: BILLS_GET_STATEMENT_QUERY,
      variables,
    });
    
    return { data: getEdgesAsList(response.data.userOrganizationBillStatement.edges) }
  };

  public getOne = async (variables: BillsGetOneVariables): Promise<any> => {
    const response = await this.apolloClient.query({
      query: BILL_GET_QUERY,
      variables,
    });
    return { data: response.data.userOrganizationBill };
  };

  public create = async (variables: BillsCreateVariables): Promise<any> => {
    const bill = await this.apolloClient.mutate({
      mutation: BILL_CREATE_MUTATION,
      variables: variables,
    });
    return bill.data.userOrganizationBillCreate;
  };

  public update = async (): Promise<any> => {};
  public del = async (): Promise<any> => {};
}
