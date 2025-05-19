import { ApolloClient } from '@apollo/client';
import InvoicesSummaryAsVendor from './asVendor/invoicesSummaryAsVendor.service';
import InvoicesSummaryAsCustomer from './asCustomer/invoicesSummaryAsCustomer.service';
import InvoicesSummaryAsUnconnectedCustomer from './asUnconnectedCustomer/invoicesSummaryAsUnconnectedCustomer.service';

export default class InvoicesSummary {
  public readonly asVendor: InvoicesSummaryAsVendor;
  public readonly asCustomer: InvoicesSummaryAsCustomer;
  public readonly asUnconnectedCustomer: InvoicesSummaryAsUnconnectedCustomer;

  constructor(private apolloClient: ApolloClient<unknown>) {
    this.asVendor = new InvoicesSummaryAsVendor(this.apolloClient);
    this.asCustomer = new InvoicesSummaryAsCustomer(this.apolloClient);
    this.asUnconnectedCustomer = new InvoicesSummaryAsUnconnectedCustomer(
      this.apolloClient,
    );
  }
}
