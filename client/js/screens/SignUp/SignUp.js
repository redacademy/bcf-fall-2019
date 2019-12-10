import React, {Component, useState} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_SIGN_UP} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {Alert, ScrollView, Text, Image, View} from 'react-native';
import {Form, FormSpy, Field} from 'react-final-form';
import CheckBox from 'react-native-check-box';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import InputDefaultField from '../../components/InputDefaultField';
import CardForm from '../../components/CardForm';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';
import {THEME} from '../../config';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrors: null,
      skipStep: false,
    };
  }

  render() {
    // const [isErrors, setErrors] = useState(null);
    // const [skipStep, setSkipStep] = useState(false);

    return (
      <Mutation mutation={MUTATION_SIGN_UP} client={client}>
        {({logIn}) => {
          return (
            <ScrollView>
              <SafeAreaView
                style={{
                  ...THEME.padding.accountScreen,
                  ...THEME.padding.bottomGap,
                }}>
                <Form
                  onSubmit={values => {
                    console.log('submit');
                  }}>
                  {props => {
                    return (
                      <>
                        <FormSpy
                          subscription={{values: true}}
                          onChange={({values}) => {
                            console.log(values);

                            this.setState({isErrors: null});

                            if (!values.skipStep) {
                              this.setState({isErrors: 'Please check the box'});
                            }
                            if (!values.lastName) {
                              this.setState({
                                isErrors: 'Please enter the last name',
                              });
                            }
                            if (!values.lastName) {
                              this.setState({
                                isErrors: 'Please enter the last name',
                              });
                            }
                            if (!values.firstName) {
                              this.setState({
                                isErrors: 'Please enter the first name',
                              });
                            }
                            if (!values.password) {
                              this.setState({
                                isErrors: 'Please enter the password',
                              });
                            }
                            if (!values.email) {
                              this.setState({
                                isErrors: 'Please enter the email',
                              });
                            }
                          }}
                        />

                        <View style={styles.profileWrap}>
                          <Image
                            source={require('../../assets/images/imgProfileDefault.png')}
                            style={styles.profileImg}
                            resizeMode="contain"
                          />
                        </View>
                        <TitleText style={styles.title}>
                          Create an Account
                        </TitleText>
                        <Text style={styles.text}>
                          Sign up to see what is happening near you
                        </Text>

                        <TitleForm style={styles.formTitle}>Profile</TitleForm>

                        <Field name="email" placeholder="example@email.com">
                          {({input, placeholder}) => {
                            return (
                              <InputDefaultField
                                {...input}
                                title="Email*"
                                titleStyle="regular"
                                autoCapitalize="none"
                                autoCompleteType="email"
                                placeholder={placeholder}
                                textContentType="emailAddress"
                                style={styles.input}
                              />
                            );
                          }}
                        </Field>

                        <Field name="password" placeholder="Password">
                          {({input, placeholder}) => {
                            return (
                              <InputDefaultField
                                {...input}
                                title="Password*"
                                titleStyle="regular"
                                secureTextEntry={true}
                                autoCapitalize="none"
                                autoCompleteType="password"
                                placeholder={placeholder}
                                style={styles.input}
                              />
                            );
                          }}
                        </Field>

                        <Field name="firstName" placeholder="First name">
                          {({input, placeholder}) => {
                            return (
                              <InputDefaultField
                                {...input}
                                title="First name*"
                                titleStyle="regular"
                                autoCompleteType="name"
                                placeholder={placeholder}
                                style={styles.input}
                              />
                            );
                          }}
                        </Field>

                        <Field name="lastName" placeholder="Last name">
                          {({input, placeholder}) => {
                            return (
                              <InputDefaultField
                                {...input}
                                title="Last name*"
                                titleStyle="regular"
                                autoCompleteType="name"
                                placeholder={placeholder}
                                style={styles.input}
                              />
                            );
                          }}
                        </Field>

                        <Field name="location" placeholder="Location">
                          {({input, placeholder}) => {
                            return (
                              <InputDefaultField
                                {...input}
                                title="Location"
                                titleStyle="regular"
                                placeholder={placeholder}
                                style={{...styles.input, ...styles.lastInput}}
                              />
                            );
                          }}
                        </Field>

                        <TitleForm style={styles.billingTitle}>
                          Payment/Billing
                        </TitleForm>

                        <View style={styles.skipView}>
                          <Field
                            name="skipStep"
                            type="chekbox"
                            defaultValue={this.state.skipStep}>
                            {({input}) => {
                              return (
                                <CheckBox
                                  {...input}
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
                                    this.setState({
                                      skipStep: !this.state.skipStep,
                                    });
                                  }}
                                  isChecked={this.state.skipStep}
                                  rightTextStyle={styles.textSkip}
                                  value={input.value}
                                />
                              );
                            }}
                          </Field>
                        </View>

                        <CardForm style={styles.cardFormMargin} />

                        <ButtonDefault
                          isActive={!this.state.isErrors ? true : false}
                          onPress={() => {
                            if (isErrors) {
                              Alert.alert(
                                this.state.isErrors,
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
                          title="Sign In"
                        />
                      </>
                    );
                  }}
                </Form>
              </SafeAreaView>
            </ScrollView>
          );
        }}
      </Mutation>
    );
  }
}

export default SignUp;
