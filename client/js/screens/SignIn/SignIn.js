import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_LOG_IN} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {
  ScrollView,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Form, FormSpy, Field} from 'react-final-form';
import TitleText from '../../components/TitleText';
import ButtonDefault from '../../components/ButtonDefault';
import InputDefaultField from '../../components/InputDefaultField';
import InputDefaultCheckBox from '../../components/InputDefaultCheckBox';
import {THEME} from '../../config';
import styles from './styles';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

const SignIn = props => {
  const [isErrors, setErrors] = useState(null);
  return (
    <Mutation mutation={MUTATION_LOG_IN} client={client}>
      {(logIn, {loading, error, data}) => {
        return (
          <>
            {console.log(data)}
            <ImageBackground
              style={styles.signInBgImg}
              source={require('../../assets/images/imgSignIn01.jpg')}
            />
            <ScrollView>
              <SafeAreaView style={THEME.padding.accountScreen}>
                <TitleText style={styles.title}>Sign In</TitleText>
                <Form
                  onSubmit={async values => {
                    try {
                      await logIn({variables: values});
                    } catch (error) {
                      console.log(error);
                    }
                  }}>
                  {props => {
                    return (
                      <View>
                        <FormSpy
                          subscription={{values: true}}
                          onChange={({values}) => {
                            setErrors(null);
                            if (!values.email) {
                              setErrors({
                                ...isErrors,
                                email: 'Please enter the email',
                              });
                            }
                            if (!values.password) {
                              setErrors({
                                ...isErrors,
                                password: 'Please enter the password',
                              });
                            }
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

                        <ButtonDefault
                          onPress={props.handleSubmit}
                          buttonStyle={styles.button}
                          isActive={!isErrors ? true : false}
                          title="Sign In"
                        />
                      </View>
                    );
                  }}
                </Form>
                <View>
                  <Text style={styles.text}>or</Text>
                  <Text style={styles.text}>
                    Sign in with your social media account
                  </Text>

                  <View style={{...styles.columnCols2, ...styles.wrapSocial}}>
                    <TouchableOpacity style={styles.socialIcon}>
                      <View
                        style={{...styles.btnSocial, ...styles.btnFacebook}}>
                        <Image
                          resizeMode="cover"
                          source={require('../../assets/images/icFacebook.png')}
                        />
                        <Text
                          style={{
                            ...styles.socialText,
                            ...styles.textFacebook,
                          }}>
                          Facebook
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{...styles.socialIcon, ...styles.secondIcon}}>
                      <View style={{...styles.btnSocial, ...styles.btnGoogle}}>
                        <Image
                          resizeMode="cover"
                          source={require('../../assets/images/icGoogle.png')}
                        />
                        <Text
                          style={{...styles.socialText, ...styles.textGoogle}}>
                          Google
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Text style={{...styles.text, ...styles.lastText}}>
                    New to Discover?
                  </Text>

                  <TouchableOpacity>
                    <Text style={{...styles.text, ...styles.textNewAcc}}>
                      Create An Account
                    </Text>
                  </TouchableOpacity>
                </View>
              </SafeAreaView>
            </ScrollView>
          </>
        );
      }}
    </Mutation>
  );
};

export default SignIn;
