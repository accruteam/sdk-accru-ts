import {
  UserCustomerOrganizationStatementQuery,
  UserCustomerOrganizationStatementQueryVariables,
  UserCustomerOrganizationStatementLineQuery,
  UserCustomerOrganizationStatementLineQueryVariables,
  UserCustomerOrganizationSynchronizeMutationVariables,
  UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  UserCustomerOrganizationStatementLineGetPDFMutation,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
  STATEMENT_AS_CUSTOMER_SYNC_MUTATION,
} from './statementsAsCustomer.queries';

export default class StatementsAsCustomer {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserCustomerOrganizationStatementQueryVariables,
  ): Promise<Res<UserCustomerOrganizationStatementQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return data.userCustomerOrganizationStatement;
  };

  public getLine = async (
    variables: UserCustomerOrganizationStatementLineQueryVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
      variables,
    });

    return data.userCustomerOrganizationStatementLine;
  };

  public getLinePdf = async (
    variables: UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineGetPDFMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationStatementLineGetPDF;
  };

  public sync = async (
    variables: UserCustomerOrganizationSynchronizeMutationVariables,
  ): Promise<void> => {
    await this.apolloClient.mutate({
      mutation: STATEMENT_AS_CUSTOMER_SYNC_MUTATION,
      variables,
    });
  };
}
