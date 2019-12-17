import React, {Component} from 'react';
import TabSelfGuidedTour from './TabSelfGuidedTour';

class TabSelfGuidedTourContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Self-guided Tours',

      headerBackground: () => {
        return <StatusBar barStyle="dark-content" />;
      },
    };
  };

  render() {
    return <TabSelfGuidedTour />;
  }
}

export default TabSelfGuidedTourContainer;
