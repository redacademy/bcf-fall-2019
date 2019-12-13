import React from 'react';
import {ScrollView, Text, Image} from 'react-native';
import styles from './styles';

const StoryTrail = () => {
  return (
    <ScrollView>
      <Image
        style={styles.imageMainBackground}
        source={{
          uri:
            'https://bcparksfoundation.ca/site/assets/files/1313/storytrail_header_web_3.1920x0.jpg',
        }}
      />
      <Text>abc</Text>
    </ScrollView>
  );
};

export default StoryTrail;
