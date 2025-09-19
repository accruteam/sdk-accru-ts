import { gql } from '@gql';

export const GET_CONTACTS_QUERY = gql(`
  query userOrganizationVendorContacts(
    $organizationVendorId: String!
    $organizationId: String!
  ) {
    userOrganizationVendorContacts(
      organization_vendor_id: $organizationVendorId
      organization_id: $organizationId
    ) {
      totalCount
      edges {
        cursor
        node {
          ...VendorContactFragment
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

export const GET_CUSTOMERS_CONTACTS_QUERY = gql(`
  query UserOrganizationCustomerContacts(
    $organizationCustomerId: String!
    $organizationId: String!
  ) {
    userOrganizationCustomerContacts(
      organization_customer_id: $organizationCustomerId
      organization_id: $organizationId
    ) {
      totalCount
      edges {
        cursor
        node {
          ...CustomerContactFragment
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

export const CREATE_CONTACT_MUTATION = gql(`
  mutation userOrganizationVendorContactCreate(
    $organizationId: String!
    $organizationVendorId: String!
    $data: UserOrganizationVendorContactCreateSchema!
  ) {
    userOrganizationVendorContactCreate(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      data: $data
    ) {
      ...VendorContactFragment
    }
  }
`);

export const CREATE_CUSTOMER_CONTACT_QUERY = gql(`
  mutation UserOrganizationCustomerContactCreate(
    $data: UserOrganizationCustomerContactCreateSchema!
    $organizationCustomerId: String!
    $organizationId: String!
  ) {
    userOrganizationCustomerContactCreate(
      data: $data
      organization_customer_id: $organizationCustomerId
      organization_id: $organizationId
    ) {
      ...CustomerContactFragment
    }
  }
`);

export const UPDATE_CONTACT_MUTATION = gql(`
  mutation UserOrganizationVendorContactUpdate(
    $data: UserOrganizationVendorContactUpdateSchema!
    $organizationVendorContactId: String!
    $organizationVendorId: String!
    $organizationId: String!
  ) {
    userOrganizationVendorContactUpdate(
      data: $data
      organization_vendor_contact_id: $organizationVendorContactId
      organization_vendor_id: $organizationVendorId
      organization_id: $organizationId
    ) {
      ...VendorContactFragment
    }
  }
`);

export const UPDATE_CUSTOMER_CONTACT_MUTATION = gql(`
  mutation UserOrganizationCustomerContactUpdate(
    $data: UserOrganizationCustomerContactUpdateSchema!
    $organizationCustomerContactId: String!
    $organizationCustomerId: String!
    $organizationId: String!
  ) {
    userOrganizationCustomerContactUpdate(
      data: $data
      organization_customer_contact_id: $organizationCustomerContactId
      organization_customer_id: $organizationCustomerId
      organization_id: $organizationId
    ) {
      ...CustomerContactFragment
    }
  }
`);

export const DELETE_CONTACT_MUTATION = gql(`
  mutation UserOrganizationVendorContactDelete(
    $organizationVendorContactId: String!
    $organizationVendorId: String!
    $organizationId: String!
  ) {
    userOrganizationVendorContactDelete(
      organization_vendor_contact_id: $organizationVendorContactId
      organization_vendor_id: $organizationVendorId
      organization_id: $organizationId
    ) {
      ...VendorContactFragment
    }
  }
`);

export const DELETE_CUSTOMER_CONTACT_MUTATION = gql(`
  mutation UserOrganizationCustomerContactDelete(
    $organizationCustomerContactId: String!
    $organizationCustomerId: String!
    $organizationId: String!
  ) {
    userOrganizationCustomerContactDelete(
      organization_customer_contact_id: $organizationCustomerContactId
      organization_customer_id: $organizationCustomerId
      organization_id: $organizationId
    ) {
      ...CustomerContactFragment
    }
  }
`);
