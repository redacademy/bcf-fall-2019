import React, {Component} from 'react';
import {getOnboarding} from '../../config/models';
import ServiceLoading from './ServiceLoading';

class ServiceLoadingContainer extends Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const isOnboarding = await getOnboarding();
    this.props.navigation.navigate(
      isOnboarding === 'true' ? 'SignIn' : 'Onboarding',
    );
  };
  render() {
    return <ServiceLoading />;
  }
}

export default ServiceLoadingContainer;
