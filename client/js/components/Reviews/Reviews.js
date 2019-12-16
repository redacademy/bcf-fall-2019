import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const Reviews = ({navigation, eventInfo}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Reviews', [reviews]);
      }}>
      {eventInfo && eventInfo.reviews && eventInfo.reviews.length > 0 ? (
        <View>
          {eventInfo.reviews.map(index => {
            return <Event key={reviews.id} index={index} eventInfo={reviews} />;
          })}
        </View>
      ) : (
        <Text> There are no reviews yet</Text>
      )}
    </TouchableOpacity>
  );
};
export default Reviews;
