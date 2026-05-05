import type { AccruClientContext } from '@/types/context.types';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import {
  UserOrganizationBillQuery,
  UserOrganizationBillQueryVariables,
  UserOrganizationBillSummaryQuery,
  UserOrganizationBillSummaryQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { BILL_GET_QUERY, BILLS_GET_SUMMARY_QUERY } from './bills.queries';

export default class Bills {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserOrganizationBillSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserOrganizationBillSummaryQuery>>
  > => {
    const { data } = await this.context.apolloClient.query({
      query: BILLS_GET_SUMMARY_QUERY,
      fetchPolicy: 'no-cache',
      variables,
    });

    return {
      ...data!.userOrganizationBillSummary,
      ...processResponseAsList(data!.userOrganizationBillSummary.data),
    };
  };

  public getOne = async (
    variables: UserOrganizationBillQueryVariables,
  ): Promise<Res<UserOrganizationBillQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: BILL_GET_QUERY,
      variables,
    });

    return data!.userOrganizationBill;
  };
}
