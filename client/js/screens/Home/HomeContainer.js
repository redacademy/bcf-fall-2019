import React, {Component} from 'react';
import {compose} from 'recompose';
import {graphql, Query} from 'react-apollo';
import {QUERY_USER, QUERY_EVENT_THIS_WEEK} from '../../apollo/queries';
import {StatusBar, Text, View, LayoutAnimation} from 'react-native';
import {VibrancyView} from '@react-native-community/blur';
import Home from './Home';
import {getParamFromParent} from '../../lib/paramFromParent';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  static navigationOptions = props => {
    return {
      headerTransparent: true,
    };
  };

  render() {
    const {navigation, userInfo, eventThisWeek} = this.props;

    return (
      <Home
        navigation={navigation}
        userInfo={userInfo.user}
        eventInfo={{
          thisWeek: eventThisWeek.events,
        }}
      />
    );
  }
}

export default compose(
  graphql(QUERY_USER, {
    name: 'userInfo',
    options: ({navigation}) => {
      const userToken = getParamFromParent(navigation, 'userToken');

      return {
        fetchPolicy: 'cache-and-network',
        variables: {
          id: userToken.id,
        },
      };
    },
  }),
  graphql(QUERY_EVENT_THIS_WEEK, {
    name: 'eventThisWeek',
    options: props => {
      const date = new Date();
      const dateAfterWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

      return {
        fetchPolicy: 'cache-and-network',
        variables: {
          startFilterDate: date,
          endFilterDate: dateAfterWeek,
        },
        offset: 0,
        limit: 4,
      };
    },
  }),
)(HomeContainer);

HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
