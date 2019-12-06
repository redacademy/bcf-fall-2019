import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {ScrollView, Button, ImageBackground, View, Text} from 'react-native';
import {Form, FormSpy, Field} from 'react-final-form';
import TitleText from '../../components/TitleText';
import InputDefaultField from '../../components/InputDefaultField';
import InputDefaultCheckBox from '../../components/InputDefaultCheckBox';
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
              console.log('submit: ', values);
            }}>
            {props => {
              console.log(props);
              return (
                <View>
                  <FormSpy
                    subscription={{values: true}}
                    onChange={({values}) => {
                      console.log(values);
                    }}
                  />
                  <Field name="email" placeholder="example@email.com">
                    {({input, meta, placeholder}) => {
                      return (
                        <InputDefaultField
                          {...input}
                          title="Email"
                          autoCapitalize="none"
                          autoCompleteType="email"
                          placeholder={placeholder}
                          textContentType="emailAddress"
                          style={styles.inputEmail}
                        />
                      );
                    }}
                  </Field>
                  <Field name="password" placeholder="Password">
                    {({input, meta, placeholder}) => {
                      return (
                        <InputDefaultField
                          {...input}
                          title="Password"
                          secureTextEntry={true}
                          autoCapitalize="none"
                          autoCompleteType="password"
                          placeholder={placeholder}
                          textContentType="password"
                          style={styles.inputPassword}
                        />
                      );
                    }}
                  </Field>
                  <View style={styles.columnCols2}>
                    <InputDefaultCheckBox
                      type="checkbox"
                      name="rememberMe"
                      rightText="Remeber me"
                    />
                    <Text style={styles.forgot}>Forgot Password?</Text>
                  </View>

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
