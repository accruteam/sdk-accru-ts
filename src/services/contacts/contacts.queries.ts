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
          email
          id
          is_default
          name
          phone_number
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
          id
          name
          email
          phone_number
          is_default
          send_invoice_reminders
          created_at
          updated_at
          organization_customer_id
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
      id
      name
      email
      phone_number
      is_default
      organization_vendor_id
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
      id
      name
      email
      phone_number
      is_default
      send_invoice_reminders
      created_at
      updated_at
      organization_customer_id
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
      email
      id
      is_default
      name
      phone_number
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
      id
      name
      email
      phone_number
      is_default
      send_invoice_reminders
      created_at
      updated_at
      organization_customer_id
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
      email
      id
      name
      organization_vendor_id
      phone_number
      is_default
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
      id
      name
      email
      phone_number
      is_default
      send_invoice_reminders
      created_at
      updated_at
      organization_customer_id
    }
  }
`);
