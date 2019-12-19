import React, {Component} from 'react';
import Event from './Event';
import global from '../../../global';

class EventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      geoLocation: null,
    };
  }

  async componentDidMount() {
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');

    try {
      await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${eventInfo.address}&key=${global.api.google}`,
        {method: 'GET'},
      )
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            geoLocation: responseJson.results[0],
          });
        });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const {navigation} = this.props;
    const eventInfo = navigation.getParam('eventInfo');

    return (
      <Event
        navigation={navigation}
        eventInfo={eventInfo}
        geoLocation={this.state.geoLocation}
      />
    );
  }
}

export default EventContainer;
