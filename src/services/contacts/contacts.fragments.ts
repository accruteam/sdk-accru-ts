import { gql } from '@gql';

export const CUSTOMER_CONTACT_FRAGMENT = gql(`
  fragment CustomerContactFragment on OrganizationCustomerContact {
    id
    name
    email
    phone_number
    is_default
    receive_invoice_reminders
    email_copy_mode
    created_at
    updated_at
    organization_customer_id
  }
`);

export const VENDOR_CONTACT_FRAGMENT = gql(`
  fragment VendorContactFragment on OrganizationVendorContact {
    id
    name
    email
    phone_number
    is_default
    organization_vendor_id
  }
`);
