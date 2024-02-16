import { ApolloClient } from '@apollo/client';
import {
  UnconnectedUserCustomerOrganizationStatementQuery,
  UnconnectedUserCustomerOrganizationStatementQueryVariables,
  UnconnectedUserCustomerOrganizationStatementRequestTokenMutation,
  UnconnectedUserCustomerOrganizationStatementRequestTokenMutationVariables,
  UserCustomerOrganizationStatementQuery,
  UserCustomerOrganizationStatementQueryVariables,
} from '@api/gql/graphql';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
  GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
  GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY,
} from './statements.queries';

export default class Statements {
  private apolloClient: ApolloClient<unknown>;

  constructor(apolloClient: ApolloClient<unknown>) {
    this.apolloClient = apolloClient;
  }

  public get = async (
    variables: UserCustomerOrganizationStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserCustomerOrganizationStatementQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return {
      ...data.userCustomerOrganizationStatement,
      ...processResponseAsList(data.userCustomerOrganizationStatement.data),
    };
  };

  public getUnconnectedStatement = async (
    variables: UnconnectedUserCustomerOrganizationStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<
      Res<UnconnectedUserCustomerOrganizationStatementQuery>
    >
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return {
      ...data.unconnectedUserCustomerOrganizationStatement,
      ...processResponseAsList(
        data.unconnectedUserCustomerOrganizationStatement.data,
      ),
    };
  };

  public getUnconnectedStatementToken = async (
    variables: UnconnectedUserCustomerOrganizationStatementRequestTokenMutationVariables,
  ): Promise<
    ChildrenEdgeListResponse<
      Res<UnconnectedUserCustomerOrganizationStatementRequestTokenMutation>
    >
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY,
      variables,
    });

    return {
      ...data!.unconnectedUserCustomerOrganizationStatementRequestToken,
      ...processResponseAsList(
        data!.unconnectedUserCustomerOrganizationStatementRequestToken.data,
      ),
    };
  };
}
