import React, {Component} from 'react';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  static navigationOptions = ({navigation, screenProps, navigationOptions}) => {
    console.log(navigation);
    console.log(screenProps);
    console.log(navigationOptions);
    return {title: 'Sign Up'};
  };
  render() {
    return <SignUp />;
  }
}

export default SignUpContainer;
