import React, {Component} from 'react';
import SelfGuideTour from './SelfGuideTour';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Query} from 'react-apollo';
import {QUERY_SELFGUIDED_TOUR} from '../../apollo/queries';
import Loader from '../../components/Loader';

class SelfGuideTourContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needAudio: false,
    };
  }
  static navigationOptions = {
    title: 'SelfGuideTour',
  };
  toggleNeedAudio = () => {
    const audio = this.state.needAudio;
    this.setState({needAudio: !audio});
  };
  render() {
    const {navigation} = this.props;
    return (
      <Query query={QUERY_SELFGUIDED_TOUR}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data)
            return (
              <SelfGuideTour
                needAudio={this.state.needAudio}
                toggleNeedAudio={this.toggleNeedAudio}
                navigation={navigation}
                selfguidetours={data.selfGuidedTours}
              />
            );
        }}
      </Query>
    );
  }
}

export default SelfGuideTourContainer;

SelfGuideTourContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
