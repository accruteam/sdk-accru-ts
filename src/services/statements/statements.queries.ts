import { DocumentNode, gql } from '@apollo/client';
import { INVOICE_QUERY_FRAGMENT } from '../invoices/invoices.queries.js';

export const GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY: DocumentNode = gql`
  query UserCustomerOrganizationInvoiceStatement(
    $organizationId: String!,
    $organizationVendorId: String!,

    $currency: CURRENCY,
    $startDate: DateTime,
    $endDate: DateTime,
    $status: INVOICE_STATUS,
    $isOverdue: Boolean,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userCustomerOrganizationInvoiceStatement(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      currency: $currency
      start_date: $startDate
      end_date: $endDate
      status: $status
      is_overdue: $isOverdue
      
      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
        vendor_organization_id
        vendor_organization {
            id
            name
        }
        vendor_organization_customer_id
        vendor_organization_customer {
            id
            name
        }
        customer_organization_id
        customer_organization {
            id
            name
        }
        data {
            totalCount
            edges {
                cursor
                node {
                    ...OrganizationInvoiceFields
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
        start_date
        end_date
        currency
        status
    }
  }

  ${INVOICE_QUERY_FRAGMENT}
`;

export default { GET_AS_CUSTOMER_ORGANIZATION_VENDOR_INVOICE_STATEMENT_QUERY };
