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

    invoice_statement {
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
      total_amount
      paid_amount
      overdue_amount
      start_date
      end_date
      currency
      status
    }
  }
`);

export const GET_ALL_CUSTOMERS_QUERY = gql(`
  query userOrganizationCustomers(
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

export const GET_CUSTOMER_QUERY = gql(`
  query UserOrganizationCustomer($organizationCustomerId: String!, $organizationId: String!) {
  userOrganizationCustomer(organization_customer_id: $organizationCustomerId, organization_id: $organizationId) {
    ...OrganizationCustomerFragment
  }
}
`);

export const UPDATE_CUSTOMER_MUTATION = gql(`
  mutation userOrganizationCustomerUpdate ($organizationId: String!, $organizationCustomerId: String!, $data: UserOrganizationCustomerSchema!) {
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
  mutation userOrganizationCustomerCreate ($organizationId: String!, $data: UserOrganizationCustomerSchema!) {
    userOrganizationCustomerCreate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationCustomerFragment
    }
  }
`);
