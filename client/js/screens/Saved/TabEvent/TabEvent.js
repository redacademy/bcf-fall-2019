import React from 'react';
import {Image, Text, View} from 'react-native';
import ButtonDefault from '../../../components/ButtonDefault';
import styles from './styles';
import PropTypes from 'prop-types';

const TabEvent = ({navigation, savedIds, addSaveId, removeSaveId}) => {
  return (
    <View style={styles.container}>
      {savedIds.length > 0 ? (
        <Text>Event</Text>
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

export default TabEvent;

TabEvent.propTypes = {
  navigation: PropTypes.object,
  savedIds: PropTypes.array,
  addSaveId: PropTypes.func,
  removeSaveId: PropTypes.func,
};
