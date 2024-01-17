import { gql } from '@gql';

export const ORGANIZATION_QUERY_FRAGMENT = gql(`
  fragment OrganizationFragment on Organization {
    id
    name
    email
    unique_name
    unique_code
    phone_number
    address_line_1
    address_number
    address_line_2
    address_city
    address_state
    address_zip_code
    address_country_code_iso_3
    address_lat
    address_lng
    primary_contact_name
    business_name
    business_industry
    business_number_of_employees
    business_address_line_1
    business_address_number
    business_address_line_2
    business_address_city
    business_address_state
    business_address_zip_code
    business_address_country_code_iso_3
    business_address_lat
    business_address_lng
    business_tax_code_type
    business_tax_code
    timezone
    language
    archived_at
    created_at
    updated_at

    logo_picture_file_id
    logo_picture_file {
      public_url
    }
    current_email_verification_id
    current_phone_number_verification_id
  }
`);

export const GET_ORGANIZATION_BASE_SETTINGS_QUERY = gql(`
  query UserOrganizationBaseSettings(
    $organizationId: String!
  ) {
    userOrganization(
      organization_id: $organizationId
    ) {
      setting_send_invoice_due_reminders
      setting_send_invoice_overdue_reminders
      setting_allow_invoice_due_snooze_reminders
      setting_allow_invoice_overdue_snooze_reminders
    }
  }
`);

export const UPDATE_ORGANIZATION_MUTATION = gql(`
  mutation UserOrganizationUpdate(
    $organizationId: String!
    $data: UserOrganizationUpdateSchema!
  ) {
    userOrganizationUpdate(
      organization_id: $organizationId
      data: $data
    ) {
      ...OrganizationFragment
    }
  }
`);
