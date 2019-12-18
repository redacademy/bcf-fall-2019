import React, {Component} from 'react';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import ThankYouReview from './ThankYouReview';
import {THEME} from '../../config';
import styles from './styles';

class ThankYouReviewContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Event Booking',
      headerBackTitle: true,
      headerTitleStyle: {
        color: THEME.colors.astronautBlue,
      },
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },
    };
  };

  render() {
    const {navigation} = this.props;
    return <ThankYouReview navigation={navigation} />;
  }
}

export default ThankYouReviewContainer;
