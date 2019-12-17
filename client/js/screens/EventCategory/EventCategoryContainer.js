import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {withCollapsible} from 'react-navigation-collapsible';
import EventCategory from './EventCategory';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

class EventCategoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerHeight: 88,
    };
  }

  static navigationOptions = ({navigation}) => {
    const title = navigation.getParam('title');
    const themeColor = navigation.getParam('themeColor') || 'light';

    return {
      title: `${title} Events`,
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

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 12}}
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
    const {navigation, collapsible} = this.props;

    return (
      <EventCategory
        eventInfo={navigation.getParam('eventInfo')}
        collapsible={collapsible}
        headerHeight={this.state.headerHeight}
        navigation={navigation}
        onSwitchTheme={this.onSwitchTheme}
      />
    );
  }
}

export default withCollapsible(EventCategoryContainer, {
  iOSCollapsedColor: 'transparent',
});

EventCategoryContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
