import React from 'react';
import {Image, TouchableOpacity, StatusBar} from 'react-native';
import {THEME} from '../config';

export const sharedNavigationOptions = navigation => {
  return {
    headerBackTitle: 'back',
    headerLeft: null,
    visible: true,
    headerStyle: {
      backgroundColor: THEME.colors.astronautBlue,
    },
    headerTitleStyle: {
      color: THEME.colors.white,
    },
    headerTintColor: THEME.colors.white,
    headerBackground: () => {
      return <StatusBar barStyle="light-content" />;
    },
    headerRight: () => (
      <TouchableOpacity
        style={{marginRight: 12}}
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Image
          source={require('../assets/images/icMenuWhite.png')}
          name="burger-menu"
        />
      </TouchableOpacity>
    ),
  };
};
