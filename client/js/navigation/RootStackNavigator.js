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

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    About: AboutModal,
    Contact: ContactModal,
    Faq: FaqModal,
  },

  {
    headerMode: 'none',
    mode: 'modal',
  },
);

const AccountStack = createStackNavigator(
  {
    SignIn,
    SignUp,
  },
  {
    headerMode: 'none',
    initialRouteName: 'SignIn',
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
