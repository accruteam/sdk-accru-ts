import { ApolloClient } from '@apollo/client';
import { BILL_GET_QUERY } from './bills.queries';
import { GetBillsRequest, GetBillRequest } from './bills.types';

export default class Bills {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async ({
    organizationId,
    organizationBillId,
  }: GetBillsRequest): Promise<any> => {
    const response = await this.apolloClient.query({
      query: BILL_GET_QUERY,
      variables: {
        organizationId,
        organizationBillId,
      },
    });
    return response.data.userOrganizationBillStatement;
  };

  public getOne = async ({
    organizationBillId,
    organizationId,
  }: GetBillRequest): Promise<any> => {
    const response = await this.apolloClient.query({
      query: BILL_GET_QUERY,
      variables: {
        organizationId,
        organizationBillId,
      },
    });
    return response.data.userOrganizationBill;
  };

  public create = async (): Promise<any> => {};
  public update = async (): Promise<any> => {};
  public del = async (): Promise<any> => {};
}
