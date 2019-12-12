import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

export const RatingScore00 = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../assets/images/icRatingStarOutline.png')} />
      <Image source={require('../../assets/images/icRatingStarOutline.png')} />
      <Image source={require('../../assets/images/icRatingStarOutline.png')} />
      <Image source={require('../../assets/images/icRatingStarOutline.png')} />
      <Image source={require('../../assets/images/icRatingStarOutline.png')} />
    </View>
  );
};
