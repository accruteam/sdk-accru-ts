import {
  QueryOptions,
  type ApolloClient,
  MutationOptions,
} from '@apollo/client';
import {
  UserOrganizationBaseSettingsQuery,
  UserOrganizationBaseSettingsQueryVariables,
  UserOrganizationUpdateMutation,
  UserOrganizationUpdateMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  GET_ORGANIZATION_BASE_SETTINGS_QUERY,
  UPDATE_ORGANIZATION_MUTATION,
} from './organizations.queries';

export default class Organizations {
  constructor(private readonly apolloClient: ApolloClient<unknown>) {}

  public getSettings = async (
    variables: UserOrganizationBaseSettingsQueryVariables,
    apolloClientOptions?: QueryOptions,
  ): Promise<Res<UserOrganizationBaseSettingsQuery>> => {
    const { data } = await this.apolloClient.query({
      ...apolloClientOptions,
      query: GET_ORGANIZATION_BASE_SETTINGS_QUERY,
      variables,
    });

    return data.userOrganization;
  };

  public update = async (
    variables: UserOrganizationUpdateMutationVariables,
    apolloClientOptions?: MutationOptions,
  ): Promise<Res<UserOrganizationUpdateMutation>> => {
    const { data } = await this.apolloClient.mutate({
      ...apolloClientOptions,
      mutation: UPDATE_ORGANIZATION_MUTATION,
      variables,
    });

    return data.userOrganization;
  };
}
