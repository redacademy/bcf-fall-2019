import React, {Component} from 'react';
import TabSelfGuidedTour from './TabSelfGuidedTour';

class TabSelfGuidedTourContainer extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Self-guided Tours',
    };
  };

  render() {
    return <TabSelfGuidedTour />;
  }
}

export default TabSelfGuidedTourContainer;
