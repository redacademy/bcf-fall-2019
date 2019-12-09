import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Text, Image, View} from 'react-native';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import styles from './styles';
import {THEME} from '../../config';

const SignUp = props => {
  return (
    <ScrollView>
      <SafeAreaView style={THEME.padding.accountScreen}>
        <View style={styles.profileWrap}>
          <Image
            source={require('../../assets/images/imgProfileDefault.png')}
            style={styles.profileImg}
            resizeMode="contain"
          />
        </View>
        <TitleText style={styles.title}>Create an Account</TitleText>
        <Text style={styles.text}>
          Sign up to see what is happening near you
        </Text>
        <TitleForm>Profile</TitleForm>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
