import type { AccruClientContext } from '@/types/context.types';
import AdminOrganizations from './adminOrganizations';

export default class Admin {
  public readonly organizations: AdminOrganizations;

  constructor(private context: AccruClientContext) {
    this.organizations = new AdminOrganizations(context);
  }
}
