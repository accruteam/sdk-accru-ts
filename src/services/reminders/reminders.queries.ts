import { gql } from '@gql';

export const REMINDER_SETTING_QUERY_FRAGMENT = gql(`
  fragment OrganizationReminderSettingFragment on OrganizationReminderSetting {
    id
    due_date_mode
    days_amount
    repeat_mode
    repeat_value
    selected_hour
    created_at
    updated_at
    organization_id
    organization_customer_id
    organization_project_id
    organization_invoice_id
  }
`);

export const GET_ALL_REMINDER_SETTINGS_QUERY = gql(`
  query UserOrganizationReminderSettings(
    $organizationId: String!,
    $organizationCustomerId: String,
    $organizationProjectId: String,
    $organizationInvoiceId: String,

    $dueDateMode: REMINDER_DUE_DATE_MODE,

    $after: ConnectionCursor,
    $first: Int,

    $before: ConnectionCursor,
    $last: Int,

    $skip: Int,
    $take: Int,

    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationReminderSettings(
      organization_id: $organizationId

      organization_customer_id: $organizationCustomerId
      organization_project_id: $organizationProjectId
      organization_invoice_id: $organizationInvoiceId

      due_date_mode: $dueDateMode

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
            ...OrganizationReminderSettingFragment
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

export const GET_REMINDER_SETTING_MUTATION = gql(`
  query UserOrganizationReminderSetting($organizationId: String!, $organizationReminderSettingId: String!) {
    userOrganizationReminderSetting(
      organization_id: $organizationId
      organization_reminder_setting_id: $organizationReminderSettingId
    ) {
      ...OrganizationReminderSettingFragment
    }
  }
`);

export const CREATE_REMINDER_SETTING_MUTATION = gql(`
  mutation UserOrganizationReminderSettingCreate($organizationId: String!, $data: UserOrganizationReminderSettingSchema!) {
    userOrganizationReminderSettingCreate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationReminderSettingFragment
    }
  }
`);

export const UPDATE_REMINDER_SETTING_MUTATION = gql(`
  mutation UserOrganizationReminderSettingUpdate(
    $organizationId: String!,
    $organizationReminderSettingId: String!,
    $data: UserOrganizationReminderSettingSchema!
  ) {
    userOrganizationReminderSettingUpdate(
      organization_id: $organizationId
      organization_reminder_setting_id: $organizationReminderSettingId
      data: $data
    ) {
      ...OrganizationReminderSettingFragment
    }
  }
`);

export const DELETE_REMINDER_SETTING_MUTATION = gql(`
  mutation UserOrganizationReminderSettingDelete($organizationId: String!, $organizationReminderSettingId: String!) {
    userOrganizationReminderSettingDelete(
      organization_id: $organizationId
      organization_reminder_setting_id: $organizationReminderSettingId
    ) {
      ...OrganizationReminderSettingFragment
    }
  }
`);
