import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import AudioItem from '../../components/AudioItem';

import styles from './styles';
import {THEME} from '../../config/';

class StoryTrail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      audioPlayer: null,
      paused: true,
      currentTime: 0,
      duration: null,
      draggingSlider: false,
      draggingTime: 0,
    };
  }

  getMinutes = time => {
    if (time) {
      let minutes = Math.floor(time / 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      return minutes;
    } else {
      return 0;
    }
  };
  getSeconds = time => {
    if (time) {
      let seconds = Math.round(time % 60);
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return seconds;
    } else {
      return 0;
    }
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.imageMainBackground}
          source={{
            uri:
              'https://bcparksfoundation.ca/site/assets/files/1313/storytrail_header_web_3.1920x0.jpg',
          }}
          resizeMode="cover"
        />
        <View style={styles.wrapperTrailImage}>
          <ImageBackground
            style={styles.circleTrailImage}
            source={require('../../assets/images/imgBgSelfGuidedTourAudio.png')}>
            <Image
              style={styles.TrailImage}
              resizeMode="cover"
              source={{
                uri:
                  'https://bcparksfoundation.ca/site/assets/files/1313/storytrail_header_web_3.1920x0.jpg',
              }}
            />
          </ImageBackground>
        </View>

        <View style={styles.contents}>
          <Text style={styles.title}>Tsútswecw Trail</Text>
          <Text style={styles.location}>Tsútswecw Park</Text>

          <Video
            source={{
              uri:
                'https://frafca.van.cp.academy.red/wp-content/uploads/tsutswecw-park.mp3',
            }}
            ref={ref => {
              this.state.audioPlayer = ref;
            }}
            audioOnly={true}
            disableFocus={true}
            playInBackground={true}
            paused={this.state.paused}
            onLoad={props => {
              props
                ? this.setState({isLoaded: true})
                : this.setState({isLoaded: false});
              this.setState({duration: props.duration});
            }}
            onProgress={({currentTime}) => {
              this.setState({currentTime});
            }}
            onSeek={({seekTime}) => {
              this.setState({currentTime: seekTime});
            }}
            style={styles.backgroundVideo}
          />

          <View style={styles.wrapperController}>
            <View style={styles.wrapperSlider}>
              <Text style={{...styles.textSlider, ...styles.leftText}}>
                {this.state.currentTime === 0 || this.state.draggingTime === 0
                  ? '00:00'
                  : this.state.draggingSlider
                  ? `${this.getMinutes(
                      this.state.draggingTime,
                    )}:${this.getSeconds(this.state.draggingTime)}`
                  : `${this.getMinutes(
                      this.state.currentTime,
                    )}:${this.getSeconds(this.state.currentTime)}`}
              </Text>

              <Slider
                style={styles.slider}
                value={this.state.currentTime}
                minimumValue={0}
                maximumValue={this.state.duration}
                minimumTrackTintColor={THEME.colors.burntSienna}
                maximumTrackTintColor="rgba(0,0,0,0.16)"
                thumbImage={require('../../assets/images/mediaControllers/imgSlider.png')}
                onSlidingStart={() => {
                  this.setState({draggingSlider: true});
                }}
                onValueChange={newTime => {
                  this.setState({draggingSlider: true});
                  this.setState({draggingTime: newTime});
                }}
                onSlidingComplete={newTime => {
                  this.setState({draggingSlider: false});
                  this.setState({currentTime: newTime});
                  this.state.audioPlayer.seek(newTime);
                }}
              />

              <Text style={{...styles.textSlider, ...styles.rightText}}>
                {`${this.getMinutes(this.state.duration)}:${this.getSeconds(
                  this.state.duration,
                )}`}
              </Text>
            </View>
          </View>

          <View style={styles.wrapperControllerIcon}>
            <TouchableHighlight
              style={styles.hotspotController}
              underlayColor={'rgba(0,0,0,0.32)'}
              onPress={() => {
                const currentTime = this.state.currentTime;
                const newTime = currentTime > 10 ? currentTime - 10 : 0;
                this.state.audioPlayer.seek(newTime);
              }}>
              <Image
                resizeMode="cover"
                source={require('../../assets/images/mediaControllers/icAudioBackward.png')}
              />
            </TouchableHighlight>

            <TouchableHighlight
              style={{...styles.hotspotController, ...styles.activeController}}
              underlayColor={'rgba(0,0,0,0.04)'}
              onPress={() => {
                this.setState({paused: !this.state.paused});
              }}>
              <Image
                resizeMode="cover"
                source={
                  this.state.paused
                    ? require('../../assets/images/mediaControllers/icAudioPlay.png')
                    : require('../../assets/images/mediaControllers/icAudioPause.png')
                }
              />
            </TouchableHighlight>

            <TouchableHighlight
              style={styles.hotspotController}
              underlayColor={'rgba(0,0,0,0.32)'}
              onPress={() => {
                const currentTime = this.state.currentTime;
                const durationTime = this.state.duration;
                const newTime =
                  currentTime + 10 > durationTime
                    ? durationTime
                    : currentTime + 10;
                this.state.audioPlayer.seek(newTime);
              }}>
              <Image
                resizeMode="cover"
                source={require('../../assets/images/mediaControllers/icAudioForward.png')}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.wrapperListsOfAudio}>
            <Text style={styles.sectionTitle}>Lists of Audio</Text>
          </View>
          <AudioItem />
        </View>
      </ScrollView>
    );
  }
}

export default StoryTrail;
