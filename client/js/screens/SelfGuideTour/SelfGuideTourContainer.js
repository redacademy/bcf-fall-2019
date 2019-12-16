import React, {Component} from 'react';
import SelfGuideTour from './SelfGuideTour';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';
import {Query} from 'react-apollo';
import {QUERY_SELFGUIDED_TOUR} from '../../apollo/queries';
import {QUERY_USER} from '../../apollo/queries';
import Loader from '../../components/Loader';
import {getViewer} from '../../config/models';

class SelfGuideTourContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      audio: false,
      // values for sortType are easy, difficult, short or long
      sortType: null,
      near: false,
      reviews: false,
      petFriendly: false,
      sortDisplayOn: false,
      viewerLocation: null,
    };
  }
  static navigationOptions = {
    title: 'SelfGuideTour',
  };

  componentDidMount = () => {
    this.getUser();
  };

  resetValues = () => {
    this.setState({
      sortType: null,
      near: false,
      reviews: false,
      petFriendly: false,
    });
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

  getUser = async () => {
    const user = JSON.parse(await getViewer());
    this.setState({user});
  };

  sortTours = (tours, sortType) => {
    if (sortType === 'short') {
      return tours.sort((a, b) => a.duration > b.duration);
    } else if (sortType === 'long') {
      return tours.sort((a, b) => a.duration < b.duration);
    } else if (sortType === 'easy') {
      let temp = tours.filter(each => each.difficulty === 'EASY');
      tours.map(each => each.difficulty === 'MODERATE' && temp.push(each));
      tours.map(each => each.difficulty === 'DIFFICULT' && temp.push(each));
      return temp;
    } else if (sortType === 'difficult') {
      let temp = tours.filter(each => each.difficulty === 'DIFFICULT');
      tours.map(each => each.difficulty === 'MODERATE' && temp.push(each));
      tours.map(each => each.difficulty === 'EASY' && temp.push(each));
      return temp;
    } else {
      return tours;
    }
  };

  filterTours = (tours, location) => {
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

    if (this.state.near && filteredTours.length < 1) {
      filteredTours = tours.filter(tour => tour.location === location);
    } else if (this.state.near) {
      filteredTours = filteredTours.filter(tour => tour.location === location);
    }

    if (
      this.state.petFriendly ||
      this.state.audio ||
      this.state.reviews ||
      this.state.near
    ) {
      filteredTours = filteredTours;
    } else {
      filteredTours = tours;
    }

    return filteredTours;
  };

  render() {
    const {navigation} = this.props;
    return (
      this.state.user && (
        <Query query={QUERY_USER} variables={{id: this.state.user.id}}>
          {({loading, error, data}) => {
            if (loading) return <Loader />;
            if (error) return <Text>{error.message}</Text>;
            if (data) {
              const userLocation = data.user.location;
              return (
                <Query query={QUERY_SELFGUIDED_TOUR}>
                  {({loading, error, data}) => {
                    if (loading) return <Loader />;
                    if (error) return <Text>{error.message}</Text>;
                    if (data) {
                      const tours = this.sortTours(
                        this.filterTours(data.selfGuidedTours, userLocation),
                        this.state.sortType,
                      );

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
          }}
        </Query>
      )
    );
  }
}

export default SelfGuideTourContainer;

SelfGuideTourContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
