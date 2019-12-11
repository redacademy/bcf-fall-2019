import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_SIGN_UP} from '../../apollo/mutations';
import SafeAreaView from 'react-native-safe-area-view';
import {
  Alert,
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {Form, FormSpy, Field} from 'react-final-form';
import CheckBox from 'react-native-check-box';
import TitleText from '../../components/TitleText';
import TitleForm from '../../components/TitleForm';
import InputDefaultField from '../../components/InputDefaultField';
import CardForm from '../../components/CardForm';
import CityPicker from '../../components/CityPicker';
import ButtonDefault from '../../components/ButtonDefault';
import {addViewer} from '../../config/models';
import styles from './styles';
import {THEME} from '../../config';

const client = new ApolloClient({uri: 'http://157.245.163.7:8000/'});

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isErrors: null,
      skipStep: false,
      showPicker: false,
      citySelected: null,
    };
  }

  selectCity = newCity => {
    this.setState({citySelected: newCity});
  };
  hidePicker = () => {
    this.setState({showPicker: false});
  };

  render() {
    const {navigation} = this.props;
    return (
      <>
        <Mutation
          mutation={MUTATION_SIGN_UP}
          client={client}
          onCompleted={async ({signup}) => {
            const viewer = {id: signup.user.id, token: signup.token};
            try {
              await addViewer(viewer);
              await navigation.navigate('AuthLoading');
            } catch (error) {
              console.error(error);
            }
          }}>
          {signup => {
            return (
              <ScrollView>
                <SafeAreaView
                  style={{
                    ...THEME.padding.accountScreen,
                    ...THEME.padding.bottomGap,
                  }}>
                  <Form
                    onSubmit={async values => {
                      try {
                        await signup({variables: values});
                      } catch (error) {
                        let message = error && error.graphQLErrors[0].message;

                        const errorMessage =
                          'A unique constraint would be violated on User. Details: Field name = email';

                        if (message == errorMessage) {
                          message = 'Email exists already';
                        } else {
                          message = JSON.stringify(message);
                        }

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
                        <>
                          <FormSpy
                            subscription={{values: true}}
                            onChange={({values}) => {
                              this.setState({isErrors: null});

                              if (!values.skipStep) {
                                this.setState({
                                  isErrors: 'Please check the box',
                                });
                              }
                              if (!values.location) {
                                this.setState({
                                  isErrors: 'Please select the location',
                                });
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

                          <TitleForm style={styles.formTitle}>
                            Profile
                          </TitleForm>

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

                          <Field
                            name="location"
                            defaultValue={this.state.citySelected}>
                            {({input}) => {
                              return (
                                <TouchableOpacity
                                  onPress={() => {
                                    this.setState({showPicker: true});
                                  }}>
                                  <Text style={styles.locationTitle}>
                                    Location*
                                  </Text>
                                  <Text
                                    {...input}
                                    style={
                                      !this.state.citySelected
                                        ? {
                                            ...styles.locaitonInput,
                                            ...styles.lastInput,
                                          }
                                        : {
                                            ...styles.locaitonInput,
                                            ...styles.lastInput,
                                            ...styles.locationTextSelected,
                                          }
                                    }>
                                    {!this.state.citySelected
                                      ? 'Select a location'
                                      : this.state.citySelected}
                                  </Text>
                                </TouchableOpacity>
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
                              if (this.state.isErrors) {
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
        {this.state.showPicker && (
          <CityPicker
            hidePicker={this.hidePicker}
            selectCity={this.selectCity}
            citySelected={this.state.citySelected}
          />
        )}
      </>
    );
  }
}

export default SignUp;
