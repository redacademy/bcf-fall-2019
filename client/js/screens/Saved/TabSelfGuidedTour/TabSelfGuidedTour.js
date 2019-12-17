import React from 'react';
import {Image, Text, View} from 'react-native';
import {FlatList} from 'react-navigation';
import ButtonDefault from '../../../components/ButtonDefault';
import SelfGuidedItem from '../../../components/SelfGuidedItem';
import styles from './styles';
import PropTypes from 'prop-types';

const TabSelfGuidedTour = ({navigation, savedIds, eventInfo}) => {
  return (
    <View style={styles.container}>
      {savedIds.length > 0 ? (
        <FlatList
          data={eventInfo}
          contentContainerStyle={styles.dataWrapper}
          renderItem={({item}) => (
            <SelfGuidedItem navigation={navigation} selfGuidedItem={item} />
          )}
        />
      ) : (
        <View style={styles.noDataWrapper}>
          <Text style={styles.noDataText}>
            Save and share your next events here.
          </Text>
          <Image
            style={styles.noDataImage}
            resizeMode="contain"
            source={require('../../../assets/images/icDiscoverMore.png')}
          />
          <ButtonDefault
            isActive={true}
            onPress={e => {
              navigation.navigate('Home');
            }}
            title="Discover More"
          />
        </View>
      )}
    </View>
  );
};

export default TabSelfGuidedTour;
