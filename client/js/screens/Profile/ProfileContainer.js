import React, {Component} from 'react';
import Profile from './Profile';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import {withCollapsible} from 'react-navigation-collapsible';
import {THEME} from '../../config';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 88,
    };
  }

  static navigationOptions = ({navigation}) => {
    const themeColor = navigation.getParam('themeColor') || 'light';

    return {
      headerBackTitle: true,
      headerTitleStyle: {
        color:
          themeColor === 'light'
            ? THEME.colors.astronautBlue
            : THEME.colors.white,
      },
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },

      headerBackground: () => {
        return (
          <StatusBar
            barStyle={themeColor === 'light' ? 'dark-content' : 'light-content'}
          />
        );
      },

      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 12}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={
              themeColor === 'light'
                ? require('../../assets/images/icMenuDefault.png')
                : require('../../assets/images/icMenuWhite.png')
            }
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
  };

  onSwitchTheme = (Bool = true) => {
    setTimeout(() => {
      this.props.navigation.setParams({
        themeColor: Bool ? 'light' : 'dark',
      });
    }, 250);
  };

  render() {
    const {collapsible} = this.props;

    return (
      <Profile
        collapsible={collapsible}
        onSwitchTheme={this.onSwitchTheme}
        headerHeight={this.state.headerHeight}
      />
    );
  }
}

export default withCollapsible(ProfileContainer, {
  iOSCollapsedColor: 'transparent',
});
