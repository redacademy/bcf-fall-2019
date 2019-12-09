import React, {Component} from 'react';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return <SignUp />;
  }
}

export default SignUpContainer;
