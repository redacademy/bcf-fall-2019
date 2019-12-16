import React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import moment from 'moment';
import RatingScore from '../RatingScore';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import PropTypes from 'prop-types';

const CardEvent = ({data}) => {
  const {
    date,
    startAt,
    endAt,
    title,
    image,
    locationTitle,
    price,
    reviews,
  } = data;

  const hour = 12;

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={{uri: image}} style={styles.bgImg}>
        <View style={styles.bgImgWrapper}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.title}>
            {title}
          </Text>

          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.location}>
            {locationTitle}
          </Text>

          <View style={styles.info}>
            <RatingScore score={calculateRatingScore(reviews)} />

            <View style={styles.details}>
              <View style={styles.detailsWrapper}>
                <View style={styles.detailsInfo}>
                  <Text style={styles.caption}>Date</Text>
                  <Text style={styles.detailContent}>
                    {`${moment(date).format('MMM D, Y')} ${
                      parseInt(startAt) > 12
                        ? parseInt(startAt) - hour
                        : parseInt(startAt)
                    }-${
                      parseInt(endAt) > 12
                        ? parseInt(endAt) - hour + 'PM'
                        : parseInt(endAt) + 'AM'
                    }`}
                  </Text>
                </View>

                <View>
                  <Text style={styles.caption}>Price</Text>
                  <Text style={styles.detailContent}>
                    {price === 0 ? 'Free' : `$${price} per`}
                  </Text>
                </View>
              </View>

              <View style={{...styles.detailsWrapper, ...styles.shareWrapper}}>
                <TouchableOpacity style={{...styles.buttons}}>
                  <Image
                    source={require('../../assets/images/icFaveCircleDefault.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{...styles.buttons, ...styles.icShare}}>
                  <Image
                    source={require('../../assets/images/icFaveShareDefault.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardEvent;

CardEvent.propTypes = {
  data: PropTypes.object,
  navigation: PropTypes.object,
};