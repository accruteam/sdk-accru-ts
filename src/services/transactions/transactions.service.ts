import { ApolloClient } from '@apollo/client';
import {
  UserOrganizationInvoiceTransactionGetAcctProviderPdfMutation,
  UserOrganizationInvoiceTransactionGetAcctProviderPdfMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { GET_TRANSACTION_ACCT_PROVIDER_PDF_MUTATION } from './transactions.queries';

export default class Transactions {
  constructor(private apolloClient: ApolloClient<unknown>) {}

  public getAcctProviderPdf = async (
    variables: UserOrganizationInvoiceTransactionGetAcctProviderPdfMutationVariables,
  ): Promise<
    Res<UserOrganizationInvoiceTransactionGetAcctProviderPdfMutation>
  > => {
    const { data } = await this.apolloClient.mutate({
      mutation: GET_TRANSACTION_ACCT_PROVIDER_PDF_MUTATION,
      variables,
    });

    return data!.userOrganizationInvoiceTransactionGetAcctProviderPDF;
  };
}
