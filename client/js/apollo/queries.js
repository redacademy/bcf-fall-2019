import gql from 'graphql-tag';

export const QUERY_INFO = gql`
{
    Info{
    about: String!
  }
}
`;

export const QUERY_CONTACTUS = gql`
{
    ContactUs{
    id: ID! @id
    address: String!
    phoneNumber: String!
    email: String!
  }
}
`;

export const QUERY_FAQ = gql`
{
    Faq{
    id: ID! @id
    question: String!
    answer: String!
    }
  }
`;
