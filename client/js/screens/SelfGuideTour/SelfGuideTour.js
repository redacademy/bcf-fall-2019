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
  console.log(selfguidetours);
  return (
    <ScrollView>
      <View>
        <Button
          onPress={() => {
            '';
          }}
          title="Sort"
        />
        <Button
          onPress={() => {
            '';
          }}
          title="Audio"
        />
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
