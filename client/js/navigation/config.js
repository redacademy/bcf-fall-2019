import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {white} = Colors;

const Hamburger = ({navigation}) => (
  <Image
    name="md-menu"
    size={24}
    onPress={navigation.openDrawer}
    style={{marginLeft: 8}}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: white,
  },
  headerTintColor: white,
});
