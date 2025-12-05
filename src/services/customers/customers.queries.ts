import { gql } from '@gql';

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
      ...OrganizationCustomerAdditionalDataFragment
    }
  }
`);

export const GET_CUSTOMER_STATEMENT_LOGS_QUERY = gql(`
  query UserOrganizationStatementLogs(
    $organizationId: String!

    $accessType: STATEMENT_ACCESS_TYPE
    $organizationCustomerId: String
    $startDate: DateTime
    $endDate: DateTime

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationStatementLogs(
      organization_id: $organizationId

      access_type: $accessType
      organization_customer_id: $organizationCustomerId
      start_date: $startDate
      end_date: $endDate

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
          ...OrganizationCustomerStatementLogFragment
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

export const GET_CUSTOMER_STATEMENT_LOG_QUERY = gql(`
  query UserOrganizationStatementLog(
    $organizationId: String!
    $organizationCustomerStatementLogId: String!
  ) {
    userOrganizationStatementLog(
      organization_id: $organizationId
      organization_customer_statement_log_id: $organizationCustomerStatementLogId
    ) {
      ...OrganizationCustomerStatementLogFragment
    }
  }
`);
