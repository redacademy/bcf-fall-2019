import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {AuthLoading, SignIn, Onboarding} from '../screens';
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

const AuthStack = createStackNavigator({
  Onboarding,
  SignIn,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
