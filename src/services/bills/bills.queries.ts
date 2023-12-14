import { gql } from "@apollo/client";

export const BILL_QUERY_FRAGMENT = gql`
  fragment OrganizationBillFields on OrganizationBill {
    id
    unique_code
    number
    currency_code
    description
    payload
    amount
    tax_amount
    discount_amount
    total_amount
    bill_date
    due_date
    vendor_email
    vendor_address_line_1
    vendor_address_number
    vendor_address_line_2
    vendor_address_city
    vendor_address_state
    vendor_address_zip_code
    vendor_address_country_code_iso_3
    vendor_address_lat
    vendor_address_lng
    archived_at
    created_at
    updated_at

    conn_linked_invoice_id
    conn_locked_data_at

    organization_id
    organization {
      name
    }
    organization_vendor_id
    organization_vendor {
      name
      email
    }

    organization_acct_provider_conn_bills {
      id
      code
      payload
      last_sync_at
      last_sync_success
      last_sync_id

      organization_bill_id

      organization_acct_provider_conn_id
      organization_acct_provider_conn {
        acct_provider_code
      }
    }

    file_id
    file {
      public_url
    }

    has_sync_errors

    status
    is_overdue
    paid_amount
    paid_at
    balance

    transaction_links {
      id
      amount
      item_type
      item_id

      created_at
      updated_at

      organization_transaction_id
      organization_transaction {
        id
      }
    }
  }
`;

export const BILL_GET_QUERY = gql`
  query GetOrganizationBill(
    $organizationId: String!
    $organizationBillId: String!
  ) {
    userOrganizationBill(
      organization_id: $organizationId
      organization_bill_id: $organizationBillId
    ) {
      ...OrganizationBillFields
    }
  }

  ${BILL_QUERY_FRAGMENT}
`;
