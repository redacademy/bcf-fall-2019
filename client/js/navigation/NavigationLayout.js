import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import BookingScreen from '../screens/Booking';
import SavedScreen from '../screens/Saved';
import ProfileScreen from '../screens/Profile';

import About from '../screens/About';
import Contact from '../screens/Contact';
import Faq from '../screens/Faq';

import {Image} from 'react-native';

import {sharedNavigationOptions} from './config';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const {black, mediumGrey, white} = Colors;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: About,
    Contact: Contact,
    Faq: Faq,
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
    Search: SearchScreen,
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
    Booking: BookingScreen,
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
    Saved: SavedScreen,
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
    Profile: ProfileScreen,
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
