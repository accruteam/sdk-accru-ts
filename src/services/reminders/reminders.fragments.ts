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
