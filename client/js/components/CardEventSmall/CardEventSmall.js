import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RatingScore from '../RatingScore';
import SaveContext from '../../context/SaveContext';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import PropTypes from 'prop-types';

const CardEventSmall = ({eventInfo, index}) => {
  const {id, category, title, image, price, reviews} = eventInfo;

  return (
    <SaveContext.Consumer>
      {({savedIds, addSaveId, removeSaveIds}) => (
        <TouchableOpacity
          style={
            index % 2 === 0
              ? {...styles.wrapper, ...styles.leftItem}
              : {...styles.wrapper, ...styles.rightItem}
          }>
          <ImageBackground source={{uri: image}} style={styles.bgImage}>
            <View style={styles.wrapperFave}>
              <TouchableOpacity
                style={styles.wrapperFaveIcon}
                onPress={async e => {
                  try {
                    if (savedIds.some(savedId => savedId === id)) {
                      removeSaveIds(id);
                    } else {
                      addSaveId(id);
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}>
                <Image
                  source={
                    savedIds.some(savedId => savedId === id)
                      ? require('../../assets/images/icFaveCircleActive.png')
                      : require('../../assets/images/icFaveCircleDefault.png')
                  }
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
      )}
    </SaveContext.Consumer>
  );
};

export default CardEventSmall;

CardEventSmall.propTypes = {
  eventInfo: PropTypes.object.isRequired,
  index: PropTypes.number,
};
