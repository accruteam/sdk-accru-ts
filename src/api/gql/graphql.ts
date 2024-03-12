/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Cursor for pagination */
  ConnectionCursor: { input: any; output: any; }
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum ACCT_PROVIDER {
  QUICKBOOKS = 'QUICKBOOKS'
}

export enum AUTH_PROVIDER {
  FIREBASE = 'FIREBASE',
  INTUIT = 'INTUIT'
}

export enum BILL_STATUS {
  OPEN = 'OPEN',
  PAID = 'PAID'
}

export enum CURRENCY {
  BRL = 'BRL',
  EUR = 'EUR',
  USD = 'USD'
}

export type File = {
  __typename?: 'File';
  allow_public_access: Scalars['Boolean']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  checksum_md5: Scalars['String']['output'];
  checksum_sha256: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  filename: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  mime_type: MIME_TYPE;
  payload: Scalars['JSON']['output'];
  public_url?: Maybe<Scalars['String']['output']>;
  public_url_expires_at?: Maybe<Scalars['DateTime']['output']>;
  recipient_id?: Maybe<Scalars['String']['output']>;
  recipient_type: RECIPIENT_TYPE;
  size: Scalars['Int']['output'];
  storage_provider_code: STORAGE_PROVIDER;
  type: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export enum INVOICE_STATUS {
  OPEN = 'OPEN',
  PAID = 'PAID'
}

export enum MIME_TYPE {
  JPEG = 'JPEG',
  OTHER = 'OTHER',
  PDF = 'PDF',
  PNG = 'PNG'
}

export type Mutation = {
  __typename?: 'Mutation';
  adminClearCache: Scalars['DateTime']['output'];
  unconnectedUserCustomerOrganizationStatementLinePDF: Scalars['String']['output'];
  unconnectedUserCustomerOrganizationStatementRequestToken: Scalars['DateTime']['output'];
  userAuthProviderDisconnect: UserAuthProviderConn;
  userAuthProviderGetOAuthToken: Scalars['String']['output'];
  userAuthProviderGetOAuthUrl: Scalars['String']['output'];
  userCustomerOrganizationInvoiceCreateSyncBill: OrganizationBill;
  userCustomerOrganizationProjectChangeRequestAccept: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestCancel: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestCreate: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestReject: OrganizationProjectChangeRequest;
  userCustomerOrganizationStatementLineGeneratePDF: Scalars['String']['output'];
  userEmailVerifyOrChangeFinish: User;
  userEmailVerifyOrChangeStart: Scalars['DateTime']['output'];
  userOrganizationAcctProviderConnConfigurationPullOptionsGet: Scalars['JSON']['output'];
  userOrganizationAcctProviderConnConfigurationPullOptionsSet: OrganizationAcctProviderConn;
  userOrganizationAcctProviderConnConfigurationPushOptionsGet: Scalars['JSON']['output'];
  userOrganizationAcctProviderConnConfigurationPushOptionsSet: OrganizationAcctProviderConn;
  userOrganizationAcctProviderConnDisconnect: OrganizationAcctProviderConn;
  userOrganizationAcctProviderConnUpdate: OrganizationAcctProviderConn;
  userOrganizationAcctProviderConnect: OrganizationAcctProviderConn;
  userOrganizationAcctProviderGetOAuthUrl: Scalars['String']['output'];
  userOrganizationAcctProviderSynchronize: Scalars['DateTime']['output'];
  userOrganizationBillConnLock: OrganizationBill;
  userOrganizationBillConnSync: OrganizationBill;
  userOrganizationBillConnUnlock: OrganizationBill;
  userOrganizationBillCreate: OrganizationBill;
  userOrganizationBillDelete: Array<OrganizationBill>;
  userOrganizationBillFileDelete: OrganizationBill;
  userOrganizationBillManualPaymentCreate: OrganizationBill;
  userOrganizationBillManualPaymentDelete: OrganizationBill;
  userOrganizationBillUpdate: OrganizationBill;
  userOrganizationCollaboratorDelete: OrganizationUser;
  userOrganizationCollaboratorUpdate: OrganizationUser;
  userOrganizationConnectionAccept: OrganizationConnection;
  userOrganizationConnectionInviteCustomer: OrganizationConnection;
  userOrganizationConnectionInviteVendor: OrganizationConnection;
  userOrganizationConnectionReject: OrganizationConnection;
  userOrganizationCreate: Organization;
  userOrganizationCustomerConnLock: OrganizationCustomer;
  userOrganizationCustomerConnSync: OrganizationCustomer;
  userOrganizationCustomerConnUnlock: OrganizationCustomer;
  userOrganizationCustomerContactCreate: OrganizationCustomerContact;
  userOrganizationCustomerContactDelete: OrganizationCustomerContact;
  userOrganizationCustomerContactUpdate: OrganizationCustomerContact;
  userOrganizationCustomerCreate: OrganizationCustomer;
  userOrganizationCustomerSendInvoiceEmail: Scalars['JSON']['output'];
  userOrganizationCustomerSendStatementEmail: Scalars['JSON']['output'];
  userOrganizationCustomerUniqueCodeUpdate: OrganizationCustomer;
  userOrganizationCustomerUpdate: OrganizationCustomer;
  userOrganizationDelete: Organization;
  userOrganizationEmailVerifyOrChangeFinish: Organization;
  userOrganizationEmailVerifyOrChangeStart: Scalars['DateTime']['output'];
  userOrganizationInviteCollaboratorCancel: OrganizationInvite;
  userOrganizationInviteCollaboratorCreate: OrganizationInvite;
  userOrganizationInviteReject: OrganizationInvite;
  userOrganizationInvoiceCreate: OrganizationInvoice;
  userOrganizationInvoiceDelete: Array<OrganizationInvoice>;
  userOrganizationInvoiceFileDelete: OrganizationInvoice;
  userOrganizationInvoiceGetAcctProviderPDF: Scalars['String']['output'];
  userOrganizationInvoiceManualPaymentCreate: OrganizationInvoice;
  userOrganizationInvoiceManualPaymentDelete: OrganizationInvoice;
  userOrganizationInvoiceUpdate: OrganizationInvoice;
  userOrganizationLeave: OrganizationUser;
  userOrganizationLogoPictureRemove: Organization;
  userOrganizationPaymentMethodDelete: OrganizationPaymentMethod;
  userOrganizationPaymentMethodUpdate: OrganizationPaymentMethod;
  userOrganizationProjectChangeRequestAccept: OrganizationProjectChangeRequest;
  userOrganizationProjectChangeRequestCancel: OrganizationProjectChangeRequest;
  userOrganizationProjectChangeRequestCreate: OrganizationProjectChangeRequest;
  userOrganizationProjectChangeRequestReject: OrganizationProjectChangeRequest;
  userOrganizationProjectCreate: OrganizationProject;
  userOrganizationProjectDelete: OrganizationProject;
  userOrganizationProjectUpdate: OrganizationProject;
  userOrganizationReceivingMethodDelete: OrganizationReceivingMethod;
  userOrganizationReceivingMethodUpdate: OrganizationReceivingMethod;
  userOrganizationReminderSettingCreate: OrganizationReminderSetting;
  userOrganizationReminderSettingDelete: OrganizationReminderSetting;
  userOrganizationReminderSettingUpdate: OrganizationReminderSetting;
  userOrganizationSendGenericInviteMail: Scalars['DateTime']['output'];
  userOrganizationTransactionGetAcctProviderPDF: Scalars['String']['output'];
  userOrganizationUniqueCodeUpdate: Organization;
  userOrganizationUniqueNameUpdate: Organization;
  userOrganizationUpdate: Organization;
  userOrganizationUserInviteAccept: OrganizationUser;
  userOrganizationVendorConnLock: OrganizationVendor;
  userOrganizationVendorConnSync: OrganizationVendor;
  userOrganizationVendorConnUnlock: OrganizationVendor;
  userOrganizationVendorContactCreate: OrganizationVendorContact;
  userOrganizationVendorContactDelete: OrganizationVendorContact;
  userOrganizationVendorContactUpdate: OrganizationVendorContact;
  userOrganizationVendorCreate: OrganizationVendor;
  userOrganizationVendorUniqueCodeUpdate: OrganizationVendor;
  userOrganizationVendorUpdate: OrganizationVendor;
  userPasswordChangeFinish: Scalars['String']['output'];
  userPasswordChangeStart: Scalars['DateTime']['output'];
  userPasswordResetFinish: Scalars['String']['output'];
  userPasswordResetStart: Scalars['String']['output'];
  userPhoneNumberRemove: User;
  userPhoneNumberVerifyOrChangeFinish: User;
  userPhoneNumberVerifyOrChangeStart: Scalars['DateTime']['output'];
  userProfilePictureRemove: User;
  userSessionsClose: UserAuthProviderConn;
  userSignUpWithEmailFinish: Scalars['String']['output'];
  userSignUpWithEmailStart: Scalars['DateTime']['output'];
  userSignUpWithEmailVerify: Scalars['DateTime']['output'];
  userUpdateData: User;
};


export type MutationunconnectedUserCustomerOrganizationStatementLinePDFArgs = {
  acct_provider_code: ACCT_PROVIDER;
  email: Scalars['String']['input'];
  organization_customer_statement_line_id: Scalars['Int']['input'];
  token: Scalars['String']['input'];
  unique_code: Scalars['String']['input'];
};


export type MutationunconnectedUserCustomerOrganizationStatementRequestTokenArgs = {
  email: Scalars['String']['input'];
  unique_code: Scalars['String']['input'];
};


export type MutationuserAuthProviderDisconnectArgs = {
  auth_provider_code: AUTH_PROVIDER;
};


export type MutationuserAuthProviderGetOAuthTokenArgs = {
  auth_provider_code: AUTH_PROVIDER;
  authorization_token: Scalars['String']['input'];
};


export type MutationuserAuthProviderGetOAuthUrlArgs = {
  auth_provider_code: AUTH_PROVIDER;
};


export type MutationuserCustomerOrganizationInvoiceCreateSyncBillArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserCustomerOrganizationProjectChangeRequestAcceptArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserCustomerOrganizationProjectChangeRequestCancelArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserCustomerOrganizationProjectChangeRequestCreateArgs = {
  data: UserOrganizationProjectChangeRequestCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserCustomerOrganizationProjectChangeRequestRejectArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserCustomerOrganizationStatementLineGeneratePDFArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_customer_statement_line_id: Scalars['Int']['input'];
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserEmailVerifyOrChangeFinishArgs = {
  data: UserEmailVerifyOrChangeFinishSchema;
};


export type MutationuserEmailVerifyOrChangeStartArgs = {
  data: UserEmailVerifyOrChangeStartSchema;
};


export type MutationuserOrganizationAcctProviderConnConfigurationPullOptionsGetArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderConnConfigurationPullOptionsSetArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
  payload: Scalars['JSON']['input'];
};


export type MutationuserOrganizationAcctProviderConnConfigurationPushOptionsGetArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderConnConfigurationPushOptionsSetArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
  payload: Scalars['JSON']['input'];
};


