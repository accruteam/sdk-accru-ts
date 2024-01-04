/* eslint-disable */
import { getAuthToken } from './testAuth';
import { AccruClient } from '../src';

export const setup = async () => {
  const token = await getAuthToken();
  const client = new AccruClient({
    baseUrl: process.env.BACKEND_GRAPHQL_ENDPOINT!,
    token,
  })

  const user = await client.users.getCurrent();
  const organizationId = user.organizations![0]!.organization_id;

  if(!organizationId)
    throw new Error('User defined but no organization detected.')

  return {
    client,
    user,
    organizationId,
  }
}
