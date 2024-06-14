import { ApolloClient } from '@apollo/client';
import {
  UnconnectedCustomerOrganizationStatementLineGetPDFMutation,
  UnconnectedCustomerOrganizationStatementLineGetPDFMutationVariables,
  UnconnectedCustomerOrganizationStatementLineQuery,
  UnconnectedCustomerOrganizationStatementLineQueryVariables,
  UnconnectedCustomerOrganizationStatementQuery,
  UnconnectedCustomerOrganizationStatementQueryVariables,
  UnconnectedCustomerOrganizationStatementRequestTokenMutation,
  UnconnectedCustomerOrganizationStatementRequestTokenMutationVariables,
  UserCustomerOrganizationInvoiceGetPDFMutation,
  UserCustomerOrganizationInvoiceGetPDFMutationVariables,
  UserCustomerOrganizationInvoiceSummaryQuery,
  UserCustomerOrganizationInvoiceSummaryQueryVariables,
  UserCustomerOrganizationStatementLineGetPDFMutation,
  UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  UserCustomerOrganizationStatementLineQuery,
  UserCustomerOrganizationStatementLineQueryVariables,
  UserCustomerOrganizationStatementQuery,
  UserCustomerOrganizationStatementQueryVariables,
} from '@api/gql/graphql';
import {
  ChildrenEdgeListResponse,
  processResponseAsList,
} from '@utils/processResponseAsList';
import { Res } from '@utils/response.type';
import {
  GET_AS_CUSTOMER_INVOICE_PDF_MUTATION,
  GET_AS_CUSTOMER_INVOICE_SUMMARY_QUERY,
  GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF,
  GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY,
  GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
  GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
  GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY,
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

  public getLine = async (
    variables: UserCustomerOrganizationStatementLineQueryVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY,
      variables,
    });

    return data!.userCustomerOrganizationStatementLine;
  };

  public getLinePDF = async (
    variables: UserCustomerOrganizationStatementLineGetPDFMutationVariables,
  ): Promise<Res<UserCustomerOrganizationStatementLineGetPDFMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_AS_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF,
      variables,
    });

    return data!.userCustomerOrganizationStatementLineGetPDF;
  };

  public getUnconnectedStatementToken = async (
    variables: UnconnectedCustomerOrganizationStatementRequestTokenMutationVariables,
  ): Promise<
    ChildrenEdgeListResponse<
      Res<UnconnectedCustomerOrganizationStatementRequestTokenMutation>
    >
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_TOKEN_QUERY,
      variables,
    });

    return data!.unconnectedCustomerOrganizationStatementRequestToken;
  };

  public getUnconnectedStatement = async (
    variables: UnconnectedCustomerOrganizationStatementQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UnconnectedCustomerOrganizationStatementQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_QUERY,
      variables,
    });

    return {
      ...data.unconnectedCustomerOrganizationStatement,
      ...processResponseAsList(
        data.unconnectedCustomerOrganizationStatement.data,
      ),
    };
  };

  public getInvoiceSummary = async (
    variables: UserCustomerOrganizationInvoiceSummaryQueryVariables,
  ): Promise<
    ChildrenEdgeListResponse<Res<UserCustomerOrganizationInvoiceSummaryQuery>>
  > => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_INVOICE_SUMMARY_QUERY,
      variables,
    });

    return {
      ...data.userCustomerOrganizationInvoiceSummary,
      ...processResponseAsList(
        data.userCustomerOrganizationInvoiceSummary.data,
      ),
    };
  };

  public getInvoicePdf = async (
    variables: UserCustomerOrganizationInvoiceGetPDFMutationVariables,
  ): Promise<Res<UserCustomerOrganizationInvoiceGetPDFMutation>> => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_CUSTOMER_INVOICE_PDF_MUTATION,
      variables,
    });

    return data!.userCustomerOrganizationInvoiceGetPDF;
  };

  public getUnconnectedStatementLine = async (
    variables: UnconnectedCustomerOrganizationStatementLineQueryVariables,
  ): Promise<Res<UnconnectedCustomerOrganizationStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query: GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_QUERY,
      variables,
    });

    return data!.unconnectedCustomerOrganizationStatementLine;
  };

  public getUnconnectedStatementLinePDF = async (
    variables: UnconnectedCustomerOrganizationStatementLineGetPDFMutationVariables,
  ): Promise<
    Res<UnconnectedCustomerOrganizationStatementLineGetPDFMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation:
        GET_AS_UNCONNECTED_CUSTOMER_ORGANIZATION_STATEMENT_LINE_PDF_MUTATION,
      variables,
    });

    return data!.unconnectedCustomerOrganizationStatementLineGetPDF;
  };
}
