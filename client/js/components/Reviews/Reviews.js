import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import RatingScore from '../RatingScore';
import moment from 'moment';
import styles from './styles';

const Reviews = ({data}) => {
  const {user, date, score, comment} = data;
  const {image, firstName, lastName} = user;

  return (
    <View style={styles.container}>
      <View style={styles.flexRow}>
        {image ? (
          <Image source={{uri: image}} style={styles.image} />
        ) : (
          <View style={{...styles.image, ...styles.noImage}}>
            <Text style={styles.noImageText}>
              {firstName.slice(0, 1).toUpperCase()}
              {lastName.slice(0, 1).toUpperCase()}
            </Text>
          </View>
        )}

        <View>
          <Text style={{...styles.text, ...styles.name}}>
            {firstName} {lastName}
          </Text>
          <Text style={{...styles.text, ...styles.date}}>
            {moment(date).format('YYYY.MM.DD HH:MM')}
          </Text>
          <RatingScore score={score} />
        </View>
      </View>

      <Text style={styles.comment}>{comment}</Text>
      <View style={styles.separator} />
    </View>
  );
};
export default Reviews;
