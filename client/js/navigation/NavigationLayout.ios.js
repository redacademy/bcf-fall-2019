import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import Home from '../screens/Home';
import Search from '../screens/Search';
import Booking from '../screens/Booking';
import Saved from '../screens/Saved';
import Profile from '../screens/Profile';

import {Image} from 'react-native';

import {sharedNavigationOptions} from './config';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {black, mediumGrey, white} = Colors;

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Home',
      title: 'Home',
    }),
  },
);

const SearchStack = createStackNavigator(
  {
    Search: Search,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Search',
      title: 'Search',
    }),
  },
);

const BookingStack = createStackNavigator(
  {
    Booking: Booking,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Booking',
      title: 'Booking',
    }),
  },
);

const SavedStack = createStackNavigator(
  {
    Saved: Saved,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Saved',
      title: 'Saved',
    }),
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Profile',
      title: 'Profile',
    }),
  },
);

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Search: SearchStack,
    Booking: BookingStack,
    Saved: SavedStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;

        let Icon = null;

        if (routeName === 'Home') {
          Icon = focused ? (
            <Image source={require('../assets/images/imgNavHomeActive.png')} />
          ) : (
            <Image source={require('../assets/images/imgNavHomeDefault.png')} />
          );
        } else if (routeName === 'Search') {
          Icon = focused ? (
            <Image
              source={require('../assets/images/imgNavSearchActive.png')}
            />
          ) : (
            <Image
              source={require('../assets/images/imgNavSearchDefault.png')}
            />
          );
        } else if (routeName === 'Booking') {
          Icon = focused ? (
            <Image
              source={require('../assets/images/imgNavBookingActive.png')}
            />
          ) : (
            <Image
              source={require('../assets/images/imgNavBookingDefault.png')}
            />
          );
        } else if (routeName === 'Saved') {
          Icon = focused ? (
            <Image source={require('../assets/images/imgNavSavedActive.png')} />
          ) : (
            <Image
              source={require('../assets/images/imgNavSavedDefault.png')}
            />
          );
        } else if (routeName === 'Profile') {
          Icon = focused ? (
            <Image
              source={require('../assets/images/imgNavProfileActive.png')}
            />
          ) : (
            <Image
              source={require('../assets/images/imgNavProfileDefault.png')}
            />
          );
        }
        return Icon;
      },
    }),
    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: white,
      },
    },
  },
);
