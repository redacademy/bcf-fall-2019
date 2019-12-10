import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from './styles';

const About = ({info}) => {
  return (
    <ScrollView>
      <Text>About Us</Text>
      <View>
        <Text>{info.about}</Text>
      </View>
      <Image source={require('../../assets/images/imgAboutUsLogo.png')} />
    </ScrollView>
  );
};

export default About;
