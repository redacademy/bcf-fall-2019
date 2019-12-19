import React, {Component} from 'react';
import SubmitReview from './SubmitReview';
import {TouchableOpacity, StatusBar, Image} from 'react-native';
import styles from './styles';
import {THEME} from '../../config';

class SubmitReviewContainer extends Component {
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

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={styles.backButton}
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
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');
    return <SubmitReview navigation={navigation} eventInfo={eventInfo} />;
  }
}

export default SubmitReviewContainer;
