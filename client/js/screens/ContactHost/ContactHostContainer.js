import React, {Component} from 'react';
import ContactHost from './ContactHost';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class ContactHostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'ContactHost',
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../../assets/images/icArrLeftWhite.png')} />
          </TouchableOpacity>
        );
      },
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
