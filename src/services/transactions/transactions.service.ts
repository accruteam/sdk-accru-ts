import type { AccruClientContext } from '@/types/context.types';
import {
  UserOrganizationInvoiceTransactionGetPDFMutation,
  UserOrganizationInvoiceTransactionGetPDFMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { GET_TRANSACTION_PDF_MUTATION } from './transactions.queries';

export default class Transactions {
  constructor(private context: AccruClientContext) {}

  public getAcctProviderPDF = async (
    variables: UserOrganizationInvoiceTransactionGetPDFMutationVariables,
  ): Promise<Res<UserOrganizationInvoiceTransactionGetPDFMutation>> => {
    const { data } = await this.context.apolloClient.mutate({
      mutation: GET_TRANSACTION_PDF_MUTATION,
      variables,
    });

    return data!.userOrganizationInvoiceTransactionGetPDF;
  };
}
