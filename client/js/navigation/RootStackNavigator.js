import {createAppContainer} from 'react-navigation';
import DrawerNavigation from './DrawerNavigation';
import {createStackNavigator} from 'react-navigation-stack';
import AboutModal from '../screens/About';
import ContactModal from '../screens/Contact';
import FaqModal from '../screens/Faq';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: DrawerNavigation,
    },
    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
