import {createAppContainer} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import {createStackNavigator} from 'react-navigation-stack';
// import SearchModal from '../screens/Search';
import AboutModal from '../screens/About';
import ContactModal from '../screens/Contact';
import FaqModal from '../screens/Faq';

export default createAppContainer(
  createStackNavigator(
    {
      Layout: NavigationLayout,
      //   Search: SearchModal,
      About: AboutModal,
      Contact: ContactModal,
      Faq: FaqModal,
    },

    {
      headerMode: 'none',
      mode: 'modal',
    },
  ),
);
