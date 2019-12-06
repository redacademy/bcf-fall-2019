import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

import RootStackNavigator from '../js/navigation/RootStackNavigator';

import SignIn from './screens/SignIn';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}
