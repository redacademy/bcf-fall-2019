import React, {Component} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';

import styles from './styles';

const SelfGuidedItem = ({selfGuidedItem}) => (
  <TouchableOpacity>
    <View>
      <Text style={styles.mainTitle}>{selfGuidedItem.title}</Text>
      <Text style={styles.location}>{selfGuidedItem.location}</Text>
      <View>
        <View>
          <Text style={styles.miniTitles}>Difficulty</Text>
          <Text style={styles.infobox}>{selfGuidedItem.difficulty}</Text>
          <Text style={styles.miniTitles}>Distance</Text>
          <Text style={styles.infobox}>{selfGuidedItem.distance}</Text>
          <Text style={styles.miniTitles}>Duration</Text>
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
    </View>
  </TouchableOpacity>
);

export default SelfGuidedItem;
