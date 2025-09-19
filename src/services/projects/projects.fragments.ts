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
