import type { AccruClientContext } from '@/types/context.types';
import StatementsAsCustomer from './asCustomer/statementsAsCustomer.service';
import StatementsAsUnconnectedCustomer from './asUnconnectedCustomer/statementsAsUnconnectedCustomer.service';
import StatementsAsVendor from './asVendor/statementsAsVendor.service';

export default class Statements {
  public readonly asVendor: StatementsAsVendor;
  public readonly asCustomer: StatementsAsCustomer;
  public readonly asUnconnectedCustomer: StatementsAsUnconnectedCustomer;

  constructor(context: AccruClientContext) {
    this.asVendor = new StatementsAsVendor(context);
    this.asCustomer = new StatementsAsCustomer(context);
    this.asUnconnectedCustomer = new StatementsAsUnconnectedCustomer(context);
  }
}
