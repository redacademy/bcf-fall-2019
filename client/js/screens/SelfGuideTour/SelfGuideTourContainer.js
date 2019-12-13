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
      // values for sortType are easy, difficult, short or long
      sortType: null,
      near: false,
      reviews: false,
      pet: false,
      sortDisplayOn: false,
    };
  }
  static navigationOptions = {
    title: 'SelfGuideTour',
  };
  resetValues = () => {
    this.setState({sortType: null, near: false, reviews: false, pet: false});
  };
  toggleSortDisplay = () => {
    const item = this.state.sortDisplayOn;
    this.setState({sortDisplayOn: !item});
  };
  toggleNeedAudio = () => {
    const item = this.state.needAudio;
    this.setState({needAudio: !item});
  };
  toggleNear = () => {
    const item = this.state.near;
    this.setState({near: !item});
  };
  toggleReviews = () => {
    const item = this.state.reviews;
    this.setState({reviews: !item});
  };
  togglePet = () => {
    const item = this.state.pet;
    this.setState({pet: !item});
  };
  setSortType = value => {
    this.setState({sortType: value});
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
                sortDisplayOn={this.state.sortDisplayOn}
                sortType={this.state.sortType}
                near={this.state.near}
                reviews={this.state.reviews}
                pet={this.state.pet}
                toggleSortDisplay={this.toggleSortDisplay}
                toggleNeedAudio={this.toggleNeedAudio}
                toggleNear={this.toggleNear}
                togglePet={this.togglePet}
                toggleReviews={this.toggleReviews}
                setSortType={this.setSortType}
                navigation={navigation}
                selfguidetours={data.selfGuidedTours}
                resetValues={this.resetValues}
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
