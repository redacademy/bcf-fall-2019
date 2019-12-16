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
    console.log('passed', navigation);

    return (
      <Query
        query={QUERY_GET_EVENT}
        variables={{id: 'ck41l56r4hezf0b0901k87c1f'}}>
        {({loading, error, data}) => {
          if (loading) {
            return <Loader />;
          }

          if (error) {
            return <Text>{error.message}</Text>;
          }

          if (data) {
            return <Event navigation={navigation} eventInfo={data.event} />;
          }
        }}
      </Query>
    );
  }
}

export default EventContainer;
