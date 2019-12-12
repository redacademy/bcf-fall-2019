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

const SelfGuideTour = ({navigation, selfguidetours}) => {
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
            '';
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>Audio</Text>
          <Image
            style={styles.buttonIcon}
            source={require('../../assets/images/icHeadsetDefault.png')}
          />
        </TouchableOpacity>
      </View>

      {selfguidetours &&
        selfguidetours.map(each => {
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
