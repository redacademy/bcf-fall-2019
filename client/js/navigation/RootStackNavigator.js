import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ServiceLoading,
  AuthLoading,
  SignIn,
  SignUp,
  Onboarding,
} from '../screens';

import DrawerNavigation from './DrawerNavigation';

const AppStack = createStackNavigator(
  {
    Layout: DrawerNavigation,
  },
  {
    mode: 'modal',
    defaultNavigationOptions: () => ({
      header: null,
    }),
  },
);

const AccountStack = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    defaultNavigationOptions: () => ({
      initialRouteName: 'SignIn',
    }),
  },
);

const AuthContainer = createAppContainer(
  createSwitchNavigator(
    {
      ServiceLoading,
      Onboarding,
      Account: AccountStack,
    },
    {
      defaultNavigationOptions: () => ({
        initialRouteName: 'ServiceLoading',
      }),
    },
  ),
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthContainer,
    },
    {
      defaultNavigationOptions: () => ({
        initialRouteName: 'AuthLoading',
      }),
    },
  ),
);
