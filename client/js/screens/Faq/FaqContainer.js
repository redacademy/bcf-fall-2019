import React, {Component} from 'react';
import Faq from './Faq';
import Loader from '../../components/Loader';
import {Query} from 'react-apollo';
import {QUERY_FAQS} from '../../apollo/queries';

class FaqContainer extends Component {
  render() {
    return (
      <Query query={QUERY_FAQS}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <Faq />;
          }
        }}
      </Query>
    );
  }
}

export default FaqContainer;
