import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './styles';

const SelfGuidedItem = ({selfGuidedItem}) => (
  <TouchableOpacity
    onPress={() => {
      if (selfGuidedItem) {
        return navigation.push('SingleSelfGuided', {
          itemId: selfGuidedItem.id,
        });
      }
    }}>
    <ImageBackground
      source={{uri: selfGuidedItem.image}}
      style={{width: '100%', height: '100%'}}>
      <Text style={styles.title}>{selfGuidedItem.title}</Text>
      <Text style={styles.location}>{selfGuidedItem.location}</Text>
      <View>
        <View>
          <Text style={styles.subTitles}>Difficulty</Text>
          <Text style={styles.infobox}>{selfGuidedItem.difficulty}</Text>
          <Text style={styles.subTitles}>Distance</Text>
          <Text style={styles.infobox}>{selfGuidedItem.distance}</Text>
          <Text style={styles.subTitles}>Duration</Text>
          <Text style={styles.infobox}>{selfGuidedItem.duration}</Text>
        </View>
        <View>
          <Image
            style={styles.contactSocialMediaIcon}
            source={require('../../assets/images/icFaveShareDefault.png')}
          />
          <Image
            style={styles.contactSocialMediaIcon}
            source={require('../../assets/images/icFaveCircleDefault.png')}
          />
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default SelfGuidedItem;
