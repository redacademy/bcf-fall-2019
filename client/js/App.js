import React, {Component} from 'react';
import {ApolloProvider} from 'react-apollo';
import client from './config/api';

import RootStackNavigator from '../js/navigation/RootStackNavigator';
import SubmitReview from './screens/SubmitReview/SubmitReview';

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
