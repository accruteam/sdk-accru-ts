import { gql } from '@gql';

export const USER_FRAGMENT = gql(`
  fragment User on User {
    id
    email
    organizations {
      id
      organization_id
      organization {
        subscription_level
        name
        email
      }
      role
    }
    first_name
    last_name
    language
    phone_number
    timezone
    updated_at
    created_at
    profile_picture_file {
      public_url
    }
  }
`);

export const USER_QUERY = gql(`
  query User {
    user {
      ...User
    }
  }
`);

export const UPDATE_USER_MUTATION = gql(`
  mutation UserUpdateData($data: UserUpdateDataSchema!) {
    userUpdateData(
      data: $data
    ) {
      ...User
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
