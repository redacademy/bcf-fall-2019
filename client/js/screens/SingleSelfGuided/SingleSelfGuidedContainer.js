import React, {Component} from 'react';
import SingleSelfGuided from './SingleSelfGuided';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import {QUERY_SELFGUIDED_TOUR} from '../../apollo/queries';
import Loader from '../../components/Loader';
import {Text, TouchableOpacity, Image} from 'react-native';

class SingleSelfGuidedContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mockId: 'ck435ktpmunrv0b00xbq37xme',
    };
  }

  static navigationOptions = ({navigation}) => {
    return {
      title: 'SingleSelfGuided',
      headerLeft: () => {
        return (
          <TouchableOpacity
            style={{marginLeft: 12}}
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
    console.log(this.props.navigation.state);
    return (
      <Query query={QUERY_SELFGUIDED_TOUR}>
        {({loading, error, data}) => {
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data) {
            const singleTour = data.selfGuidedTours.filter(
              //TODO get the actual data using this.props.navigation.state.params.itemId
              a => a.id === this.props.navigation.state.params.itemId,
            );
            return (
              <SingleSelfGuided
                navigation={this.props.navigation}
                tour={singleTour[0]}
              />
            );
          }
        }}
      </Query>
    );
  }
}
export default SingleSelfGuidedContainer;

SingleSelfGuidedContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
