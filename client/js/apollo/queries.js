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
    ContactUs {
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
    Faq {
      id
      question
      answer
    }
  }
`;
