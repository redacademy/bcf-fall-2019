import React from 'react';
import {
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import RatingScore from '../RatingScore';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import PropTypes from 'prop-types';

const CardEvent = ({data}) => {
  const {date, title, image, locationTitle, price, reviews} = data;

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
                  <Text style={styles.detailContent}>{date}</Text>
                </View>

                <View>
                  <Text style={styles.caption}>Price</Text>
                  <Text style={styles.detailContent}>{`$${price} per`}</Text>
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
};
