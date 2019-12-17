import React from 'react';
import {View, Text, Button} from 'react-native';

const Booking = ({navigation}) => {
  return (
    <View>
      <Text>Hello Booking</Text>
      <Button
        onPress={() => {
          navigation.push('EventBooking');
        }}
        title="Book a event"
      />
    </View>
  );
};

export default Booking;
