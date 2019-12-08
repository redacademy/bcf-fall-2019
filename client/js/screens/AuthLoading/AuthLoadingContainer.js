import React, {Component} from 'react';
import {getViewer} from '../../config/models';
import AuthLoading from './AuthLoading';

class AuthLoadingContainer extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await getViewer();
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return <AuthLoading />;
  }
}

export default AuthLoadingContainer;
