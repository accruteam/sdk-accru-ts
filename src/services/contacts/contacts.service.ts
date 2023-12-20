import { ApolloClient } from '@apollo/client';

export default class Contacts {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public getOne = async (): Promise<any> => {};
  public create = async (): Promise<any> => {};
  public update = async (): Promise<any> => {};
  public del = async (): Promise<any> => {};
}
  