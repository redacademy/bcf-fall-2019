import gql from 'graphql-tag';

export const QUERY_INFO = gql`
  {
    infoes {
      about
    }
  }
`;

export const QUERY_CONTACT = gql`
  {
    contactUses {
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
    faqs {
      id
      question
      answer
    }
  }
`;
