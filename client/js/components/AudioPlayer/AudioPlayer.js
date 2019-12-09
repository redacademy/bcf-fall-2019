import React, {Component} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import Player from 'react-native-streaming-audio-player';
import SoundPlayer from 'react-native-sound-player';
import {NativeModules, NativeEventEmitter, Platform} from 'react-native';
const {RNSoundPlayer} = NativeModules;

export default class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {currentTime: 0};
    _onFinishedPlayingSubscription = null;
    _onFinishedLoadingSubscription = null;
    _onFinishedLoadingFileSubscription = null;
    _onFinishedLoadingURLSubscription = null;
    this.url =
      'https://frafca.van.cp.academy.red/wp-content/uploads/tsutswecw-park.mp3';
    this.title = 'Point A';
  }
  componentDidMount() {
    _onFinishedLoadingSubscription = SoundPlayer.addEventListener(
      'FinishedLoading',
      ({success}) => {
        console.log('finished loading', success);
      },
    );
    _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener(
      'FinishedLoadingURL',
      ({success, url}) => {
        console.log('finished loading url', success, url);
      },
    );
  }

  async onPlay() {
    try {
      RNSoundPlayer.playUrl(this.url);
    } catch (e) {
      console.log(`cannot play this file`, e);
    }
  }

  onPause() {
    RNSoundPlayer.pause();
  }

  loadingUrl() {
    RNSoundPlayer.loadUrl(url);
  }

  componentWillUnmount() {
    _onFinishedLoadingSubscription.remove();
    _onFinishedLoadingURLSubscription.remove();
  }

  play() {
    // play and resume has the exact same implementation natively
    RNSoundPlayer.resume();
  }

  pause() {
    RNSoundPlayer.pause();
  }

  resume() {
    RNSoundPlayer.resume();
  }

  stop() {
    RNSoundPlayer.stop();
  }

  seek(seconds) {
    RNSoundPlayer.seek(seconds);
  }

  setVolume(volume) {
    RNSoundPlayer.setVolume(volume);
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
