import Bills from "./services/bills";
import Connections from "./services/connections";
import Customers from "./services/customers";
import Invoices from "./services/invoices";
import Statements from "./services/statements";
import Sync from "./services/sync";
import Vendors from "./services/vendors";
import { createApolloClient } from './api/apolloClient';

export default class AccruClient {
  public apolloClient: any;
  public bills: Bills;
  public customers: Customers;
  public connections: Connections;
  public invoices: Invoices;
  public statements: Statements;
  public sync: Sync;
  public vendorsClass: Vendors;

  constructor({
    token,
    baseUrl,
    auth = '',
  }: {
    token: string;
    baseUrl: string;
    auth?: string;
  }) {
    this.apolloClient = createApolloClient({ token, baseUrl, auth });
    this.bills = new Bills(this.apolloClient);
    this.connections = new Connections(this.apolloClient);
    this.customers = new Customers(this.apolloClient);
    this.invoices = new Invoices(this.apolloClient);
    this.statements = new Statements(this.apolloClient);
    this.sync = new Sync(this.apolloClient);
    this.vendorsClass = new Vendors(this.apolloClient);
  }
}
