import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {QUERY_USER} from '../../apollo/queries';
import {compose} from 'recompose';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import Profile from './Profile';
import {getParamFromParent} from '../../lib/paramFromParent';
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
    const {collapsible, navigation, userInfo} = this.props;

    return (
      <Profile
        collapsible={collapsible}
        onSwitchTheme={this.onSwitchTheme}
        headerHeight={this.state.headerHeight}
        navigation={navigation}
        userInfo={userInfo.user}
      />
    );
  }
}

export default compose(
  graphql(QUERY_USER, {
    name: 'userInfo',
    options: ({navigation}) => {
      const userToken = getParamFromParent(navigation, 'userToken');

      return {
        fetchPolicy: 'cache-and-network',
        variables: {
          id: userToken.id,
        },
      };
    },
  }),
)(
  withCollapsible(ProfileContainer, {
    iOSCollapsedColor: 'transparent',
  }),
);
