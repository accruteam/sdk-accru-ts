import { gql } from '@gql';

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
      ...OrganizationVendorAdditionalDataFragment
    }
  }
`);
