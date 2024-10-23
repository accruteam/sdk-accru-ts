import { gql } from '@gql';

export const CUSTOMER_QUERY_FRAGMENT = gql(`
  fragment OrganizationCustomerFragment on OrganizationCustomer {
    id
    is_active
    email
    name
    unique_code
    phone_number
    tax_code_type
    tax_code
    created_at
    updated_at

    has_sync_errors
    last_sync_at
    latest_acct_provider_balance

    balance
    overdue_amount

    conn_locked_data_at
    connection {
      ...OrganizationConnectionFragment
    }

    contacts {
      id
      name
      email
      phone_number
      is_default
      send_invoice_reminders
      created_at
      updated_at
    }

    invoice_summary {
      data {
        totalCount
        edges {
            cursor
            node {
              id
              file_id
              file {
                public_url
              }
              unique_code
              number
              currency_code
              description
              amount
              tax_amount
              discount_amount
              total_amount
              paid_amount
              invoice_date
              due_date
              customer_email
              created_at
              updated_at
              status
            }
        }
        pageInfo {
            startCursor
            endCursor
            hasPreviousPage
            hasNextPage
        }
      }

      total_open_invoice_count
      total_overdue_invoice_count

      total_amount
      paid_amount
      overdue_amount
      balance
    }
  }
`);

export const GET_ALL_CUSTOMERS_QUERY = gql(`
  query UserOrganizationCustomers(
    $organizationId: String!,

    $name: String,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
    ) {
      userOrganizationCustomers(
        organization_id: $organizationId

        name: $name

        after: $after
        first: $first

        before: $before
        last: $last

        skip: $skip
        take: $take

        sorting: $sorting
      ) {
          totalCount
          edges {
            cursor
            node {
              ...OrganizationCustomerFragment
            }
          }
          pageInfo {
              startCursor
              endCursor
              hasPreviousPage
              hasNextPage
          }
        }
    }
`);

export const GET_CUSTOMER_STATEMENT_QUERY = gql(`
  query UserOrganizationCustomerStatement(
    $organizationId: String!
    $organizationCustomerId: String!
    $type: STATEMENT_LINE_TYPE
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
    userOrganizationCustomerStatement(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId

      type: $type

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

export const GET_CUSTOMER_STATEMENT_LINE_QUERY = gql(`
  query UserOrganizationCustomerStatementLine(
    $organizationId: String!,
    $organizationCustomerId: String!,
    $organizationCustomerStatementLineId: Int,
    $organizationInvoiceId: String,
    $organizationInvoiceTransactionId: String,
  ) {
    userOrganizationCustomerStatementLine(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      organization_customer_statement_line_id: $organizationCustomerStatementLineId
      organization_invoice_id: $organizationInvoiceId
      organization_invoice_transaction_id: $organizationInvoiceTransactionId
    ) {
      ... on OrganizationCustomerStatementInvoiceLine {
        ...OrganizationCustomerStatementInvoiceLineFragment
      }
      ... on OrganizationCustomerStatementTransactionLine {
        ...OrganizationCustomerStatementTransactionLineFragment
      }
    }
  }
`);

export const GET_CUSTOMER_QUERY = gql(`
  query UserOrganizationCustomer(
    $organizationId: String!
    $organizationCustomerId: String!,
    ) {
    userOrganizationCustomer(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId,
      ) {
      ...OrganizationCustomerFragment
    }
  }
`);

export const UPDATE_CUSTOMER_MUTATION = gql(`
  mutation UserOrganizationCustomerUpdate($organizationId: String!, $organizationCustomerId: String!, $data: UserOrganizationCustomerSchema!) {
    userOrganizationCustomerUpdate(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
      data: $data
    ) {
      ...OrganizationCustomerFragment
    }
  }
`);

export const CREATE_CUSTOMER_MUTATION = gql(`
  mutation UserOrganizationCustomerCreate($organizationId: String!, $data: UserOrganizationCustomerSchema!) {
    userOrganizationCustomerCreate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationCustomerFragment
    }
  }
`);

export const SEND_CUSTOMERS_STATEMENT_MUTATION = gql(`
  mutation UserOrganizationCustomerSendStatementEmail($targets: [UserOrganizationCustomerSendStatementEmailSchema!]!, $organizationId: String!) {
    userOrganizationCustomerSendStatementEmail(targets: $targets, organization_id: $organizationId)
  }
`);

export const GET_CUSTOMER_STATEMENT_LINK_MUTATION = gql(`
  mutation UserOrganizationCustomerGetStatementLink($organizationId: String!, $organizationCustomerId: String!, $expiresAt: DateTime) {
    userOrganizationCustomerGetStatementLink(organization_id: $organizationId, organization_customer_id: $organizationCustomerId, expires_at: $expiresAt)
  }
`);

export const SYNC_CUSTOMER_MUTATION = gql(`
  mutation UserOrganizationCustomerSynchronize($organizationId: String!, $organizationCustomerId: String!) {
    userOrganizationCustomerSynchronize(organization_id: $organizationId, organization_customer_id: $organizationCustomerId)
  }
`);
