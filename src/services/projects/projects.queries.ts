import { gql } from '@gql';

export const ORGANIZATION_PROJECT_CHANGE_FRAGMENT = gql(`
  fragment OrganizationProjectChangeFragment on OrganizationProjectChange {
    id

    organization_project_change_request_id
    previous_budget_amount
    previous_ends_at
    previous_name
    previous_starts_at

    created_at
    updated_at
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_FRAGMENT = gql(`
  fragment OrganizationProjectChangeRequestFragment on OrganizationProjectChangeRequest {
    id

    accepted_at
    budget_amount
    canceled_at
    contract_url
    created_by_user_id
    created_by_user_name
    created_side
    ends_at
    expires_at
    finished_by_user_id
    finished_by_user_name
    finished_side
    name
    published_at
    rejected_at
    sequence_number
    starts_at
    status
    organization_project_id

    organization_project_change {
      ...OrganizationProjectChangeFragment
    }

    created_at
    updated_at
  }
`);

export const ORGANIZATION_PROJECT_FRAGMENT = gql(`
  fragment OrganizationProjectFragment on OrganizationProject {
    id

    budget_amount
    budget_currency_code
    canceled_at
    completed_at
    contract_url
    description
    ends_at
    name
    starts_at
    status

    organization_id
    organization {
      name
    }

    organization_customer_id
    organization_customer {
      name
    }

    created_at
    updated_at
  }
`);

export const ORGANIZATION_PROJECT_GET_MANY_AS_VENDOR_QUERY = gql(`
  query UserOrganizationProjects(
    $organizationId: String!,
    $organizationCustomerId: String,

    $name: String,

    $started: Boolean,
    $ended: Boolean,
    $canceled: Boolean,
    $completed: Boolean,

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationProjects(
      organization_id: $organizationId
      organization_customer_id: $organizationCustomerId

      name: $name

      started: $started
      ended: $ended
      canceled: $canceled
      completed: $completed

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
          ...OrganizationProjectFragment
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

export const ORGANIZATION_PROJECT_GET_ONE_AS_VENDOR_QUERY = gql(`
  query UserOrganizationProject(
    $organizationId: String!,
    $organizationProjectId: String!,
  ) {
    userOrganizationProject(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CREATE_AS_VENDOR_MUTATION = gql(`
  mutation UserOrganizationProjectCreate(
    $organizationId: String!
    $data: UserOrganizationProjectCreateSchema!,
  ) {
    userOrganizationProjectCreate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_UPDATE_AS_VENDOR_MUTATION = gql(`
  mutation UserOrganizationProjectUpdate(
    $organizationId: String!,
    $organizationProjectId: String!
    $data: UserOrganizationProjectUpdateSchema!,
  ) {
    userOrganizationProjectUpdate(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      data: $data
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_DELETE_AS_VENDOR_MUTATION = gql(`
  mutation UserOrganizationProjectDelete(
    $organizationId: String!,
    $organizationProjectId: String!
  ) {
    userOrganizationProjectDelete(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_VENDOR_MUTATION =
  gql(`
  mutation UserOrganizationProjectChangeRequestCreate(
    $organizationId: String!,
    $organizationProjectId: String!
    $data: OrganizationProjectChangeRequestUpsertSchema!,
  ) {
    userOrganizationProjectChangeRequestCreate(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      data: $data
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_VENDOR_MUTATION =
  gql(`
  mutation UserOrganizationProjectChangeRequestUpdate(
    $organizationId: String!,
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!,
    $data: OrganizationProjectChangeRequestUpsertSchema!,
  ) {
    userOrganizationProjectChangeRequestUpdate(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
      data: $data
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_VENDOR_MUTATION =
  gql(`
  mutation UserOrganizationProjectChangeRequestCancel(
    $organizationId: String!,
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!,
  ) {
    userOrganizationProjectChangeRequestCancel(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_VENDOR_MUTATION =
  gql(`
  mutation UserOrganizationProjectChangeRequestAccept(
    $organizationId: String!,
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!,
  ) {
    userOrganizationProjectChangeRequestAccept(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_VENDOR_MUTATION =
  gql(`
  mutation UserOrganizationProjectChangeRequestReject(
    $organizationId: String!,
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!,
  ) {
    userOrganizationProjectChangeRequestReject(
      organization_id: $organizationId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_GET_MANY_AS_CUSTOMER_QUERY = gql(`
  query UserCustomerOrganizationProjects(
    $organizationId: String!,
    $organizationVendorId: String!,

    $name: String,

    $started: Boolean,
    $ended: Boolean,
    $canceled: Boolean,
    $completed: Boolean,

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    userCustomerOrganizationProjects(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      name: $name

      started: $started
      ended: $ended
      canceled: $canceled
      completed: $completed

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
          ...OrganizationProjectFragment
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

export const ORGANIZATION_PROJECT_GET_ONE_AS_CUSTOMER_QUERY = gql(`
  query UserCustomerOrganizationProject(
    $organizationId: String!,
    $organizationVendorId: String!
    $organizationProjectId: String!,
  ) {
    userCustomerOrganizationProject(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_CREATE_AS_CUSTOMER_MUTATION =
  gql(`
  mutation UserCustomerOrganizationProjectChangeRequestCreate(
    $organizationId: String!,
    $organizationVendorId: String!,
    $organizationProjectId: String!,
    $data: OrganizationProjectChangeRequestUpsertSchema!,
  ) {
    userCustomerOrganizationProjectChangeRequestCreate(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
      data: $data
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_UPDATE_AS_CUSTOMER_MUTATION =
  gql(`
  mutation UserCustomerOrganizationProjectChangeRequestUpdate(
    $organizationId: String!,
    $organizationVendorId: String!,
    $organizationProjectId: String!,
    $organizationProjectChangeRequestId: String!,
    $data: OrganizationProjectChangeRequestUpsertSchema!,
  ) {
    userCustomerOrganizationProjectChangeRequestUpdate(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
      data: $data
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_CANCEL_AS_CUSTOMER_MUTATION =
  gql(`
  mutation UserCustomerOrganizationProjectChangeRequestCancel(
    $organizationId: String!,
    $organizationVendorId: String!,
    $organizationProjectId: String!,
    $organizationProjectChangeRequestId: String!,
  ) {
    userCustomerOrganizationProjectChangeRequestCancel(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_CUSTOMER_MUTATION =
  gql(`
  mutation UserCustomerOrganizationProjectChangeRequestAccept(
    $organizationId: String!,
    $organizationVendorId: String!,
    $organizationProjectId: String!,
    $organizationProjectChangeRequestId: String!,
  ) {
    userCustomerOrganizationProjectChangeRequestAccept(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_CUSTOMER_MUTATION =
  gql(`
  mutation UserCustomerOrganizationProjectChangeRequestReject(
    $organizationId: String!,
    $organizationVendorId: String!,
    $organizationProjectId: String!,
    $organizationProjectChangeRequestId: String!,
  ) {
    userCustomerOrganizationProjectChangeRequestReject(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId
      organization_project_id: $organizationProjectId
      organization_project_change_request_id: $organizationProjectChangeRequestId
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_GET_MANY_AS_UNCONNECTED_CUSTOMER_QUERY = gql(`
  query UnconnectedCustomerOrganizationProjects(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $name: String

    $started: Boolean
    $ended: Boolean
    $canceled: Boolean
    $completed: Boolean

    $after: ConnectionCursor
    $first: Int

    $before: ConnectionCursor
    $last: Int

    $skip: Int
    $take: Int

    $sorting: [SortingFieldSchema!]
  ) {
    unconnectedCustomerOrganizationProjects(
      unique_code: $uniqueCode
      email: $email
      token: $token

      name: $name

      started: $started
      ended: $ended
      canceled: $canceled
      completed: $completed

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
          ...OrganizationProjectFragment
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

export const ORGANIZATION_PROJECT_GET_ONE_AS_UNCONNECTED_CUSTOMER_QUERY = gql(`
  query UnconnectedCustomerOrganizationProject(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationId: String
    $organizationProjectId: String!
  ) {
    unconnectedCustomerOrganizationProject(
      unique_code: $uniqueCode
      email: $email
      token: $token

      organization_id: $organizationId
      organization_project_id: $organizationProjectId
    ) {
      ...OrganizationProjectFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_ACTION_REQUEST_TOKEN_AS_UNCONNECTED_CUSTOMER_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationProjectChangeRequestActionRequestToken(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationId: String
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!
  ) {
    unconnectedCustomerOrganizationProjectChangeRequestActionRequestToken(
      email: $email
      organization_id: $organizationId
      organization_project_change_request_id: $organizationProjectChangeRequestId
      organization_project_id: $organizationProjectId
      token: $token
      unique_code: $uniqueCode
    )
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_ACCEPT_AS_UNCONNECTED_CUSTOMER_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationProjectChangeRequestAccept(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationId: String
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!
    $verificationCode: String!
  ) {
    unconnectedCustomerOrganizationProjectChangeRequestAccept(
      email: $email
      organization_id: $organizationId
      organization_project_change_request_id: $organizationProjectChangeRequestId
      organization_project_id: $organizationProjectId
      token: $token
      unique_code: $uniqueCode
      verification_code: $verificationCode
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);

export const ORGANIZATION_PROJECT_CHANGE_REQUEST_REJECT_AS_UNCONNECTED_CUSTOMER_MUTATION =
  gql(`
  mutation UnconnectedCustomerOrganizationProjectChangeRequestReject(
    $uniqueCode: String!
    $email: String!
    $token: String!

    $organizationId: String
    $organizationProjectId: String!
    $organizationProjectChangeRequestId: String!
    $verificationCode: String!
  ) {
    unconnectedCustomerOrganizationProjectChangeRequestReject(
      email: $email
      organization_id: $organizationId
      organization_project_change_request_id: $organizationProjectChangeRequestId
      organization_project_id: $organizationProjectId
      token: $token
      unique_code: $uniqueCode
      verification_code: $verificationCode
    ) {
      ...OrganizationProjectChangeRequestFragment
    }
  }
`);
