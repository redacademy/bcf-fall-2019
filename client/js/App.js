import React, {Component} from 'react';
import RootStackNavigator from '../js/navigation/RootStackNavigator';

import SignIn from './screens/SignIn';

export default class App extends Component {
  render() {
    // return <SignIn />;
    return <RootStackNavigator />;
  }
}
