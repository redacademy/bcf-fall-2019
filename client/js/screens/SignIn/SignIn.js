import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Text, ImageBackground} from 'react-native';
import {Form} from 'react-final-form';
import TitleText from '../../components/TitleText';
import {THEME} from '../../config';
import styles from './styles';

const SignIn = props => {
  return (
    <>
      <ImageBackground
        style={styles.signInBgImg}
        source={require('../../assets/images/imgSignIn01.jpg')}
      />
      <ScrollView>
        <SafeAreaView style={THEME.padding.accountScreen}>
          <TitleText style={styles.title}>Sign In</TitleText>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default SignIn;
