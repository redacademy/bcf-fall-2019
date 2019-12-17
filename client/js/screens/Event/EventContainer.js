import React, {Component} from 'react';
import Event from './Event';

class EventContainer extends Component {
  render() {
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');

    return <Event navigation={navigation} eventInfo={eventInfo} />;
  }
}

export default EventContainer;
