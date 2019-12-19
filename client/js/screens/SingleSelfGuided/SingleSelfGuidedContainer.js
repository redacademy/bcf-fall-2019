import React, {Component} from 'react';
import SingleSelfGuided from './SingleSelfGuided';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

class SingleSelfGuidedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'SingleSelfGuided',
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
    const {navigation} = this.props;
    const data = navigation.getParam('data');

    return <SingleSelfGuided navigation={this.props.navigation} tour={data} />;
  }
}
export default SingleSelfGuidedContainer;

SingleSelfGuidedContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
