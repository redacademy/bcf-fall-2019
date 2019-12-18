import React, {Component} from 'react';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import {withCollapsible} from 'react-navigation-collapsible';
import styles from './styles';
import {THEME} from '../../config';
import EventBooking from './EventBooking';

class EventBookingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 88,
    };
  }

  static navigationOptions = ({navigation}) => {
    const themeColor = navigation.getParam('themeColor') || 'light';

    return {
      title: 'Event Booking',
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

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={styles.headerBackArrow}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={
                themeColor === 'light'
                  ? require('../../assets/images/icArrLeftDefault.png')
                  : require('../../assets/images/icArrLeftWhite.png')
              }
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => (
        <TouchableOpacity
          style={styles.headerMenu}
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
    const {navigation, collapsible} = this.props;

    return (
      <EventBooking
        collapsible={collapsible}
        headerHeight={this.state.headerHeight}
        navigation={navigation}
        onSwitchTheme={this.onSwitchTheme}
        eventInfo={navigation.getParam('eventInfo')}
      />
    );
  }
}

export default withCollapsible(EventBookingContainer, {
  iOSCollapsedColor: 'transparent',
});
