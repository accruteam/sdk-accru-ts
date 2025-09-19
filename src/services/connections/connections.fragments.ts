import { gql } from '@gql';

export const CONNECTION_QUERY_FRAGMENT = gql(`
  fragment OrganizationConnectionFragment on OrganizationConnection {
    id

    is_valid
    is_connected

    vendor_conn_status
    vendor_conn_status_at
    vendor_organization_id
    vendor_organization_name
    vendor_organization_email
    vendor_target_customer_id
    vendor_target_customer_name
    vendor_target_customer_email

    customer_conn_status
    customer_conn_status_at
    customer_organization_id
    customer_organization_name
    customer_organization_email
    customer_target_vendor_id
    customer_target_vendor_name
    customer_target_vendor_email

    created_at
    updated_at
  }
`);
