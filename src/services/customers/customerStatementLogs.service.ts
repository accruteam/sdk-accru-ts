import type { AccruClientContext } from '@/types/context.types';
import {
  UserOrganizationStatementLogQuery,
  UserOrganizationStatementLogQueryVariables,
  UserOrganizationStatementLogsQuery,
  UserOrganizationStatementLogsQueryVariables,
} from '@api/gql/graphql';
import {
  ListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  GET_CUSTOMER_STATEMENT_LOG_QUERY,
  GET_CUSTOMER_STATEMENT_LOGS_QUERY,
} from './customers.queries';

export default class CustomerStatementLogs {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserOrganizationStatementLogsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationStatementLogsQuery>>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_LOGS_QUERY,
      variables,
    });
    return processResponseAsList(data!.userOrganizationStatementLogs);
  };

  public getOne = async (
    variables: UserOrganizationStatementLogQueryVariables,
  ): Promise<Res<UserOrganizationStatementLogQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_LOG_QUERY,
      variables,
    });
    return data!.userOrganizationStatementLog;
  };
}
