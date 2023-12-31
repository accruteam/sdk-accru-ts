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

export enum Acct_Provider {
  Quickbooks = 'QUICKBOOKS'
}

export enum Auth_Provider {
  Firebase = 'FIREBASE',
  Intuit = 'INTUIT'
}

export enum Bill_Status {
  Open = 'OPEN',
  Paid = 'PAID'
}

export enum Currency {
  Brl = 'BRL',
  Eur = 'EUR',
  Usd = 'USD'
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
  mime_type: Mime_Type;
  payload: Scalars['JSON']['output'];
  public_url?: Maybe<Scalars['String']['output']>;
  public_url_expires_at?: Maybe<Scalars['DateTime']['output']>;
  recipient_id?: Maybe<Scalars['String']['output']>;
  recipient_type: Recipient_Type;
  size: Scalars['Int']['output'];
  storage_provider_code: Storage_Provider;
  type: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export enum Invoice_Status {
  Open = 'OPEN',
  Paid = 'PAID'
}

export enum Mime_Type {
  Jpeg = 'JPEG',
  Other = 'OTHER',
  Pdf = 'PDF',
  Png = 'PNG'
}

export type Mutation = {
  __typename?: 'Mutation';
  adminClearCache: Scalars['DateTime']['output'];
  unconnectedUserCustomerOrganizationInvoiceStatementVerify: Scalars['DateTime']['output'];
  userAuthProviderDisconnect: UserAuthProviderConn;
  userAuthProviderGetOAuthToken: Scalars['String']['output'];
  userAuthProviderGetOAuthUrl: Scalars['String']['output'];
  userCustomerOrganizationInvoiceCreateSyncBill: OrganizationBill;
  userCustomerOrganizationProjectChangeRequestAccept: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestCancel: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestCreate: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequestReject: OrganizationProjectChangeRequest;
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
  userOrganizationAcctProviderSynchronize: Organization;
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
  userOrganizationSendGenericInviteMail: Scalars['DateTime']['output'];
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


export type MutationUnconnectedUserCustomerOrganizationInvoiceStatementVerifyArgs = {
  email: Scalars['String']['input'];
  unique_code: Scalars['String']['input'];
};


export type MutationUserAuthProviderDisconnectArgs = {
  auth_provider_code: Auth_Provider;
};


export type MutationUserAuthProviderGetOAuthTokenArgs = {
  auth_provider_code: Auth_Provider;
  authorization_token: Scalars['String']['input'];
};


export type MutationUserAuthProviderGetOAuthUrlArgs = {
  auth_provider_code: Auth_Provider;
};


export type MutationUserCustomerOrganizationInvoiceCreateSyncBillArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserCustomerOrganizationProjectChangeRequestAcceptArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserCustomerOrganizationProjectChangeRequestCancelArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserCustomerOrganizationProjectChangeRequestCreateArgs = {
  data: UserOrganizationProjectChangeRequestCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserCustomerOrganizationProjectChangeRequestRejectArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserEmailVerifyOrChangeFinishArgs = {
  data: UserEmailVerifyOrChangeFinishSchema;
};


export type MutationUserEmailVerifyOrChangeStartArgs = {
  data: UserEmailVerifyOrChangeStartSchema;
};


export type MutationUserOrganizationAcctProviderConnConfigurationPullOptionsGetArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderConnConfigurationPullOptionsSetArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
  payload: Scalars['JSON']['input'];
};


export type MutationUserOrganizationAcctProviderConnConfigurationPushOptionsGetArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderConnConfigurationPushOptionsSetArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
  payload: Scalars['JSON']['input'];
};


export type MutationUserOrganizationAcctProviderConnDisconnectArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderConnUpdateArgs = {
  acct_provider_code: Acct_Provider;
  data: UserOrganizationAcctProviderConnUpdateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderConnectArgs = {
  acct_provider_code: Acct_Provider;
  automatic_pull_enabled: Scalars['Boolean']['input'];
  automatic_push_enabled: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderGetOAuthUrlArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationAcctProviderSynchronizeArgs = {
  acct_provider_code: Acct_Provider;
  organization_id: Scalars['String']['input'];
  pull: Scalars['Boolean']['input'];
  push: Scalars['Boolean']['input'];
};


export type MutationUserOrganizationBillConnLockArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillConnSyncArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillConnUnlockArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillCreateArgs = {
  data: UserOrganizationBillSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillDeleteArgs = {
  organization_bill_ids: Array<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillFileDeleteArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillManualPaymentCreateArgs = {
  data: UserOrganizationBillManualPaymentCreateSchema;
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillManualPaymentDeleteArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type MutationUserOrganizationBillUpdateArgs = {
  data: UserOrganizationBillSchema;
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCollaboratorDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCollaboratorUpdateArgs = {
  data: UserOrganizationCollaboratorUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type MutationUserOrganizationConnectionAcceptArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationConnectionInviteCustomerArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationConnectionInviteVendorArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationConnectionRejectArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCreateArgs = {
  data: UserOrganizationCreateSchema;
};


export type MutationUserOrganizationCustomerConnLockArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerConnSyncArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerConnUnlockArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerContactCreateArgs = {
  data: UserOrganizationCustomerContactCreateSchema;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerContactDeleteArgs = {
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerContactUpdateArgs = {
  data: UserOrganizationCustomerContactUpdateSchema;
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerCreateArgs = {
  data: UserOrganizationCustomerSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerSendInvoiceEmailArgs = {
  organization_id: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendInvoiceEmailSchema>;
};


export type MutationUserOrganizationCustomerSendStatementEmailArgs = {
  organization_id: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendInvoiceStatementEmailSchema>;
};


export type MutationUserOrganizationCustomerUniqueCodeUpdateArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationCustomerUpdateArgs = {
  data: UserOrganizationCustomerSchema;
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationDeleteArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationEmailVerifyOrChangeFinishArgs = {
  data: UserOrganizationEmailVerifyOrChangeFinishSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationEmailVerifyOrChangeStartArgs = {
  data: UserOrganizationEmailVerifyOrChangeStartSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInviteCollaboratorCancelArgs = {
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInviteCollaboratorCreateArgs = {
  data: UserOrganizationInviteCollaboratorCreateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInviteRejectArgs = {
  code: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInvoiceCreateArgs = {
  data: UserOrganizationInvoiceSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInvoiceDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_ids: Array<Scalars['String']['input']>;
};


export type MutationUserOrganizationInvoiceFileDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInvoiceManualPaymentCreateArgs = {
  data: UserOrganizationInvoiceManualPaymentCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInvoiceManualPaymentDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type MutationUserOrganizationInvoiceUpdateArgs = {
  data: UserOrganizationInvoiceSchema;
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type MutationUserOrganizationLeaveArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationLogoPictureRemoveArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationPaymentMethodDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type MutationUserOrganizationPaymentMethodUpdateArgs = {
  data: UserOrganizationPaymentMethodUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectChangeRequestAcceptArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectChangeRequestCancelArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectChangeRequestCreateArgs = {
  data: UserOrganizationProjectChangeRequestCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectChangeRequestRejectArgs = {
  allow_bypass: Scalars['Boolean']['input'];
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectCreateArgs = {
  data: UserOrganizationProjectCreateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationProjectUpdateArgs = {
  data: UserOrganizationProjectUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type MutationUserOrganizationReceivingMethodDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type MutationUserOrganizationReceivingMethodUpdateArgs = {
  data: UserOrganizationReceivingMethodUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type MutationUserOrganizationReminderSettingCreateArgs = {
  data: UserOrganizationReminderSettingCreateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationReminderSettingDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_reminder_setting_id: Scalars['String']['input'];
};


export type MutationUserOrganizationSendGenericInviteMailArgs = {
  email: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationUniqueCodeUpdateArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationUniqueNameUpdateArgs = {
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationUpdateArgs = {
  data: UserOrganizationUpdateSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationUserInviteAcceptArgs = {
  code: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorConnLockArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorConnSyncArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorConnUnlockArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorContactCreateArgs = {
  data: UserOrganizationVendorContactCreateSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorContactDeleteArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorContactUpdateArgs = {
  data: UserOrganizationVendorContactUpdateSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorCreateArgs = {
  data: UserOrganizationVendorSchema;
  organization_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorUniqueCodeUpdateArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserOrganizationVendorUpdateArgs = {
  data: UserOrganizationVendorSchema;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type MutationUserPasswordChangeFinishArgs = {
  data: UserPasswordChangeFinishSchema;
};


export type MutationUserPasswordChangeStartArgs = {
  data: UserPasswordChangeStartSchema;
};


export type MutationUserPasswordResetFinishArgs = {
  data: UserPasswordResetFinishSchema;
};


export type MutationUserPasswordResetStartArgs = {
  data: UserPasswordResetStartSchema;
};


export type MutationUserPhoneNumberVerifyOrChangeFinishArgs = {
  data: UserPhoneNumberVerifyOrChangeFinishSchema;
};


export type MutationUserPhoneNumberVerifyOrChangeStartArgs = {
  data: UserPhoneNumberVerifyOrChangeStartSchema;
};


export type MutationUserSignUpWithEmailFinishArgs = {
  data: UserSignUpWithEmailFinishSchema;
};


export type MutationUserSignUpWithEmailStartArgs = {
  data: UserSignUpWithEmailStartSchema;
};


export type MutationUserSignUpWithEmailVerifyArgs = {
  data: UserSignUpWithEmailVerifySchema;
};


export type MutationUserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};

export enum Organization_Connection_Status {
  Accepted = 'ACCEPTED',
  Invited = 'INVITED',
  Rejected = 'REJECTED'
}

export enum Organization_Invite_Side {
  Customer = 'CUSTOMER',
  Organization = 'ORGANIZATION'
}

export enum Organization_User_Role {
  Admin = 'ADMIN',
  Editor = 'EDITOR',
  Owner = 'OWNER',
  Viewer = 'VIEWER'
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
  business_name?: Maybe<Scalars['String']['output']>;
  business_tax_code?: Maybe<Scalars['String']['output']>;
  business_tax_code_type?: Maybe<Scalars['String']['output']>;
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
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  unique_name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationAcctProviderConn = {
  __typename?: 'OrganizationAcctProviderConn';
  acct_provider_code: Acct_Provider;
  automatic_pull_enabled: Scalars['Boolean']['output'];
  automatic_push_enabled: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  conn_expires_at: Scalars['DateTime']['output'];
  created_at: Scalars['DateTime']['output'];
  disconnected_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  organization_id: Scalars['String']['output'];
  payload?: Maybe<Scalars['JSON']['output']>;
  updated_at: Scalars['DateTime']['output'];
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
  currency_code: Currency;
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
  status?: Maybe<Bill_Status>;
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


export type OrganizationBillHistoryArgs = {
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

export type OrganizationBillStatement = {
  __typename?: 'OrganizationBillStatement';
  balance: Scalars['Int']['output'];
  currency?: Maybe<Currency>;
  customer_organization: Organization;
  customer_organization_id: Scalars['String']['output'];
  customer_organization_vendor?: Maybe<OrganizationVendor>;
  customer_organization_vendor_id?: Maybe<Scalars['String']['output']>;
  data: OrganizationBillPaginationConnection;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  overdue_amount: Scalars['Int']['output'];
  paid_amount: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Bill_Status>;
  total_amount: Scalars['Int']['output'];
  vendor_organization?: Maybe<Organization>;
  vendor_organization_id?: Maybe<Scalars['String']['output']>;
};

export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  created_at: Scalars['DateTime']['output'];
  customer_conn_status?: Maybe<Organization_Connection_Status>;
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
  vendor_conn_status?: Maybe<Organization_Connection_Status>;
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
  invoice_statement: OrganizationInvoiceStatement;
  is_active: Scalars['Boolean']['output'];
  language?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  organization: Organization;
  organization_acct_provider_conn_customers: Array<OrganizationAcctProviderConnCustomer>;
  organization_id: Scalars['String']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  tax_code?: Maybe<Scalars['String']['output']>;
  tax_code_type?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationCustomerInvoice_StatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
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
  role: Organization_User_Role;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationInvoice = {
  __typename?: 'OrganizationInvoice';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  /** The open amount for this invoice. Balance 0 represents invoice fully paid. */
  balance?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: Currency;
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
  status?: Maybe<Invoice_Status>;
  tax_amount: Scalars['Int']['output'];
  total_amount: Scalars['Int']['output'];
  transaction_links?: Maybe<Array<OrganizationTransactionLink>>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationInvoiceHistoryArgs = {
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

export type OrganizationInvoiceStatement = {
  __typename?: 'OrganizationInvoiceStatement';
  balance: Scalars['Int']['output'];
  currency?: Maybe<Currency>;
  customer_organization?: Maybe<Organization>;
  customer_organization_id?: Maybe<Scalars['String']['output']>;
  data: OrganizationInvoicePaginationConnection;
  end_date?: Maybe<Scalars['DateTime']['output']>;
  overdue_amount: Scalars['Int']['output'];
  paid_amount: Scalars['Int']['output'];
  start_date?: Maybe<Scalars['DateTime']['output']>;
  status?: Maybe<Invoice_Status>;
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
  payment_provider_code: Payment_Method;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationProject = {
  __typename?: 'OrganizationProject';
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  budget_amount: Scalars['Float']['output'];
  budget_currency_code: Currency;
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
  created_side: Organization_Invite_Side;
  ends_at: Scalars['DateTime']['output'];
  expires_at: Scalars['DateTime']['output'];
  finished_by_user?: Maybe<User>;
  finished_by_user_id?: Maybe<Scalars['String']['output']>;
  finished_side?: Maybe<Organization_Invite_Side>;
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
  receiving_provider_code: Receiving_Method;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationReminderSetting = {
  __typename?: 'OrganizationReminderSetting';
  created_at: Scalars['DateTime']['output'];
  days_amount: Scalars['Int']['output'];
  due_date_mode: Reminder_Due_Date_Mode;
  id: Scalars['ID']['output'];
  organization_customer_id?: Maybe<Scalars['String']['output']>;
  organization_id: Scalars['String']['output'];
  organization_invoice_id?: Maybe<Scalars['String']['output']>;
  organization_project_id?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  repeat_mode?: Maybe<Reminder_Repeat_Mode>;
  repeat_value?: Maybe<Scalars['Int']['output']>;
  selected_hour: Scalars['Int']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationTransaction = {
  __typename?: 'OrganizationTransaction';
  amount: Scalars['Int']['output'];
  archived_at?: Maybe<Scalars['DateTime']['output']>;
  created_at: Scalars['DateTime']['output'];
  currency_code: Currency;
  failed_at?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  links: Array<OrganizationTransactionLink>;
  method_id?: Maybe<Scalars['String']['output']>;
  method_type: Transaction_Method;
  organization_acct_provider_conn_transactions: Array<OrganizationAcctProviderConnTransaction>;
  provider_code: Transaction_Provider;
  provider_transaction_code: Scalars['String']['output'];
  recipient_organization_id?: Maybe<Scalars['String']['output']>;
  reverted_at?: Maybe<Scalars['DateTime']['output']>;
  sender_organization_id?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['DateTime']['output']>;
  succeeded_at?: Maybe<Scalars['DateTime']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type OrganizationTransactionLink = {
  __typename?: 'OrganizationTransactionLink';
  amount: Scalars['Int']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  item_id: Scalars['String']['output'];
  item_type: Transaction_Item_Type;
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
  role: Organization_User_Role;
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
  bill_statement: OrganizationBillStatement;
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
  phone_number?: Maybe<Scalars['String']['output']>;
  tax_code?: Maybe<Scalars['String']['output']>;
  tax_code_type?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  unique_code: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type OrganizationVendorBill_StatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Bill_Status>;
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

export enum Payment_Method {
  Manual = 'MANUAL',
  Quickbooks = 'QUICKBOOKS'
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
  unconnectedUserCustomerOrganizationInvoiceStatement: OrganizationInvoiceStatement;
  user: User;
  userCustomerOrganization: OrganizationConnection;
  userCustomerOrganizationInvoice: OrganizationInvoice;
  userCustomerOrganizationInvoiceStatement: OrganizationInvoiceStatement;
  userCustomerOrganizationInvoices: OrganizationInvoicePaginationConnection;
  userCustomerOrganizationProject: OrganizationProject;
  userCustomerOrganizationProjectChange: OrganizationProjectChange;
  userCustomerOrganizationProjectChangeRequest: OrganizationProjectChangeRequest;
  userCustomerOrganizationProjectChangeRequests: Array<OrganizationProjectChangeRequest>;
  userCustomerOrganizationProjectChanges: Array<OrganizationProjectChange>;
  userCustomerOrganizationProjects: Array<OrganizationProject>;
  userCustomerOrganizations: Array<OrganizationConnection>;
  userOrganization: Organization;
  userOrganizationAcctProvider: OrganizationAcctProviderConn;
  userOrganizationAcctProviderSynchronization: OrganizationAcctProviderConnSynchronization;
  userOrganizationAcctProviderSynchronizations: Array<OrganizationAcctProviderConnSynchronization>;
  userOrganizationAcctProviders: Array<OrganizationAcctProviderConn>;
  userOrganizationBill: OrganizationBill;
  userOrganizationBillStatement: OrganizationBillStatement;
  userOrganizationBills: OrganizationBillPaginationConnection;
  userOrganizationCollaborator: OrganizationUser;
  userOrganizationCollaborators: Array<OrganizationUser>;
  userOrganizationConnection: OrganizationConnection;
  userOrganizationConnections: OrganizationConnectionPaginationConnection;
  userOrganizationCustomer: OrganizationCustomer;
  userOrganizationCustomerContact: OrganizationCustomerContact;
  userOrganizationCustomerContacts: OrganizationCustomerContactPaginationConnection;
  userOrganizationCustomers: OrganizationCustomerPaginationConnection;
  userOrganizationInviteCollaborator: OrganizationInvite;
  userOrganizationInviteCollaborators: Array<OrganizationInvite>;
  userOrganizationInvoice: OrganizationInvoice;
  userOrganizationInvoiceStatement: OrganizationInvoiceStatement;
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
  userOrganizationReminderSettings: Array<OrganizationReminderSetting>;
  userOrganizationUserInvite: OrganizationInvite;
  userOrganizationUserInvites: Array<OrganizationInvite>;
  userOrganizationVendor: OrganizationVendor;
  userOrganizationVendorContact: OrganizationVendorContact;
  userOrganizationVendorContacts: OrganizationVendorContactPaginationConnection;
  userOrganizationVendors: OrganizationVendorPaginationConnection;
  userOrganizations: Array<Organization>;
};


export type QueryUnauthorizedUserOrganizationUserInviteArgs = {
  code: Scalars['String']['input'];
  email: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type QueryUnconnectedUserCustomerOrganizationInvoiceStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  email: Scalars['String']['input'];
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token: Scalars['String']['input'];
  unique_code: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationInvoiceArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationInvoiceStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserCustomerOrganizationInvoicesArgs = {
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


export type QueryUserCustomerOrganizationProjectArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationProjectChangeArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationProjectChangeRequestArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserCustomerOrganizationProjectChangeRequestsArgs = {
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


export type QueryUserCustomerOrganizationProjectChangesArgs = {
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


export type QueryUserCustomerOrganizationProjectsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserCustomerOrganizationsArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationAcctProviderArgs = {
  organization_acct_provider_conn_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationAcctProviderSynchronizationArgs = {
  organization_acct_provider_conn_synchronization_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationAcctProviderSynchronizationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_acct_provider_conn_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationAcctProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationBillArgs = {
  organization_bill_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationBillStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_vendor_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Bill_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationBillsArgs = {
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
  status?: InputMaybe<Bill_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
  unique_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserOrganizationCollaboratorArgs = {
  organization_id: Scalars['String']['input'];
  organization_user_id: Scalars['String']['input'];
};


export type QueryUserOrganizationCollaboratorsArgs = {
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationConnectionArgs = {
  organization_connection_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationConnectionsArgs = {
  organization_id: Scalars['String']['input'];
  status?: InputMaybe<Organization_Connection_Status>;
};


export type QueryUserOrganizationCustomerArgs = {
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationCustomerContactArgs = {
  organization_customer_contact_id: Scalars['String']['input'];
  organization_customer_id: Scalars['String']['input'];
  organization_id: Scalars['String']['input'];
};


export type QueryUserOrganizationCustomerContactsArgs = {
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


export type QueryUserOrganizationCustomersArgs = {
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


export type QueryUserOrganizationInviteCollaboratorArgs = {
  organization_id: Scalars['String']['input'];
  organization_invite_id: Scalars['String']['input'];
};


export type QueryUserOrganizationInviteCollaboratorsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationInvoiceArgs = {
  organization_id: Scalars['String']['input'];
  organization_invoice_id: Scalars['String']['input'];
};


export type QueryUserOrganizationInvoiceStatementArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<Currency>;
  end_date?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  is_overdue?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  start_date?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationInvoicesArgs = {
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
  status?: InputMaybe<Invoice_Status>;
  take?: InputMaybe<Scalars['Int']['input']>;
  unique_code?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserOrganizationPaymentMethodArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
};


export type QueryUserOrganizationPaymentMethodTransactionArgs = {
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type QueryUserOrganizationPaymentMethodTransactionsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_payment_method_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationProjectArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryUserOrganizationProjectChangeArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryUserOrganizationProjectChangeRequestArgs = {
  organization_id: Scalars['String']['input'];
  organization_project_change_request_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
};


export type QueryUserOrganizationProjectChangeRequestsArgs = {
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


export type QueryUserOrganizationProjectChangesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_project_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationProjectsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationReceivingMethodArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
};


export type QueryUserOrganizationReceivingMethodTransactionArgs = {
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
  organization_transaction_id: Scalars['String']['input'];
};


export type QueryUserOrganizationReceivingMethodTransactionsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  organization_receiving_method_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationReceivingMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_id: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationReminderSettingArgs = {
  organization_id: Scalars['String']['input'];
  organization_reminder_setting_id: Scalars['String']['input'];
};


export type QueryUserOrganizationReminderSettingsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_id: Scalars['String']['input'];
  organization_invoice_id?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationUserInviteArgs = {
  organization_invite_id: Scalars['String']['input'];
};


export type QueryUserOrganizationUserInvitesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserOrganizationVendorArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserOrganizationVendorContactArgs = {
  organization_id: Scalars['String']['input'];
  organization_vendor_contact_id: Scalars['String']['input'];
  organization_vendor_id: Scalars['String']['input'];
};


export type QueryUserOrganizationVendorContactsArgs = {
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


export type QueryUserOrganizationVendorsArgs = {
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


export type QueryUserOrganizationsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum Receiving_Method {
  Manual = 'MANUAL'
}

export enum Recipient_Type {
  Organization = 'ORGANIZATION',
  User = 'USER'
}

export enum Reminder_Due_Date_Mode {
  After = 'AFTER',
  Before = 'BEFORE'
}

export enum Reminder_Repeat_Mode {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY'
}

export enum Sort_Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum Storage_Provider {
  GoogleCloudStorage = 'GOOGLE_CLOUD_STORAGE'
}

export type Session = {
  __typename?: 'Session';
  user: User;
  user_auth_provider_conn: UserAuthProviderConn;
  user_session: UserSession;
};

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: Sort_Order;
};

export enum Transaction_Item_Type {
  Bill = 'BILL',
  Invoice = 'INVOICE',
  Other = 'OTHER'
}

export enum Transaction_Method {
  Payment = 'PAYMENT',
  Receiving = 'RECEIVING'
}

export enum Transaction_Provider {
  Manual = 'MANUAL',
  Quickbooks = 'QUICKBOOKS'
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
  auth_provider_code: Auth_Provider;
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
  currency_code: Currency;
};

export type UserOrganizationBillSchema = {
  amount: Scalars['Float']['input'];
  bill_date: Scalars['DateTime']['input'];
  currency_code: Currency;
  description: Scalars['String']['input'];
  discount_amount: Scalars['Float']['input'];
  due_date: Scalars['DateTime']['input'];
  number?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  organization_vendor_id: Scalars['String']['input'];
  total_amount: Scalars['Float']['input'];
};

export type UserOrganizationCollaboratorUpdateSchema = {
  role: Organization_User_Role;
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
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_tax_code?: InputMaybe<Scalars['String']['input']>;
  business_tax_code_type?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  primary_contact_name?: InputMaybe<Scalars['String']['input']>;
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
  tax_code_type?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};

export type UserOrganizationCustomerSendInvoiceEmailSchema = {
  contact_ids: Array<Scalars['String']['input']>;
  organization_invoice_id: Scalars['String']['input'];
  send_to_primary_contact: Scalars['Boolean']['input'];
};

export type UserOrganizationCustomerSendInvoiceStatementEmailSchema = {
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
  role: Organization_User_Role;
};

export type UserOrganizationInvoiceManualPaymentCreateSchema = {
  amount: Scalars['Float']['input'];
  currency_code: Currency;
};

export type UserOrganizationInvoiceSchema = {
  amount: Scalars['Float']['input'];
  currency_code: Currency;
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
  budget_currency_code: Currency;
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

export type UserOrganizationReminderSettingCreateSchema = {
  days_amount: Scalars['Int']['input'];
  due_date_mode: Reminder_Due_Date_Mode;
  organization_customer_id?: InputMaybe<Scalars['String']['input']>;
  organization_invoice_id?: InputMaybe<Scalars['String']['input']>;
  organization_project_id?: InputMaybe<Scalars['String']['input']>;
  repeat_mode?: InputMaybe<Reminder_Repeat_Mode>;
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
  business_name?: InputMaybe<Scalars['String']['input']>;
  business_tax_code?: InputMaybe<Scalars['String']['input']>;
  business_tax_code_type?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone_number?: InputMaybe<Scalars['String']['input']>;
  primary_contact_name?: InputMaybe<Scalars['String']['input']>;
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
  tax_code_type?: InputMaybe<Scalars['String']['input']>;
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

export type UserOrganizationAcctProviderConnectMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: Acct_Provider;
  url: Scalars['String']['input'];
  automaticPull: Scalars['Boolean']['input'];
  automaticPush: Scalars['Boolean']['input'];
}>;


export type UserOrganizationAcctProviderConnectMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnect: { __typename?: 'OrganizationAcctProviderConn', id: string, code: string, conn_expires_at: any, created_at: any, updated_at: any, organization_id: string, acct_provider_code: Acct_Provider } };

export type UserOrganizationAcctProviderGetOAuthUrlMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: Acct_Provider;
}>;


export type UserOrganizationAcctProviderGetOAuthUrlMutation = { __typename?: 'Mutation', userOrganizationAcctProviderGetOAuthUrl: string };

export type UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: Acct_Provider;
}>;


export type UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPushOptionsGet: any };

export type UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: Acct_Provider;
  payload: Scalars['JSON']['input'];
}>;


export type UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation = { __typename?: 'Mutation', userOrganizationAcctProviderConnConfigurationPushOptionsSet: { __typename?: 'OrganizationAcctProviderConn', id: string, code: string, payload?: any | null, conn_expires_at: any, organization_id: string, acct_provider_code: Acct_Provider } };

export type UserSessionsCloseMutationVariables = Exact<{ [key: string]: never; }>;


export type UserSessionsCloseMutation = { __typename?: 'Mutation', userSessionsClose: { __typename?: 'UserAuthProviderConn', id: string } };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, email: string, first_name?: string | null, last_name?: string | null, language?: string | null, phone_number?: string | null, timezone?: string | null, updated_at: any, created_at: any, organizations?: Array<{ __typename?: 'OrganizationUser', id: string, organization_id: string, organization: { __typename?: 'Organization', name: string, email: string } } | null> | null, profile_picture_file?: { __typename?: 'File', public_url?: string | null } | null } };

export type UserAuthProviderGetOAuthUrlMutationVariables = Exact<{ [key: string]: never; }>;


export type UserAuthProviderGetOAuthUrlMutation = { __typename?: 'Mutation', userAuthProviderGetOAuthUrl: string };

export type UserAuthProviderGetOAuthTokenMutationVariables = Exact<{
  authProviderCode: Auth_Provider;
  authorizationToken: Scalars['String']['input'];
}>;


export type UserAuthProviderGetOAuthTokenMutation = { __typename?: 'Mutation', userAuthProviderGetOAuthToken: string };

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


export type UserOrganizationUserInviteAcceptMutation = { __typename?: 'Mutation', userOrganizationUserInviteAccept: { __typename?: 'OrganizationUser', role: Organization_User_Role } };

export type UserSignUpWithEmailFinishSchemaMutationVariables = Exact<{
  data: UserSignUpWithEmailFinishSchema;
}>;


export type UserSignUpWithEmailFinishSchemaMutation = { __typename?: 'Mutation', userSignUpWithEmailFinish: string };

export type OrganizationBillFragmentFragment = { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Bill_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null };

export type UserOrganizationBillStatementQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Currency>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Bill_Status>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationBillStatementQuery = { __typename?: 'Query', userOrganizationBillStatement: { __typename?: 'OrganizationBillStatement', vendor_organization_id?: string | null, customer_organization_vendor_id?: string | null, customer_organization_id: string, total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, vendor_organization?: { __typename?: 'Organization', id: string, name: string } | null, customer_organization_vendor?: { __typename?: 'OrganizationVendor', id: string, name: string } | null, customer_organization: { __typename?: 'Organization', id: string, name: string }, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Bill_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationBillQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationBillId: Scalars['String']['input'];
}>;


export type UserOrganizationBillQuery = { __typename?: 'Query', userOrganizationBill: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Bill_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type UserOrganizationBillCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationBillSchema;
}>;


export type UserOrganizationBillCreateMutation = { __typename?: 'Mutation', userOrganizationBillCreate: { __typename?: 'OrganizationBill', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, bill_date: any, due_date: any, vendor_email: string, vendor_address_line_1?: string | null, vendor_address_number?: string | null, vendor_address_line_2?: string | null, vendor_address_city?: string | null, vendor_address_state?: string | null, vendor_address_zip_code?: string | null, vendor_address_country_code_iso_3?: string | null, vendor_address_lat?: number | null, vendor_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, conn_linked_invoice_id?: string | null, conn_locked_data_at?: any | null, organization_id: string, organization_vendor_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Bill_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, organization: { __typename?: 'Organization', name: string }, organization_vendor: { __typename?: 'OrganizationVendor', name: string, email: string }, organization_acct_provider_conn_bills: Array<{ __typename?: 'OrganizationAcctProviderConnBill', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_bill_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type OrganizationConnectionFragmentFragment = { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any };

export type UserOrganizationConnectionsQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  status?: InputMaybe<Organization_Connection_Status>;
}>;


export type UserOrganizationConnectionsQuery = { __typename?: 'Query', userOrganizationConnections: { __typename?: 'OrganizationConnectionPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationConnectionPaginationEdge', cursor: any, node: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationConnectionQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionQuery = { __typename?: 'Query', userOrganizationConnection: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionInviteCustomerMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionInviteCustomerMutation = { __typename?: 'Mutation', userOrganizationConnectionInviteCustomer: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionInviteVendorMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionInviteVendorMutation = { __typename?: 'Mutation', userOrganizationConnectionInviteVendor: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionAcceptMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionAcceptMutation = { __typename?: 'Mutation', userOrganizationConnectionAccept: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationConnectionRejectMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationConnectionId: Scalars['String']['input'];
}>;


export type UserOrganizationConnectionRejectMutation = { __typename?: 'Mutation', userOrganizationConnectionReject: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } };

export type UserOrganizationCustomerConnLockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerConnLockMutation = { __typename?: 'Mutation', userOrganizationCustomerConnLock: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerConnUnlockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerConnUnlockMutation = { __typename?: 'Mutation', userOrganizationCustomerConnUnlock: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorConnLockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorConnLockMutation = { __typename?: 'Mutation', userOrganizationVendorConnLock: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorConnUnlockMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorConnUnlockMutation = { __typename?: 'Mutation', userOrganizationVendorConnUnlock: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorContactsQueryVariables = Exact<{
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorContactsQuery = { __typename?: 'Query', userOrganizationVendorContacts: { __typename?: 'OrganizationVendorContactPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationVendorContactPaginationEdge', cursor: any, node: { __typename?: 'OrganizationVendorContact', email: string, id: string, is_default: boolean, name: string, phone_number?: string | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationCustomerContactsQueryVariables = Exact<{
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerContactsQuery = { __typename?: 'Query', userOrganizationCustomerContacts: { __typename?: 'OrganizationCustomerContactPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerContactPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any, organization_customer_id: string } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationVendorContactCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  data: UserOrganizationVendorContactCreateSchema;
}>;


export type UserOrganizationVendorContactCreateMutation = { __typename?: 'Mutation', userOrganizationVendorContactCreate: { __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, organization_vendor_id: string } };

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

export type OrganizationCustomerFragmentFragment = { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

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


export type UserOrganizationCustomersQuery = { __typename?: 'Query', userOrganizationCustomers: { __typename?: 'OrganizationCustomerPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationCustomerPaginationEdge', cursor: any, node: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationCustomerQueryVariables = Exact<{
  organizationCustomerId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationCustomerQuery = { __typename?: 'Query', userOrganizationCustomer: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId: Scalars['String']['input'];
  data: UserOrganizationCustomerSchema;
}>;


export type UserOrganizationCustomerUpdateMutation = { __typename?: 'Mutation', userOrganizationCustomerUpdate: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationCustomerCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationCustomerSchema;
}>;


export type UserOrganizationCustomerCreateMutation = { __typename?: 'Mutation', userOrganizationCustomerCreate: { __typename?: 'OrganizationCustomer', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationCustomerContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, send_invoice_reminders: boolean, created_at: any, updated_at: any }>, invoice_statement: { __typename?: 'OrganizationInvoiceStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, paid_amount?: number | null, invoice_date: any, due_date: any, customer_email: string, created_at: any, updated_at: any, status?: Invoice_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type OrganizationInvoiceFragmentFragment = { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Invoice_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null };

export type UserOrganizationInvoiceStatementQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationCustomerId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Currency>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserOrganizationInvoiceStatementQuery = { __typename?: 'Query', userOrganizationInvoiceStatement: { __typename?: 'OrganizationInvoiceStatement', vendor_organization_id: string, vendor_organization_customer_id?: string | null, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer?: { __typename?: 'OrganizationCustomer', id: string, name: string } | null, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Invoice_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationInvoiceQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationInvoiceId: Scalars['String']['input'];
}>;


export type UserOrganizationInvoiceQuery = { __typename?: 'Query', userOrganizationInvoice: { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Invoice_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } };

export type UserOrganizationCustomerSendInvoiceEmailMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  targets: Array<UserOrganizationCustomerSendInvoiceEmailSchema> | UserOrganizationCustomerSendInvoiceEmailSchema;
}>;


export type UserOrganizationCustomerSendInvoiceEmailMutation = { __typename?: 'Mutation', userOrganizationCustomerSendInvoiceEmail: any };

export type UserCustomerOrganizationInvoiceStatementQueryVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  currency?: InputMaybe<Currency>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  status?: InputMaybe<Invoice_Status>;
  isOverdue?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type UserCustomerOrganizationInvoiceStatementQuery = { __typename?: 'Query', userCustomerOrganizationInvoiceStatement: { __typename?: 'OrganizationInvoiceStatement', vendor_organization_id: string, vendor_organization_customer_id?: string | null, customer_organization_id?: string | null, total_amount: number, paid_amount: number, overdue_amount: number, balance: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Invoice_Status | null, vendor_organization: { __typename?: 'Organization', id: string, name: string }, vendor_organization_customer?: { __typename?: 'OrganizationCustomer', id: string, name: string } | null, customer_organization?: { __typename?: 'Organization', id: string, name: string } | null, data: { __typename?: 'OrganizationInvoicePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationInvoicePaginationEdge', cursor: any, node: { __typename?: 'OrganizationInvoice', id: string, unique_code: string, number: string, currency_code: Currency, description: string, payload?: any | null, amount: number, tax_amount: number, discount_amount: number, total_amount: number, invoice_date: any, due_date: any, customer_email: string, customer_address_line_1?: string | null, customer_address_number?: string | null, customer_address_line_2?: string | null, customer_address_city?: string | null, customer_address_state?: string | null, customer_address_zip_code?: string | null, customer_address_country_code_iso_3?: string | null, customer_address_lat?: number | null, customer_address_lng?: number | null, archived_at?: any | null, created_at: any, updated_at: any, organization_id: string, organization_customer_id: string, file_id?: string | null, has_sync_errors?: boolean | null, status?: Invoice_Status | null, is_overdue?: boolean | null, paid_amount?: number | null, paid_at?: any | null, balance?: number | null, email_sent_at?: any | null, organization: { __typename?: 'Organization', name: string }, organization_customer: { __typename?: 'OrganizationCustomer', name: string, email: string }, organization_acct_provider_conn_invoices: Array<{ __typename?: 'OrganizationAcctProviderConnInvoice', id: string, code: string, payload?: any | null, last_sync_at?: any | null, last_sync_success?: boolean | null, last_sync_id?: string | null, organization_invoice_id: string, organization_acct_provider_conn_id: string, organization_acct_provider_conn: { __typename?: 'OrganizationAcctProviderConn', acct_provider_code: Acct_Provider } }>, file?: { __typename?: 'File', public_url?: string | null } | null, transaction_links?: Array<{ __typename?: 'OrganizationTransactionLink', id: string, amount: number, item_type: Transaction_Item_Type, item_id: string, created_at: any, updated_at: any, organization_transaction_id: string, organization_transaction: { __typename?: 'OrganizationTransaction', id: string } }> | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

export type UserOrganizationAcctProviderSynchronizeMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  accountProvider: Acct_Provider;
  push: Scalars['Boolean']['input'];
  pull: Scalars['Boolean']['input'];
}>;


export type UserOrganizationAcctProviderSynchronizeMutation = { __typename?: 'Mutation', userOrganizationAcctProviderSynchronize: { __typename?: 'Organization', id: string, name: string } };

export type OrganizationVendorFragmentFragment = { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } };

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


export type UserOrganizationVendorsQuery = { __typename?: 'Query', userOrganizationVendors: { __typename?: 'OrganizationVendorPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationVendorPaginationEdge', cursor: any, node: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type UserOrganizationVendorQueryVariables = Exact<{
  organizationVendorId: Scalars['String']['input'];
  organizationId: Scalars['String']['input'];
}>;


export type UserOrganizationVendorQuery = { __typename?: 'Query', userOrganizationVendor: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorUpdateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  organizationVendorId: Scalars['String']['input'];
  data: UserOrganizationVendorSchema;
}>;


export type UserOrganizationVendorUpdateMutation = { __typename?: 'Mutation', userOrganizationVendorUpdate: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export type UserOrganizationVendorCreateMutationVariables = Exact<{
  organizationId: Scalars['String']['input'];
  data: UserOrganizationVendorSchema;
}>;


export type UserOrganizationVendorCreateMutation = { __typename?: 'Mutation', userOrganizationVendorCreate: { __typename?: 'OrganizationVendor', id: string, is_active: boolean, email: string, name: string, unique_code: string, phone_number?: string | null, tax_code_type?: string | null, tax_code?: string | null, created_at: any, updated_at: any, conn_locked_data_at?: any | null, connection?: { __typename?: 'OrganizationConnection', id: string, is_valid: boolean, is_connected: boolean, vendor_conn_status?: Organization_Connection_Status | null, vendor_conn_status_at?: any | null, vendor_organization_id?: string | null, vendor_organization_name?: string | null, vendor_organization_email?: string | null, vendor_target_customer_id?: string | null, vendor_target_customer_name?: string | null, vendor_target_customer_email?: string | null, customer_conn_status?: Organization_Connection_Status | null, customer_conn_status_at?: any | null, customer_organization_id?: string | null, customer_organization_name?: string | null, customer_organization_email?: string | null, customer_target_vendor_id?: string | null, customer_target_vendor_name?: string | null, customer_target_vendor_email?: string | null, created_at: any, updated_at: any } | null, contacts: Array<{ __typename?: 'OrganizationVendorContact', id: string, name: string, email: string, phone_number?: string | null, is_default: boolean, created_at: any, updated_at: any }>, bill_statement: { __typename?: 'OrganizationBillStatement', total_amount: number, paid_amount: number, overdue_amount: number, start_date?: any | null, end_date?: any | null, currency?: Currency | null, status?: Bill_Status | null, data: { __typename?: 'OrganizationBillPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'OrganizationBillPaginationEdge', cursor: any, node: { __typename?: 'OrganizationBill', id: string, file_id?: string | null, unique_code: string, number: string, currency_code: Currency, description: string, amount: number, tax_amount: number, discount_amount: number, total_amount: number, paid_amount?: number | null, bill_date: any, due_date: any, vendor_email: string, created_at: any, updated_at: any, status?: Bill_Status | null, file?: { __typename?: 'File', public_url?: string | null } | null } }>, pageInfo: { __typename?: 'PageInfo', startCursor?: string | null, endCursor?: string | null, hasPreviousPage: boolean, hasNextPage: boolean } } } } };

export const OrganizationBillFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationBillFragmentFragment, unknown>;
export const OrganizationConnectionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationConnectionFragmentFragment, unknown>;
export const OrganizationCustomerFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationCustomerFragmentFragment, unknown>;
export const OrganizationInvoiceFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<OrganizationInvoiceFragmentFragment, unknown>;
export const OrganizationVendorFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<OrganizationVendorFragmentFragment, unknown>;
export const UserOrganizationAcctProviderConnectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationAcctProviderConnect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"url"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"automaticPull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"automaticPush"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"url"},"value":{"kind":"Variable","name":{"kind":"Name","value":"url"}}},{"kind":"Argument","name":{"kind":"Name","value":"automatic_pull_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"automaticPull"}}},{"kind":"Argument","name":{"kind":"Name","value":"automatic_push_enabled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"automaticPush"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnectMutation, UserOrganizationAcctProviderConnectMutationVariables>;
export const UserOrganizationAcctProviderGetOAuthUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationAcctProviderGetOAuthUrl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderGetOAuthUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderGetOAuthUrlMutation, UserOrganizationAcctProviderGetOAuthUrlMutationVariables>;
export const UserOrganizationAcctProviderConnConfigurationPushOptionsGetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsGet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsGet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutation, UserOrganizationAcctProviderConnConfigurationPushOptionsGetMutationVariables>;
export const UserOrganizationAcctProviderConnConfigurationPushOptionsSetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsSet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderConnConfigurationPushOptionsSet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"conn_expires_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutation, UserOrganizationAcctProviderConnConfigurationPushOptionsSetMutationVariables>;
export const UserSessionsCloseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSessionsClose"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSessionsClose"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UserSessionsCloseMutation, UserSessionsCloseMutationVariables>;
export const UserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"language"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"timezone"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"profile_picture_file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}}]}}]}}]} as unknown as DocumentNode<UserQuery, UserQueryVariables>;
export const UserAuthProviderGetOAuthUrlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAuthProviderGetOAuthUrl"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAuthProviderGetOAuthUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth_provider_code"},"value":{"kind":"EnumValue","value":"INTUIT"}}]}]}}]} as unknown as DocumentNode<UserAuthProviderGetOAuthUrlMutation, UserAuthProviderGetOAuthUrlMutationVariables>;
export const UserAuthProviderGetOAuthTokenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserAuthProviderGetOAuthToken"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AUTH_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorizationToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userAuthProviderGetOAuthToken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authProviderCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"authorization_token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorizationToken"}}}]}]}}]} as unknown as DocumentNode<UserAuthProviderGetOAuthTokenMutation, UserAuthProviderGetOAuthTokenMutationVariables>;
export const UnauthorizedUserOrganizationUserInviteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UnauthorizedUserOrganizationUserInvite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"unauthorizedUserOrganizationUserInvite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invite_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invited_by"}},{"kind":"Field","name":{"kind":"Name","value":"organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}}]}}]}}]} as unknown as DocumentNode<UnauthorizedUserOrganizationUserInviteQuery, UnauthorizedUserOrganizationUserInviteQueryVariables>;
export const UserSignUpWithEmailStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailStartMutation, UserSignUpWithEmailStartMutationVariables>;
export const UserSignUpWithEmailVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailVerifySchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailVerifyMutation, UserSignUpWithEmailVerifyMutationVariables>;
export const UserOrganizationUserInviteAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationUserInviteAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationUserInviteAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invite_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInviteId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationUserInviteAcceptMutation, UserOrganizationUserInviteAcceptMutationVariables>;
export const UserSignUpWithEmailFinishSchemaDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserSignUpWithEmailFinishSchema"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserSignUpWithEmailFinishSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userSignUpWithEmailFinish"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}]}]}}]} as unknown as DocumentNode<UserSignUpWithEmailFinishSchemaMutation, UserSignUpWithEmailFinishSchemaMutationVariables>;
export const UserOrganizationBillStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationBillStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"BILL_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBillStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillStatementQuery, UserOrganizationBillStatementQueryVariables>;
export const UserOrganizationBillDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationBill"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationBillId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBill"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_bill_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationBillId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillQuery, UserOrganizationBillQueryVariables>;
export const UserOrganizationBillCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationBillCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationBillSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationBillCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationBillFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationBillFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationBill"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_linked_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_bills"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_bill_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationBillCreateMutation, UserOrganizationBillCreateMutationVariables>;
export const UserOrganizationConnectionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationConnections"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ORGANIZATION_CONNECTION_STATUS"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnections"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionsQuery, UserOrganizationConnectionsQueryVariables>;
export const UserOrganizationConnectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationConnection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionQuery, UserOrganizationConnectionQueryVariables>;
export const UserOrganizationConnectionInviteCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionInviteCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionInviteCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionInviteCustomerMutation, UserOrganizationConnectionInviteCustomerMutationVariables>;
export const UserOrganizationConnectionInviteVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionInviteVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionInviteVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionInviteVendorMutation, UserOrganizationConnectionInviteVendorMutationVariables>;
export const UserOrganizationConnectionAcceptDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionAccept"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionAccept"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionAcceptMutation, UserOrganizationConnectionAcceptMutationVariables>;
export const UserOrganizationConnectionRejectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationConnectionReject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationConnectionReject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_connection_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationConnectionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}}]} as unknown as DocumentNode<UserOrganizationConnectionRejectMutation, UserOrganizationConnectionRejectMutationVariables>;
export const UserOrganizationCustomerConnLockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerConnLock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerConnLock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerConnLockMutation, UserOrganizationCustomerConnLockMutationVariables>;
export const UserOrganizationCustomerConnUnlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerConnUnlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerConnUnlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerConnUnlockMutation, UserOrganizationCustomerConnUnlockMutationVariables>;
export const UserOrganizationVendorConnLockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorConnLock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorConnLock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorConnLockMutation, UserOrganizationVendorConnLockMutationVariables>;
export const UserOrganizationVendorConnUnlockDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorConnUnlock"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorConnUnlock"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorConnUnlockMutation, UserOrganizationVendorConnUnlockMutationVariables>;
export const UserOrganizationVendorContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userOrganizationVendorContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactsQuery, UserOrganizationVendorContactsQueryVariables>;
export const UserOrganizationCustomerContactsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomerContacts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContacts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactsQuery, UserOrganizationCustomerContactsQueryVariables>;
export const UserOrganizationVendorContactCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationVendorContactCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorContactCreateSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactCreateMutation, UserOrganizationVendorContactCreateMutationVariables>;
export const UserOrganizationCustomerContactCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerContactCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactCreateMutation, UserOrganizationCustomerContactCreateMutationVariables>;
export const UserOrganizationVendorContactUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorContactUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorContactUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactUpdateMutation, UserOrganizationVendorContactUpdateMutationVariables>;
export const UserOrganizationCustomerContactUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerContactUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactUpdateMutation, UserOrganizationCustomerContactUpdateMutationVariables>;
export const UserOrganizationVendorContactDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorContactDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorContactDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"organization_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorContactDeleteMutation, UserOrganizationVendorContactDeleteMutationVariables>;
export const UserOrganizationCustomerContactDeleteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerContactDelete"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerContactDelete"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_contact_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerContactId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerContactDeleteMutation, UserOrganizationCustomerContactDeleteMutationVariables>;
export const UserOrganizationCustomersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"userOrganizationCustomers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomersQuery, UserOrganizationCustomersQueryVariables>;
export const UserOrganizationCustomerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationCustomer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerQuery, UserOrganizationCustomerQueryVariables>;
export const UserOrganizationCustomerUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationCustomerUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerUpdateMutation, UserOrganizationCustomerUpdateMutationVariables>;
export const UserOrganizationCustomerCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationCustomerCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationCustomerFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationCustomerFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCustomer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"send_invoice_reminders"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"invoice_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationCustomerCreateMutation, UserOrganizationCustomerCreateMutationVariables>;
export const UserOrganizationInvoiceStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationInvoiceStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"INVOICE_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoiceStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_customer_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationCustomerId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationInvoiceFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceStatementQuery, UserOrganizationInvoiceStatementQueryVariables>;
export const UserOrganizationInvoiceDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationInvoice"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationInvoice"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_invoice_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationInvoiceId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationInvoiceFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserOrganizationInvoiceQuery, UserOrganizationInvoiceQueryVariables>;
export const UserOrganizationCustomerSendInvoiceEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationCustomerSendInvoiceEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"targets"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationCustomerSendInvoiceEmailSchema"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationCustomerSendInvoiceEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"targets"},"value":{"kind":"Variable","name":{"kind":"Name","value":"targets"}}}]}]}}]} as unknown as DocumentNode<UserOrganizationCustomerSendInvoiceEmailMutation, UserOrganizationCustomerSendInvoiceEmailMutationVariables>;
export const UserCustomerOrganizationInvoiceStatementDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserCustomerOrganizationInvoiceStatement"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"INVOICE_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userCustomerOrganizationInvoiceStatement"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"start_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"startDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"end_date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"endDate"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"is_overdue"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isOverdue"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationInvoiceFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationInvoiceFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationInvoice"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"invoice_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_1"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_number"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_line_2"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_city"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_state"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_zip_code"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_country_code_iso_3"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lat"}},{"kind":"Field","name":{"kind":"Name","value":"customer_address_lng"}},{"kind":"Field","name":{"kind":"Name","value":"archived_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_customer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_invoices"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_at"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_success"}},{"kind":"Field","name":{"kind":"Name","value":"last_sync_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_invoice_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_acct_provider_conn"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acct_provider_code"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"has_sync_errors"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"is_overdue"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_at"}},{"kind":"Field","name":{"kind":"Name","value":"balance"}},{"kind":"Field","name":{"kind":"Name","value":"email_sent_at"}},{"kind":"Field","name":{"kind":"Name","value":"transaction_links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"item_type"}},{"kind":"Field","name":{"kind":"Name","value":"item_id"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction_id"}},{"kind":"Field","name":{"kind":"Name","value":"organization_transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<UserCustomerOrganizationInvoiceStatementQuery, UserCustomerOrganizationInvoiceStatementQueryVariables>;
export const UserOrganizationAcctProviderSynchronizeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"userOrganizationAcctProviderSynchronize"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ACCT_PROVIDER"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"push"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pull"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationAcctProviderSynchronize"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"acct_provider_code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"accountProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"pull"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pull"}}},{"kind":"Argument","name":{"kind":"Name","value":"push"},"value":{"kind":"Variable","name":{"kind":"Name","value":"push"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationAcctProviderSynchronizeMutation, UserOrganizationAcctProviderSynchronizeMutationVariables>;
export const UserOrganizationVendorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationVendors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendors"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorsQuery, UserOrganizationVendorsQueryVariables>;
export const UserOrganizationVendorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserOrganizationVendor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorQuery, UserOrganizationVendorQueryVariables>;
export const UserOrganizationVendorUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"organization_vendor_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationVendorId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorUpdateMutation, UserOrganizationVendorUpdateMutationVariables>;
export const UserOrganizationVendorCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UserOrganizationVendorCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrganizationVendorSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userOrganizationVendorCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"organization_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"organizationId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationVendorFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationConnectionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationConnection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_valid"}},{"kind":"Field","name":{"kind":"Name","value":"is_connected"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_id"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_name"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_target_customer_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status"}},{"kind":"Field","name":{"kind":"Name","value":"customer_conn_status_at"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_organization_email"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_id"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_name"}},{"kind":"Field","name":{"kind":"Name","value":"customer_target_vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrganizationVendorFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationVendor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"is_active"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code_type"}},{"kind":"Field","name":{"kind":"Name","value":"tax_code"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"conn_locked_data_at"}},{"kind":"Field","name":{"kind":"Name","value":"connection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrganizationConnectionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contacts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"is_default"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bill_statement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file_id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"public_url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"unique_code"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"currency_code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"tax_amount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_amount"}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"bill_date"}},{"kind":"Field","name":{"kind":"Name","value":"due_date"}},{"kind":"Field","name":{"kind":"Name","value":"vendor_email"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_amount"}},{"kind":"Field","name":{"kind":"Name","value":"paid_amount"}},{"kind":"Field","name":{"kind":"Name","value":"overdue_amount"}},{"kind":"Field","name":{"kind":"Name","value":"start_date"}},{"kind":"Field","name":{"kind":"Name","value":"end_date"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<UserOrganizationVendorCreateMutation, UserOrganizationVendorCreateMutationVariables>;