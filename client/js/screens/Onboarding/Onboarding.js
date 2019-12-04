import React from 'react';
import {ImageBackground} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingSwiper = () => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#000',
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding01.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          title: ``,
          subtitle: '',
        },
        {
          backgroundColor: '#000',
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding02.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          title: ``,
          subtitle: '',
        },
        {
          backgroundColor: '#000',
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding03.jpg')}
              style={{width: '100%', height: '100%'}}
            />
          ),
          title: ``,
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingSwiper;
