import { getAuthToken } from './testAuth.js';
import { AccruClient } from '../src';

export const setup = async () => {
  const client = new AccruClient({
    baseUrl: process.env.BACKEND_GRAPHQL_ENDPOINT!,
    getAuthToken,
  });

  const user = await client.users.getCurrent();
  const organizationId = user.organizations![0]!.organization_id;

  if (!organizationId)
    throw new Error('User defined but no organization detected.');

  return {
    client,
    user,
    organizationId,
  };
};
