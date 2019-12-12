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

const SelfGuideTour = props => {
  return (
    <ScrollView>
      <View>
        <Button> Sort</Button>
        <Button> Audio</Button>
      </View>

      <SelfGuidedItem />
    </ScrollView>
  );
};

export default SelfGuideTour;

SelfGuideTour.propTypes = {
  navigation: PropTypes.object.isRequired,
};
