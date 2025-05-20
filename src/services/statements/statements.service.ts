import { ApolloClient } from '@apollo/client/core';
import StatementsAsCustomer from './asCustomer/statementsAsCustomer.service';
import StatementsAsUnconnectedCustomer from './asUnconnectedCustomer/statementsAsUnconnectedCustomer.service';
import StatementsAsVendor from './asVendor/statementsAsVendor.service';

export default class Statements {
  private apolloClient: ApolloClient<unknown>;

  public readonly asVendor: StatementsAsVendor;
  public readonly asCustomer: StatementsAsCustomer;
  public readonly asUnconnectedCustomer: StatementsAsUnconnectedCustomer;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;

    this.asVendor = new StatementsAsVendor(apolloClient);
    this.asCustomer = new StatementsAsCustomer(apolloClient);
    this.asUnconnectedCustomer = new StatementsAsUnconnectedCustomer(
      apolloClient,
    );
  }
}
