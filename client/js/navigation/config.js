import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-navigation-stack';
import LinearGradient from 'react-native-linear-gradient';
import {colors, typography} from '../config/styles';

const {white} = colors;

const GradientHeader = props => (
  <View style={{backgroundColor: white, overflow: 'hidden'}}>
    <LinearGradient
      style={[StyleSheet.absoluteFill, {height: 120, width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const Hamburger = ({navigation}) => (
  <Image
    name="md-menu"
    color={white}
    size={24}
    onPress={navigation.openDrawer}
    style={{marginLeft: 8}}
  />
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTitleStyle: {
    color: white,
    fontFamily: typography.fontMain,
  },
  headerTintColor: white,
});
