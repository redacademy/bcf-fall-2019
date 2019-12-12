import React, {Component} from 'react';
import SelfGuideTour from './SelfGuideTour';
import PropTypes from 'prop-types';
import {Query} from 'react-apollo';
import {QUERY_SELFGUIDED_TOUR} from '../../apollo/queries';

class SelfGuideTourContainer extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <Query query={QUERY_SELFGUIDED_TOUR}>
        {({loading, error, data}) => {
          console.log(data);
          if (loading) return <Loader />;
          if (error) return <Text>{error.message}</Text>;
          if (data)
            return console.log(data);
            /*<SelfGuideTour navigation={navigation} data={data} />*/
        }}
      </Query>
    );
  }
}

export default SelfGuideTourContainer;

SelfGuideTourContainer.propTypes = {
  navigation: PropTypes.object.isRequired,
};
