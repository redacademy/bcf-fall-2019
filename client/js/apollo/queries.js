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
      contactInfo {
        id
        address
        email
        phoneNumber
      }
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

export const QUERY_SELFGUIDED_TOUR = gql`
  {
    selfGuidedTours {
      id
      title
      location
      image
      duration
      difficulty
      distance
      petFriendly
      description
      audio {
        id
        url
        markers {
          id
          title
          description
          latitude
          longitude
          start
        }
      }
    }
  }
`;
