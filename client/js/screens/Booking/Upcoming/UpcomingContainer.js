import React, {Component} from 'react';
import {StatusBar} from 'react-native';

import Upcoming from './Upcoming';

class UpcomingContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Upcoming',

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },
    };
  };

  render() {
    return <Upcoming />;
  }
}

export default UpcomingContainer;
