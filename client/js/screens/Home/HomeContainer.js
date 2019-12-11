import React, {Component} from 'react';
import Home from './Home';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetTop: 0,
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTransparent: true,
    };
  };

  detectOffsetTop = offsetTop => {
    console.log(offsetTop);
  };

  render() {
    const {navigation} = this.props;
    return (
      <Home navigation={navigation} detectOffsetTop={this.detectOffsetTop} />
    );
  }
}

export default HomeContainer;
HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
