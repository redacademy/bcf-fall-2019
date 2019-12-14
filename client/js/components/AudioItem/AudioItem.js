import React from 'react';
import {Text, View, Image, TouchableHighlight} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const AudioItem = ({active}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftColumn}>
        <Text style={styles.time}>1:40</Text>
        <TouchableHighlight
          style={styles.wrapperIcPlay}
          underlayColor={'rgba(0,0,0,0.04)'}
          onPress={() => {
            console.log('Pressed');
          }}>
          <Image
            style={styles.icPlay}
            resizeMode="contain"
            source={
              active
                ? require('../../assets/images/mediaControllers/icAudioPlaySmallActive.png')
                : require('../../assets/images/mediaControllers/icAudioPlaySmallDefault.png')
            }
          />
        </TouchableHighlight>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.title}>A point</Text>
        <Text style={styles.description}>
          This is the first Story Trail in British Columbia, built on the
          traditional territory of the Secwépemc people…
        </Text>
      </View>
    </View>
  );
};

export default AudioItem;

AudioItem.propTypes = {
  active: PropTypes.bool,
};
