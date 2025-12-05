import { gql } from '@gql';

export const ORGANIZATION_CUSTOMER_STATEMENT_INVOICE_LINE_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementInvoiceLineFragment on OrganizationCustomerStatementInvoiceLine {
    id
    amount
    code
    created_at
    currency_code
    date
    due_date
    organization_customer_id
    organization_invoice_id
    paid_amount
    running_balance
    invoice_status
    type
    updated_at

    organization_invoice {
      provider
      provider_code
      view_url

      payment_options {
        method
        url
        payload
      }
    }
  }
`);

export const ORGANIZATION_CUSTOMER_STATEMENT_TRANSACTION_LINE_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementTransactionLineFragment on OrganizationCustomerStatementTransactionLine {
    amount
    code
    created_at
    currency_code
    date
    due_date
    id
    organization_customer_id
    organization_invoice_transaction_id
    paid_amount
    running_balance
    transaction_status
    type
    updated_at

    organization_invoice_transaction {
      provider
      provider_code

      links {
        id
        amount
        organization_invoice_id
      }
    }
  }
`);

export const CUSTOMER_STATEMENT_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementFragment on OrganizationCustomerStatement {
    vendor_organization_id
    vendor_organization {
      name
      email
      phone_number
      address_line_1
      address_number
      address_line_2
      address_city
      address_state
      address_zip_code
      address_country_code_iso_3
      address_lat
      address_lng
      logo_picture_file {
        public_url
      }
    }

    vendor_organization_customer_id
    vendor_organization_customer {
      name
      email
    }

    customer_organization_id
    customer_organization {
      name
      email
    }

    data {
      totalCount
      edges {
        cursor
        node {
          ... on OrganizationCustomerStatementInvoiceLine {
            ...OrganizationCustomerStatementInvoiceLineFragment
          }
          ... on OrganizationCustomerStatementTransactionLine {
            ...OrganizationCustomerStatementTransactionLineFragment
          }
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }

    total_amount
    paid_amount
    overdue_amount
    balance
    current_balance

    start_date
    end_date
    due_start_date
    due_end_date
    currency

    has_sync_errors
    has_mismatching_balance

    acct_provider
    is_acct_provider_connected

    last_sync_at
    latest_acct_provider_balance

    one_to_thirty_days_due_amount
    thirty_one_to_sixty_days_due_amount
    sixty_plus_days_due_amount

    latest_acct_provider_one_to_thirty_days_due_amount
    latest_acct_provider_thirty_one_to_sixty_days_due_amount
    latest_acct_provider_sixty_plus_days_due_amount

    total_open_invoice_count
    total_overdue_invoice_count

    statement_session_token
  }
`);
