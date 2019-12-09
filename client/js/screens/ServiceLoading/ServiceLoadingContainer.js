import React, {Component} from 'react';
import {getOnboarding} from '../../config/models';
import ServiceLoading from './ServiceLoading';

class ServiceLoadingContainer extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const isOnboarding = JSON.parse(await getOnboarding());
    this.props.navigation.navigate(isOnboarding ? 'SignIn' : 'Onboarding');
  };
  render() {
    return <ServiceLoading />;
  }
}

export default ServiceLoadingContainer;
