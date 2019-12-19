import React, {Component} from 'react';
import SelfGuidedTour from './SelfGuidedTour';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import {withCollapsible} from 'react-navigation-collapsible';
import {getViewer} from '../../config/models';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

class SelfGuidedTourContainer extends Component {
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

      headerHeight: 88,
    };
  }

  static navigationOptions = ({navigation}) => {
    const themeColor = navigation.getParam('themeColor') || 'light';

    return {
      title: 'Self Guided Tour',

      headerTitleStyle: {
        color:
          themeColor === 'light'
            ? THEME.colors.astronautBlue
            : THEME.colors.white,
      },
      headerTransparent: true,
      headerStyle: {
        backgroundColor: 'transparent',
      },

      headerBackground: () => {
        return (
          <StatusBar
            barStyle={themeColor === 'light' ? 'dark-content' : 'light-content'}
          />
        );
      },

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 12}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={
                themeColor === 'light'
                  ? require('../../assets/images/icArrLeftDefault.png')
                  : require('../../assets/images/icArrLeftWhite.png')
              }
            />
          </TouchableOpacity>
        );
      },
      headerRight: () => (
        <TouchableOpacity
          style={{marginRight: 12}}
          onPress={() => {
            navigation.toggleDrawer();
          }}>
          <Image
            source={
              themeColor === 'light'
                ? require('../../assets/images/icMenuDefault.png')
                : require('../../assets/images/icMenuWhite.png')
            }
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
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

  onSwitchTheme = (Bool = true) => {
    setTimeout(() => {
      this.props.navigation.setParams({
        themeColor: Bool ? 'light' : 'dark',
      });
    }, 250);
  };

  render() {
    const {navigation, collapsible} = this.props;

    const {userInfo, selfGuidedToursInfo} = navigation.getParam('data');

    const userLocation = userInfo.location;

    const tours = this.sortTours(
      this.filterTours(selfGuidedToursInfo, userLocation),
      this.state.sortType,
    );

    return (
      <SelfGuidedTour
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
        selfguidedtours={tours}
        resetValues={this.resetValues}
        collapsible={collapsible}
        headerHeight={this.state.headerHeight}
        onSwitchTheme={this.onSwitchTheme}
      />
    );
  }
}

export default withCollapsible(SelfGuidedTourContainer, {
  iOSCollapsedColor: 'transparent',
});

SelfGuidedTourContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
