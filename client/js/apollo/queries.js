import gql from 'graphql-tag';

export const QUERY_INFOES = gql`
  {
    Infoes {
      about
    }
  }
`;

export const QUERY_CONTACTUS = gql`
  {
    ContactUses {
      id
      contactInfo
      twitterLink
      instagramLink
      facebookLink
    }
  }
`;

export const QUERY_FAQ = gql`
  {
    Faqs {
      id
      question
      answer
    }
  }
`;
