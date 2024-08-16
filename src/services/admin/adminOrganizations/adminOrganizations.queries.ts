import { gql } from '@gql';

export const GET_ADMIN_ORGANIZATION_QUERY = gql(`
  query AdminOrganizations(
    $id: String
    $email: String
    $name: String

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    adminOrganizations(
      id: $id
      email: $email
      name: $name

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      edges {
        cursor
        node {
          ...OrganizationFragment
        }
      }
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasPreviousPage
        hasNextPage
      }
    }
  }
`);
