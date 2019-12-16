import React, {Component} from 'react';
import Event from './Event';
import {formatSessionData} from '../../lib/dataFormatHelper';
import {QUERY_GET_EVENT} from '../../apollo/queries';
import Loader from '../../components/Loader';
import {Query} from '@apollo/react-components';
import {Text} from 'react-native';

class EventContainer extends Component {
  render() {
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');

    return <Event navigation={navigation} eventInfo={eventInfo} />;
  }
}

export default EventContainer;
