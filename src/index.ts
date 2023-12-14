import Bills from "./services/bills";
import Connections from "./services/connections";
import Customers from "./services/customers";
import Invoices from "./services/invoices";
import Statements from "./services/statements";
import Sync from "./services/sync";
import Vendors from "./services/vendors";
import Users from "./services/users";
import { createApolloClient } from './api/apolloClient';

export class AccruClient {
  public readonly apolloClient: any;
  public readonly bills: Bills;
  public readonly customers: Customers;
  public readonly connections: Connections;
  public readonly invoices: Invoices;
  public readonly statements: Statements;
  public readonly sync: Sync;
  public readonly users: Users;
  public readonly vendors: Vendors;

  constructor({
    token,
    baseUrl,
  }: {
    token: string;
    baseUrl: string;
    auth?: string;
  }) {
    this.apolloClient = createApolloClient({ token, baseUrl });
    this.bills = new Bills(this.apolloClient);
    this.connections = new Connections(this.apolloClient);
    this.customers = new Customers(this.apolloClient);
    this.invoices = new Invoices(this.apolloClient);
    this.statements = new Statements(this.apolloClient);
    this.sync = new Sync(this.apolloClient);
    this.users = new Users(this.apolloClient);
    this.vendors = new Vendors(this.apolloClient);
  }
}
