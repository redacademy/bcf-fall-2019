import React, {useState} from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {
  ScrollView,
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import {THEME} from '../../config';
import styles from './styles';
import PropTypes from 'prop-types';
import SelfGuidedItem from '../../components/SelfGuidedItem';

const SelfGuideTour = ({
  navigation,
  selfguidetours,
  needAudio,
  toggleNeedAudio,
}) => {
  return (
    <ScrollView>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            '';
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Sort</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/images/icChevronDownDefault.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            toggleNeedAudio();
          }}
          style={needAudio ? styles.button : styles.audionButtonOn}>
          <Text style={needAudio ? styles.buttonText : styles.buttonTextON}>
            Audio
          </Text>
          <Image
            style={needAudio ? styles.buttonIcon : styles.buttonIconON}
            source={
              needAudio
                ? require('../../assets/images/icHeadsetDefault.png')
                : require('../../assets/images/icHeadsetActive.png')
            }
          />
        </TouchableOpacity>
      </View>

      {selfguidetours &&
        needAudio &&
        selfguidetours.map(each => {
          return (
            <SelfGuidedItem
              key={each.id}
              selfGuidedItem={each}
              navigation={navigation}
            />
          );
        })}

      {selfguidetours &&
        !needAudio &&
        selfguidetours.map(each => {
          if (each.audio !== null)
            return (
              <SelfGuidedItem
                key={each.id}
                selfGuidedItem={each}
                navigation={navigation}
              />
            );
        })}
    </ScrollView>
  );
};

export default SelfGuideTour;

SelfGuideTour.propTypes = {
  navigation: PropTypes.object.isRequired,
};
