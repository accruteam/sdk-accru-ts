import { describe, expect, it, vi } from 'vitest';

import type { AccruClientContext } from '@/types/context.types';
import AccruPayAsUnconnectedCustomer from './accruPayAsUnconnectedCustomer.service';
import {
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_REQUEST_PAYMENT_ELEVATION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_PAYMENT_ELEVATION_MUTATION,
  STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
} from './accruPayAsUnconnectedCustomer.queries';

const buildContext = () => {
  const apolloClient = {
    mutate: vi.fn(),
    query: vi.fn(),
  };

  return {
    context: { apolloClient } as unknown as AccruClientContext,
    apolloClient,
  };
};

const baseAuthorization = {
  uniqueCode: 'unique-code',
  token: 'statement-access-token',
  organizationId: 'organization-id',
};

describe('AccruPayAsUnconnectedCustomer', () => {
  describe('requestPaymentElevation', () => {
    it('issues the request-payment-elevation mutation with the given variables', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const expiresAt = new Date('2026-08-01T00:00:00.000Z');
      apolloClient.mutate.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayRequestPaymentElevation: {
            expires_at: expiresAt,
          },
        },
      });

      const result = await service.requestPaymentElevation(baseAuthorization);

      expect(apolloClient.mutate).toHaveBeenCalledWith({
        mutation:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_REQUEST_PAYMENT_ELEVATION_MUTATION,
        variables: baseAuthorization,
      });
      expect(result).toEqual({ expires_at: expiresAt });
    });
  });

  describe('verifyPaymentElevation', () => {
    it('issues the verify-payment-elevation mutation with the code variable', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const variables = { ...baseAuthorization, code: '123456' };
      const expiresAt = new Date('2026-08-01T00:00:00.000Z');
      apolloClient.mutate.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayVerifyPaymentElevation: {
            token: 'elevation-session-token',
            expires_at: expiresAt,
          },
        },
      });

      const result = await service.verifyPaymentElevation(variables);

      expect(apolloClient.mutate).toHaveBeenCalledWith({
        mutation:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_VERIFY_PAYMENT_ELEVATION_MUTATION,
        variables,
      });
      expect(result).toEqual({
        token: 'elevation-session-token',
        expires_at: expiresAt,
      });
    });
  });

  describe('getPaymentMethods', () => {
    it('issues the payment-methods query with the elevation token variable', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const variables = {
        ...baseAuthorization,
        elevationToken: 'elevation-session-token',
      };
      const paymentMethods = [
        { id: 'payment-method-id', method_type: 'CARD', is_default: true },
      ];
      apolloClient.query.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayPaymentMethods: paymentMethods,
        },
      });

      const result = await service.getPaymentMethods(variables);

      expect(apolloClient.query).toHaveBeenCalledWith({
        query:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_GET_ACCRUPAY_PAYMENT_METHODS_QUERY,
        variables,
      });
      expect(result).toEqual(paymentMethods);
    });
  });

  describe('startCardPayment', () => {
    it('threads elevation_token and store_payment_method through to the mutation', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const variables = {
        ...baseAuthorization,
        clientRequestNonce: 'nonce',
        paymentAmount: BigInt(1000),
        selectedInvoiceIds: ['invoice-id'],
        storePaymentMethod: true,
        elevationToken: 'elevation-session-token',
      };
      apolloClient.mutate.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayStartCardPayment: {
            merchant_public_id: 'merchant-public-id',
            session_id: 'session-id',
            transaction_id: 'transaction-id',
          },
        },
      });

      await service.startCardPayment(variables);

      expect(apolloClient.mutate).toHaveBeenCalledWith({
        mutation:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_START_CARD_PAYMENT_MUTATION,
        variables,
      });
    });
  });

  describe('createPaymentMethodTransaction', () => {
    it('requires and threads elevation_token through to the mutation', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const variables = {
        ...baseAuthorization,
        organizationCustomerPaymentMethodId: 'payment-method-id',
        clientRequestNonce: 'nonce',
        paymentAmount: BigInt(1000),
        selectedInvoiceIds: ['invoice-id'],
        elevationToken: 'elevation-session-token',
      };
      apolloClient.mutate.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayCreatePaymentMethodTransaction:
            { payment_id: 'payment-id', state: 'PENDING' },
        },
      });

      await service.createPaymentMethodTransaction(variables);

      expect(apolloClient.mutate).toHaveBeenCalledWith({
        mutation:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_CREATE_PAYMENT_METHOD_TRANSACTION_MUTATION,
        variables,
      });
    });
  });

  describe('initiateAchPayment', () => {
    it('threads elevation_token and store_payment_method through to the mutation', async () => {
      const { context, apolloClient } = buildContext();
      const service = new AccruPayAsUnconnectedCustomer(context);
      const variables = {
        ...baseAuthorization,
        clientRequestNonce: 'nonce',
        paymentAmount: BigInt(1000),
        selectedInvoiceIds: ['invoice-id'],
        accountNumber: '000123456789',
        routingNumber: '021000021',
        storePaymentMethod: true,
        elevationToken: 'elevation-session-token',
      };
      apolloClient.mutate.mockResolvedValue({
        data: {
          unconnectedCustomerOrganizationAccruPayInitiateAchPayment: {
            payment_id: 'payment-id',
            state: 'PENDING',
          },
        },
      });

      await service.initiateAchPayment(variables);

      expect(apolloClient.mutate).toHaveBeenCalledWith({
        mutation:
          STATEMENT_AS_UNCONNECTED_CUSTOMER_ACCRUPAY_INITIATE_ACH_PAYMENT_MUTATION,
        variables,
      });
    });
  });
});
