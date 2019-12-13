import React, {Component} from 'react';
import StoryTrail from './StoryTrail';

class StoryTrailContainer extends Component {
  static navigationOptions = props => {
    return {
      headerTransparent: true,
    };
  };

  render() {
    return <StoryTrail />;
  }
}

export default StoryTrailContainer;
