import React, {Component} from 'react';
import SubmitReview from './SubmitReview';

class SubmitReviewContainer extends Component {
  render() {
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');
    return <SubmitReview navigation={navigation} eventInfo={eventInfo} />;
  }
}

export default SubmitReviewContainer;
