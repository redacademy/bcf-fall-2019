import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  ServiceLoading,
  AuthLoading,
  SignIn,
  SignUp,
  Onboarding,
} from '../screens';
import NavigationLayout from './NavigationLayout';
import AboutModal from '../screens/About';
import ContactModal from '../screens/Contact';
import FaqModal from '../screens/Faq';
import SelfGuided from '../screens/';
import DrawerNavigation from './DrawerNavigation';

const AppStack = createStackNavigator(
  {
    Layout: DrawerNavigation,
    About: AboutModal,
    Contact: ContactModal,
    Faq: FaqModal,
  },
  {
    defaultNavigationOptions: () => ({
      headerMode: 'none',
      mode: 'modal',
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
