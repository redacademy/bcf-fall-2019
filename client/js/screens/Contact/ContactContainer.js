import React, {Component} from 'react';
import Contact from './Contact';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_CONTACT} from '../../apollo/queries';
import {Text} from 'react-native';

class ContactContainer extends Component {
  render() {
    return (
      <Query query={QUERY_CONTACT}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) return <About info={data.contact[0]} />;
        }}
      </Query>
    );
  }
}

export default ContactContainer;
