/* eslint-disable */
import { expect, beforeAll, beforeEach, describe, it } from 'vitest'

import { OrganizationCustomerStatementInvoiceLine, OrganizationCustomerStatementTransactionLine, UserQuery } from '../src/api/gql/graphql'
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

    expect(vendors.items.length).toBeGreaterThan(0)

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

    expect(customers.items.length).toBeGreaterThan(0)

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

    expect(invoices.items.length).toBeGreaterThan(0)

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

    expect(bills.items.length).toBeGreaterThan(0)

    expect(bills).toMatchObject({
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
        }),
      ]),
    })
  })

  it('should be able to get customer statement as a vendor', async () => {
    const customers = await client.customers.get({ organizationId })
    const customerWithMostInvoices = customers.items.reduce((prev, current) => (prev.invoice_summary.data.edges.length > current.invoice_summary.data.edges.length ? prev : current))
    if(!customerWithMostInvoices?.id) throw new Error('No customer found')

    const statement =  await client.customers.getStatement({
      organizationId,
      organizationCustomerId: customerWithMostInvoices.id
    })

    expect(statement).toMatchObject({
      items: expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
        }),
      ]),
    })
  })

  it('should be able to get customer statement line as a vendor', async () => {
    const customers = await client.customers.get({ organizationId })
    const customerWithMostInvoices = customers.items.reduce((prev, current) => (prev.invoice_summary.data.edges.length > current.invoice_summary.data.edges.length ? prev : current))
    if(!customerWithMostInvoices?.id) throw new Error('No customer found')

    const statement =  await client.customers.getStatement({
      organizationId,
      organizationCustomerId: customerWithMostInvoices.id
    })

    expect(statement).toMatchObject({
      items: expect.arrayContaining([
        expect.objectContaining<Partial<OrganizationCustomerStatementInvoiceLine | OrganizationCustomerStatementTransactionLine>>({
          id: expect.any(String),
          amount: expect.any(BigInt)
        }),
      ]),
    })

    const statementLine = await client.customers.getStatementLine({
      organizationId,
      organizationCustomerId: customerWithMostInvoices.id,
      organizationCustomerStatementLineId: Number(statement.items[0].id)
    })

    expect(statementLine).toMatchObject({
      id: expect.stringMatching(statement.items[0].id),
    })
  })
})
