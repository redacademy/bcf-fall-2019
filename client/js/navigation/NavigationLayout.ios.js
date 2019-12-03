import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import BookingScreen from '../screens/Booking';
import FavesScreen from '../screens/Faves';
import ProfileScreen from '../screens/Profile';
import {sharedNavigationOptions} from './config';
import Icon from 'react-native-vector-icons/Ionicons';

const {mediumGrey, black, white} = colors;

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
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

const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      ...sharedNavigationOptions(navigation),
      initialRouteName: 'Faves',
      title: 'Faves',
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
    Faves: FavesStack,
    Profile: ProfileStack,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-calendar';
        } else if (routeName === 'Search') {
          iconName = 'ios-map';
        } else if (routeName === 'Calendar') {
          iconName = 'ios-heart';
        } else if (routeName === 'Faves') {
          iconName = '';
        } else if (routeName === 'Profile') {
          iconName = '';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: black,
      inactiveTintColor: mediumGrey,
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: black,
      },
    },
  },
);
