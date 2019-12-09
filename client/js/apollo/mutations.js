import gql from 'graphql-tag';

export const MUTATION_LOG_IN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        firstName
        lastName
        location
      }
    }
  }
`;

export const MUTATION_SING_UP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $location: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      location: $location
    ) {
      token
      user {
        id
        email
        firstName
        lastName
        location
      }
    }
  }
`;
