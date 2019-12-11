import React, {Component} from 'react';
import {Platform, UIManager} from 'react-native';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

export default class App extends Component {
  componentDidMount() {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
