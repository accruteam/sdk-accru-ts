import { StandardQueryOptions } from '../types';

export interface CustomersGetVariables extends StandardQueryOptions {
  name?: String;
  organizationId?: String;
}

export interface CustomersGetResponse {
  data: any[];
}

export interface CustomersGetOneVariables {
  organizationId: String;
  organizationCustomerId: String;
}

export interface CustomersGetOneResponse {
  data: Object;
}
export interface CustomersCreateVariables {
  organizationId: String;
  data: {
    name: String;
    email: String;
    phone_number: String;
    is_active: Boolean;
  };
}

export type CustomersCreateResponse = Object;

export interface CustomersUpdateVariables {
  organizationCustomerId: String;
  data: {
    name: String;
    email: String;
    phone_number: String;
    is_active: Boolean;
  };
}

export type CustomersUpdateResponse = Object;