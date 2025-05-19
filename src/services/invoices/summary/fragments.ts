import { gql } from '@gql';

export const INVOICE_SUMMARY_FRAGMENT = gql(`
  fragment OrganizationInvoiceSummaryFragment on OrganizationInvoiceSummary {
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
          ...OrganizationInvoiceFragment
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }

    status

    total_open_invoice_count
    total_overdue_invoice_count

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
    last_sync_at
    latest_acct_provider_balance

    one_to_thirty_days_due_amount
    thirty_one_to_sixty_days_due_amount
    sixty_plus_days_due_amount

    latest_acct_provider_one_to_thirty_days_due_amount
    latest_acct_provider_thirty_one_to_sixty_days_due_amount
    latest_acct_provider_sixty_plus_days_due_amount
  }
`);
