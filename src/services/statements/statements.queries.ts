import { gql } from '@gql';

export const CUSTOMER_STATEMENT_FRAGMENT = gql(`
  fragment OrganizationCustomerStatementFragment on OrganizationCustomerStatement {
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
          ... on OrganizationCustomerStatementInvoiceLine {
            amount
            code
            created_at
            currency_code
            date
            due_date
            id
            organization_customer_id
            organization_invoice_id
            paid_amount
            running_balance
            invoice_status
            type
            updated_at
          }
          ... on OrganizationCustomerStatementTransactionLine {
            amount
            code
            created_at
            currency_code
            date
            due_date
            id
            organization_customer_id
            organization_transaction_id
            paid_amount
            running_balance
            transaction_status
            type
            updated_at
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

    start_date
    end_date

    currency

    one_to_thirty_days_due_amount
    thirty_one_to_sixty_days_due_amount
    sixty_plus_days_due_amount
  }
`);

export const GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UserCustomerOrganizationStatement(
    $organizationId: String!
    $organizationVendorId: String!
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime
    $isOverdue: Boolean
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userCustomerOrganizationStatement(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      currency: $currency
      start_date: $startDate
      end_date: $endDate
      is_overdue: $isOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY =
  gql(`
  mutation UnconnectedUserCustomerOrganizationStatementRequestToken(
    $uniqueCode: String!
    $email: String!
  ) {
    unconnectedUserCustomerOrganizationStatementRequestToken(
      unique_code: $uniqueCode
      email: $email
    )
}
`);

export const GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY = gql(`
  query UnconnectedUserCustomerOrganizationStatement(
    $uniqueCode: String!
    $email: String!
    $token: String!
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime
    $isOverdue: Boolean
    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    unconnectedUserCustomerOrganizationStatement(
      unique_code: $uniqueCode
      email: $email
      token: $token

      currency: $currency
      start_date: $startDate
      end_date: $endDate
      is_overdue: $isOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationCustomerStatementFragment
  }
}
`);
