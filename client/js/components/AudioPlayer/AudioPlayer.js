import React, {Component} from 'react';
import Player from 'react-native-streaming-audio-player';

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: 0};
    this.onUpdatePosition = this.onUpdatePosition.bind(this);
    this.source = {
      url:
        'https://frafca.van.cp.academy.red/wp-content/uploads/tsutswecw-park.mp3',
      title: 'Point A',
    };
  }

  onPlay() {
    Player.play(source.url, {
      title: source.title,
    });
  }

  onPause() {
    Player.pause();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Button title="Play" onPress={() => this.onPlay()} color="red" />
          <Button title="Pause" onPress={() => this.onPause()} color="red" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
  },
});
