import React, {Component} from 'react';
import {View, StatusBar, TouchableOpacity, Image} from 'react-native';
import EventCategory from './EventCategory';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

class EventCategoryContainer extends Component {
  static navigationOptions = ({navigation}) => {
    const title = navigation.getParam('title');
    return {
      title: `${title} Events`,
      headerBackTitle: true,
      headerTitleStyle: {color: THEME.colors.astronautBlue},
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },
      headerBackground: () => {
        return (
          <View>
            <StatusBar barStyle="dark-content" />
          </View>
        );
      },
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 12}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/images/icArrLeftDefault.png')}
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
            source={require('../../assets/images/icMenuDefault.png')}
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
  };

  render() {
    const {navigation} = this.props;

    return <EventCategory eventInfo={navigation.getParam('eventInfo')} />;
  }
}

export default EventCategoryContainer;

EventCategoryContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
