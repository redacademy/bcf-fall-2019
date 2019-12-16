import React, {Component} from 'react';
import {Button} from 'react-native';

class SelfGuidedTourContainer extends Component {
  render() {
    return (
      <Button
        onPress={() => {
          this.props.navigation.navigate('StoryTrail');
        }}
        title="Audio Trails"
      />
    );
  }
}

export default SelfGuidedTourContainer;
