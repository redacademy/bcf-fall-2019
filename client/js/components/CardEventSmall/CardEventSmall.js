import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RatingScore from '../RatingScore';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import PropTypes from 'prop-types';

const CardEventSmall = ({eventInfo, index, navigation}) => {
  const {category, title, image, price, reviews} = eventInfo;

  return (
    <TouchableOpacity
      onPress={e => {
        navigation.push('Event', {eventInfo: {...eventInfo}});
      }}
      style={
        index % 2 === 0
          ? {...styles.wrapper, ...styles.leftItem}
          : {...styles.wrapper, ...styles.rightItem}
      }>
      <ImageBackground source={{uri: image}} style={styles.bgImage}>
        <View style={styles.wrapperFave}>
          <TouchableOpacity style={styles.wrapperFaveIcon}>
            <Image
              source={require('../../assets/images/icFaveCircleDefault.png')}
              resizeMode="contain"
              style={styles.icFave}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <Text style={styles.category} ellipsizeMode="tail" numberOfLines={1}>
        {category}
      </Text>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price} ellipsizeMode="tail" numberOfLines={1}>
        {price ? `$${price}` : 'Free'}
      </Text>
      <View style={styles.wrapperRating}>
        <RatingScore score={calculateRatingScore(reviews)} />
        <Text style={styles.ratingText}>({reviews.length})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardEventSmall;

CardEventSmall.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  index: PropTypes.number,
  navigation: PropTypes.object,
};
