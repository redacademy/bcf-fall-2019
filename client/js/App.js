import React, {Component} from 'react';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

import SignUp from './screens/SignUp';

export default class App extends Component {
  render() {
    return <SignUp />;
    // return <RootStackNavigator />;
  }
}
