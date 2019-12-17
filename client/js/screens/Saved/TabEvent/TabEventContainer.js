import React, {Component} from 'react';
import TabEvent from './TabEvent';

class TabEventContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Events',
    };
  };

  render() {
    return <TabEvent />;
  }
}

export default TabEventContainer;
