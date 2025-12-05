import { ApolloClient } from '@apollo/client/core';
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
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationStatementLogsQueryVariables,
  ): Promise<ListResponse<Res<UserOrganizationStatementLogsQuery>>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_LOGS_QUERY,
      variables,
    });
    return processResponseAsList(data.userOrganizationStatementLogs);
  };

  public getOne = async (
    variables: UserOrganizationStatementLogQueryVariables,
  ): Promise<Res<UserOrganizationStatementLogQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_CUSTOMER_STATEMENT_LOG_QUERY,
      variables,
    });
    return data.userOrganizationStatementLog;
  };
}
