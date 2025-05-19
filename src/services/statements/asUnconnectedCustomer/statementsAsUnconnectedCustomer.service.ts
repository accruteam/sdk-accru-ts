import {
  UnconnectedCustomerOrganizationStatementQuery,
  UnconnectedCustomerOrganizationStatementQueryVariables,
  UnconnectedCustomerOrganizationStatementLineQuery,
  UnconnectedCustomerOrganizationStatementLineQueryVariables,
  UnconnectedCustomerSynchronizeMutationVariables,
  UnconnectedCustomerOrganizationStatementLineGetPDFMutationVariables,
  UnconnectedCustomerOrganizationStatementLineGetPDFMutation,
  UnconnectedCustomerOrganizationStatementRequestTokenMutation,
  UnconnectedCustomerOrganizationStatementRequestTokenMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_REQUEST_ORGANIZATION_STATEMENT_TOKEN_QUERY,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_SYNC_MUTATION,
} from './statementsAsUnconnectedCustomer.queries';

export default class StatementsAsUnconnectedCustomer {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UnconnectedCustomerOrganizationStatementQueryVariables,
  ): Promise<Res<UnconnectedCustomerOrganizationStatementQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return data.unconnectedCustomerOrganizationStatement;
  };

  public getLine = async (
    variables: UnconnectedCustomerOrganizationStatementLineQueryVariables,
  ): Promise<Res<UnconnectedCustomerOrganizationStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
      variables,
    });

    return data.unconnectedCustomerOrganizationStatementLine;
  };

  public getLinePdf = async (
    variables: UnconnectedCustomerOrganizationStatementLineGetPDFMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationStatementLineGetPDFMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationStatementLineGetPDF;
  };

  public sync = async (
    variables: UnconnectedCustomerSynchronizeMutationVariables,
  ): Promise<void> => {
    await this.apolloClient.mutate({
      mutation: STATEMENT_AS_UNCONNECTED_CUSTOMER_SYNC_MUTATION,
      variables,
    });
  };

  public requestToken = async (
    variables: UnconnectedCustomerOrganizationStatementRequestTokenMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationStatementRequestTokenMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        STATEMENT_AS_UNCONNECTED_CUSTOMER_REQUEST_ORGANIZATION_STATEMENT_TOKEN_QUERY,
      variables,
    });

    return data!.unconnectedCustomerOrganizationStatementRequestToken;
  };
}
