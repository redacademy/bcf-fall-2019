import React, {Component} from 'react';
import SignIn from './SignIn';
import PropTypes from 'prop-types';

class SignInContainer extends Component {
  static navigationOptions = () => ({headerShown: false});

  render() {
    const {navigation} = this.props;
    return <SignIn navigation={navigation} />;
  }
}

export default SignInContainer;

SignInContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
