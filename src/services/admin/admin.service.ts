import { ApolloClient } from '@apollo/client';
import AdminOrganizations from './adminOrganizations';

export default class Admin {
  public readonly organizations: AdminOrganizations;

  constructor(private apolloClient: ApolloClient<unknown>) {
    this.organizations = new AdminOrganizations(apolloClient);
  }
}
