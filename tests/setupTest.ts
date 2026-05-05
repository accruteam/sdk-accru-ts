import { getAuthToken } from './testAuth.js';
import { AccruClient } from '../src';

const REQUIRED_TEST_ENV = [
  'BACKEND_GRAPHQL_ENDPOINT',
  'FIREBASE_WEB_API_KEY',
  'TEST_EMAIL',
  'TEST_PASSWORD',
  'TEST_ORGANIZATION_ID',
] as const;

function requireTestEnv() {
  const missing = REQUIRED_TEST_ENV.filter(
    key => !(process.env[key] ?? '').trim().length,
  );
  if (missing.length)
    throw new Error(
      `Missing .env.test: ${missing.join(', ')}. See .env.test.example.`,
    );
}

export const setup = async () => {
  requireTestEnv();

  const organizationId = process.env.TEST_ORGANIZATION_ID!;

  const client = new AccruClient({
    url: process.env.BACKEND_GRAPHQL_ENDPOINT!,
    getAuthToken,
  });

  const user = await client.users.getCurrent();

  const member = user.organizations?.some(
    o => o?.organization_id === organizationId,
  );
  if (!member)
    throw new Error(
      `TEST_EMAIL is not a member of TEST_ORGANIZATION_ID (${organizationId}).`,
    );

  return {
    client,
    user,
    organizationId,
  };
};
