import { StandardQueryOptions } from '../types';

export interface BillGetVariables extends StandardQueryOptions {
  organizationId: String;
  organizationVendorId: String;
  currency: 'USD';
  startDate: Date;
  endDate: Date;
  status: String; // Todo: determine statuses
  isOverdue: Boolean;
}

export interface BillsGetResponse {}

export interface BillsGetOneVariables {
  organizationBillId: string;
  organizationId: string;
}

export interface BillsGetOneResponse {}

export interface BillsCreateVariables {
  organizationId: String;
  data: {
    currency_code: 'USD';
    description: String;
    discount_amount: Number;
    amount: Number;
    total_amount: Number;
    bill_date: Date;
    due_date: Date;
    organization_project_id: String;
    organization_vendor_id: String;
  };
}

export interface BillsCreateResponse {}

export interface BillsUpdateVariables {}
export interface BillsUpdateResponse {}
