import React, {Component} from 'react';
import Booking from './Booking';

class BookingContainer extends Component {
  render() {
    const {navigation} = this.props;
    return <Booking navigation={navigation} />;
  }
}

export default BookingContainer;
