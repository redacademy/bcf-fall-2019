import React, {Component} from 'react';
import Home from './Home';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  render() {
    const {navigation} = this.props;
    return <Home navigation={navigation} />;
  }
}

export default HomeContainer;
HomeContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
