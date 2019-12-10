import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_SIGN_UP} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Text, Image, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import InputDefaultField from '../../components/InputDefaultField';
import CardForm from '../../components/CardForm';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';
import {THEME} from '../../config';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

const SignUp = props => {
  const [skipStep, setSkipStep] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView
        style={{...THEME.padding.accountScreen, ...THEME.padding.bottomGap}}>
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

        <TitleForm style={styles.formTitle}>Profile</TitleForm>
        <InputDefaultField
          title="Email*"
          titleStyle="regular"
          autoCapitalize="none"
          autoCompleteType="email"
          placeholder="Your email"
          textContentType="emailAddress"
          style={styles.input}
        />
        <InputDefaultField
          title="Password*"
          titleStyle="regular"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCompleteType="password"
          placeholder="Password"
          style={styles.input}
        />
        <InputDefaultField
          title="First name*"
          titleStyle="regular"
          autoCompleteType="name"
          placeholder="First name"
          style={styles.input}
        />
        <InputDefaultField
          title="Last name*"
          titleStyle="regular"
          autoCompleteType="name"
          placeholder="Last name"
          style={styles.input}
        />
        <InputDefaultField
          title="Location"
          titleStyle="regular"
          placeholder="Location"
          style={{...styles.input, ...styles.lastInput}}
        />

        <TitleForm style={styles.billingTitle}>Payment/Billing</TitleForm>
        <View style={styles.skipView}>
          <CheckBox
            rightText="Skip this step"
            unCheckedImage={
              <Image
                source={require('../../assets/images/icCheckboxDefault.png')}
              />
            }
            checkedImage={
              <Image
                source={require('../../assets/images/icCheckboxSelected.png')}
              />
            }
            onClick={() => {
              setSkipStep(!skipStep);
            }}
            isChecked={skipStep}
            rightTextStyle={styles.textSkip}
          />
        </View>
        <CardForm style={styles.cardFormMargin} />
        <ButtonDefault
          isActive={false}
          onPress={() => {
            console.log('Pressed');
          }}
          title="Sign In"
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
