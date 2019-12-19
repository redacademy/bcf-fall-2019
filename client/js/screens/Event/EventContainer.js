import React, {Component} from 'react';
import {TouchableOpacity, Image, StatusBar} from 'react-native';
import Event from './Event';
import styles from './styles';
import {THEME} from '../../config';
import global from '../../../global';

class EventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      geoLocation: null,
    };
  }

  static navigationOptions = ({navigation}) => {
    const {category} = navigation.getParam('eventInfo');

    return {
      title: `${category} Events`,

      headerStyle: {
        backgroundColor: THEME.colors.white,
      },

      headerTitleStyle: {
        color: THEME.colors.astronautBlue,
      },

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },

      headerLeft: () => {
        return (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../../assets/images/icArrLeftDefault.png')}
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
            source={require('../../assets/images/icMenuDefault.png')}
            name="burger-menu"
          />
        </TouchableOpacity>
      ),
    };
  };

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
