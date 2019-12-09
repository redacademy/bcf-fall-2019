import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import SignUp from './SignUp';

class SignUpContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../assets/images/icArrLeftDefault.png')} />
        </TouchableOpacity>
      ),
      title: 'Sign Up',
    };
  };
  render() {
    return <SignUp />;
  }
}

export default SignUpContainer;
