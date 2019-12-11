import React from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import ButtonDefault from '../../components/ButtonDefault';

const About = ({info}) => {
  return (
    <ScrollView
      style={styles.aboutPage}
      contentContainerStyle={{justifyContent: 'space-between'}}>
      <Text style={styles.aboutTitle}>About Us</Text>

      <View style={styles.aboutDescription}>
        <Text style={styles.parOne}>
          BC’s world-class parks are not only the backbone of our tourism
          economy, but also serve as a haven for family time, recreation,
          education, inspiration, culture and personal fulfillment. In
          2018/2019, BC’s parks had over 26 million visits – an increase of
          nearly five million over five years.
        </Text>
        <Text style={styles.parTwo}>
          Discover Parks brings together nature, art, technology and culture to
          connect people to nature. Park ambassadors, self guided trails and
          other new activations will help spread the word about stewardship and
          provide engaging experiences for park visitors.
        </Text>
      </View>

      <View style={styles.aboutImage}>
        <Image source={require('../../assets/images/imgAboutUsLogo.png')} />
      </View>

      <View>
        <ButtonDefault title="Donate Today" />
      </View>
    </ScrollView>
  );
};

export default About;
