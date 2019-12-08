import React, {Component} from 'react';
import {getViewer} from '../../config/models';
import AuthLoading from './AuthLoading';

class AuthLoadingContainer extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await getViewer();

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;
