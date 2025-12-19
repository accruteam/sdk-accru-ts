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

export const GET_CUSTOMER_NOTIFICATIONS_QUERY = gql(`
  query UserOrganizationCustomerNotifications(
    $organizationId: String!

    $organizationCustomerId: String
    $channel: NOTIFICATION_CHANNEL

    $featureType: NOTIFICATION_FEATURE_TYPE
    $featureCode: String
    
    $relatedEntityId: String
    $relatedEntityType: NOTIFICATION_RELATED_ENTITY_TYPE

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationCustomerNotifications(
      organization_id: $organizationId

      channel: $channel
      feature_type: $featureType
      feature_code: $featureCode
      organization_customer_id: $organizationCustomerId
      related_entity_id: $relatedEntityId
      related_entity_type: $relatedEntityType

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
          ...OrganizationCustomerNotificationFragment
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

export const GET_CUSTOMER_NOTIFICATION_QUERY = gql(`
  query UserOrganizationCustomerNotification(
    $organizationId: String!
    $notificationId: String!
  ) {
    userOrganizationCustomerNotification(
      organization_id: $organizationId
      notification_id: $notificationId
    ) {
      ...OrganizationCustomerNotificationFragment
    }
  }
`);
