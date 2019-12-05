import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Button, ImageBackground, View} from 'react-native';
import {Form, Field} from 'react-final-form';
import TitleText from '../../components/TitleText';
import InputDefaultField from '../../components/InputDefaultField';
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
          <Form
            onSubmit={values => {
              console.log('submit: ', 1);
            }}
            validate={values => {
              console.log('validate: ', values);
            }}>
            {props => {
              console.log(props);
              return (
                <View>
                  <Field name="email" placeholder="example@email.com">
                    {({input, meta, placeholder}) => {
                      return (
                        <InputDefaultField
                          {...input}
                          title="Email"
                          autoCapitalize="none"
                          autoCompleteType="email"
                          placeholder={placeholder}
                        />
                      );
                    }}
                  </Field>
                  <Button title="Sign In" onPress={props.handleSubmit} />
                </View>
              );
            }}
          </Form>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default SignIn;
