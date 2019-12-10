import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {ServiceLoading, AuthLoading, SignIn, Onboarding} from '../screens';
import NavigationLayout from './NavigationLayout';
import AboutModal from '../screens/About';
import ContactModal from '../screens/Contact';
import FaqModal from '../screens/Faq';
import DrawerNavigation from './DrawerNavigation';

const AppStack = createStackNavigator(
  {
    Layout: DrawerNavigation,
    About: AboutModal,
    Contact: ContactModal,
    Faq: FaqModal,
  },

  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AuthContainer = createAppContainer(
  createSwitchNavigator(
    {
      ServiceLoading,
      Onboarding,
      SignIn,
    },
    {
      headerMode: 'none',
      initialRouteName: 'ServiceLoading',
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
      initialRouteName: 'AuthLoading',
    },
  ),
);
