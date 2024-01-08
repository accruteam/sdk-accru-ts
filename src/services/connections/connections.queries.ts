import { gql } from '@gql';

export const CONNECTION_QUERY_FRAGMENT = gql(`
  fragment OrganizationConnectionFragment on OrganizationConnection {
    id

    is_valid
    is_connected

    vendor_conn_status
    vendor_conn_status_at
    vendor_organization_id
    vendor_organization_name
    vendor_organization_email
    vendor_target_customer_id
    vendor_target_customer_name
    vendor_target_customer_email

    customer_conn_status
    customer_conn_status_at
    customer_organization_id
    customer_organization_name
    customer_organization_email
    customer_target_vendor_id
    customer_target_vendor_name
    customer_target_vendor_email

    created_at
    updated_at
  }
`);

export const GET_ALL_CONNECTIONS_QUERY = gql(`
  query UserOrganizationConnections(
    $organizationId: String!
    $status: ORGANIZATION_CONNECTION_STATUS
  ) {
    userOrganizationConnections(
      organization_id: $organizationId
      status: $status
    ) {
      totalCount
      edges {
        cursor
        node {
          ...OrganizationConnectionFragment
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

export const GET_CONNECTION_QUERY = gql(`
  query UserOrganizationConnection(
    $organizationId: String!
    $organizationConnectionId: String!
  ) {
    userOrganizationConnection(
      organization_id: $organizationId
      organization_connection_id: $organizationConnectionId
    ) {
      ...OrganizationConnectionFragment
    }
  }
`);

export const VENDOR_INVITE_CUSTOMER_MUTATION = gql(`
  mutation UserOrganizationConnectionInviteCustomer(
    $organizationId: String!
    $organizationCustomerId: String!
  ) {
    userOrganizationConnectionInviteCustomer(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
    ) {
      ...OrganizationConnectionFragment
    }
  }
`);

export const CUSTOMER_INVITE_VENDOR_MUTATION = gql(`
  mutation UserOrganizationConnectionInviteVendor(
    $organizationId: String!
    $organizationVendorId: String!
  ) {
    userOrganizationConnectionInviteVendor(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
    ) {
      ...OrganizationConnectionFragment
    }
  }
`);

export const ACCEPT_CONNECTION_MUTATION = gql(`
  mutation UserOrganizationConnectionAccept(
    $organizationId: String!
    $organizationConnectionId: String!
  ) {
    userOrganizationConnectionAccept(
      organization_id: $organizationId
      organization_connection_id: $organizationConnectionId
    ) {
      ...OrganizationConnectionFragment
    }
  }
`);

export const REJECT_CONNECTION_MUTATION = gql(`
  mutation UserOrganizationConnectionReject(
    $organizationId: String!
    $organizationConnectionId: String!
  ) {
    userOrganizationConnectionReject(
      organization_id: $organizationId
      organization_connection_id: $organizationConnectionId
    ) {
      ...OrganizationConnectionFragment
    }
  }
`);

export const UPDATE_CUSTOMER_CONN_LOCK_MUTATION = gql(`
  mutation UserOrganizationCustomerConnLock(
    $organizationId: String!
    $organizationCustomerId: String!
  ) {
    userOrganizationCustomerConnLock(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
    ) {
      ...OrganizationCustomerFragment
    }
  }
`);

export const UPDATE_CUSTOMER_CONN_UNLOCK_MUTATION = gql(`
  mutation UserOrganizationCustomerConnUnlock(
    $organizationId: String!
    $organizationCustomerId: String!
  ) {
    userOrganizationCustomerConnUnlock(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId
    ) {
      ...OrganizationCustomerFragment
    }
  }
`);

export const UPDATE_VENDOR_CONN_LOCK_MUTATION = gql(`
  mutation UserOrganizationVendorConnLock(
    $organizationId: String!
    $organizationVendorId: String!
  ) {
    userOrganizationVendorConnLock(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
    ) {
      ...OrganizationVendorFragment
    }
  }
`);

export const UPDATE_VENDOR_CONN_UNLOCK_MUTATION = gql(`
  mutation UserOrganizationVendorConnUnlock(
    $organizationId: String!
    $organizationVendorId: String!
  ) {
    userOrganizationVendorConnUnlock(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
    ) {
      ...OrganizationVendorFragment
    }
  }
`);
