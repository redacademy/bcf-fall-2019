import React, {Component} from 'react';
import Onboarding from './Onboarding';

class OnboardingContainer extends Component {
  render() {
    const {navigation} = this.props;
    return <Onboarding navigation={navigation} />;
  }
}

export default OnboardingContainer;
