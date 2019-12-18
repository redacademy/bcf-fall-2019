import React from 'react';
import {Image, View} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const RatingScore = ({score}) => {
  const filledStar = require('../../assets/images/icRatingStarFilled.png');
  const outlinedStar = require('../../assets/images/icRatingStarOutline.png');

  const stars = [];
  for (let i = 0; i < score; i++) {
    stars.push(<Image key={`filledStar${i}`} source={filledStar} />);
  }
  for (let i = 0; i < 5 - score; i++) {
    stars.push(<Image key={`outlinedStar${i}`} source={outlinedStar} />);
  }

  return <View style={styles.wrapper}>{stars}</View>;
};

RatingScore.propTypes = {
  score: PropTypes.number,
};

export default RatingScore;
