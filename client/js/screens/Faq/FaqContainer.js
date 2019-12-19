import React, {Component} from 'react';
import Faq from './Faq';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_FAQ} from '../../apollo/queries';
import {Text} from 'react-native';

class FaqContainer extends Component {
  render() {
    return (
      <Query query={QUERY_FAQ}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) return <Faq faqs={data.faqs} />;
        }}
      </Query>
    );
  }
}

export default FaqContainer;
