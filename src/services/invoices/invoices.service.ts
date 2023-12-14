import { ApolloClient } from '@apollo/client';

export default class Invoices {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (): Promise<any> => [];
  public getOne = async (): Promise<any> => {};
  public create = async (): Promise<any> => {};
  public update = async (): Promise<any> => {};
  public del = async (): Promise<any> => {};
}
