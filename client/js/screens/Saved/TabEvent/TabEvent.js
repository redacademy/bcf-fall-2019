import React from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import ButtonDefault from '../../../components/ButtonDefault';
import CardEvent from '../../../components/CardEvent';
import styles from './styles';
import PropTypes from 'prop-types';

const TabEvent = ({navigation, savedIds, eventInfo}) => {
  return (
    <View style={styles.container}>
      {savedIds.length > 0 ? (
        <FlatList
          data={eventInfo}
          contentContainerStyle={styles.dataWrapper}
          renderItem={({item}) => <CardEvent data={item} />}
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

export default TabEvent;

TabEvent.propTypes = {
  navigation: PropTypes.object,
  savedIds: PropTypes.array,
};
