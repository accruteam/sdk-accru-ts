import type { AccruClientContext } from '@/types/context.types';
import InvoicesSummaryAsVendor from './asVendor/invoicesSummaryAsVendor.service';
import InvoicesSummaryAsCustomer from './asCustomer/invoicesSummaryAsCustomer.service';
import InvoicesSummaryAsUnconnectedCustomer from './asUnconnectedCustomer/invoicesSummaryAsUnconnectedCustomer.service';

export default class InvoicesSummary {
  public readonly asVendor: InvoicesSummaryAsVendor;
  public readonly asCustomer: InvoicesSummaryAsCustomer;
  public readonly asUnconnectedCustomer: InvoicesSummaryAsUnconnectedCustomer;

  constructor(private context: AccruClientContext) {
    this.asVendor = new InvoicesSummaryAsVendor(this.context);
    this.asCustomer = new InvoicesSummaryAsCustomer(this.context);
    this.asUnconnectedCustomer = new InvoicesSummaryAsUnconnectedCustomer(
      this.context,
    );
  }
}
