import React, {useState} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_LOG_IN} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Alert,
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
import {addViewer} from '../../config/models';
import PropTypes from 'prop-types';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

const SignIn = ({navigation}) => {
  const [isErrors, setErrors] = useState(null);

  return (
    <Mutation
      mutation={MUTATION_LOG_IN}
      client={client}
      onCompleted={async ({login}) => {
        const viewer = {id: login.user.id, token: login.token};
        try {
          await addViewer(viewer);
          await navigation.navigate('AuthLoading');
        } catch (error) {
          console.error(error);
        }
      }}>
      {(logIn, {loading, error, data}) => {
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
                  onSubmit={async values => {
                    try {
                      await logIn({variables: values});
                    } catch (error) {
                      let message = error.message.split(': ')[1];
                      Alert.alert(
                        message,
                        '',
                        [
                          {
                            text: 'OK',
                          },
                        ],
                        {cancelable: true},
                      );
                    }
                  }}>
                  {props => {
                    return (
                      <View>
                        <FormSpy
                          subscription={{values: true}}
                          onChange={({values}) => {
                            setErrors(null);
                            if (!values.password) {
                              setErrors('Please enter the password');
                            }
                            if (!values.email) {
                              setErrors('Please enter the email');
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
                          onPress={() => {
                            if (isErrors) {
                              Alert.alert(
                                isErrors,
                                '',
                                [
                                  {
                                    text: 'OK',
                                  },
                                ],
                                {cancelable: true},
                              );
                            } else {
                              props.handleSubmit();
                            }
                          }}
                          buttonStyle={styles.button}
                          isActive={!isErrors}
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

SignIn.propTypes = {
  navigation: PropTypes.object.isRequired,
};
