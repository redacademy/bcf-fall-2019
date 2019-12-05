import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {Text, ImageBackground} from 'react-native';
import {Form} from 'react-final-form';
import styles from './styles';

const SignIn = () => {
  return (
    <>
      <ImageBackground
        style={styles.signInBgImg}
        source={require('../../assets/images/imgSignIn01.jpg')}
      />
      <SafeAreaView>
        <Text>hello Signin</Text>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
