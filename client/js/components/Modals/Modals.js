import React from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';

const ModalsDrawer = props => {
  const translateX = props.drawerOpenProgress.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });
  return (
    <Animated.View style={{transform: [{translateX}]}}>
      <Text>Hello World</Text>
    </Animated.View>
  );
};

export default Modals;
