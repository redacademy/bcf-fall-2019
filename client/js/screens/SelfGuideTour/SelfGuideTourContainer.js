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
      audio: false,
      sortType: null,
      near: false,
      reviews: false,
      petFriendly: false,
      sortDisplayOn: false,
      // needAudio: false,
      // values for sortType are easy, difficult, short or long
      // sortType: null,
      // near: false,
      // reviews: false,
      // pet: false,
      // sortDisplayOn: false,
    };
  }
  static navigationOptions = {
    title: 'SelfGuideTour',
  };
  resetValues = () => {
    this.setState({sortType: null, near: false, reviews: false, pet: false});
  };
  toggleSortDisplay = () => {
    this.setState({sortDisplayOn: !this.state.sortDisplayOn});
  };
  toggleNeedAudio = () => {
    this.setState({audio: !this.state.audio});
  };
  toggleNear = () => {
    this.setState({near: !this.state.near});
  };
  toggleReviews = () => {
    this.setState({reviews: !this.state.reviews});
  };
  togglePet = () => {
    this.setState({petFriendly: !this.state.petFriendly});
  };
  setSortType = value => {
    this.setState({sortType: value});
  };

  filterTours = tours => {
    let filteredTours = [];
    if (this.state.petFriendly) {
      filteredTours = tours.filter(tour => tour.petFriendly);
    }
    if (this.state.audio && filteredTours.length < 1) {
      filteredTours = tours.filter(tour => tour.audio);
    } else if (this.state.audio) {
      filteredTours = filteredTours.filter(tour => tour.audio);
    }
    if (this.state.reviews && filteredTours.length < 1) {
      filteredTours = tours.filter(tour => tour.reviews);
    } else if (this.state.reviews) {
      filteredTours = filteredTours.filter(tour => tour.reviews);
    }
    console.log(this.state);
    console.log(filteredTours);
    return filteredTours;
  };

  render() {
    const {navigation} = this.props;
    return (
      <Query query={QUERY_SELFGUIDED_TOUR}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) {
            // console.log('data', data);
            // console.log('filter', this.filterTours(data.selfGuidedTours));
            const tours =
              this.filterTours(data.selfGuidedTours).length > 0
                ? this.filterTours(data.selfGuidedTours)
                : data.selfGuidedTours;
            return (
              <SelfGuideTour
                needAudio={this.state.audio}
                sortDisplayOn={this.state.sortDisplayOn}
                sortType={this.state.sortType}
                near={this.state.near}
                reviews={this.state.reviews}
                pet={this.state.petFriendly}
                toggleSortDisplay={this.toggleSortDisplay}
                toggleNeedAudio={this.toggleNeedAudio}
                toggleNear={this.toggleNear}
                togglePet={this.togglePet}
                toggleReviews={this.toggleReviews}
                setSortType={this.setSortType}
                navigation={navigation}
                selfguidetours={tours}
                resetValues={this.resetValues}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default SelfGuideTourContainer;

SelfGuideTourContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
