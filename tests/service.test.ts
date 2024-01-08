/* eslint-disable */
import { expect, beforeAll, beforeEach, describe, it } from 'vitest';

import { UserQuery } from '../src/api/gql/graphql.js';
import { setup } from './setupTest.js';
import { AccruClient } from '../src/index.js';

let client: AccruClient;
let user: UserQuery['user'];
let organizationId: string;

describe('VendorsService', () => {
  beforeAll(async () => {
    const data = await setup()
    client = data.client;
    user = data.user;
    organizationId = data.organizationId;
  });

  beforeEach(async () => {
    const user = await client.users.getCurrent();
    expect(user.organizations).toBeDefined();
    expect(user.organizations!.length).toBeGreaterThan(0);
    expect(user.organizations![0]!.organization_id).toBeDefined();
  });

  it('should get vendors', async () => {
    const vendors = await client.vendors.get({ organizationId });
    console.log(vendors)
    if(vendors.data.length)
      expect(vendors).toMatchObject({
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            connection: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
      });
  });

  it('should get customers', async () => {
    const customers = await client.customers.get({ organizationId });
    console.log(customers)
    if(customers.data.length)
      expect(customers).toMatchObject({
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            connection: expect.objectContaining({
              id: expect.any(String),
            }),
          }),
        ]),
      });
  });

  it('should get invoices', async () => {
    const invoices = await client.invoices.get({ organizationId });
    console.log(invoices)
    if(invoices.data.data.length)
      expect(invoices).toMatchObject({
        data: expect.objectContaining({
          data: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
            }),
          ]),
        }),
      });
  });

  it('should get bills', async () => {
    const bills = await client.bills.get({ organizationId });
    console.log(bills)
    if(bills.data.data.length)
      expect(bills).toMatchObject({
        data: expect.objectContaining({
          data: expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
            }),
          ]),
        }),
      });
  });
});
