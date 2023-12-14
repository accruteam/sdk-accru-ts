import { ApolloClient } from '@apollo/client';
import { BILL_GET_QUERY } from './bills.queries';
import { GetBillsRequest } from './bills.types';

export default class Bills {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

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

  public getOne = async (): Promise<any> => {};

  public create = async (): Promise<any> => {};
  public update = async (): Promise<any> => {};
  public del = async (): Promise<any> => {};
}
