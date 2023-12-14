import { DocumentNode, gql } from '@apollo/client';

export const INVOICE_QUERY_FRAGMENT: DocumentNode = gql`
  fragment OrganizationInvoiceFields on OrganizationInvoice {
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
    invoice_date
    due_date
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
    archived_at
    created_at
    updated_at

    organization_id
    organization {
        name
    }
    organization_customer_id
    organization_customer {
        name
        email
    }

    organization_acct_provider_conn_invoices {
        id
        code
        payload
        last_sync_at
        last_sync_success
        last_sync_id

        organization_invoice_id
        
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

    email_sent_at

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

export default { INVOICE_QUERY_FRAGMENT };
