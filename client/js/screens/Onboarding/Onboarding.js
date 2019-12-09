import React from 'react';
import {ImageBackground, Text, View, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import styles from './styles';
import {THEME} from '../../config';
import {setOnboarding} from '../../config/models';
import PropTypes from 'prop-types';

const OnboardingSwiper = ({navigation}) => {
  return (
    <Onboarding
      skipToPage={2}
      DoneButtonComponent={props => {
        return (
          <TouchableOpacity
            {...props}
            style={styles.btnDone}
            onPress={async () => {
              try {
                await setOnboarding();
                await navigation.navigate('SignIn');
              } catch (error) {
                console.log(error);
              }
            }}>
            <Text style={styles.btnDoneText}>Done</Text>
          </TouchableOpacity>
        );
      }}
      pages={[
        {
          backgroundColor: THEME.colors.black,
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding01.jpg')}
              style={styles.pageDefault}>
              <View style={styles.contentWrap}>
                <Text style={styles.content}>
                  {`Explore\nFamily-Friendly\nEvents`}
                </Text>
              </View>
            </ImageBackground>
          ),
          title: ``,
          subtitle: '',
        },
        {
          backgroundColor: THEME.colors.black,
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding02.jpg')}
              style={styles.pageDefault}>
              <View style={styles.contentWrap}>
                <Text style={styles.content}>
                  {`Find a trail for\nyou with Audio`}
                </Text>
              </View>
            </ImageBackground>
          ),
          title: ``,
          subtitle: '',
        },
        {
          backgroundColor: THEME.colors.black,
          image: (
            <ImageBackground
              source={require('../../assets/images/imgOnboarding03.jpg')}
              style={styles.pageDefault}>
              <View style={styles.contentWrap}>
                <Text style={styles.content}>
                  {`Support and Enhance BC Parks`}
                </Text>
              </View>
            </ImageBackground>
          ),
          title: ``,
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingSwiper;

OnboardingSwiper.propTypes = {
  navigation: PropTypes.object.isRequired,
};
