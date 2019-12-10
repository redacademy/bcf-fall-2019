import React from 'react';
import {ScrollView, Text, View} from 'react-native';

const Contact = ({contact}) => {
  return (
    <ScrollView>
      <Text>Contact Us</Text>
      <View>
        <Text>{contact.about}</Text>
      </View>
    </ScrollView>
  );
};

export default Contact;
