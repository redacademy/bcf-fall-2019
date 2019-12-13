import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
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

        <View style={styles.wrapperController}>
          <View style={styles.wrapperSlider}>
            <Text style={styles.textSlider}>1:40</Text>
            <Text style={styles.textSlider}>12:50</Text>
          </View>
        </View>

        <View style={styles.wrapperControllerIcon}>
          <TouchableHighlight
            activeOpacity={0.4}
            style={styles.hotspotController}
            onPress={() => {
              console.log('backward');
            }}>
            <Image
              resizeMode="cover"
              source={require('../../assets/images/mediaControllers/icAudioBackward.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.4}
            style={{...styles.hotspotController, ...styles.activeController}}
            onPress={() => {
              console.log('play');
            }}>
            <Image
              resizeMode="cover"
              source={require('../../assets/images/mediaControllers/icAudioPlay.png')}
            />
          </TouchableHighlight>

          <TouchableHighlight
            activeOpacity={0.4}
            style={styles.hotspotController}
            onPress={() => {
              console.log('backward');
            }}>
            <Image
              resizeMode="cover"
              source={require('../../assets/images/mediaControllers/icAudioForward.png')}
            />
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

export default StoryTrail;
