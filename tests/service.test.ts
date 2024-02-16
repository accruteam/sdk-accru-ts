/* eslint-disable */
import { expect, beforeAll, beforeEach, describe, it } from 'vitest'

import { UserQuery } from '../src/api/gql/graphql'
import { setup } from './setupTest'
import { AccruClient } from '../src'

let client: AccruClient
let user: UserQuery['user']
let organizationId: string

describe('VendorsService', () => {
  beforeAll(async () => {
    const data = await setup()
    client = data.client
    user = data.user
    organizationId = data.organizationId
  })

  beforeEach(async () => {
    const user = await client.users.getCurrent()
    expect(user.organizations).toBeDefined()
    expect(user.organizations!.length).toBeGreaterThan(0)
    expect(user.organizations![0]!.organization_id).toBeDefined()
  })

  it('should get vendors', async () => {
    const vendors = await client.vendors.get({ organizationId })
    if(vendors.items.length)
      expect(vendors).toMatchObject({
        items: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
  })

  it('should get customers', async () => {
    const customers = await client.customers.get({ organizationId })
    if(customers.items.length)
      expect(customers).toMatchObject({
        items: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
  })

  it('should get invoices', async () => {
    const invoices = await client.invoices.get({ organizationId })
    if(invoices.items.length)
      expect(invoices).toMatchObject({
        items: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
  })

  it('should get bills', async () => {
    const bills = await client.bills.get({ organizationId })
    if(bills.items.length)
      expect(bills).toMatchObject({
        items: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
          }),
        ]),
      })
  })
})
