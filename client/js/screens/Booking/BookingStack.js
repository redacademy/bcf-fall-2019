import React from 'react';
import {Image, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import {withNavigation} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {withCollapsibleForTab} from 'react-navigation-collapsible';
import PastEvents from './PastEvents';
import Upcoming from './Upcoming';
import styles from './styles';
import {THEME} from '../../config';

const SavedStack = createMaterialTopTabNavigator(
  {
    Upcoming,
    PastEvents,
  },
  {
    initialRouteName: 'Upcoming',
    animationEnabled: true,

    defaultNavigationOptions: {
      tabBarComponent: props => {
        const {
          renderIcon,
          getLabelText,
          onTabPress,
          onTabLongPress,
          getAccessibilityLabel,
          navigation,
        } = props;

        const {routes, index: activeRouteIndex} = navigation.state;

        return (
          <View style={styles.container}>
            {routes.map((route, routeIndex) => {
              const isRouteActive = routeIndex === activeRouteIndex;

              return (
                <TouchableOpacity
                  style={
                    routeIndex === 0
                      ? isRouteActive
                        ? {
                            ...styles.tabWrapper,
                            ...styles.tabLeft,
                            ...styles.tabActive,
                          }
                        : {...styles.tabWrapper, ...styles.tabLeft}
                      : isRouteActive
                      ? {
                          ...styles.tabWrapper,
                          ...styles.tabRight,
                          ...styles.tabActive,
                        }
                      : {...styles.tabWrapper, ...styles.tabRight}
                  }
                  key={routeIndex}
                  onPress={() => {
                    onTabPress({route});
                  }}
                  onLongPress={() => {
                    onTabLongPress({route});
                  }}
                  accessibilityLabel={getAccessibilityLabel({route})}>
                  {renderIcon({route, focused: isRouteActive})}

                  <Text
                    style={
                      isRouteActive
                        ? {...styles.tabLabel, ...styles.labelActive}
                        : {...styles.tabLabel}
                    }>
                    {getLabelText({route})}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        );
      },
    },

    navigationOptions: ({navigation}) => ({
      headerTitleStyle: {color: THEME.colors.astronautBlue},
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
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
    }),
  },
);

export default withNavigation(
  withCollapsibleForTab(SavedStack, {iOSCollapsedColor: 'transparent'}),
);
