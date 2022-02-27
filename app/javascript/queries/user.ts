import { gql } from '@apollo/client';

export const ALL_USERS = gql`
  query allUsers {
    users {
      id
      name
    }
  }
`;