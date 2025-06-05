import { AccruClient } from 'src';
import { describe, expect, it, vi } from 'vitest';

describe('Instance test', () => {
  it('should call getAuthToken on each request', async () => {
    const getAuthToken = vi.fn(async () => 'token');

    const client = new AccruClient({
      baseUrl: 'http://localhost:3000',
      getAuthToken,
    });

    await client.users.getCurrent().catch(() => null);
    await client.users.getCurrent().catch(() => null);
    await client.users.getCurrent().catch(() => null);

    expect(getAuthToken).toHaveBeenCalledTimes(3);
  });
});
