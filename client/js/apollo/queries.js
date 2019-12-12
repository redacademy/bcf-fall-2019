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

export const QUERY_USER = gql`
  query getUser($id: ID!) {
    user(where: {id: $id}) {
      id
      email
      firstName
      lastName
      location
      image
      date
    }
  }
`;

export const QUERY_EVENT_THIS_WEEK = gql`
  query getAllEvents($startFilterDate: DateTime, $endFilterDate: DateTime) {
    events(
      where: {AND: [{date_gte: $startFilterDate}, {date_lt: $endFilterDate}]}
      orderBy: date_DESC
    ) {
      id
      title
      date
      startAt
      endAt
      category
      price
      locationTitle
      address
      image
      difficulty
      language
      details
      host {
        id
        email
        name
        image
        bio
      }
      reviews {
        id
        user {
          id
          email
          firstName
          lastName
          image
        }
        score
        comment
        date
      }
    }
  }
`;
