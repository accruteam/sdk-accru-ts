import { gql } from '@gql';

export const VENDOR_QUERY_FRAGMENT = gql(`
  fragment OrganizationVendorFragment on OrganizationVendor {
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
      created_at
      updated_at
    }

    bill_statement {
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
              bill_date
              due_date
              vendor_email
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

export const GET_ALL_VENDORS_QUERY = gql(`
  query UserOrganizationVendors(
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
    userOrganizationVendors(
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
            ...OrganizationVendorFragment
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

export const GET_VENDOR_QUERY = gql(`
  query UserOrganizationVendor($organizationVendorId: String!, $organizationId: String!) {
    userOrganizationVendor(organization_vendor_id: $organizationVendorId, organization_id: $organizationId) {
      ...OrganizationVendorFragment
    }
  }
`);

export const UPDATE_VENDOR_MUTATION = gql(`
  mutation UserOrganizationVendorUpdate ($organizationId: String!, $organizationVendorId: String!, $data: UserOrganizationVendorSchema!) {
    userOrganizationVendorUpdate(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      data: $data
    ) {
      ...OrganizationVendorFragment
    }
  }
`);

export const CREATE_VENDOR_MUTATION = gql(`
  mutation UserOrganizationVendorCreate ($organizationId: String!, $data: UserOrganizationVendorSchema!) {
    userOrganizationVendorCreate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationVendorFragment
    }
  }
`);
