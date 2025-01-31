import { ApolloClient } from '@apollo/client/core';

import AsCustomerProjects from './projects.asCustomer.service';
import AsUnconnectedCustomerProjects from './projects.asUnconnectedCustomer.service';
import AsVendorProjects from './projects.asVendor.service';

export default class Projects {
  public readonly asVendor: AsVendorProjects;
  public readonly asCustomer: AsCustomerProjects;
  public readonly asUnconnectedCustomer: AsUnconnectedCustomerProjects;

  constructor(private readonly apolloClient: ApolloClient<unknown>) {
    this.asVendor = new AsVendorProjects(this.apolloClient);
    this.asCustomer = new AsCustomerProjects(this.apolloClient);
    this.asUnconnectedCustomer = new AsUnconnectedCustomerProjects(
      this.apolloClient,
    );
  }
}
