import { ApolloClient } from '@apollo/client/core';
import {
  UserOrganizationInvoiceTransactionGetPDFMutation,
  UserOrganizationInvoiceTransactionGetPDFMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { GET_TRANSACTION_PDF_MUTATION } from './transactions.queries';

export default class Transactions {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public getAcctProviderPDF = async (
    variables: UserOrganizationInvoiceTransactionGetPDFMutationVariables,
  ): Promise<Res<UserOrganizationInvoiceTransactionGetPDFMutation>> => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_TRANSACTION_PDF_MUTATION,
      variables,
    });

    return data!.userOrganizationInvoiceTransactionGetPDF;
  };
}
