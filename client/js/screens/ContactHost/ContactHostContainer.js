import React, {Component} from 'react';
import ContactHost from './ContactHost';
import {TouchableOpacity, StatusBar, Image} from 'react-native';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

class ContactHostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

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
    return (
      <ContactHost
        navigation={this.props.navigation}
        host={this.props.navigation.state.params.host}
      />
    );
  }
}
export default ContactHostContainer;

ContactHostContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
