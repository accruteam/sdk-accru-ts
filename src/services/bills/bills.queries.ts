import { gql } from '@gql';

export const BILLS_GET_SUMMARY_QUERY = gql(`
  query UserOrganizationBillSummary(
    $organizationId: String!
    $organizationVendorId: String
    $currency: CURRENCY
    $startDate: DateTime
    $endDate: DateTime

    $status: BILL_STATUS
    $isOverdue: Boolean

    $latestAcctProviderStatus: BILL_STATUS
    $latestAcctProviderIsOverdue: Boolean

    $after: ConnectionCursor
    $first: Int
    $before: ConnectionCursor
    $last: Int
    $skip: Int
    $take: Int
    $sorting: [SortingFieldSchema!]
  ) {
    userOrganizationBillSummary(
      organization_id: $organizationId
      organization_vendor_id: $organizationVendorId

      currency: $currency
      start_date: $startDate
      end_date: $endDate

      status: $status
      is_overdue: $isOverdue

      latest_acct_provider_status: $latestAcctProviderStatus
      latest_acct_provider_is_overdue: $latestAcctProviderIsOverdue

      after: $after
      first: $first

      before: $before
      last: $last

      skip: $skip
      take: $take

      sorting: $sorting
    ) {
      ...OrganizationBillSummaryFragment
    }
  }
`);

export const BILL_GET_QUERY = gql(`
  query UserOrganizationBill(
    $organizationId: String!
    $organizationBillId: String!
  ) {
    userOrganizationBill(
      organization_id: $organizationId
      organization_bill_id: $organizationBillId
    ) {
      ...OrganizationBillFragment
    }
  }
`);
