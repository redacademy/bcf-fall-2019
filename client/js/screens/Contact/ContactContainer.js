import React, {Component} from 'react';
import Contact from './Contact';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_CONTACTUSES} from '../../apollo/queries';

class ContactContainer extends Component {
  render() {
    return (
      <Query query={QUERY_CONTACTUSES}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <Contact />;
          }
        }}
      </Query>
    );
  }
}

export default ContactContainer;
