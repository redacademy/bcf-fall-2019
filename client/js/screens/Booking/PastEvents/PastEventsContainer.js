import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import PastEvents from './PastEvents';

class PastEventsContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Past events',

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },
    };
  };

  render() {
    return <PastEvents />;
  }
}

export default PastEventsContainer;
