import { gql } from '@gql';

export const USER_FRAGMENT = gql(`
  fragment UserFragment on User {
    id
    email

    first_name
    last_name
    language
    phone_number
    timezone
    is_admin
    referral_code

    updated_at
    created_at
    profile_picture_file {
      public_url
    }
  }
`);

export const USER_WITH_ORGANIZATIONS_FRAGMENT = gql(`
  fragment UserWithOrganizationFragment on User {
    ...UserFragment

    organizations {
      id
      role
      is_current_organization_user_seat_available
      organization_id
      organization {
        ...OrganizationFragment
      }
    }
  }
`);

export const USER_QUERY = gql(`
  query User {
    user {
      ...UserWithOrganizationFragment
    }
  }
`);

export const UPDATE_USER_MUTATION = gql(`
  mutation UserUpdateData($data: UserUpdateDataSchema!) {
    userUpdateData(
      data: $data
    ) {
      ...UserWithOrganizationFragment
    }
  }
`);

export const UPDATE_USER_EMAIL_START_MUTATION = gql(`
  mutation UserEmailVerifyOrChangeStart($data: UserEmailVerifyOrChangeStartSchema!) {
    userEmailVerifyOrChangeStart(data: $data)
  }
`);

export const UPDATE_USER_EMAIL_FINISH_MUTATION = gql(`
  mutation UserEmailVerifyOrChangeFinish($data: UserEmailVerifyOrChangeFinishSchema!) {
    userEmailVerifyOrChangeFinish(data: $data) {
      email
    }
  }
`);

export const UPDATE_USER_PHONE_START_MUTATION = gql(`
  mutation UserPhoneNumberVerifyOrChangeStart($data: UserPhoneNumberVerifyOrChangeStartSchema!) {
    userPhoneNumberVerifyOrChangeStart(data: $data)
  }
`);

export const UPDATE_USER_PHONE_FINISH_MUTATION = gql(`
  mutation UserPhoneNumberVerifyOrChangeFinish($data: UserPhoneNumberVerifyOrChangeFinishSchema!) {
    userPhoneNumberVerifyOrChangeFinish(data: $data) {
      phone_number
    }
  }
`);

export const UPDATE_USER_PASSWORD_START_MUTATION = gql(`
  mutation UserPasswordChangeStart($data: UserPasswordChangeStartSchema!) {
    userPasswordChangeStart(data: $data)
  }
`);

export const UPDATE_USER_PASSWORD_FINISH_MUTATION = gql(`
  mutation UserPasswordChangeFinish($data: UserPasswordChangeFinishSchema!) {
    userPasswordChangeFinish(data: $data)
  }
`);

export const UPDATE_USER_DELETE_PROFILE_PICTURE_MUTATION = gql(`
  mutation UserProfilePictureRemove {
    userProfilePictureRemove {
        profile_picture_file_id
    }
  }
`);

export const USER_HANDLE_LOGIN_ATTEMPT_MUTATION = gql(`
  mutation UserHandleLoginAttempt($email: String!) {
    userHandleLoginAttempt(email: $email)
  }
`);

export const USER_CREATE_REFERRAL_CODE_MUTATION = gql(`
  mutation UserCreateReferralCode {
    userCreateReferralCode {
      ...UserFragment
    }
  }
`);
