import { gql } from '@gql';

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

export const UPDATE_REMINDER_GLOBAL_SETTING_MUTATION = gql(`
  mutation UserOrganizationReminderSettingGlobalUpdate(
    $organizationId: String!
    $settingSendInvoiceDueReminders: Boolean!
    $settingSendInvoiceOverdueReminders: Boolean!
    $settingAllowInvoiceDueSnoozeReminders: Boolean!
    $settingAllowInvoiceOverdueSnoozeReminders: Boolean!
  ) {
    userOrganizationReminderSettingGlobalUpdate(
      organization_id: $organizationId
      setting_send_invoice_due_reminders: $settingSendInvoiceDueReminders
      setting_send_invoice_overdue_reminders: $settingSendInvoiceOverdueReminders
      setting_allow_invoice_due_snooze_reminders: $settingAllowInvoiceDueSnoozeReminders
      setting_allow_invoice_overdue_snooze_reminders: $settingAllowInvoiceOverdueSnoozeReminders
    ) {
      setting_send_invoice_due_reminders
      setting_send_invoice_overdue_reminders
      setting_allow_invoice_due_snooze_reminders
      setting_allow_invoice_overdue_snooze_reminders
    }
  }
`);
