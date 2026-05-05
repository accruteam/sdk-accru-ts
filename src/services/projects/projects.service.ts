import type { AccruClientContext } from '@/types/context.types';

import AsCustomerProjects from './projects.asCustomer.service';
import AsUnconnectedCustomerProjects from './projects.asUnconnectedCustomer.service';
import AsVendorProjects from './projects.asVendor.service';

export default class Projects {
  public readonly asVendor: AsVendorProjects;
  public readonly asCustomer: AsCustomerProjects;
  public readonly asUnconnectedCustomer: AsUnconnectedCustomerProjects;

  constructor(private readonly context: AccruClientContext) {
    this.asVendor = new AsVendorProjects(this.context);
    this.asCustomer = new AsCustomerProjects(this.context);
    this.asUnconnectedCustomer = new AsUnconnectedCustomerProjects(
      this.context,
    );
  }
}
