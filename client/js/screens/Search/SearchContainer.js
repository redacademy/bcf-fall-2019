import React, {Component} from 'react';
import Search from './Search';
import {TouchableOpacity, StatusBar, Image} from 'react-native';
import styles from './styles';
import {THEME} from '../../config';

class SearchContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerStyle: {
        backgroundColor: THEME.colors.white,
      },

      headerTitleStyle: {
        color: THEME.colors.astronautBlue,
      },

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },

      headerRight: () => (
        <TouchableOpacity
          style={styles.icMenu}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={require('../../assets/images/icMenuDefault.png')}
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    return <Search />;
  }
}

export default SearchContainer;
