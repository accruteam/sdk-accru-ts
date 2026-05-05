import {
  UserCustomerOrganizationStatementQuery,
  UserCustomerOrganizationStatementQueryVariables,
  UserCustomerOrganizationStatementLineQuery,
  UserCustomerOrganizationStatementLineQueryVariables,
  UserCustomerOrganizationSynchronizeMutationVariables,
  UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  UserCustomerOrganizationStatementLineGetPDFMutation,
} from '@api/gql/graphql';
import type { AccruClientContext } from '@/types/context.types';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
  STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
  STATEMENT_AS_CUSTOMER_SYNC_MUTATION,
} from './statementsAsCustomer.queries';

export default class StatementsAsCustomer {
  constructor(private context: AccruClientContext) {}

  public get = async (
    variables: UserCustomerOrganizationStatementQueryVariables,
  ): Promise<Res<UserCustomerOrganizationStatementQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationStatement;
  };

  public getLine = async (
    variables: UserCustomerOrganizationStatementLineQueryVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineQuery>> => {
    const { data } = await this.context.apolloClient.query({
      query: STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationStatementLine;
  };

  public getLinePdf = async (
    variables: UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineGetPDFMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        STATEMENT_AS_CUSTOMER_GET_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationStatementLineGetPDF;
  };

  public sync = async (
    variables: UserCustomerOrganizationSynchronizeMutationVariables,
  ): Promise<void> => {
    await this.context.apolloClient.mutate({
      mutation: STATEMENT_AS_CUSTOMER_SYNC_MUTATION,
      variables,
    });
  };
}
