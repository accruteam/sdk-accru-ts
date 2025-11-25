import { gql } from '@gql';

export const INVOICE_QUERY_FRAGMENT = gql(`
  fragment OrganizationInvoiceFragment on OrganizationInvoice {
    id
    unique_code
    number

    provider
    provider_code
    provider_url
    provider_errors
    provider_warnings
    last_successful_sync_id
    last_successful_sync_at
    last_sync_succeeded
    last_sync_id
    last_sync_at
    view_url

    currency_code
    description

    amount
    tax_amount
    discount_amount
    total_amount

    invoice_date
    due_date

    created_at
    updated_at

    customer_email
    customer_address_line_1
    customer_address_number
    customer_address_line_2
    customer_address_city
    customer_address_state
    customer_address_zip_code
    customer_address_country_code_iso_3
    customer_address_lat
    customer_address_lng

    organization_id
    organization {
      name
    }
    organization_customer_id
    organization_customer {
      name
      email
      balance
    }

    file_id
    file {
      public_url
    }

    has_sync_errors
    last_sync_at
    latest_acct_provider_balance
    latest_acct_provider_status
    latest_acct_provider_is_overdue

    status
    is_overdue
    paid_amount
    paid_at
    balance

    email_sent_at

    payment_options {
        method
        url
        payload
    }

    transaction_links {
      id
      amount
      organization_invoice_id

      created_at
      updated_at

      organization_invoice_transaction_id
      organization_invoice_transaction {
        id
      }
    }
  }
`);
