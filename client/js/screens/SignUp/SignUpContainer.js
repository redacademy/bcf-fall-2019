import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import SignUp from './SignUp';
import {THEME} from '../../config';
class SignUpContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Sign Up',
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../assets/images/icArrLeftDefault.png')} />
        </TouchableOpacity>
      ),
      headerTitleStyle: {color: THEME.colors.astronautBlue},
    };
  };
  render() {
    return <SignUp />;
  }
}

export default SignUpContainer;
