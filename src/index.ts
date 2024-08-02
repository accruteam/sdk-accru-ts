import { ApolloClient } from '@apollo/client';

import { IAccruClientParams, createApolloClient } from '@api/apolloClient';

import AccountingProviders from '@services/accountingProviders';
import Auth from '@services/auth';
import Bills from '@services/bills';
import Connections from '@services/connections';
import Customers from '@services/customers';
import Invoices from '@services/invoices';
import Reminders from '@services/reminders';
import Statements from '@services/statements';
import Users from '@services/users';
import Vendors from '@services/vendors';
import Organizations from '@services/organizations';
import Projects from '@services/projects/projects.service';
import Contacts from '@services/contacts';
import Transactions from '@services/transactions';

export { processResponseAsList } from '@utils/processResponseAsList';

export type AccruClientResponseType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;

export * from '@gql';
export * from '@gql/graphql';

export class AccruClient {
  public readonly apolloClient: ApolloClient<unknown>;

  public readonly accountingProviders: AccountingProviders;
  public readonly auth: Auth;
  public readonly bills: Bills;
  public readonly connections: Connections;
  public readonly contacts: Contacts;
  public readonly customers: Customers;
  public readonly invoices: Invoices;
  public readonly organizations: Organizations;
  public readonly projects: Projects;
  public readonly reminders: Reminders;
  public readonly statements: Statements;
  public readonly transactions: Transactions;
  public readonly users: Users;
  public readonly vendors: Vendors;

  constructor(params: IAccruClientParams) {
    this.apolloClient = createApolloClient(params);
    this.accountingProviders = new AccountingProviders(this.apolloClient);
    this.auth = new Auth(this.apolloClient);
    this.bills = new Bills(this.apolloClient);
    this.connections = new Connections(this.apolloClient);
    this.contacts = new Contacts(this.apolloClient);
    this.customers = new Customers(this.apolloClient);
    this.invoices = new Invoices(this.apolloClient);
    this.organizations = new Organizations(this.apolloClient);
    this.projects = new Projects(this.apolloClient);
    this.reminders = new Reminders(this.apolloClient);
    this.statements = new Statements(this.apolloClient);
    this.transactions = new Transactions(this.apolloClient);
    this.users = new Users(this.apolloClient);
    this.vendors = new Vendors(this.apolloClient);
  }
}
