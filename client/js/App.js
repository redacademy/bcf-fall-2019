import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

import Event from './screens/Event';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <RootStackNavigator /> */}
        <Event />
      </ApolloProvider>
    );
  }
}
