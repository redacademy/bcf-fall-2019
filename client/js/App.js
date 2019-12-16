import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

import SubmitReview from '../js/screens/SubmitReview';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        {/* <RootStackNavigator /> */}
        <SubmitReview />
      </ApolloProvider>
    );
  }
}
