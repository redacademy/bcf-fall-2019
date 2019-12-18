import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';

const ReviewScore = ({score}) => {
  const filledStar = require('../../assets/images/icRatingBigStarFilled.png');
  const outlinedStar = require('../../assets/images/icRatingBigStarOutline.png');

  const stars = [];
  for (let i = 0; i < score; i++) {
    stars.push(<Image key={`filledStar${i}`} source={filledStar} />);
  }
  for (let i = 0; i < 5 - score; i++) {
    stars.push(<Image key={`outlinedStar${i}`} source={outlinedStar} />);
  }

  return <View style={styles.wrapper}>{stars}</View>;
};

export default ReviewScore;
