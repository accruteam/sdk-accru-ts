import type { ApolloClient } from '@apollo/client/core';
import type { AccruClientContext } from '@/types/context.types';

import { IAccruClientParams, createApolloClient } from '@api/apolloClient';

import AccountingProviders from '@services/accountingProviders';
import Admin from '@services/admin';
import Auth from '@services/auth';
import Bills from '@services/bills';
import Connections from '@services/connections';
import Contacts from '@services/contacts';
import Customers from '@services/customers';
import Invoices from '@services/invoices';
import Organizations from '@services/organizations';
import Reminders from '@services/reminders';
import Statements from '@services/statements';
import Subscriptions from '@services/subscriptions/subscriptions.service';
import Projects from '@services/projects/projects.service';
import Transactions from '@services/transactions';
import Users from '@services/users';
import Vendors from '@services/vendors';

export { processResponseAsList } from '@utils/processResponseAsList';

export type AccruClientResponseType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;

export * from '@gql';
export * from '@gql/graphql';

export class AccruClient {
  public readonly apolloClient: ApolloClient;
  public readonly context: AccruClientContext;

  public readonly accountingProviders: AccountingProviders;
  public readonly admin: Admin;
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
  public readonly subscriptions: Subscriptions;
  public readonly transactions: Transactions;
  public readonly users: Users;
  public readonly vendors: Vendors;

  constructor(params: IAccruClientParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.accountingProviders = new AccountingProviders(this.context);
    this.admin = new Admin(this.context);
    this.auth = new Auth(this.context);
    this.bills = new Bills(this.context);
    this.connections = new Connections(this.context);
    this.contacts = new Contacts(this.context);
    this.customers = new Customers(this.context);
    this.invoices = new Invoices(this.context);
    this.organizations = new Organizations(this.context);
    this.projects = new Projects(this.context);
    this.reminders = new Reminders(this.context);
    this.statements = new Statements(this.context);
    this.subscriptions = new Subscriptions(this.context);
    this.transactions = new Transactions(this.context);
    this.users = new Users(this.context);
    this.vendors = new Vendors(this.context);
  }
}
