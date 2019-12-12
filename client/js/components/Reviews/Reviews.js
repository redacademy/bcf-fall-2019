import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

const Reviews = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push('Reviews', [reviews]);
      }}>
      <View>
        {/* <Text>{reviews.id}</Text> */}
        <Text>{reviews.user}</Text>
        <Text>{reviews.date}</Text>
        <Text>{reviews.score}</Text>
        <Text>{reviews.comment}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Reviews;