export type MutationuserOrganizationAcctProviderConnDisconnectArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderConnUpdateArgs = {
  acct_provider_code: ACCT_PROVIDER;
  data: UserOrganizationAcctProviderConnUpdateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderConnectArgs = {
  acct_provider_code: ACCT_PROVIDER;
  automatic_pull_enabled: Scalars['Boolean']['input'];
  automatic_push_enabled: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderGetOAuthUrlArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationAcctProviderSynchronizeArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
  pull: Scalars['Boolean']['input'];
  push: Scalars['Boolean']['input'];
};


export type MutationuserOrganizationBillConnLockArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillConnSyncArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillConnUnlockArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillCreateArgs = {
  data: UserOrganizationBillSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillDeleteArgs = {
  organization_bill_ids: Array<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillFileDeleteArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillManualPaymentCreateArgs = {
  data: UserOrganizationBillManualPaymentCreateSchema;
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillManualPaymentDeleteArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type MutationuserOrganizationBillUpdateArgs = {
  data: UserOrganizationBillSchema;
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCollaboratorDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCollaboratorUpdateArgs = {
  data: UserOrganizationCollaboratorUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type MutationuserOrganizationConnectionAcceptArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationConnectionInviteCustomerArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationConnectionInviteVendorArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationConnectionRejectArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCreateArgs = {
  data: UserOrganizationCreateSchema;
};


export type MutationuserOrganizationCustomerConnLockArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerConnSyncArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerConnUnlockArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerContactCreateArgs = {
  data: UserOrganizationCustomerContactCreateSchema;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerContactDeleteArgs = {
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerContactUpdateArgs = {
  data: UserOrganizationCustomerContactUpdateSchema;
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerCreateArgs = {
  data: UserOrganizationCustomerSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerSendInvoiceEmailArgs = {
  organization_id: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendInvoiceEmailSchema>;
};


export type MutationuserOrganizationCustomerSendStatementEmailArgs = {
  organization_id: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendStatementEmailSchema>;
};


export type MutationuserOrganizationCustomerUniqueCodeUpdateArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationCustomerUpdateArgs = {
  data: UserOrganizationCustomerSchema;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationDeleteArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationEmailVerifyOrChangeFinishArgs = {
  data: UserOrganizationEmailVerifyOrChangeFinishSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationEmailVerifyOrChangeStartArgs = {
  data: UserOrganizationEmailVerifyOrChangeStartSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInviteCollaboratorCancelArgs = {
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInviteCollaboratorCreateArgs = {
  data: UserOrganizationInviteCollaboratorCreateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInviteRejectArgs = {
  code: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceCreateArgs = {
  data: UserOrganizationInvoiceSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_ids: Array<Scalars['String']['input']>;
};


export type MutationuserOrganizationInvoiceFileDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceGetAcctProviderPDFArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceManualPaymentCreateArgs = {
  data: UserOrganizationInvoiceManualPaymentCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceManualPaymentDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type MutationuserOrganizationInvoiceUpdateArgs = {
  data: UserOrganizationInvoiceSchema;
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationuserOrganizationLeaveArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationLogoPictureRemoveArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationPaymentMethodDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type MutationuserOrganizationPaymentMethodUpdateArgs = {
  data: UserOrganizationPaymentMethodUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectChangeRequestAcceptArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectChangeRequestCancelArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectChangeRequestCreateArgs = {
  data: UserOrganizationProjectChangeRequestCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectChangeRequestRejectArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectCreateArgs = {
  data: UserOrganizationProjectCreateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationProjectUpdateArgs = {
  data: UserOrganizationProjectUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationuserOrganizationReceivingMethodDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type MutationuserOrganizationReceivingMethodUpdateArgs = {
  data: UserOrganizationReceivingMethodUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type MutationuserOrganizationReminderSettingCreateArgs = {
  data: UserOrganizationReminderSettingSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationReminderSettingDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_reminder_setting_id: Scalars['String']['input'];
};


export type MutationuserOrganizationReminderSettingUpdateArgs = {
  data: UserOrganizationReminderSettingSchema;
  organization_id: Scalars['String']['input'];
  organization_reminder_setting_id: Scalars['String']['input'];
};


export type MutationuserOrganizationSendGenericInviteMailArgs = {
  email: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationTransactionGetAcctProviderPDFArgs = {
  acct_provider_code: ACCT_PROVIDER;
  organization_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type MutationuserOrganizationUniqueCodeUpdateArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationUniqueNameUpdateArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationUpdateArgs = {
  data: UserOrganizationUpdateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationUserInviteAcceptArgs = {
  code: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorConnLockArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorConnSyncArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorConnUnlockArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorContactCreateArgs = {
  data: UserOrganizationVendorContactCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorContactDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorContactUpdateArgs = {
  data: UserOrganizationVendorContactUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorCreateArgs = {
  data: UserOrganizationVendorSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorUniqueCodeUpdateArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserOrganizationVendorUpdateArgs = {
  data: UserOrganizationVendorSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationuserPasswordChangeFinishArgs = {
  data: UserPasswordChangeFinishSchema;
};


export type MutationuserPasswordChangeStartArgs = {
  data: UserPasswordChangeStartSchema;
};


export type MutationuserPasswordResetFinishArgs = {
  data: UserPasswordResetFinishSchema;
};


export type MutationuserPasswordResetStartArgs = {
  data: UserPasswordResetStartSchema;
};


export type MutationuserPhoneNumberVerifyOrChangeFinishArgs = {
  data: UserPhoneNumberVerifyOrChangeFinishSchema;
};


export type MutationuserPhoneNumberVerifyOrChangeStartArgs = {
  data: UserPhoneNumberVerifyOrChangeStartSchema;
};


export type MutationuserSignUpWithEmailFinishArgs = {
  data: UserSignUpWithEmailFinishSchema;
};


export type MutationuserSignUpWithEmailStartArgs = {
  data: UserSignUpWithEmailStartSchema;
};


export type MutationuserSignUpWithEmailVerifyArgs = {
  data: UserSignUpWithEmailVerifySchema;
};


export type MutationuserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};

export enum ORGANIZATION_ACCT_PROVIDER_CONN_STATUS {
  CONNECTED = 'CONNECTED',
  DISCONNECTED = 'DISCONNECTED',
  EXPIRED = 'EXPIRED'
}

export enum ORGANIZATION_CONNECTION_STATUS {
  ACCEPTED = 'ACCEPTED',
  INVITED = 'INVITED',
  REJECTED = 'REJECTED'
}

export enum ORGANIZATION_INVITE_SIDE {
  CUSTOMER = 'CUSTOMER',
  ORGANIZATION = 'ORGANIZATION'
}

export enum ORGANIZATION_USER_ROLE {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export type Organization = {
  __typename?: 'Organization';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  address_lat?: Maybe<Scalars['Float']['output']>;
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  address_lng?: Maybe<Scalars['Float']['output']>;
  address_number?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip_code?: Maybe<Scalars['String']['output']>;
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  business_address_city?: Maybe<Scalars['String']['output']>;
  business_address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  business_address_lat?: Maybe<Scalars['Float']['output']>;
  business_address_line_1?: Maybe<Scalars['String']['output']>;
  business_address_line_2?: Maybe<Scalars['String']['output']>;
  business_address_lng?: Maybe<Scalars['Float']['output']>;
  business_address_number?: Maybe<Scalars['String']['output']>;
  business_address_state?: Maybe<Scalars['String']['output']>;
  business_address_zip_code?: Maybe<Scalars['String']['output']>;
  business_industry?: Maybe<Scalars['String']['output']>;
  business_name?: Maybe<Scalars['String']['output']>;
  business_number_of_employees?: Maybe<Scalars['Int']['output']>;
  business_tax_code?: Maybe<Scalars['String']['output']>;
  business_tax_code_type?: Maybe<TAX_TYPE>;
  created_at: Scalars['DateTime']['output'];
  current_email_verification_id?: Maybe<Scalars['String']['output']>;
  current_phone_number_verification_id?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  logo_picture_file?: Maybe<File>;
  logo_picture_file_id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  primary_contact_name?: Maybe<Scalars['String']['output']>;
  setting_allow_invoice_due_snooze_reminders?: Maybe<Scalars['Boolean']['output']>;
  setting_allow_invoice_overdue_snooze_reminders?: Maybe<Scalars['Boolean']['output']>;
  setting_send_invoice_due_reminders?: Maybe<Scalars['Boolean']['output']>;
  setting_send_invoice_overdue_reminders?: Maybe<Scalars['Boolean']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  unique_name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConn = {
  __typename?: 'OrganizationAcctProviderConn';
  acct_provider_code: ACCT_PROVIDER;
  automatic_pull_enabled: Scalars['Boolean']['output'];
  automatic_push_enabled: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  conn_expires_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
  disconnected_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS;
  synchronizations: OrganizationAcctProviderConnSynchronizationPaginationConnection;
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationAcctProviderConnsynchronizationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationAcctProviderConnBill = {
  __typename?: 'OrganizationAcctProviderConnBill';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_sync_at?: Maybe<Scalars['DateTime']['output']>;
  last_sync_id?: Maybe<Scalars['String']['output']>;
  last_sync_success?: Maybe<Scalars['Boolean']['output']>;
  organization_acct_provider_conn: OrganizationAcctProviderConn;
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_bill_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConnCustomer = {
  __typename?: 'OrganizationAcctProviderConnCustomer';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_sync_at?: Maybe<Scalars['DateTime']['output']>;
  last_sync_id?: Maybe<Scalars['String']['output']>;
  last_sync_success?: Maybe<Scalars['Boolean']['output']>;
  organization_acct_provider_conn: OrganizationAcctProviderConn;
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_customer_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConnInvoice = {
  __typename?: 'OrganizationAcctProviderConnInvoice';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_sync_at?: Maybe<Scalars['DateTime']['output']>;
  last_sync_id?: Maybe<Scalars['String']['output']>;
  last_sync_success?: Maybe<Scalars['Boolean']['output']>;
  organization_acct_provider_conn: OrganizationAcctProviderConn;
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_invoice_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConnPaginationConnection = {
  __typename?: 'OrganizationAcctProviderConnPaginationConnection';
  edges: Array<OrganizationAcctProviderConnPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationAcctProviderConnPaginationEdge = {
  __typename?: 'OrganizationAcctProviderConnPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationAcctProviderConn;
};

export type OrganizationAcctProviderConnSynchronization = {
  __typename?: 'OrganizationAcctProviderConnSynchronization';
  created_at: Scalars['DateTime']['output'];
  errors: Array<Scalars['String']['output']>;
  failed_at?: Maybe<Scalars['DateTime']['output']>;
  finished_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  local_create_failure_count: Scalars['Float']['output'];
  local_create_success_count: Scalars['Float']['output'];
  local_delete_failure_count: Scalars['Float']['output'];
  local_delete_success_count: Scalars['Float']['output'];
  local_read_failure_count: Scalars['Float']['output'];
  local_read_success_count: Scalars['Float']['output'];
  local_update_failure_count: Scalars['Float']['output'];
  local_update_success_count: Scalars['Float']['output'];
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  pull: Scalars['Boolean']['output'];
  push: Scalars['Boolean']['output'];
  remote_create_failure_count: Scalars['Float']['output'];
  remote_create_success_count: Scalars['Float']['output'];
  remote_delete_failure_count: Scalars['Float']['output'];
  remote_delete_success_count: Scalars['Float']['output'];
  remote_read_failure_count: Scalars['Float']['output'];
  remote_read_success_count: Scalars['Float']['output'];
  remote_update_failure_count: Scalars['Float']['output'];
  remote_update_success_count: Scalars['Float']['output'];
  started_at: Scalars['DateTime']['output'];
  status_description: Scalars['String']['output'];
  succeeded_at?: Maybe<Scalars['DateTime']['output']>;
  sync_cluster_code: Scalars['String']['output'];
  trigger_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConnSynchronizationPaginationConnection = {
  __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection';
  edges: Array<OrganizationAcctProviderConnSynchronizationPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationAcctProviderConnSynchronizationPaginationEdge = {
  __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationAcctProviderConnSynchronization;
};

export type OrganizationAcctProviderConnTransaction = {
  __typename?: 'OrganizationAcctProviderConnTransaction';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_sync_at?: Maybe<Scalars['DateTime']['output']>;
  last_sync_id?: Maybe<Scalars['String']['output']>;
  last_sync_success?: Maybe<Scalars['Boolean']['output']>;
  organization_acct_provider_conn: OrganizationAcctProviderConn;
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_transaction_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConnVendor = {
  __typename?: 'OrganizationAcctProviderConnVendor';
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  last_sync_at?: Maybe<Scalars['DateTime']['output']>;
  last_sync_id?: Maybe<Scalars['String']['output']>;
  last_sync_success?: Maybe<Scalars['Boolean']['output']>;
  organization_acct_provider_conn: OrganizationAcctProviderConn;
  organization_acct_provider_conn_id: Scalars['String']['output'];
  organization_vendor_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationBill = {
  __typename?: 'OrganizationBill';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  /** The open amount for this bill. Balance 0 represents bill fully paid. */
  balance?: Maybe<Scalars['Int']['output']>;
  bill_date: Scalars['DateTime']['output'];
  conn_linked_invoice_id?: Maybe<Scalars['String']['output']>;
  conn_locked_data_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  description: Scalars['String']['output'];
  discount_amount: Scalars['Int']['output'];
  due_date: Scalars['DateTime']['output'];
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['String']['output']>;
  has_sync_errors?: Maybe<Scalars['Boolean']['output']>;
  history: OrganizationBillHistoryPaginationConnection;
  id: Scalars['ID']['output'];
  is_overdue?: Maybe<Scalars['Boolean']['output']>;
  number: Scalars['String']['output'];
  organization: Organization;
  organization_acct_provider_conn_bills: Array<OrganizationAcctProviderConnBill>;
  organization_id: Scalars['String']['output'];
  organization_project?: Maybe<OrganizationProject>;
  organization_project_id?: Maybe<Scalars['String']['output']>;
  organization_vendor: OrganizationVendor;
  organization_vendor_id: Scalars['String']['output'];
  paid_amount?: Maybe<Scalars['Int']['output']>;
  paid_at?: Maybe<Scalars['DateTime']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  status?: Maybe<BILL_STATUS>;
  tax_amount: Scalars['Int']['output'];
  total_amount: Scalars['Int']['output'];
  transaction_links?: Maybe<Array<OrganizationTransactionLink>>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  vendor_address_city?: Maybe<Scalars['String']['output']>;
  vendor_address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  vendor_address_lat?: Maybe<Scalars['Float']['output']>;
  vendor_address_line_1?: Maybe<Scalars['String']['output']>;
  vendor_address_line_2?: Maybe<Scalars['String']['output']>;
  vendor_address_lng?: Maybe<Scalars['Float']['output']>;
  vendor_address_number?: Maybe<Scalars['String']['output']>;
  vendor_address_state?: Maybe<Scalars['String']['output']>;
  vendor_address_zip_code?: Maybe<Scalars['String']['output']>;
  vendor_email: Scalars['String']['output'];
};


export type OrganizationBillhistoryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationBillHistory = {
  __typename?: 'OrganizationBillHistory';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization_bill_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationBillHistoryPaginationConnection = {
  __typename?: 'OrganizationBillHistoryPaginationConnection';
  edges: Array<OrganizationBillHistoryPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationBillHistoryPaginationEdge = {
  __typename?: 'OrganizationBillHistoryPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationBillHistory;
};

export type OrganizationBillPaginationConnection = {
  __typename?: 'OrganizationBillPaginationConnection';
  edges: Array<OrganizationBillPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationBillPaginationEdge = {
  __typename?: 'OrganizationBillPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationBill;
};

export type OrganizationBillSummary = {
  __typename?: 'OrganizationBillSummary';
  balance: Scalars['Int']['output'];
  currency?: Maybe<CURRENCY>;
  customer_organization: Organization;
  customer_organization_id: Scalars['String']['output'];
  customer_organization_vendor?: Maybe<OrganizationVendor>;
  customer_organization_vendor_id?: Maybe<Scalars['String']['output']>;
  data: OrganizationBillPaginationConnection;
  due_end_date?: Maybe<Scalars['DateTime']['output']>;
  due_start_date?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  overdue_amount: Scalars['Int']['output'];
  paid_amount: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<BILL_STATUS>;
  total_amount: Scalars['Int']['output'];
  vendor_organization?: Maybe<Organization>;
  vendor_organization_id?: Maybe<Scalars['String']['output']>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  created_at: Scalars['DateTime']['output'];
  customer_conn_status?: Maybe<ORGANIZATION_CONNECTION_STATUS>;
  customer_conn_status_at?: Maybe<Scalars['DateTime']['output']>;
  customer_organization_email?: Maybe<Scalars['String']['output']>;
  customer_organization_id?: Maybe<Scalars['String']['output']>;
  customer_organization_name?: Maybe<Scalars['String']['output']>;
  customer_target_vendor_email?: Maybe<Scalars['String']['output']>;
  customer_target_vendor_id?: Maybe<Scalars['String']['output']>;
  customer_target_vendor_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  is_connected: Scalars['Boolean']['output'];
  is_valid: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  vendor_conn_status?: Maybe<ORGANIZATION_CONNECTION_STATUS>;
  vendor_conn_status_at?: Maybe<Scalars['DateTime']['output']>;
  vendor_organization_email?: Maybe<Scalars['String']['output']>;
  vendor_organization_id?: Maybe<Scalars['String']['output']>;
  vendor_organization_name?: Maybe<Scalars['String']['output']>;
  vendor_target_customer_email?: Maybe<Scalars['String']['output']>;
  vendor_target_customer_id?: Maybe<Scalars['String']['output']>;
  vendor_target_customer_name?: Maybe<Scalars['String']['output']>;
};

export type OrganizationConnectionPaginationConnection = {
  __typename?: 'OrganizationConnectionPaginationConnection';
  edges: Array<OrganizationConnectionPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationConnectionPaginationEdge = {
  __typename?: 'OrganizationConnectionPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationConnection;
};

export type OrganizationCustomer = {
  __typename?: 'OrganizationCustomer';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  address_lat?: Maybe<Scalars['Float']['output']>;
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  address_lng?: Maybe<Scalars['Float']['output']>;
  address_number?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip_code?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Int']['output']>;
  conn_locked_data_at?: Maybe<Scalars['DateTime']['output']>;
  connection?: Maybe<OrganizationConnection>;
  contacts: Array<OrganizationCustomerContact>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  invoice_summary: OrganizationInvoiceSummary;
  is_active: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: Organization;
  organization_acct_provider_conn_customers: Array<OrganizationAcctProviderConnCustomer>;
  organization_id: Scalars['String']['output'];
  overdue_amount?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  statement: OrganizationCustomerStatement;
  tax_code?: Maybe<Scalars['String']['output']>;
  tax_code_type?: Maybe<TAX_TYPE>;
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationCustomerinvoice_summaryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type OrganizationCustomerstatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationCustomerContact = {
  __typename?: 'OrganizationCustomerContact';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_default: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organization_customer_id: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  send_invoice_reminders: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationCustomerContactPaginationConnection = {
  __typename?: 'OrganizationCustomerContactPaginationConnection';
  edges: Array<OrganizationCustomerContactPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationCustomerContactPaginationEdge = {
  __typename?: 'OrganizationCustomerContactPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationCustomerContact;
};

export type OrganizationCustomerPaginationConnection = {
  __typename?: 'OrganizationCustomerPaginationConnection';
  edges: Array<OrganizationCustomerPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationCustomerPaginationEdge = {
  __typename?: 'OrganizationCustomerPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationCustomer;
};

export type OrganizationCustomerStatement = {
  __typename?: 'OrganizationCustomerStatement';
  balance: Scalars['Int']['output'];
  currency?: Maybe<CURRENCY>;
  customer_organization?: Maybe<Organization>;
  customer_organization_id?: Maybe<Scalars['String']['output']>;
  data: OrganizationCustomerStatementLineDataPaginationConnection;
  due_end_date?: Maybe<Scalars['DateTime']['output']>;
  due_start_date?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  one_to_thirty_days_due_amount?: Maybe<Scalars['Int']['output']>;
  overdue_amount: Scalars['Int']['output'];
  paid_amount: Scalars['Int']['output'];
  sixty_plus_days_due_amount?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['DateTime']['output']>;
  thirty_one_to_sixty_days_due_amount?: Maybe<Scalars['Int']['output']>;
  total_amount: Scalars['Int']['output'];
  vendor_organization: Organization;
  vendor_organization_customer: OrganizationCustomer;
  vendor_organization_customer_id: Scalars['String']['output'];
  vendor_organization_id: Scalars['String']['output'];
};

export type OrganizationCustomerStatementInvoiceLine = {
  __typename?: 'OrganizationCustomerStatementInvoiceLine';
  amount: Scalars['Int']['output'];
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  date: Scalars['DateTime']['output'];
  due_date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  invoice_status: Scalars['String']['output'];
  organization_customer_id: Scalars['String']['output'];
  organization_invoice: OrganizationCustomerStatementInvoiceLineData;
  organization_invoice_id: Scalars['String']['output'];
  paid_amount: Scalars['Int']['output'];
  running_balance: Scalars['Int']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationCustomerStatementInvoiceLineData = {
  __typename?: 'OrganizationCustomerStatementInvoiceLineData';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  /** The open amount for this invoice. Balance 0 represents invoice fully paid. */
  balance?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  customer_address_city?: Maybe<Scalars['String']['output']>;
  customer_address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  customer_address_lat?: Maybe<Scalars['Float']['output']>;
  customer_address_line_1?: Maybe<Scalars['String']['output']>;
  customer_address_line_2?: Maybe<Scalars['String']['output']>;
  customer_address_lng?: Maybe<Scalars['Float']['output']>;
  customer_address_number?: Maybe<Scalars['String']['output']>;
  customer_address_state?: Maybe<Scalars['String']['output']>;
  customer_address_zip_code?: Maybe<Scalars['String']['output']>;
  customer_email: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discount_amount: Scalars['Int']['output'];
  due_date: Scalars['DateTime']['output'];
  email_sent_at?: Maybe<Scalars['DateTime']['output']>;
  file_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invoice_date: Scalars['DateTime']['output'];
  is_overdue?: Maybe<Scalars['Boolean']['output']>;
  number: Scalars['String']['output'];
  organization_acct_provider_conn_invoices: Array<OrganizationAcctProviderConnInvoice>;
  organization_customer_id: Scalars['String']['output'];
  organization_id: Scalars['String']['output'];
  organization_project_id?: Maybe<Scalars['String']['output']>;
  paid_amount?: Maybe<Scalars['Int']['output']>;
  paid_at?: Maybe<Scalars['DateTime']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  payment_options: Array<OrganizationInvoicePaymentOption>;
  status?: Maybe<INVOICE_STATUS>;
  tax_amount: Scalars['Int']['output'];
  total_amount: Scalars['Int']['output'];
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationCustomerStatementLineData = OrganizationCustomerStatementInvoiceLine | OrganizationCustomerStatementTransactionLine;

export type OrganizationCustomerStatementLineDataPaginationConnection = {
  __typename?: 'OrganizationCustomerStatementLineDataPaginationConnection';
  edges: Array<OrganizationCustomerStatementLineDataPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationCustomerStatementLineDataPaginationEdge = {
  __typename?: 'OrganizationCustomerStatementLineDataPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationCustomerStatementLineData;
};

export type OrganizationCustomerStatementTransactionLine = {
  __typename?: 'OrganizationCustomerStatementTransactionLine';
  amount: Scalars['Int']['output'];
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  date: Scalars['DateTime']['output'];
  due_date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization_customer_id: Scalars['String']['output'];
  organization_transaction: OrganizationCustomerStatementTransactionLineData;
  organization_transaction_id: Scalars['String']['output'];
  paid_amount: Scalars['Int']['output'];
  running_balance: Scalars['Int']['output'];
  transaction_status: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationCustomerStatementTransactionLineData = {
  __typename?: 'OrganizationCustomerStatementTransactionLineData';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  due_date: Scalars['DateTime']['output'];
  failed_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links: Array<OrganizationTransactionLink>;
  method_id?: Maybe<Scalars['String']['output']>;
  method_type: TRANSACTION_METHOD;
  organization_acct_provider_conn_transactions: Array<OrganizationAcctProviderConnTransaction>;
  provider_code: TRANSACTION_PROVIDER;
  provider_transaction_code: Scalars['String']['output'];
  recipient_organization_id?: Maybe<Scalars['String']['output']>;
  recipient_organization_target_customer_id?: Maybe<Scalars['String']['output']>;
  recipient_organization_target_vendor_id?: Maybe<Scalars['String']['output']>;
  reverted_at?: Maybe<Scalars['DateTime']['output']>;
  sender_organization_id?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<TRANSACTION_STATUS>;
  succeeded_at?: Maybe<Scalars['DateTime']['output']>;
  transaction_date: Scalars['DateTime']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationInvite = {
  __typename?: 'OrganizationInvite';
  accepted_at?: Maybe<Scalars['DateTime']['output']>;
  canceled_at?: Maybe<Scalars['DateTime']['output']>;
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  created_by_user: User;
  created_by_user_id: Scalars['String']['output'];
  email: Scalars['String']['output'];
  expires_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organization_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  rejected_at?: Maybe<Scalars['DateTime']['output']>;
  role: ORGANIZATION_USER_ROLE;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationInvoice = {
  __typename?: 'OrganizationInvoice';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  /** The open amount for this invoice. Balance 0 represents invoice fully paid. */
  balance?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  customer_address_city?: Maybe<Scalars['String']['output']>;
  customer_address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  customer_address_lat?: Maybe<Scalars['Float']['output']>;
  customer_address_line_1?: Maybe<Scalars['String']['output']>;
  customer_address_line_2?: Maybe<Scalars['String']['output']>;
  customer_address_lng?: Maybe<Scalars['Float']['output']>;
  customer_address_number?: Maybe<Scalars['String']['output']>;
  customer_address_state?: Maybe<Scalars['String']['output']>;
  customer_address_zip_code?: Maybe<Scalars['String']['output']>;
  customer_email: Scalars['String']['output'];
  description: Scalars['String']['output'];
  discount_amount: Scalars['Int']['output'];
  due_date: Scalars['DateTime']['output'];
  email_sent_at?: Maybe<Scalars['DateTime']['output']>;
  file?: Maybe<File>;
  file_id?: Maybe<Scalars['String']['output']>;
  has_sync_errors?: Maybe<Scalars['Boolean']['output']>;
  history: OrganizationInvoiceHistoryPaginationConnection;
  id: Scalars['ID']['output'];
  invoice_date: Scalars['DateTime']['output'];
  is_overdue?: Maybe<Scalars['Boolean']['output']>;
  number: Scalars['String']['output'];
  organization: Organization;
  organization_acct_provider_conn_invoices: Array<OrganizationAcctProviderConnInvoice>;
  organization_customer: OrganizationCustomer;
  organization_customer_id: Scalars['String']['output'];
  organization_id: Scalars['String']['output'];
  organization_project?: Maybe<OrganizationProject>;
  organization_project_id?: Maybe<Scalars['String']['output']>;
  paid_amount?: Maybe<Scalars['Int']['output']>;
  paid_at?: Maybe<Scalars['DateTime']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  payment_options: Array<OrganizationInvoicePaymentOption>;
  status?: Maybe<INVOICE_STATUS>;
  tax_amount: Scalars['Int']['output'];
  total_amount: Scalars['Int']['output'];
  transaction_links?: Maybe<Array<OrganizationTransactionLink>>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationInvoicehistoryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationInvoiceHistory = {
  __typename?: 'OrganizationInvoiceHistory';
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization_invoice_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationInvoiceHistoryPaginationConnection = {
  __typename?: 'OrganizationInvoiceHistoryPaginationConnection';
  edges: Array<OrganizationInvoiceHistoryPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationInvoiceHistoryPaginationEdge = {
  __typename?: 'OrganizationInvoiceHistoryPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationInvoiceHistory;
};

export type OrganizationInvoicePaginationConnection = {
  __typename?: 'OrganizationInvoicePaginationConnection';
  edges: Array<OrganizationInvoicePaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationInvoicePaginationEdge = {
  __typename?: 'OrganizationInvoicePaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationInvoice;
};

export type OrganizationInvoicePaymentOption = {
  __typename?: 'OrganizationInvoicePaymentOption';
  method: PAYMENT_METHOD;
  payload?: Maybe<Scalars['JSON']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type OrganizationInvoiceSummary = {
  __typename?: 'OrganizationInvoiceSummary';
  balance: Scalars['Int']['output'];
  currency?: Maybe<CURRENCY>;
  customer_organization?: Maybe<Organization>;
  customer_organization_id?: Maybe<Scalars['String']['output']>;
  data: OrganizationInvoicePaginationConnection;
  due_end_date?: Maybe<Scalars['DateTime']['output']>;
  due_start_date?: Maybe<Scalars['DateTime']['output']>;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  overdue_amount: Scalars['Int']['output'];
  paid_amount: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<INVOICE_STATUS>;
  total_amount: Scalars['Int']['output'];
  vendor_organization: Organization;
  vendor_organization_customer?: Maybe<OrganizationCustomer>;
  vendor_organization_customer_id?: Maybe<Scalars['String']['output']>;
  vendor_organization_id: Scalars['String']['output'];
};

export type OrganizationPaymentMethod = {
  __typename?: 'OrganizationPaymentMethod';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_default: Scalars['Boolean']['output'];
  is_enabled: Scalars['Boolean']['output'];
  organization_id: Scalars['String']['output'];
  payment_provider_code: PAYMENT_METHOD;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationProject = {
  __typename?: 'OrganizationProject';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  budget_amount: Scalars['Float']['output'];
  budget_currency_code: CURRENCY;
  canceled_at?: Maybe<Scalars['DateTime']['output']>;
  completed_at?: Maybe<Scalars['DateTime']['output']>;
  contract_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  ends_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization: Organization;
  organization_customer: OrganizationCustomer;
  organization_customer_id: Scalars['String']['output'];
  organization_id: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationProjectChange = {
  __typename?: 'OrganizationProjectChange';
  changed_budget_amount: Scalars['Float']['output'];
  changed_ends_at: Scalars['DateTime']['output'];
  changed_name: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization_project_change_request: OrganizationProjectChangeRequest;
  organization_project_change_request_id: Scalars['String']['output'];
  previous_budget_amount: Scalars['Float']['output'];
  previous_ends_at: Scalars['DateTime']['output'];
  previous_name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationProjectChangeRequest = {
  __typename?: 'OrganizationProjectChangeRequest';
  accepted_at?: Maybe<Scalars['DateTime']['output']>;
  budget_amount: Scalars['Float']['output'];
  canceled_at?: Maybe<Scalars['DateTime']['output']>;
  contract_url?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  created_by_user?: Maybe<User>;
  created_by_user_id?: Maybe<Scalars['String']['output']>;
  created_side: ORGANIZATION_INVITE_SIDE;
  ends_at: Scalars['DateTime']['output'];
  expires_at: Scalars['DateTime']['output'];
  finished_by_user?: Maybe<User>;
  finished_by_user_id?: Maybe<Scalars['String']['output']>;
  finished_side?: Maybe<ORGANIZATION_INVITE_SIDE>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  organization_project: OrganizationProject;
  organization_project_changes: Array<OrganizationProjectChange>;
  organization_project_id: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  rejected_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationReceivingMethod = {
  __typename?: 'OrganizationReceivingMethod';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  is_default: Scalars['Boolean']['output'];
  is_enabled: Scalars['Boolean']['output'];
  organization_id: Scalars['String']['output'];
  receiving_provider_code: RECEIVING_METHOD;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationReminderSetting = {
  __typename?: 'OrganizationReminderSetting';
  created_at: Scalars['DateTime']['output'];
  days_amount: Scalars['Int']['output'];
  due_date_mode: REMINDER_DUE_DATE_MODE;
  id: Scalars['ID']['output'];
  organization_customer_id?: Maybe<Scalars['String']['output']>;
  organization_id: Scalars['String']['output'];
  organization_invoice_id?: Maybe<Scalars['String']['output']>;
  organization_project_id?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  repeat_mode?: Maybe<REMINDER_REPEAT_MODE>;
  repeat_value?: Maybe<Scalars['Int']['output']>;
  selected_hour: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationReminderSettingPaginationConnection = {
  __typename?: 'OrganizationReminderSettingPaginationConnection';
  edges: Array<OrganizationReminderSettingPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationReminderSettingPaginationEdge = {
  __typename?: 'OrganizationReminderSettingPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationReminderSetting;
};

export type OrganizationTransaction = {
  __typename?: 'OrganizationTransaction';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: CURRENCY;
  due_date: Scalars['DateTime']['output'];
  failed_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links: Array<OrganizationTransactionLink>;
  method_id?: Maybe<Scalars['String']['output']>;
  method_type: TRANSACTION_METHOD;
  organization_acct_provider_conn_transactions: Array<OrganizationAcctProviderConnTransaction>;
  provider_code: TRANSACTION_PROVIDER;
  provider_transaction_code: Scalars['String']['output'];
  recipient_organization_id?: Maybe<Scalars['String']['output']>;
  recipient_organization_target_customer_id?: Maybe<Scalars['String']['output']>;
  recipient_organization_target_vendor_id?: Maybe<Scalars['String']['output']>;
  reverted_at?: Maybe<Scalars['DateTime']['output']>;
  sender_organization_id?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<TRANSACTION_STATUS>;
  succeeded_at?: Maybe<Scalars['DateTime']['output']>;
  transaction_date: Scalars['DateTime']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationTransactionLink = {
  __typename?: 'OrganizationTransactionLink';
  amount: Scalars['Int']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  item_id: Scalars['String']['output'];
  item_type: TRANSACTION_ITEM_TYPE;
  organization_transaction: OrganizationTransaction;
  organization_transaction_id: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationUser = {
  __typename?: 'OrganizationUser';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  organization: Organization;
  organization_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  role: ORGANIZATION_USER_ROLE;
  send_invoice_reminders: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  user_id: Scalars['String']['output'];
};

export type OrganizationVendor = {
  __typename?: 'OrganizationVendor';
  address_city?: Maybe<Scalars['String']['output']>;
  address_country_code_iso_3?: Maybe<Scalars['String']['output']>;
  address_lat?: Maybe<Scalars['Float']['output']>;
  address_line_1?: Maybe<Scalars['String']['output']>;
  address_line_2?: Maybe<Scalars['String']['output']>;
  address_lng?: Maybe<Scalars['Float']['output']>;
  address_number?: Maybe<Scalars['String']['output']>;
  address_state?: Maybe<Scalars['String']['output']>;
  address_zip_code?: Maybe<Scalars['String']['output']>;
  balance?: Maybe<Scalars['Int']['output']>;
  bill_summary: OrganizationBillSummary;
  conn_locked_data_at?: Maybe<Scalars['DateTime']['output']>;
  connection?: Maybe<OrganizationConnection>;
  contacts: Array<OrganizationVendorContact>;
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: Organization;
  organization_acct_provider_conn_vendors: Array<OrganizationAcctProviderConnVendor>;
  organization_id: Scalars['String']['output'];
  overdue_amount?: Maybe<Scalars['Int']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  tax_code?: Maybe<Scalars['String']['output']>;
  tax_code_type?: Maybe<TAX_TYPE>;
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationVendorbill_summaryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<BILL_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationVendorContact = {
  __typename?: 'OrganizationVendorContact';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_default: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  organization_vendor_id: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationVendorContactPaginationConnection = {
  __typename?: 'OrganizationVendorContactPaginationConnection';
  edges: Array<OrganizationVendorContactPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationVendorContactPaginationEdge = {
  __typename?: 'OrganizationVendorContactPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationVendorContact;
};

export type OrganizationVendorPaginationConnection = {
  __typename?: 'OrganizationVendorPaginationConnection';
  edges: Array<OrganizationVendorPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationVendorPaginationEdge = {
  __typename?: 'OrganizationVendorPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: OrganizationVendor;
};

export enum PAYMENT_METHOD {
  MANUAL = 'MANUAL',
  QUICKBOOKS = 'QUICKBOOKS'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  session: Session;
  unauthorizedUserOrganizationUserInvite: UnauthorizedUserOrganizationUserInviteResponse;
  unconnectedUserCustomerOrganizationStatement: OrganizationCustomerStatement;
  user: User;
  userCustomerOrganization: OrganizationConnection;
  userCustomerOrganizationInvoice: OrganizationInvoice;
  userCustomerOrganizationInvoiceSummary: OrganizationInvoiceSummary;
  userCustomerOrganizationInvoices: OrganizationInvoicePaginationConnection;
  userCustomerOrganizationProject: OrganizationProject;
  userCustomerOrganizationProjectChange: OrganizationProjectChange;
  userCustomerOrganizationProjectChangeRequest: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequests: Array<OrganizationProjectChangeRequest>;
  userCustomerOrganizationProjectChanges: Array<OrganizationProjectChange>;
  userCustomerOrganizationProjects: Array<OrganizationProject>;
  userCustomerOrganizationStatement: OrganizationCustomerStatement;
  userCustomerOrganizations: Array<OrganizationConnection>;
  userOrganization: Organization;
  userOrganizationAcctProvider: OrganizationAcctProviderConn;
  userOrganizationAcctProviderSynchronization: OrganizationAcctProviderConnSynchronization;
  userOrganizationAcctProviderSynchronizations: OrganizationAcctProviderConnSynchronizationPaginationConnection;
  userOrganizationAcctProviders: OrganizationAcctProviderConnPaginationConnection;
  userOrganizationBill: OrganizationBill;
  userOrganizationBillSummary: OrganizationBillSummary;
  userOrganizationBills: OrganizationBillPaginationConnection;
  userOrganizationCollaborator: OrganizationUser;
  userOrganizationCollaborators: Array<OrganizationUser>;
  userOrganizationConnection: OrganizationConnection;
  userOrganizationConnections: OrganizationConnectionPaginationConnection;
  userOrganizationCustomer: OrganizationCustomer;
  userOrganizationCustomerContact: OrganizationCustomerContact;
  userOrganizationCustomerContacts: OrganizationCustomerContactPaginationConnection;
  userOrganizationCustomerStatement: OrganizationCustomerStatement;
  userOrganizationCustomers: OrganizationCustomerPaginationConnection;
  userOrganizationInviteCollaborator: OrganizationInvite;
  userOrganizationInviteCollaborators: Array<OrganizationInvite>;
  userOrganizationInvoice: OrganizationInvoice;
  userOrganizationInvoiceSummary: OrganizationInvoiceSummary;
  userOrganizationInvoices: OrganizationInvoicePaginationConnection;
  userOrganizationPaymentMethod: OrganizationPaymentMethod;
  userOrganizationPaymentMethodTransaction: OrganizationTransaction;
  userOrganizationPaymentMethodTransactions: Array<OrganizationTransaction>;
  userOrganizationPaymentMethods: Array<OrganizationPaymentMethod>;
  userOrganizationProject: OrganizationProject;
  userOrganizationProjectChange: OrganizationProjectChange;
  userOrganizationProjectChangeRequest: OrganizationProjectChangeRequest;
  userOrganizationProjectChangeRequests: Array<OrganizationProjectChangeRequest>;
  userOrganizationProjectChanges: Array<OrganizationProjectChange>;
  userOrganizationProjects: Array<OrganizationProject>;
  userOrganizationReceivingMethod: OrganizationReceivingMethod;
  userOrganizationReceivingMethodTransaction: OrganizationTransaction;
  userOrganizationReceivingMethodTransactions: Array<OrganizationTransaction>;
  userOrganizationReceivingMethods: Array<OrganizationReceivingMethod>;
  userOrganizationReminderSetting: OrganizationReminderSetting;
  userOrganizationReminderSettings: OrganizationReminderSettingPaginationConnection;
  userOrganizationUserInvite: OrganizationInvite;
  userOrganizationUserInvites: Array<OrganizationInvite>;
  userOrganizationVendor: OrganizationVendor;
  userOrganizationVendorContact: OrganizationVendorContact;
  userOrganizationVendorContacts: OrganizationVendorContactPaginationConnection;
  userOrganizationVendors: OrganizationVendorPaginationConnection;
  userOrganizations: Array<Organization>;
};


export type QueryunauthorizedUserOrganizationUserInviteArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type QueryunconnectedUserCustomerOrganizationStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  email: Scalars['String']['input'];
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
  unique_code: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationInvoiceArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationInvoiceSummaryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationInvoicesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationProjectArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationProjectChangeArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationProjectChangeRequestArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserCustomerOrganizationProjectChangeRequestsArgs = {
  accepted: Scalars['Boolean']['input'];
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled: Scalars['Boolean']['input'];
  expired: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  rejected: Scalars['Boolean']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationProjectChangesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationProjectsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserCustomerOrganizationsArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationAcctProviderArgs = {
  organization_acct_provider_conn_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationAcctProviderSynchronizationArgs = {
  organization_acct_provider_conn_synchronization_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationAcctProviderSynchronizationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  finished?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_acct_provider_conn_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationAcctProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationBillArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationBillSummaryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<BILL_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationBillsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  organization_vendor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<BILL_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  unique_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserOrganizationCollaboratorArgs = {
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type QueryuserOrganizationCollaboratorsArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationConnectionArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationConnectionsArgs = {
  organization_id: Scalars['String']['input'];
  status?: InputMaybe<ORGANIZATION_CONNECTION_STATUS>;
};


export type QueryuserOrganizationCustomerArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationCustomerContactArgs = {
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryuserOrganizationCustomerContactsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationCustomerStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationCustomersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationInviteCollaboratorArgs = {
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type QueryuserOrganizationInviteCollaboratorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationInvoiceArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type QueryuserOrganizationInvoiceSummaryArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  due_end_date?: InputMaybe<Scalars['DateTime']['input']>;
  due_start_date?: InputMaybe<Scalars['DateTime']['input']>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationInvoicesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<INVOICE_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  unique_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserOrganizationPaymentMethodArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type QueryuserOrganizationPaymentMethodTransactionArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type QueryuserOrganizationPaymentMethodTransactionsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationProjectArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryuserOrganizationProjectChangeArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryuserOrganizationProjectChangeRequestArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryuserOrganizationProjectChangeRequestsArgs = {
  accepted: Scalars['Boolean']['input'];
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled: Scalars['Boolean']['input'];
  expired: Scalars['Boolean']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  rejected: Scalars['Boolean']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationProjectChangesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationProjectsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationReceivingMethodArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type QueryuserOrganizationReceivingMethodTransactionArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type QueryuserOrganizationReceivingMethodTransactionsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationReceivingMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationReminderSettingArgs = {
  organization_id: Scalars['String']['input'];
  organization_reminder_setting_id: Scalars['String']['input'];
};


export type QueryuserOrganizationReminderSettingsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  due_date_mode?: InputMaybe<REMINDER_DUE_DATE_MODE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  organization_invoice_id?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationUserInviteArgs = {
  organization_invite_id: Scalars['String']['input'];
};


export type QueryuserOrganizationUserInvitesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationVendorArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserOrganizationVendorContactArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryuserOrganizationVendorContactsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationVendorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryuserOrganizationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum RECEIVING_METHOD {
  MANUAL = 'MANUAL',
  QUICKBOOKS = 'QUICKBOOKS'
}

export enum RECIPIENT_TYPE {
  ORGANIZATION = 'ORGANIZATION',
  USER = 'USER'
}

export enum REMINDER_DUE_DATE_MODE {
  AFTER = 'AFTER',
  BEFORE = 'BEFORE'
}

export enum REMINDER_REPEAT_MODE {
  DAILY = 'DAILY',
  MONTHLY = 'MONTHLY',
  WEEKLY = 'WEEKLY'
}

export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export enum STORAGE_PROVIDER {
  GOOGLE_CLOUD_STORAGE = 'GOOGLE_CLOUD_STORAGE'
}

export type Session = {
  __typename?: 'Session';
  user: User;
  user_auth_provider_conn: UserAuthProviderConn;
  user_session: UserSession;
};

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: SORT_ORDER;
};

export enum TAX_TYPE {
  ATIN = 'ATIN',
  EIN = 'EIN',
  ITIN = 'ITIN',
  PTIN = 'PTIN',
  SSN = 'SSN'
}

export enum TRANSACTION_ITEM_TYPE {
  BILL = 'BILL',
  INVOICE = 'INVOICE',
  OTHER = 'OTHER'
}

export enum TRANSACTION_METHOD {
  PAYMENT = 'PAYMENT',
  RECEIVING = 'RECEIVING'
}

export enum TRANSACTION_PROVIDER {
  MANUAL = 'MANUAL',
  QUICKBOOKS = 'QUICKBOOKS'
}

export enum TRANSACTION_STATUS {
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  REVERTED = 'REVERTED',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED'
}

export type UnauthorizedUserOrganizationUserInviteResponse = {
  __typename?: 'UnauthorizedUserOrganizationUserInviteResponse';
  invited_by?: Maybe<Scalars['String']['output']>;
  organization_id: Scalars['String']['output'];
  organization_name: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  current_email_verification_id?: Maybe<Scalars['String']['output']>;
  current_phone_number_verification_id?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  organizations?: Maybe<Array<Maybe<OrganizationUser>>>;
  phone_number?: Maybe<Scalars['String']['output']>;
  profile_picture_file?: Maybe<File>;
  profile_picture_file_id?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type UserAuthProviderConn = {
  __typename?: 'UserAuthProviderConn';
  auth_provider_code: AUTH_PROVIDER;
  code: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  disconnected_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  payload: Scalars['JSON']['output'];
  updated_at: Scalars['DateTime']['output'];
  user_id: Scalars['String']['output'];
};

export type UserEmailVerifyOrChangeFinishSchema = {
  email: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserEmailVerifyOrChangeStartSchema = {
  email: Scalars['String']['input'];
};

export type UserOrganizationAcctProviderConnUpdateSchema = {
  automatic_pull_enabled: Scalars['Boolean']['input'];
  automatic_push_enabled: Scalars['Boolean']['input'];
};

export type UserOrganizationBillManualPaymentCreateSchema = {
  amount: Scalars['Float']['input'];
  currency_code: CURRENCY;
};

export type UserOrganizationBillSchema = {
  amount: Scalars['Float']['input'];
  bill_date: Scalars['DateTime']['input'];
  currency_code: CURRENCY;
  description: Scalars['String']['input'];
  discount_amount: Scalars['Float']['input'];
  due_date: Scalars['DateTime']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  organization_vendor_id: Scalars['String']['input'];
  total_amount: Scalars['Float']['input'];
};

export type UserOrganizationCollaboratorUpdateSchema = {
  role: ORGANIZATION_USER_ROLE;
  send_invoice_reminders: Scalars['Boolean']['input'];
};

export type UserOrganizationCreateSchema = {
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip_code?: InputMaybe<Scalars['String']['input']>;
  business_address_city?: InputMaybe<Scalars['String']['input']>;
  business_address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  business_address_line_1?: InputMaybe<Scalars['String']['input']>;
  business_address_line_2?: InputMaybe<Scalars['String']['input']>;
  business_address_number?: InputMaybe<Scalars['String']['input']>;
  business_address_state?: InputMaybe<Scalars['String']['input']>;
  business_address_zip_code?: InputMaybe<Scalars['String']['input']>;
  business_industry?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_number_of_employees?: InputMaybe<Scalars['Int']['input']>;
  business_tax_code?: InputMaybe<Scalars['String']['input']>;
  business_tax_code_type?: InputMaybe<TAX_TYPE>;
  email: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  primary_contact_name?: InputMaybe<Scalars['String']['input']>;
  setting_allow_invoice_due_snooze_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_allow_invoice_overdue_snooze_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_send_invoice_due_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_send_invoice_overdue_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationCustomerContactCreateSchema = {
  email: Scalars['String']['input'];
  is_default: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  send_invoice_reminders: Scalars['Boolean']['input'];
};

export type UserOrganizationCustomerContactUpdateSchema = {
  email: Scalars['String']['input'];
  is_default: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  send_invoice_reminders: Scalars['Boolean']['input'];
};

export type UserOrganizationCustomerSchema = {
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip_code?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  is_active: Scalars['Boolean']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  tax_code?: InputMaybe<Scalars['String']['input']>;
  tax_code_type?: InputMaybe<TAX_TYPE>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationCustomerSendInvoiceEmailSchema = {
  contact_ids: Array<Scalars['String']['input']>;
  organization_invoice_id: Scalars['String']['input'];
  send_to_primary_contact: Scalars['Boolean']['input'];
};

export type UserOrganizationCustomerSendStatementEmailSchema = {
  contact_ids: Array<Scalars['String']['input']>;
  organization_customer_id: Scalars['String']['input'];
  send_to_primary_contact: Scalars['Boolean']['input'];
};

export type UserOrganizationEmailVerifyOrChangeFinishSchema = {
  email: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserOrganizationEmailVerifyOrChangeStartSchema = {
  email: Scalars['String']['input'];
};

export type UserOrganizationInviteCollaboratorCreateSchema = {
  email: Scalars['String']['input'];
  role: ORGANIZATION_USER_ROLE;
};

export type UserOrganizationInvoiceManualPaymentCreateSchema = {
  amount: Scalars['Float']['input'];
  currency_code: CURRENCY;
};

export type UserOrganizationInvoiceSchema = {
  amount: Scalars['Float']['input'];
  currency_code: CURRENCY;
  description: Scalars['String']['input'];
  discount_amount: Scalars['Float']['input'];
  due_date: Scalars['DateTime']['input'];
  invoice_date: Scalars['DateTime']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  organization_customer_id: Scalars['String']['input'];
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  total_amount: Scalars['Float']['input'];
};

export type UserOrganizationPaymentMethodUpdateSchema = {
  is_default: Scalars['Boolean']['input'];
  is_enabled: Scalars['Boolean']['input'];
};

export type UserOrganizationProjectChangeRequestCreateSchema = {
  budget_amount: Scalars['Float']['input'];
  change_request_expires_at?: InputMaybe<Scalars['DateTime']['input']>;
  contract_url?: InputMaybe<Scalars['String']['input']>;
  ends_at: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
};

export type UserOrganizationProjectCreateSchema = {
  budget_amount: Scalars['Float']['input'];
  budget_currency_code: CURRENCY;
  contract_url?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  ends_at: Scalars['DateTime']['input'];
  name: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
};

export type UserOrganizationProjectUpdateSchema = {
  canceled_at?: InputMaybe<Scalars['DateTime']['input']>;
  completed_at?: InputMaybe<Scalars['DateTime']['input']>;
  contract_url?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
};

export type UserOrganizationReceivingMethodUpdateSchema = {
  is_default: Scalars['Boolean']['input'];
  is_enabled: Scalars['Boolean']['input'];
};

export type UserOrganizationReminderSettingSchema = {
  days_amount: Scalars['Int']['input'];
  due_date_mode: REMINDER_DUE_DATE_MODE;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_invoice_id?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  repeat_mode?: InputMaybe<REMINDER_REPEAT_MODE>;
  repeat_value?: InputMaybe<Scalars['Int']['input']>;
  selected_hour: Scalars['Int']['input'];
};

export type UserOrganizationUpdateSchema = {
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip_code?: InputMaybe<Scalars['String']['input']>;
  business_address_city?: InputMaybe<Scalars['String']['input']>;
  business_address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  business_address_line_1?: InputMaybe<Scalars['String']['input']>;
  business_address_line_2?: InputMaybe<Scalars['String']['input']>;
  business_address_number?: InputMaybe<Scalars['String']['input']>;
  business_address_state?: InputMaybe<Scalars['String']['input']>;
  business_address_zip_code?: InputMaybe<Scalars['String']['input']>;
  business_industry?: InputMaybe<Scalars['String']['input']>;
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_number_of_employees?: InputMaybe<Scalars['Int']['input']>;
  business_tax_code?: InputMaybe<Scalars['String']['input']>;
  business_tax_code_type?: InputMaybe<TAX_TYPE>;
  language?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  primary_contact_name?: InputMaybe<Scalars['String']['input']>;
  setting_allow_invoice_due_snooze_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_allow_invoice_overdue_snooze_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_send_invoice_due_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  setting_send_invoice_overdue_reminders?: InputMaybe<Scalars['Boolean']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationVendorContactCreateSchema = {
  email: Scalars['String']['input'];
  is_default: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationVendorContactUpdateSchema = {
  email: Scalars['String']['input'];
  is_default: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationVendorSchema = {
  address_city?: InputMaybe<Scalars['String']['input']>;
  address_country_code_iso_3?: InputMaybe<Scalars['String']['input']>;
  address_line_1?: InputMaybe<Scalars['String']['input']>;
  address_line_2?: InputMaybe<Scalars['String']['input']>;
  address_number?: InputMaybe<Scalars['String']['input']>;
  address_state?: InputMaybe<Scalars['String']['input']>;
  address_zip_code?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  is_active: Scalars['Boolean']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  tax_code?: InputMaybe<Scalars['String']['input']>;
  tax_code_type?: InputMaybe<TAX_TYPE>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordChangeFinishSchema = {
  new_password: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserPasswordChangeStartSchema = {
  current_password?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordResetFinishSchema = {
  email: Scalars['String']['input'];
  new_password: Scalars['String']['input'];
  user_id: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserPasswordResetStartSchema = {
  email: Scalars['String']['input'];
};

export type UserPhoneNumberVerifyOrChangeFinishSchema = {
  phone_number: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserPhoneNumberVerifyOrChangeStartSchema = {
  phone_number: Scalars['String']['input'];
};

export type UserSession = {
  __typename?: 'UserSession';
  access_token: Scalars['String']['output'];
  access_token_expires_at: Scalars['DateTime']['output'];
  canceled_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  parent_session?: Maybe<UserSession>;
  parent_session_id?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  refresh_token_expires_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
  user_auth_provider_conn: UserAuthProviderConn;
  user_auth_provider_conn_id: Scalars['String']['output'];
};

export type UserSignUpWithEmailFinishSchema = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserSignUpWithEmailStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailVerifySchema = {
  email: Scalars['String']['input'];
  verification_code: Scalars['String']['input'];
};

export type UserUpdateDataSchema = {
  first_name: Scalars['String']['input'];
  language: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
};

export type OrganizationAcctProviderConnFragmentFragment = { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } };

export type OrganizationAcctProviderConnSynchronizationFragmentFragment = { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string };

export type UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
}>;


export type UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPullOptionsGet: any };

export type UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
  payload: Scalars['JSON']['input'];
}>;


export type UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPullOptionsSet: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
}>;


export type UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPushOptionsGet: any };

export type UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
  payload: Scalars['JSON']['input'];
}>;


export type UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPushOptionsSet: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderConnDisconnectMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
}>;


export type UserOrganizationAcctProviderConnDisconnectMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnDisconnect: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderConnUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
  data: UserOrganizationAcctProviderConnUpdateSchema;
}>;


export type UserOrganizationAcctProviderConnUpdateMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnUpdate: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderConnectMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
  url: Scalars['String']['input'];
  automaticPull: Scalars['Boolean']['input'];
  automaticPush: Scalars['Boolean']['input'];
}>;


export type UserOrganizationAcctProviderConnectMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnect: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderGetOAuthUrlMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
}>;


export type UserOrganizationAcctProviderGetOAuthUrlMutation = { __typename?: 'Mutation', userOrganizationAcctProviderGetOAuthUrl: string };

export type UserOrganizationAcctProviderSynchronizeMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: ACCT_PROVIDER;
  pull: Scalars['Boolean']['input'];
  push: Scalars['Boolean']['input'];
}>;


export type UserOrganizationAcctProviderSynchronizeMutation = { __typename?: 'Mutation', userOrganizationAcctProviderSynchronize: any };

export type UserOrganizationAcctProvidersQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationAcctProvidersQuery = { __typename?: 'Query', userOrganizationAcctProviders: { __typename?: 'OrganizationAcctProviderConnPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationAcctProviderConnPaginationEdge', cursor: any, node: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationAcctProviderQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationAcctProviderConnId: Scalars['String']['input'];
}>;


export type UserOrganizationAcctProviderQuery = { __typename?: 'Query', userOrganizationAcctProvider: { __typename?: 'OrganizationAcctProviderConn', id: string, acct_provider_code: ACCT_PROVIDER, code: string, payload?: any | null, conn_expires_at: any, automatic_pull_enabled: boolean, automatic_push_enabled: boolean, disconnected_at?: any | null, created_at: any, updated_at: any, organization_id: string, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS, synchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }> } } };

export type UserOrganizationAcctProviderSynchronizationsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationAcctProviderConnId?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationAcctProviderSynchronizationsQuery = { __typename?: 'Query', userOrganizationAcctProviderSynchronizations: { __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationAcctProviderConnSynchronizationPaginationEdge', cursor: any, node: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationAcctProviderSynchronizationQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationAcctProviderConnSynchronizationId: Scalars['String']['input'];
}>;


export type UserOrganizationAcctProviderSynchronizationQuery = { __typename?: 'Query', userOrganizationAcctProviderSynchronization: { __typename?: 'OrganizationAcctProviderConnSynchronization', id: string, trigger_code: string, pull: boolean, push: boolean, errors: Array<string>, started_at: any, finished_at?: any | null, failed_at?: any | null, succeeded_at?: any | null, local_read_success_count: number, local_create_success_count: number, local_update_success_count: number, local_delete_success_count: number, local_read_failure_count: number, local_create_failure_count: number, local_update_failure_count: number, local_delete_failure_count: number, remote_read_success_count: number, remote_create_success_count: number, remote_update_success_count: number, remote_delete_success_count: number, remote_read_failure_count: number, remote_create_failure_count: number, remote_update_failure_count: number, remote_delete_failure_count: number, sync_cluster_code: string, status_description: string, created_at: any, updated_at: any, organization_id: string, organization_acct_provider_conn_id: string } };

export type UserSessionsCloseMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSessionsCloseMutation = { __typename?: 'Mutation', userSessionsClose: { __typename?: 'UserAuthProviderConn', id: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, first_name?: string | null, last_name?: string | null, language?: string | null, phone_number?: string | null, timezone?: string | null, updated_at: any, created_at: any, organizations?: Array<{ __typename?: 'OrganizationUser', id: string, organization_id: string, organization: { __typename?: 'Organization', name: string, email: string } } | null> | null, profile_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type UnauthorizedUserOrganizationUserInviteQueryVariables = Exact<{
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
  organizationInviteId: Scalars['String']['input'];
}>;


export type UnauthorizedUserOrganizationUserInviteQuery = { __typename?: 'Query', unauthorizedUserOrganizationUserInvite: { __typename?: 'UnauthorizedUserOrganizationUserInviteResponse', invited_by?: string | null, organization_name: string, organization_id: string } };

export type UserSignUpWithEmailStartMutationVariables = Exact<{
  data: UserSignUpWithEmailStartSchema;
}>;


export type UserSignUpWithEmailStartMutation = { __typename?: 'Mutation', userSignUpWithEmailStart: any };

export type UserSignUpWithEmailVerifyMutationVariables = Exact<{
  data: UserSignUpWithEmailVerifySchema;
}>;


export type UserSignUpWithEmailVerifyMutation = { __typename?: 'Mutation', userSignUpWithEmailVerify: any };

export type UserOrganizationUserInviteAcceptMutationVariables = Exact<{
  code: Scalars['String']['input'];
  organizationInviteId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationUserInviteAcceptMutation = { __typename?: 'Mutation', userOrganizationUserInviteAccept: { __typename?: 'OrganizationUser', role: ORGANIZATION_USER_ROLE } };

export type UserSignUpWithEmailFinishSchemaMutationVariables = Exact<{
  data: UserSignUpWithEmailFinishSchema;
}>;


export type UserSignUpWithEmailFinishSchemaMutation = { __typename?: 'Mutation', userSignUpWithEmailFinish: string };

export type UserPasswordResetStartMutationVariables = Exact<{
  data: UserPasswordResetStartSchema;
}>;


export type UserPasswordResetStartMutation = { __typename?: 'Mutation', userPasswordResetStart: string };

export type UserPasswordResetFinishMutationVariables = Exact<{
  userPasswordResetFinishData2: UserPasswordResetFinishSchema;
}>;


export type UserPasswordResetFinishMutation = { __typename?: 'Mutation', userPasswordResetFinish: string };

export type UserAuthProviderGetOAuthUrlMutationVariables = Exact<{
  authProviderCode: AUTH_PROVIDER;
}>;


export type UserAuthProviderGetOAuthUrlMutation = { __typename?: 'Mutation', userAuthProviderGetOAuthUrl: string };

export type UserAuthProviderGetOAuthTokenMutationVariables = Exact<{
  authProviderCode: AUTH_PROVIDER;
  authorizationToken: Scalars['String']['input'];
}>;


export type UserAuthProviderGetOAuthTokenMutation = { __typename?: 'Mutation', userAuthProviderGetOAuthToken: string };

export type OrganizationBillFragmentFragment = { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: BILL_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null };

export type UserOrganizationBillSummaryQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<BILL_STATUS>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationBillSummaryQuery = { __typename?: 'Query', userOrganizationBillSummary: { __typename?: 'OrganizationBillSummary', vendor_organization_id?: string | null, customer_organization_vendor_id?: string | null, customer_organization_id: string, total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, vendor_organization?: { __typename?: 'Organization', id: string, name: string } | null, customer_organization_vendor?: { __typename?: 'OrganizationVendor', id: string, name: string } | null, customer_organization: { __typename?: 'Organization', id: string, name: string }, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: BILL_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationBillQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationBillId: Scalars['String']['input'];
}>;


export type UserOrganizationBillQuery = { __typename?: 'Query', userOrganizationBill: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: BILL_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type UserOrganizationBillCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationBillSchema;
}>;


export type UserOrganizationBillCreateMutation = { __typename?: 'Mutation', userOrganizationBillCreate: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: BILL_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type OrganizationConnectionFragmentFragment = { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any };

export type UserOrganizationConnectionsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  status?: InputMaybe<ORGANIZATION_CONNECTION_STATUS>;
}>;


export type UserOrganizationConnectionsQuery = { __typename?: 'Query', userOrganizationConnections: { __typename?: 'OrganizationConnectionPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationConnectionPaginationEdge', cursor: any, node: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationConnectionQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionQuery = { __typename?: 'Query', userOrganizationConnection: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionInviteCustomerMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionInviteCustomerMutation = { __typename?: 'Mutation', userOrganizationConnectionInviteCustomer: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionInviteVendorMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionInviteVendorMutation = { __typename?: 'Mutation', userOrganizationConnectionInviteVendor: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionAcceptMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionAcceptMutation = { __typename?: 'Mutation', userOrganizationConnectionAccept: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionRejectMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionRejectMutation = { __typename?: 'Mutation', userOrganizationConnectionReject: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationCustomerConnLockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerConnLockMutation = { __typename?: 'Mutation', userOrganizationCustomerConnLock: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerConnUnlockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerConnUnlockMutation = { __typename?: 'Mutation', userOrganizationCustomerConnUnlock: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorConnLockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorConnLockMutation = { __typename?: 'Mutation', userOrganizationVendorConnLock: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorConnUnlockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorConnUnlockMutation = { __typename?: 'Mutation', userOrganizationVendorConnUnlock: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type userOrganizationVendorContactsQueryVariables = Exact<{
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type userOrganizationVendorContactsQuery = { __typename?: 'Query', userOrganizationVendorContacts: { __typename?: 'OrganizationVendorContactPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationVendorContactPaginationEdge', cursor: any, node: { __typename?: 'OrganizationVendorContact', email: string, id: string, is_default: boolean, name: string, phone_number?: string | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationCustomerContactsQueryVariables = Exact<{
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerContactsQuery = { __typename?: 'Query', userOrganizationCustomerContacts: { __typename?: 'OrganizationCustomerContactPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerContactPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any, organization_customer_id: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type userOrganizationVendorContactCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  data: UserOrganizationVendorContactCreateSchema;
}>;


export type userOrganizationVendorContactCreateMutation = { __typename?: 'Mutation', userOrganizationVendorContactCreate: { __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, organization_vendor_id: string } };

export type UserOrganizationCustomerContactCreateMutationVariables = Exact<{
  data: UserOrganizationCustomerContactCreateSchema;
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerContactCreateMutation = { __typename?: 'Mutation', userOrganizationCustomerContactCreate: { __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any, organization_customer_id: string } };

export type UserOrganizationVendorContactUpdateMutationVariables = Exact<{
  data: UserOrganizationVendorContactUpdateSchema;
  organizationVendorContactId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorContactUpdateMutation = { __typename?: 'Mutation', userOrganizationVendorContactUpdate: { __typename?: 'OrganizationVendorContact', email: string, id: string, is_default: boolean, name: string, phone_number?: string | null } };

export type UserOrganizationCustomerContactUpdateMutationVariables = Exact<{
  data: UserOrganizationCustomerContactUpdateSchema;
  organizationCustomerContactId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerContactUpdateMutation = { __typename?: 'Mutation', userOrganizationCustomerContactUpdate: { __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any, organization_customer_id: string } };

export type UserOrganizationVendorContactDeleteMutationVariables = Exact<{
  organizationVendorContactId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorContactDeleteMutation = { __typename?: 'Mutation', userOrganizationVendorContactDelete: { __typename?: 'OrganizationVendorContact', email: string, id: string, name: string, organization_vendor_id: string, phone_number?: string | null, is_default: boolean } };

export type UserOrganizationCustomerContactDeleteMutationVariables = Exact<{
  organizationCustomerContactId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerContactDeleteMutation = { __typename?: 'Mutation', userOrganizationCustomerContactDelete: { __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any, organization_customer_id: string } };

export type OrganizationCustomerFragmentFragment = { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationCustomersQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationCustomersQuery = { __typename?: 'Query', userOrganizationCustomers: { __typename?: 'OrganizationCustomerPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationCustomerStatementQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
  currency?: InputMaybe<CURRENCY>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationCustomerStatementQuery = { __typename?: 'Query', userOrganizationCustomerStatement: { __typename?: 'OrganizationCustomerStatement', vendor_organization_id: string, vendor_organization_customer_id: string, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, balance: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, one_to_thirty_days_due_amount?: number | null, thirty_one_to_sixty_days_due_amount?: number | null, sixty_plus_days_due_amount?: number | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer: { __typename?: 'OrganizationCustomer', id: string, name: string }, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationCustomerStatementLineDataPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerStatementLineDataPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerStatementInvoiceLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_invoice_id: string, paid_amount: number, running_balance: number, invoice_status: string, type: string, updated_at: any, organization_invoice: { __typename?: 'OrganizationCustomerStatementInvoiceLineData', payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } | { __typename?: 'OrganizationCustomerStatementTransactionLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_transaction_id: string, paid_amount: number, running_balance: number, transaction_status: string, type: string, updated_at: any, organization_transaction: { __typename?: 'OrganizationCustomerStatementTransactionLineData', links: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string }>, organization_acct_provider_conn_transactions: Array<{ __typename?: 'OrganizationAcctProviderConnTransaction', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationCustomerQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerQuery = { __typename?: 'Query', userOrganizationCustomer: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
  data: UserOrganizationCustomerSchema;
}>;


export type UserOrganizationCustomerUpdateMutation = { __typename?: 'Mutation', userOrganizationCustomerUpdate: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationCustomerSchema;
}>;


export type UserOrganizationCustomerCreateMutation = { __typename?: 'Mutation', userOrganizationCustomerCreate: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_summary: { __typename?: 'OrganizationInvoiceSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: INVOICE_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type OrganizationInvoiceFragmentFragment = { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: INVOICE_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null };

export type UserOrganizationInvoiceSummaryQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<INVOICE_STATUS>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationInvoiceSummaryQuery = { __typename?: 'Query', userOrganizationInvoiceSummary: { __typename?: 'OrganizationInvoiceSummary', vendor_organization_id: string, vendor_organization_customer_id?: string | null, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: INVOICE_STATUS | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer?: { __typename?: 'OrganizationCustomer', id: string, name: string } | null, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: INVOICE_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationInvoiceQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationInvoiceId: Scalars['String']['input'];
}>;


export type UserOrganizationInvoiceQuery = { __typename?: 'Query', userOrganizationInvoice: { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: CURRENCY, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: INVOICE_STATUS | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string, balance?: number | null }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER } }>, file?: { __typename?: 'File', public_url?: string | null } | null, payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type UserOrganizationInvoiceCreateMutationVariables = Exact<{
  data: UserOrganizationInvoiceSchema;
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationInvoiceCreateMutation = { __typename?: 'Mutation', userOrganizationInvoiceCreate: { __typename?: 'OrganizationInvoice', amount: number, archived_at?: any | null, balance?: number | null, created_at: any, currency_code: CURRENCY, id: string, is_overdue?: boolean | null, invoice_date: any, status?: INVOICE_STATUS | null, email_sent_at?: any | null, paid_at?: any | null, paid_amount?: number | null, total_amount: number } };

export type UserOrganizationCustomerSendInvoiceEmailMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendInvoiceEmailSchema> | UserOrganizationCustomerSendInvoiceEmailSchema;
}>;


export type UserOrganizationCustomerSendInvoiceEmailMutation = { __typename?: 'Mutation', userOrganizationCustomerSendInvoiceEmail: any };

export type UserOrganizationInvoiceGetAcctProviderPDFMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationInvoiceId: Scalars['String']['input'];
  acctProviderCode: ACCT_PROVIDER;
}>;


export type UserOrganizationInvoiceGetAcctProviderPDFMutation = { __typename?: 'Mutation', userOrganizationInvoiceGetAcctProviderPDF: string };

export type OrganizationFragmentFragment = { __typename?: 'Organization', id: string, name: string, email: string, unique_name: string, unique_code: string, phone_number?: string | null, address_line_1?: string | null, address_number?: string | null, address_line_2?: string | null, address_city?: string | null, address_state?: string | null, address_zip_code?: string | null, address_country_code_iso_3?: string | null, address_lat?: number | null, address_lng?: number | null, primary_contact_name?: string | null, business_name?: string | null, business_industry?: string | null, business_number_of_employees?: number | null, business_address_line_1?: string | null, business_address_number?: string | null, business_address_line_2?: string | null, business_address_city?: string | null, business_address_state?: string | null, business_address_zip_code?: string | null, business_address_country_code_iso_3?: string | null, business_address_lat?: number | null, business_address_lng?: number | null, business_tax_code_type?: TAX_TYPE | null, business_tax_code?: string | null, timezone?: string | null, language?: string | null, archived_at?: any | null, created_at: any, updated_at: any, logo_picture_file_id?: string | null, current_email_verification_id?: string | null, current_phone_number_verification_id?: string | null, logo_picture_file?: { __typename?: 'File', public_url?: string | null } | null };

export type OrganizationCollaboratorFragmentFragment = { __typename?: 'OrganizationUser', id: string, role: ORGANIZATION_USER_ROLE, send_invoice_reminders: boolean, payload?: any | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, user_id: string, user?: { __typename?: 'User', id: string, email: string, phone_number?: string | null, first_name?: string | null, last_name?: string | null, language?: string | null, profile_picture_file_id?: string | null, current_email_verification_id?: string | null, current_phone_number_verification_id?: string | null, profile_picture_file?: { __typename?: 'File', public_url?: string | null } | null } | null };

export type UserOrganizationQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationQuery = { __typename?: 'Query', userOrganization: { __typename?: 'Organization', id: string, name: string, email: string, unique_name: string, unique_code: string, phone_number?: string | null, address_line_1?: string | null, address_number?: string | null, address_line_2?: string | null, address_city?: string | null, address_state?: string | null, address_zip_code?: string | null, address_country_code_iso_3?: string | null, address_lat?: number | null, address_lng?: number | null, primary_contact_name?: string | null, business_name?: string | null, business_industry?: string | null, business_number_of_employees?: number | null, business_address_line_1?: string | null, business_address_number?: string | null, business_address_line_2?: string | null, business_address_city?: string | null, business_address_state?: string | null, business_address_zip_code?: string | null, business_address_country_code_iso_3?: string | null, business_address_lat?: number | null, business_address_lng?: number | null, business_tax_code_type?: TAX_TYPE | null, business_tax_code?: string | null, timezone?: string | null, language?: string | null, archived_at?: any | null, created_at: any, updated_at: any, logo_picture_file_id?: string | null, current_email_verification_id?: string | null, current_phone_number_verification_id?: string | null, logo_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type UserOrganizationBaseSettingsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationBaseSettingsQuery = { __typename?: 'Query', userOrganization: { __typename?: 'Organization', setting_send_invoice_due_reminders?: boolean | null, setting_send_invoice_overdue_reminders?: boolean | null, setting_allow_invoice_due_snooze_reminders?: boolean | null, setting_allow_invoice_overdue_snooze_reminders?: boolean | null } };

export type UserOrganizationCreateMutationVariables = Exact<{
  data: UserOrganizationCreateSchema;
}>;


export type UserOrganizationCreateMutation = { __typename?: 'Mutation', userOrganizationCreate: { __typename?: 'Organization', id: string, email: string, name: string, phone_number?: string | null, primary_contact_name?: string | null } };

export type UserOrganizationCollaboratorsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCollaboratorsQuery = { __typename?: 'Query', userOrganizationCollaborators: Array<{ __typename?: 'OrganizationUser', id: string, role: ORGANIZATION_USER_ROLE, send_invoice_reminders: boolean, payload?: any | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, user_id: string, user?: { __typename?: 'User', id: string, email: string, phone_number?: string | null, first_name?: string | null, last_name?: string | null, language?: string | null, profile_picture_file_id?: string | null, current_email_verification_id?: string | null, current_phone_number_verification_id?: string | null, profile_picture_file?: { __typename?: 'File', public_url?: string | null } | null } | null }> };

export type UserOrganizationInviteCollaboratorCreateMutationVariables = Exact<{
  data: UserOrganizationInviteCollaboratorCreateSchema;
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationInviteCollaboratorCreateMutation = { __typename?: 'Mutation', userOrganizationInviteCollaboratorCreate: { __typename?: 'OrganizationInvite', expires_at: any } };

export type UserOrganizationCollaboratorUpdateMutationVariables = Exact<{
  data: UserOrganizationCollaboratorUpdateSchema;
  organizationUserId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCollaboratorUpdateMutation = { __typename?: 'Mutation', userOrganizationCollaboratorUpdate: { __typename?: 'OrganizationUser', role: ORGANIZATION_USER_ROLE } };

export type UserOrganizationCollaboratorDeleteMutationVariables = Exact<{
  organizationUserId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCollaboratorDeleteMutation = { __typename?: 'Mutation', userOrganizationCollaboratorDelete: { __typename?: 'OrganizationUser', id: string } };

export type UserOrganizationUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationUpdateSchema;
}>;


export type UserOrganizationUpdateMutation = { __typename?: 'Mutation', userOrganizationUpdate: { __typename?: 'Organization', id: string, name: string, email: string, unique_name: string, unique_code: string, phone_number?: string | null, address_line_1?: string | null, address_number?: string | null, address_line_2?: string | null, address_city?: string | null, address_state?: string | null, address_zip_code?: string | null, address_country_code_iso_3?: string | null, address_lat?: number | null, address_lng?: number | null, primary_contact_name?: string | null, business_name?: string | null, business_industry?: string | null, business_number_of_employees?: number | null, business_address_line_1?: string | null, business_address_number?: string | null, business_address_line_2?: string | null, business_address_city?: string | null, business_address_state?: string | null, business_address_zip_code?: string | null, business_address_country_code_iso_3?: string | null, business_address_lat?: number | null, business_address_lng?: number | null, business_tax_code_type?: TAX_TYPE | null, business_tax_code?: string | null, timezone?: string | null, language?: string | null, archived_at?: any | null, created_at: any, updated_at: any, logo_picture_file_id?: string | null, current_email_verification_id?: string | null, current_phone_number_verification_id?: string | null, logo_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type UserOrganizationLogoPictureRemoveMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationLogoPictureRemoveMutation = { __typename?: 'Mutation', userOrganizationLogoPictureRemove: { __typename?: 'Organization', logo_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type OrganizationReminderSettingFragmentFragment = { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null };

export type UserOrganizationReminderSettingsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId?: InputMaybe<Scalars['String']['input']>;
  organizationProjectId?: InputMaybe<Scalars['String']['input']>;
  organizationInvoiceId?: InputMaybe<Scalars['String']['input']>;
  dueDateMode?: InputMaybe<REMINDER_DUE_DATE_MODE>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationReminderSettingsQuery = { __typename?: 'Query', userOrganizationReminderSettings: { __typename?: 'OrganizationReminderSettingPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationReminderSettingPaginationEdge', cursor: any, node: { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationReminderSettingQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationReminderSettingId: Scalars['String']['input'];
}>;


export type UserOrganizationReminderSettingQuery = { __typename?: 'Query', userOrganizationReminderSetting: { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null } };

export type UserOrganizationReminderSettingCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationReminderSettingSchema;
}>;


export type UserOrganizationReminderSettingCreateMutation = { __typename?: 'Mutation', userOrganizationReminderSettingCreate: { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null } };

export type UserOrganizationReminderSettingUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationReminderSettingId: Scalars['String']['input'];
  data: UserOrganizationReminderSettingSchema;
}>;


export type UserOrganizationReminderSettingUpdateMutation = { __typename?: 'Mutation', userOrganizationReminderSettingUpdate: { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null } };

export type UserOrganizationReminderSettingDeleteMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationReminderSettingId: Scalars['String']['input'];
}>;


export type UserOrganizationReminderSettingDeleteMutation = { __typename?: 'Mutation', userOrganizationReminderSettingDelete: { __typename?: 'OrganizationReminderSetting', id: string, due_date_mode: REMINDER_DUE_DATE_MODE, days_amount: number, repeat_mode?: REMINDER_REPEAT_MODE | null, repeat_value?: number | null, selected_hour: number, created_at: any, updated_at: any, organization_id: string, organization_customer_id?: string | null, organization_project_id?: string | null, organization_invoice_id?: string | null } };

export type OrganizationCustomerStatementFragmentFragment = { __typename?: 'OrganizationCustomerStatement', vendor_organization_id: string, vendor_organization_customer_id: string, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, balance: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, one_to_thirty_days_due_amount?: number | null, thirty_one_to_sixty_days_due_amount?: number | null, sixty_plus_days_due_amount?: number | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer: { __typename?: 'OrganizationCustomer', id: string, name: string }, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationCustomerStatementLineDataPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerStatementLineDataPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerStatementInvoiceLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_invoice_id: string, paid_amount: number, running_balance: number, invoice_status: string, type: string, updated_at: any, organization_invoice: { __typename?: 'OrganizationCustomerStatementInvoiceLineData', payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } | { __typename?: 'OrganizationCustomerStatementTransactionLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_transaction_id: string, paid_amount: number, running_balance: number, transaction_status: string, type: string, updated_at: any, organization_transaction: { __typename?: 'OrganizationCustomerStatementTransactionLineData', links: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string }>, organization_acct_provider_conn_transactions: Array<{ __typename?: 'OrganizationAcctProviderConnTransaction', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserCustomerOrganizationStatementQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  currency?: InputMaybe<CURRENCY>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserCustomerOrganizationStatementQuery = { __typename?: 'Query', userCustomerOrganizationStatement: { __typename?: 'OrganizationCustomerStatement', vendor_organization_id: string, vendor_organization_customer_id: string, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, balance: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, one_to_thirty_days_due_amount?: number | null, thirty_one_to_sixty_days_due_amount?: number | null, sixty_plus_days_due_amount?: number | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer: { __typename?: 'OrganizationCustomer', id: string, name: string }, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationCustomerStatementLineDataPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerStatementLineDataPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerStatementInvoiceLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_invoice_id: string, paid_amount: number, running_balance: number, invoice_status: string, type: string, updated_at: any, organization_invoice: { __typename?: 'OrganizationCustomerStatementInvoiceLineData', payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } | { __typename?: 'OrganizationCustomerStatementTransactionLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_transaction_id: string, paid_amount: number, running_balance: number, transaction_status: string, type: string, updated_at: any, organization_transaction: { __typename?: 'OrganizationCustomerStatementTransactionLineData', links: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string }>, organization_acct_provider_conn_transactions: Array<{ __typename?: 'OrganizationAcctProviderConnTransaction', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserCustomerOrganizationStatementLineGeneratePdfMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  organizationCustomerStatementLineId: Scalars['Int']['input'];
  acctProviderCode: ACCT_PROVIDER;
}>;


export type UserCustomerOrganizationStatementLineGeneratePdfMutation = { __typename?: 'Mutation', userCustomerOrganizationStatementLineGeneratePDF: string };

export type UnconnectedUserCustomerOrganizationStatementRequestTokenMutationVariables = Exact<{
  uniqueCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
}>;


export type UnconnectedUserCustomerOrganizationStatementRequestTokenMutation = { __typename?: 'Mutation', unconnectedUserCustomerOrganizationStatementRequestToken: any };

export type UnconnectedUserCustomerOrganizationStatementQueryVariables = Exact<{
  uniqueCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
  currency?: InputMaybe<CURRENCY>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UnconnectedUserCustomerOrganizationStatementQuery = { __typename?: 'Query', unconnectedUserCustomerOrganizationStatement: { __typename?: 'OrganizationCustomerStatement', vendor_organization_id: string, vendor_organization_customer_id: string, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, balance: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, one_to_thirty_days_due_amount?: number | null, thirty_one_to_sixty_days_due_amount?: number | null, sixty_plus_days_due_amount?: number | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer: { __typename?: 'OrganizationCustomer', id: string, name: string }, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationCustomerStatementLineDataPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerStatementLineDataPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerStatementInvoiceLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_invoice_id: string, paid_amount: number, running_balance: number, invoice_status: string, type: string, updated_at: any, organization_invoice: { __typename?: 'OrganizationCustomerStatementInvoiceLineData', payment_options: Array<{ __typename?: 'OrganizationInvoicePaymentOption', method: PAYMENT_METHOD, url?: string | null, payload?: any | null }>, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } | { __typename?: 'OrganizationCustomerStatementTransactionLine', amount: number, code: string, created_at: any, currency_code: CURRENCY, date: any, due_date: any, id: string, organization_customer_id: string, organization_transaction_id: string, paid_amount: number, running_balance: number, transaction_status: string, type: string, updated_at: any, organization_transaction: { __typename?: 'OrganizationCustomerStatementTransactionLineData', links: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: TRANSACTION_ITEM_TYPE, item_id: string }>, organization_acct_provider_conn_transactions: Array<{ __typename?: 'OrganizationAcctProviderConnTransaction', organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: ACCT_PROVIDER, status: ORGANIZATION_ACCT_PROVIDER_CONN_STATUS } }> } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UnconnectedUserCustomerOrganizationStatementLinePdfMutationVariables = Exact<{
  uniqueCode: Scalars['String']['input'];
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
  organizationCustomerStatementLineId: Scalars['Int']['input'];
  acctProviderCode: ACCT_PROVIDER;
}>;


export type UnconnectedUserCustomerOrganizationStatementLinePdfMutation = { __typename?: 'Mutation', unconnectedUserCustomerOrganizationStatementLinePDF: string };

export type UserUpdateDataMutationVariables = Exact<{
  data: UserUpdateDataSchema;
}>;


export type UserUpdateDataMutation = { __typename?: 'Mutation', userUpdateData: { __typename?: 'User', id: string, email: string, first_name?: string | null, last_name?: string | null, language?: string | null, phone_number?: string | null, timezone?: string | null, updated_at: any, created_at: any, organizations?: Array<{ __typename?: 'OrganizationUser', id: string, organization_id: string, organization: { __typename?: 'Organization', name: string, email: string } } | null> | null, profile_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type UserEmailVerifyOrChangeStartMutationVariables = Exact<{
  data: UserEmailVerifyOrChangeStartSchema;
}>;


export type UserEmailVerifyOrChangeStartMutation = { __typename?: 'Mutation', userEmailVerifyOrChangeStart: any };

export type UserEmailVerifyOrChangeFinishMutationVariables = Exact<{
  data: UserEmailVerifyOrChangeFinishSchema;
}>;


export type UserEmailVerifyOrChangeFinishMutation = { __typename?: 'Mutation', userEmailVerifyOrChangeFinish: { __typename?: 'User', email: string } };

export type UserPhoneNumberVerifyOrChangeStartMutationVariables = Exact<{
  data: UserPhoneNumberVerifyOrChangeStartSchema;
}>;


export type UserPhoneNumberVerifyOrChangeStartMutation = { __typename?: 'Mutation', userPhoneNumberVerifyOrChangeStart: any };

export type UserPhoneNumberVerifyOrChangeFinishMutationVariables = Exact<{
  data: UserPhoneNumberVerifyOrChangeFinishSchema;
}>;


export type UserPhoneNumberVerifyOrChangeFinishMutation = { __typename?: 'Mutation', userPhoneNumberVerifyOrChangeFinish: { __typename?: 'User', phone_number?: string | null } };

export type UserPasswordChangeStartMutationVariables = Exact<{
  data: UserPasswordChangeStartSchema;
}>;


export type UserPasswordChangeStartMutation = { __typename?: 'Mutation', userPasswordChangeStart: any };

export type UserPasswordChangeFinishMutationVariables = Exact<{
  data: UserPasswordChangeFinishSchema;
}>;


export type UserPasswordChangeFinishMutation = { __typename?: 'Mutation', userPasswordChangeFinish: string };

export type UserProfilePictureRemoveMutationVariables = Exact<{ [key: string]: never; }>;


export type UserProfilePictureRemoveMutation = { __typename?: 'Mutation', userProfilePictureRemove: { __typename?: 'User', profile_picture_file_id?: string | null } };

export type OrganizationVendorFragmentFragment = { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationVendorsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationVendorsQuery = { __typename?: 'Query', userOrganizationVendors: { __typename?: 'OrganizationVendorPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationVendorPaginationEdge', cursor: any, node: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationVendorQueryVariables = Exact<{
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorQuery = { __typename?: 'Query', userOrganizationVendor: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  data: UserOrganizationVendorSchema;
}>;


export type UserOrganizationVendorUpdateMutation = { __typename?: 'Mutation', userOrganizationVendorUpdate: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationVendorSchema;
}>;


export type UserOrganizationVendorCreateMutation = { __typename?: 'Mutation', userOrganizationVendorCreate: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: TAX_TYPE | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: ORGANIZATION_CONNECTION_STATUS | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_summary: { __typename?: 'OrganizationBillSummary', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: CURRENCY | null, status?: BILL_STATUS | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: CURRENCY, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: BILL_STATUS | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export const OrganizationAcctProviderConnSynchronizationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}}]} as unknown as DocumentNode<OrganizationAcctProviderConnSynchronizationFragmentFragment, unknown>;
export const OrganizationAcctProviderConnFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}}]} as unknown as DocumentNode<OrganizationAcctProviderConnFragmentFragment, unknown>;
export const OrganizationBillFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationBillFragmentFragment, unknown>;
export const OrganizationConnectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationConnectionFragmentFragment, unknown>;
export const OrganizationCustomerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationCustomerFragmentFragment, unknown>;
export const OrganizationInvoiceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationInvoiceFragmentFragment, unknown>;
export const OrganizationFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"address_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"address_city"}},{"kind":"Field","name":{"kind":"Name","value":"address_state"}},{"kind":"Field","name":{"kind":"Name","value":"address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"primary_contact_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_industry"}},{"kind":"Field","name":{"kind":"Name","value":"business_number_of_employees"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file_id"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_email_verification_id"}},{"kind":"Field","name":{"kind":"Name","value":"current_phone_number_verification_id"}}]}}]} as unknown as DocumentNode<OrganizationFragmentFragment, unknown>;
export const OrganizationCollaboratorFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCollaboratorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file_id"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_email_verification_id"}},{"kind":"Field","name":{"kind":"Name","value":"current_phone_number_verification_id"}}]}}]}}]} as unknown as DocumentNode<OrganizationCollaboratorFragmentFragment, unknown>;
export const OrganizationReminderSettingFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<OrganizationReminderSettingFragmentFragment, unknown>;
export const OrganizationCustomerStatementFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementInvoiceLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementTransactionLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_thirty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"thirty_one_to_sixty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"sixty_plus_days_due_amount"}}]}}]} as unknown as DocumentNode<OrganizationCustomerStatementFragmentFragment, unknown>;
export const OrganizationVendorFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationVendorFragmentFragment, unknown>;
export const UserOrganizationAcctProviderConnConfigurationPullOptionsGetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnConfigurationPullOptionsGet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPullOptionsGet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutation, UserOrganizationAcctProviderConnConfigurationPullOptionsGetMutationVariables>;
export const UserOrganizationAcctProviderConnConfigurationPullOptionsSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnConfigurationPullOptionsSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPullOptionsSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutation, UserOrganizationAcctProviderConnConfigurationPullOptionsSetMutationVariables>;
export const UserOrganizationAcctProviderConnConfigurationPushOptionsGetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnConfigurationPushOptionsGet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsGet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation, UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables>;
export const UserOrganizationAcctProviderConnConfigurationPushOptionsSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnConfigurationPushOptionsSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation, UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables>;
export const UserOrganizationAcctProviderConnDisconnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnDisconnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnDisconnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnDisconnectMutation, UserOrganizationAcctProviderConnDisconnectMutationVariables>;
export const UserOrganizationAcctProviderConnUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnUpdateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnUpdateMutation, UserOrganizationAcctProviderConnUpdateMutationVariables>;
export const UserOrganizationAcctProviderConnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderConnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"automaticPull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"automaticPush"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"automatic_pull_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"automaticPull"}}},{"kind":"Argument","name":{"kind":"Name","value":"automatic_push_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"automaticPush"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnectMutation, UserOrganizationAcctProviderConnectMutationVariables>;
export const UserOrganizationAcctProviderGetOAuthUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderGetOAuthUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderGetOAuthUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderGetOAuthUrlMutation, UserOrganizationAcctProviderGetOAuthUrlMutationVariables>;
export const UserOrganizationAcctProviderSynchronizeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationAcctProviderSynchronize"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"push"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderSynchronize"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"pull"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pull"}}},{"kind":"Argument","name":{"kind":"Name","value":"push"},"value":{"kind":"Variable","name":{"kind":"Name","value":"push"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderSynchronizeMutation, UserOrganizationAcctProviderSynchronizeMutationVariables>;
export const UserOrganizationAcctProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationAcctProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProvidersQuery, UserOrganizationAcctProvidersQueryVariables>;
export const UserOrganizationAcctProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationAcctProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_acct_provider_conn_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConn"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_pull_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"automatic_push_enabled"}},{"kind":"Field","name":{"kind":"Name","value":"disconnected_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"synchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"finished"},"value":{"kind":"BooleanValue","value":true}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderQuery, UserOrganizationAcctProviderQueryVariables>;
export const UserOrganizationAcctProviderSynchronizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationAcctProviderSynchronizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderSynchronizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_acct_provider_conn_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnId"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderSynchronizationsQuery, UserOrganizationAcctProviderSynchronizationsQueryVariables>;
export const UserOrganizationAcctProviderSynchronizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationAcctProviderSynchronization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnSynchronizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderSynchronization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_acct_provider_conn_synchronization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationAcctProviderConnSynchronizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationAcctProviderConnSynchronization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"trigger_code"}},{"kind":"Field","name":{"kind":"Name","value":"pull"}},{"kind":"Field","name":{"kind":"Name","value":"push"}},{"kind":"Field","name":{"kind":"Name","value":"errors"}},{"kind":"Field","name":{"kind":"Name","value":"started_at"}},{"kind":"Field","name":{"kind":"Name","value":"finished_at"}},{"kind":"Field","name":{"kind":"Name","value":"failed_at"}},{"kind":"Field","name":{"kind":"Name","value":"succeeded_at"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"local_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_success_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_read_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_create_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_update_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"remote_delete_failure_count"}},{"kind":"Field","name":{"kind":"Name","value":"sync_cluster_code"}},{"kind":"Field","name":{"kind":"Name","value":"status_description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderSynchronizationQuery, UserOrganizationAcctProviderSynchronizationQueryVariables>;
export const UserSessionsCloseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSessionsClose"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSessionsClose"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserSessionsCloseMutation, UserSessionsCloseMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UnauthorizedUserOrganizationUserInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnauthorizedUserOrganizationUserInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unauthorizedUserOrganizationUserInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invite_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invited_by"}},{"kind":"Field","name":{"kind":"Name","value":"organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}}]}}]}}]} as unknown as DocumentNode<UnauthorizedUserOrganizationUserInviteQuery, UnauthorizedUserOrganizationUserInviteQueryVariables>;
export const UserSignUpWithEmailStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailStartMutation, UserSignUpWithEmailStartMutationVariables>;
export const UserSignUpWithEmailVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailVerifySchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailVerifyMutation, UserSignUpWithEmailVerifyMutationVariables>;
export const UserOrganizationUserInviteAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationUserInviteAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationUserInviteAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invite_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationUserInviteAcceptMutation, UserOrganizationUserInviteAcceptMutationVariables>;
export const UserSignUpWithEmailFinishSchemaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailFinishSchema"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailFinishSchemaMutation, UserSignUpWithEmailFinishSchemaMutationVariables>;
export const UserPasswordResetStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordResetStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordResetStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordResetStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordResetStartMutation, UserPasswordResetStartMutationVariables>;
export const UserPasswordResetFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordResetFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordResetFinishData2"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordResetFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordResetFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userPasswordResetFinishData2"}}}]}]}}]} as unknown as DocumentNode<UserPasswordResetFinishMutation, UserPasswordResetFinishMutationVariables>;
export const UserAuthProviderGetOAuthUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAuthProviderGetOAuthUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AUTH_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAuthProviderGetOAuthUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}}}]}]}}]} as unknown as DocumentNode<UserAuthProviderGetOAuthUrlMutation, UserAuthProviderGetOAuthUrlMutationVariables>;
export const UserAuthProviderGetOAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAuthProviderGetOAuthToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AUTH_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorizationToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAuthProviderGetOAuthToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorization_token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorizationToken"}}}]}]}}]} as unknown as DocumentNode<UserAuthProviderGetOAuthTokenMutation, UserAuthProviderGetOAuthTokenMutationVariables>;
export const UserOrganizationBillSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationBillSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BILL_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBillSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillSummaryQuery, UserOrganizationBillSummaryQueryVariables>;
export const UserOrganizationBillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationBill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationBillId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_bill_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationBillId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillQuery, UserOrganizationBillQueryVariables>;
export const UserOrganizationBillCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationBillCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationBillSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBillCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillCreateMutation, UserOrganizationBillCreateMutationVariables>;
export const UserOrganizationConnectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationConnections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ORGANIZATION_CONNECTION_STATUS"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionsQuery, UserOrganizationConnectionsQueryVariables>;
export const UserOrganizationConnectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationConnection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionQuery, UserOrganizationConnectionQueryVariables>;
export const UserOrganizationConnectionInviteCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionInviteCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionInviteCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionInviteCustomerMutation, UserOrganizationConnectionInviteCustomerMutationVariables>;
export const UserOrganizationConnectionInviteVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionInviteVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionInviteVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionInviteVendorMutation, UserOrganizationConnectionInviteVendorMutationVariables>;
export const UserOrganizationConnectionAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionAcceptMutation, UserOrganizationConnectionAcceptMutationVariables>;
export const UserOrganizationConnectionRejectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionReject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionReject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionRejectMutation, UserOrganizationConnectionRejectMutationVariables>;
export const UserOrganizationCustomerConnLockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerConnLock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerConnLock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerConnLockMutation, UserOrganizationCustomerConnLockMutationVariables>;
export const UserOrganizationCustomerConnUnlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerConnUnlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerConnUnlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerConnUnlockMutation, UserOrganizationCustomerConnUnlockMutationVariables>;
export const UserOrganizationVendorConnLockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorConnLock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorConnLock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorConnLockMutation, UserOrganizationVendorConnLockMutationVariables>;
export const UserOrganizationVendorConnUnlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorConnUnlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorConnUnlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorConnUnlockMutation, UserOrganizationVendorConnUnlockMutationVariables>;
export const userOrganizationVendorContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userOrganizationVendorContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<userOrganizationVendorContactsQuery, userOrganizationVendorContactsQueryVariables>;
export const UserOrganizationCustomerContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomerContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactsQuery, UserOrganizationCustomerContactsQueryVariables>;
export const userOrganizationVendorContactCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationVendorContactCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorContactCreateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}}]}}]}}]} as unknown as DocumentNode<userOrganizationVendorContactCreateMutation, userOrganizationVendorContactCreateMutationVariables>;
export const UserOrganizationCustomerContactCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerContactCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactCreateMutation, UserOrganizationCustomerContactCreateMutationVariables>;
export const UserOrganizationVendorContactUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorContactUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorContactUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactUpdateMutation, UserOrganizationVendorContactUpdateMutationVariables>;
export const UserOrganizationCustomerContactUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerContactUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactUpdateMutation, UserOrganizationCustomerContactUpdateMutationVariables>;
export const UserOrganizationVendorContactDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorContactDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactDeleteMutation, UserOrganizationVendorContactDeleteMutationVariables>;
export const UserOrganizationCustomerContactDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactDeleteMutation, UserOrganizationCustomerContactDeleteMutationVariables>;
export const UserOrganizationCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomersQuery, UserOrganizationCustomersQueryVariables>;
export const UserOrganizationCustomerStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomerStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementInvoiceLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementTransactionLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_thirty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"thirty_one_to_sixty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"sixty_plus_days_due_amount"}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerStatementQuery, UserOrganizationCustomerStatementQueryVariables>;
export const UserOrganizationCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerQuery, UserOrganizationCustomerQueryVariables>;
export const UserOrganizationCustomerUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerUpdateMutation, UserOrganizationCustomerUpdateMutationVariables>;
export const UserOrganizationCustomerCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerCreateMutation, UserOrganizationCustomerCreateMutationVariables>;
export const UserOrganizationInvoiceSummaryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationInvoiceSummary"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"INVOICE_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoiceSummary"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationInvoiceFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceSummaryQuery, UserOrganizationInvoiceSummaryQueryVariables>;
export const UserOrganizationInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invoice_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationInvoiceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceQuery, UserOrganizationInvoiceQueryVariables>;
export const UserOrganizationInvoiceCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationInvoiceCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationInvoiceSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoiceCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceCreateMutation, UserOrganizationInvoiceCreateMutationVariables>;
export const UserOrganizationCustomerSendInvoiceEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerSendInvoiceEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targets"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSendInvoiceEmailSchema"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerSendInvoiceEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"targets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targets"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationCustomerSendInvoiceEmailMutation, UserOrganizationCustomerSendInvoiceEmailMutationVariables>;
export const UserOrganizationInvoiceGetAcctProviderPDFDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationInvoiceGetAcctProviderPDF"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoiceGetAcctProviderPDF"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invoice_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceGetAcctProviderPDFMutation, UserOrganizationInvoiceGetAcctProviderPDFMutationVariables>;
export const UserOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"address_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"address_city"}},{"kind":"Field","name":{"kind":"Name","value":"address_state"}},{"kind":"Field","name":{"kind":"Name","value":"address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"primary_contact_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_industry"}},{"kind":"Field","name":{"kind":"Name","value":"business_number_of_employees"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file_id"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_email_verification_id"}},{"kind":"Field","name":{"kind":"Name","value":"current_phone_number_verification_id"}}]}}]} as unknown as DocumentNode<UserOrganizationQuery, UserOrganizationQueryVariables>;
export const UserOrganizationBaseSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationBaseSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganization"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setting_send_invoice_due_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"setting_send_invoice_overdue_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"setting_allow_invoice_due_snooze_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"setting_allow_invoice_overdue_snooze_reminders"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBaseSettingsQuery, UserOrganizationBaseSettingsQueryVariables>;
export const UserOrganizationCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCreateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"primary_contact_name"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCreateMutation, UserOrganizationCreateMutationVariables>;
export const UserOrganizationCollaboratorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCollaborators"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCollaborators"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCollaboratorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCollaboratorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationUser"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file_id"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_email_verification_id"}},{"kind":"Field","name":{"kind":"Name","value":"current_phone_number_verification_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCollaboratorsQuery, UserOrganizationCollaboratorsQueryVariables>;
export const UserOrganizationInviteCollaboratorCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationInviteCollaboratorCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationInviteCollaboratorCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInviteCollaboratorCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"expires_at"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInviteCollaboratorCreateMutation, UserOrganizationInviteCollaboratorCreateMutationVariables>;
export const UserOrganizationCollaboratorUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCollaboratorUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCollaboratorUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCollaboratorUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCollaboratorUpdateMutation, UserOrganizationCollaboratorUpdateMutationVariables>;
export const UserOrganizationCollaboratorDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCollaboratorDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationUserId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCollaboratorDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_user_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationUserId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCollaboratorDeleteMutation, UserOrganizationCollaboratorDeleteMutationVariables>;
export const UserOrganizationUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationUpdateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Organization"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"unique_name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"address_number"}},{"kind":"Field","name":{"kind":"Name","value":"address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"address_city"}},{"kind":"Field","name":{"kind":"Name","value":"address_state"}},{"kind":"Field","name":{"kind":"Name","value":"address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"primary_contact_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_name"}},{"kind":"Field","name":{"kind":"Name","value":"business_industry"}},{"kind":"Field","name":{"kind":"Name","value":"business_number_of_employees"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"business_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"business_tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file_id"}},{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"current_email_verification_id"}},{"kind":"Field","name":{"kind":"Name","value":"current_phone_number_verification_id"}}]}}]} as unknown as DocumentNode<UserOrganizationUpdateMutation, UserOrganizationUpdateMutationVariables>;
export const UserOrganizationLogoPictureRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationLogoPictureRemove"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationLogoPictureRemove"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationLogoPictureRemoveMutation, UserOrganizationLogoPictureRemoveMutationVariables>;
export const UserOrganizationReminderSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationReminderSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationProjectId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dueDateMode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"REMINDER_DUE_DATE_MODE"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationReminderSettings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_project_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationProjectId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invoice_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}}},{"kind":"Argument","name":{"kind":"Name","value":"due_date_mode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dueDateMode"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<UserOrganizationReminderSettingsQuery, UserOrganizationReminderSettingsQueryVariables>;
export const UserOrganizationReminderSettingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationReminderSetting"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationReminderSetting"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_reminder_setting_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<UserOrganizationReminderSettingQuery, UserOrganizationReminderSettingQueryVariables>;
export const UserOrganizationReminderSettingCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationReminderSettingCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationReminderSettingSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationReminderSettingCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<UserOrganizationReminderSettingCreateMutation, UserOrganizationReminderSettingCreateMutationVariables>;
export const UserOrganizationReminderSettingUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationReminderSettingUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationReminderSettingSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationReminderSettingUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_reminder_setting_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<UserOrganizationReminderSettingUpdateMutation, UserOrganizationReminderSettingUpdateMutationVariables>;
export const UserOrganizationReminderSettingDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationReminderSettingDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationReminderSettingDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_reminder_setting_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationReminderSettingId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationReminderSettingFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationReminderSetting"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"due_date_mode"}},{"kind":"Field","name":{"kind":"Name","value":"days_amount"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_mode"}},{"kind":"Field","name":{"kind":"Name","value":"repeat_value"}},{"kind":"Field","name":{"kind":"Name","value":"selected_hour"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_project_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}}]}}]} as unknown as DocumentNode<UserOrganizationReminderSettingDeleteMutation, UserOrganizationReminderSettingDeleteMutationVariables>;
export const UserCustomerOrganizationStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCustomerOrganizationStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCustomerOrganizationStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementInvoiceLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementTransactionLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_thirty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"thirty_one_to_sixty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"sixty_plus_days_due_amount"}}]}}]} as unknown as DocumentNode<UserCustomerOrganizationStatementQuery, UserCustomerOrganizationStatementQueryVariables>;
export const UserCustomerOrganizationStatementLineGeneratePdfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserCustomerOrganizationStatementLineGeneratePdf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerStatementLineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCustomerOrganizationStatementLineGeneratePDF"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_statement_line_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerStatementLineId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}}}]}]}}]} as unknown as DocumentNode<UserCustomerOrganizationStatementLineGeneratePdfMutation, UserCustomerOrganizationStatementLineGeneratePdfMutationVariables>;
export const UnconnectedUserCustomerOrganizationStatementRequestTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnconnectedUserCustomerOrganizationStatementRequestToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unconnectedUserCustomerOrganizationStatementRequestToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unique_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}]}]}}]} as unknown as DocumentNode<UnconnectedUserCustomerOrganizationStatementRequestTokenMutation, UnconnectedUserCustomerOrganizationStatementRequestTokenMutationVariables>;
export const UnconnectedUserCustomerOrganizationStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnconnectedUserCustomerOrganizationStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unconnectedUserCustomerOrganizationStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unique_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerStatementFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatement"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementInvoiceLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"payment_options"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomerStatementTransactionLine"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"running_balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"one_to_thirty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"thirty_one_to_sixty_days_due_amount"}},{"kind":"Field","name":{"kind":"Name","value":"sixty_plus_days_due_amount"}}]}}]} as unknown as DocumentNode<UnconnectedUserCustomerOrganizationStatementQuery, UnconnectedUserCustomerOrganizationStatementQueryVariables>;
export const UnconnectedUserCustomerOrganizationStatementLinePdfDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UnconnectedUserCustomerOrganizationStatementLinePdf"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerStatementLineId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unconnectedUserCustomerOrganizationStatementLinePDF"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"unique_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"uniqueCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_statement_line_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerStatementLineId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"acctProviderCode"}}}]}]}}]} as unknown as DocumentNode<UnconnectedUserCustomerOrganizationStatementLinePdfMutation, UnconnectedUserCustomerOrganizationStatementLinePdfMutationVariables>;
export const UserUpdateDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserUpdateData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateDataSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userUpdateData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}}]}}]}}]} as unknown as DocumentNode<UserUpdateDataMutation, UserUpdateDataMutationVariables>;
export const UserEmailVerifyOrChangeStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserEmailVerifyOrChangeStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailVerifyOrChangeStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEmailVerifyOrChangeStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserEmailVerifyOrChangeStartMutation, UserEmailVerifyOrChangeStartMutationVariables>;
export const UserEmailVerifyOrChangeFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserEmailVerifyOrChangeFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserEmailVerifyOrChangeFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userEmailVerifyOrChangeFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]} as unknown as DocumentNode<UserEmailVerifyOrChangeFinishMutation, UserEmailVerifyOrChangeFinishMutationVariables>;
export const UserPhoneNumberVerifyOrChangeStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPhoneNumberVerifyOrChangeStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPhoneNumberVerifyOrChangeStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPhoneNumberVerifyOrChangeStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPhoneNumberVerifyOrChangeStartMutation, UserPhoneNumberVerifyOrChangeStartMutationVariables>;
export const UserPhoneNumberVerifyOrChangeFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPhoneNumberVerifyOrChangeFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPhoneNumberVerifyOrChangeFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPhoneNumberVerifyOrChangeFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<UserPhoneNumberVerifyOrChangeFinishMutation, UserPhoneNumberVerifyOrChangeFinishMutationVariables>;
export const UserPasswordChangeStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordChangeStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordChangeStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordChangeStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordChangeStartMutation, UserPasswordChangeStartMutationVariables>;
export const UserPasswordChangeFinishDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserPasswordChangeFinish"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserPasswordChangeFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userPasswordChangeFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserPasswordChangeFinishMutation, UserPasswordChangeFinishMutationVariables>;
export const UserProfilePictureRemoveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserProfilePictureRemove"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userProfilePictureRemove"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file_id"}}]}}]}}]} as unknown as DocumentNode<UserProfilePictureRemoveMutation, UserProfilePictureRemoveMutationVariables>;
export const UserOrganizationVendorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationVendors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorsQuery, UserOrganizationVendorsQueryVariables>;
export const UserOrganizationVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorQuery, UserOrganizationVendorQueryVariables>;
export const UserOrganizationVendorUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorUpdateMutation, UserOrganizationVendorUpdateMutationVariables>;
export const UserOrganizationVendorCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_summary"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorCreateMutation, UserOrganizationVendorCreateMutationVariables>;