import { ApolloClient } from '@apollo/client';

export default class Vendors {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (): Promise<any> => []
  public getOne = async (): Promise<any> => {}
  public create = async (): Promise<any> => {}
  public update = async (): Promise<any> => {}
  public del = async (): Promise<any> => {}
}
