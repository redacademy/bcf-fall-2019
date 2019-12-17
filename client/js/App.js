import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';
import RootStackNavigator from '../js/navigation/RootStackNavigator';
import {SaveProvider} from './context/SaveContext';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <SaveProvider>
          <RootStackNavigator />
        </SaveProvider>
      </ApolloProvider>
    );
  }
}
