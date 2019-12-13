import React from 'react';
import {ScrollView, View, Text, Image, ImageBackground} from 'react-native';
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
        resizeMode="cover"
      />
      <View style={styles.wrapperTrailImage}>
        <ImageBackground
          style={styles.circleTrailImage}
          source={require('../../assets/images/imgBgSelfGuidedTourAudio.png')}>
          <Image
            style={styles.TrailImage}
            resizeMode="cover"
            source={{
              uri:
                'https://bcparksfoundation.ca/site/assets/files/1313/storytrail_header_web_3.1920x0.jpg',
            }}
          />
        </ImageBackground>
      </View>
      <View style={styles.contents}>
        <Text style={styles.title}>Tsútswecw Trail</Text>
        <Text style={styles.location}>Tsútswecw Park</Text>
      </View>
    </ScrollView>
  );
};

export default StoryTrail;
