import { gql } from '@gql';

export const USER_QUERY = gql(`
  query User {
    user {
      id
      email
      organizations {
        id
        organization_id
        organization {
          name
          email
        }
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
  }
`);
