import React, {Component} from 'react';
import SingleSelfGuided from './SingleSelfGuided';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import {THEME} from '../../config';
import styles from './styles';

class SingleSelfGuidedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'Self-guided Tour',

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
    const data = navigation.getParam('data');

    return <SingleSelfGuided navigation={this.props.navigation} tour={data} />;
  }
}
export default SingleSelfGuidedContainer;

SingleSelfGuidedContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
