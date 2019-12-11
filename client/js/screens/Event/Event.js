import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import styles from './styles';

const Event = props => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.eventImg}
          source={require('../../assets/images/imgHomeCatFamily.png')}
        />
        <View style={styles.overlay} />
      </View>
    </SafeAreaView>
  );
};

export default Event;
