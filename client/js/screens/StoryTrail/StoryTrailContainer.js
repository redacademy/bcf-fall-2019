import React, {Component} from 'react';
import {TouchableOpacity, Image, View, StatusBar} from 'react-native';
import StoryTrail from './StoryTrail';
import {THEME} from '../../config';
class StoryTrailContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Self-guided Tour',
      headerBackTitle: true,
      headerTitleStyle: {color: THEME.colors.astronautBlue},
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerBackground: () => {
        return (
          <View>
            <StatusBar barStyle="dark-content" />
          </View>
        );
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 12}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/images/icArrLeftDefault.png')}
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 12}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={require('../../assets/images/icMenuDefault.png')}
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return <StoryTrail />;
  }
}

export default StoryTrailContainer;
