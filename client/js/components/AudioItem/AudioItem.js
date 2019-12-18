import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import {nonExecutableDefinitionMessage} from 'graphql/validation/rules/ExecutableDefinitions';

const AudioItem = ({
  title,
  description,
  playTime,
  allAudio,
  index,
  currentTime,
  isPaused,
  audioPlayer,
  changeAudioStatus,
}) => {
  const timeFormat = time => {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    return `${minutes}:${seconds}`;
  };

  const endTime = () => {
    return allAudio
      .filter((_, endIndex) => endIndex <= index)
      .reduce((acc, cur) => {
        return {start: acc.start + cur.start};
      });
  };

  const playingTime = currentTime.toFixed(1);
  const beginTime = endTime().start - playTime;

  const active = () => {
    return beginTime < playingTime && playingTime < endTime().start;
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.time}>{timeFormat(playTime)}</Text>
        <TouchableHighlight
          style={styles.wrapperIcPlay}
          underlayColor={'rgba(0,0,0,0.04)'}
          onPress={() => {
            active()
              ? changeAudioStatus(true)
              : (audioPlayer.seek(beginTime), changeAudioStatus(false));
          }}>
          <Image
            style={styles.icPlay}
            resizeMode="contain"
            source={
              active()
                ? isPaused
                  ? require('../../assets/images/mediaControllers/icAudioPlaySmallActive.png')
                  : require('../../assets/images/mediaControllers/icAudioPauseSmall.png')
                : require('../../assets/images/mediaControllers/icAudioPlaySmallDefault.png')
            }
          />
        </TouchableHighlight>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default AudioItem;

AudioItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  allAudio: PropTypes.array,
  index: PropTypes.number,
  isPaused: PropTypes.bool,
  audioPlayer: PropTypes.object,
  changeAudioStatus: PropTypes.func,
};
