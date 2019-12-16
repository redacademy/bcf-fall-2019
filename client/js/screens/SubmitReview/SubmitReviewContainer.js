import React, {Component} from 'react';
import SubmitReview from './SubmitReview';
import {ADD_REVIEW_MUTATION} from '../../apollo/queries';
import {Query} from 'react-apollo';

class SubmitReviewContainer extends Component {
  render() {
    return (
      <Query query={ADD_REVIEW_MUTATION}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) return <SubmitReview />;
        }}
      </Query>
    );
  }
}

export default SubmitReviewContainer;
