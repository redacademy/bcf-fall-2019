import {createDrawerNavigator} from 'react-navigation-drawer';
import NavigationLayout from './NavigationLayout';
import DrawerScreen from './DrawerScreen';

export default createDrawerNavigator(
  {
    Home: NavigationLayout,
  },
  {
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerPosition: 'right',
  },
);
