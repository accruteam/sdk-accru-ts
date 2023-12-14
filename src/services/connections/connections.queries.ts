import { DocumentNode, gql } from '@apollo/client';
import { CUSTOMER_QUERY_FRAGMENT } from '../customers/customers.queries';

export const UPDATE_CUSTOMER_CONN_LOCK_MUTATION: DocumentNode = gql`
  mutation UserOrganizationCustomerConnLock($organizationId: String!, $organizationCustomerId: String!) {
    userOrganizationCustomerConnLock(organization_id: $organizationId, organization_customer_id: $organizationCustomerId) {
      ...OrganizationCustomerFields
    }
  }

  ${CUSTOMER_QUERY_FRAGMENT}
`;

export const UPDATE_CUSTOMER_CONN_UNLOCK_MUTATION: DocumentNode = gql`
  mutation UserOrganizationCustomerConnUnlock($organizationId: String!, $organizationCustomerId: String!) {
    userOrganizationCustomerConnUnlock(organization_id: $organizationId, organization_customer_id: $organizationCustomerId) {
      ...OrganizationCustomerFields
    }
  }

  ${CUSTOMER_QUERY_FRAGMENT}
`;
