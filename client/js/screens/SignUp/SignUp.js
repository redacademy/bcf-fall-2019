import React from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_SIGN_UP} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Text, Image, View} from 'react-native';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import InputDefaultField from '../../components/InputDefaultField';
import styles from './styles';
import {THEME} from '../../config';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

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
        <InputDefaultField
          title="Email *"
          titleStyle="regular"
          autoCapitalize="none"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
