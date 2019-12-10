import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import SignUp from './SignUp';
import {THEME} from '../../config';
import {VibrancyView} from '@react-native-community/blur';
class SignUpContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Sign Up',
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 12}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={require('../../assets/images/icArrLeftDefault.png')} />
        </TouchableOpacity>
      ),
      headerTitleStyle: {color: THEME.colors.astronautBlue},
      headerTransparent: true,
      headerBackground: () => (
        <VibrancyView
          blurType="light"
          blurAmount={2}
          style={{width: '100%', height: '100%'}}></VibrancyView>
      ),
    };
  };
  render() {
    return <SignUp navigation={this.props.navigation} />;
  }
}

export default SignUpContainer;
