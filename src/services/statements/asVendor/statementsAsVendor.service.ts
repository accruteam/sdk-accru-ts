import {
  UserOrganizationCustomerStatementQuery,
  UserOrganizationCustomerStatementQueryVariables,
  UserOrganizationCustomerStatementLineQuery,
  UserOrganizationCustomerStatementLineQueryVariables,
  UserOrganizationCustomerStatementLineGetPDFQueryVariables,
  UserOrganizationCustomerStatementLineGetPDFQuery,
  UserOrganizationCustomerSynchronizeMutationVariables,
  UserOrganizationCustomerSendStatementEmailMutationVariables,
  UserOrganizationCustomerSendStatementEmailMutation,
  UserOrganizationCustomerGetStatementLinkMutation,
  UserOrganizationCustomerGetStatementLinkMutationVariables,
} from '@api/gql/graphql';
import { ApolloClient } from '@apollo/client';
import { Res } from '@utils/response.type';
import {
  STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_PDF_QUERY,
  STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_QUERY,
  STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_QUERY,
  STATEMENT_AS_VENDOR_SYNC_CUSTOMER_MUTATION,
  STATEMENT_AS_VENDOR_SEND_CUSTOMER_STATEMENT_EMAIL_MUTATION,
  STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINK_MUTATION,
} from './statementsAsVendor.queries';

export default class StatementsAsVendor {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public get = async (
    variables: UserOrganizationCustomerStatementQueryVariables,
  ): Promise<Res<UserOrganizationCustomerStatementQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_QUERY,
      variables,
    });

    return data.userOrganizationCustomerStatement;
  };

  public getLine = async (
    variables: UserOrganizationCustomerStatementLineQueryVariables,
  ): Promise<Res<UserOrganizationCustomerStatementLineQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_QUERY,
      variables,
    });

    return data.userOrganizationCustomerStatementLine;
  };

  public getLinePdf = async (
    variables: UserOrganizationCustomerStatementLineGetPDFQueryVariables,
  ): Promise<Res<UserOrganizationCustomerStatementLineGetPDFQuery>> => {
    const { data } = await this.apolloClient.query({
      query: STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINE_PDF_QUERY,
      variables,
    });

    return data.userOrganizationCustomerStatementLineGetPDF;
  };

  public sync = async (
    variables: UserOrganizationCustomerSynchronizeMutationVariables,
  ): Promise<void> => {
    await this.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_SYNC_CUSTOMER_MUTATION,
      variables,
    });
  };

  public sendEmail = async (
    variables: UserOrganizationCustomerSendStatementEmailMutationVariables,
  ): Promise<Res<UserOrganizationCustomerSendStatementEmailMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_SEND_CUSTOMER_STATEMENT_EMAIL_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerSendStatementEmail;
  };

  public getLink = async (
    variables: UserOrganizationCustomerGetStatementLinkMutationVariables,
  ): Promise<Res<UserOrganizationCustomerGetStatementLinkMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: STATEMENT_AS_VENDOR_GET_CUSTOMER_STATEMENT_LINK_MUTATION,
      variables,
    });

    return data!.userOrganizationCustomerGetStatementLink;
  };
}
