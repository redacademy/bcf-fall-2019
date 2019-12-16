import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import styles from './styles';

const SelfGuidedItem = ({selfGuidedItem, navigation}) => (
  <TouchableOpacity
    onPress={() => {
      if (selfGuidedItem) {
        return navigation.push('SingleSelfGuided', {
          itemId: selfGuidedItem.id,
        });
      }
    }}
    style={styles.container}>
    <ImageBackground
      source={{uri: selfGuidedItem.image}}
      style={styles.backgroundImage}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{selfGuidedItem.title}</Text>
        <Text style={styles.location}>{selfGuidedItem.location}</Text>
        <View style={styles.flexRow}>
          <View style={styles.flexRow}>
            <View style={styles.flexColumn}>
              <Text style={styles.subTitles}>Difficulty</Text>
              <Text style={styles.infobox}>{selfGuidedItem.difficulty}</Text>
            </View>
            <View style={styles.flexColumn}>
              <Text style={styles.subTitles}>Distance</Text>
              <Text style={styles.infobox}>{selfGuidedItem.distance}</Text>
            </View>
            <View style={styles.flexColumn}>
              <Text style={styles.subTitles}>Duration</Text>
              <Text style={styles.infobox}>
                {selfGuidedItem.duration} hours
              </Text>
            </View>
          </View>
          <View style={styles.flexRow}>
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
      </View>
    </ImageBackground>
  </TouchableOpacity>
);

export default SelfGuidedItem;
