import React, {Component} from 'react';
import {Platform, UIManager} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
