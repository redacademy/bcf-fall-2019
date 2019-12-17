import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

import RootStackNavigator from '../js/navigation/RootStackNavigator';
import {SaveEventProvider} from './context/SaveEventContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SaveEventProvider>
          <RootStackNavigator />
        </SaveEventProvider>
      </ApolloProvider>
    );
  }
}
