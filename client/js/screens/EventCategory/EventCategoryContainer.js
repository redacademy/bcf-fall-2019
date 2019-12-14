import React, {Component} from 'react';
import EventCategory from './EventCategory';

class EventCategoryContainer extends Component {
  static navigationOptions = ({navigation}) => {
    console.log(navigation);
    const title = navigation.getParam('title');
    return {
      title: `${title} Events`,
    };
  };
  render() {
    return <EventCategory />;
  }
}

export default EventCategoryContainer;
