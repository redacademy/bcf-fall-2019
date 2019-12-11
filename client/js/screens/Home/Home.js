import React from 'react';
import {ImageBackground, Text, ScrollView, Button, View} from 'react-native';
import {removeViewer} from '../../config/models';
import styles from './styles';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={event => {
        console.log(event.nativeEvent.contentOffset.y);
      }}>
      <ImageBackground
        source={require('../../assets/images/cities/imgCityVancouver.jpg')}
        style={styles.imgCity}>
        <View style={styles.overlay}></View>
      </ImageBackground>

      <Button
        onPress={async e => {
          try {
            await removeViewer();
            await navigation.navigate('AuthLoading');
          } catch (error) {
            console.log(error);
          }
        }}
        title="Log out"
      />
    </ScrollView>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  detectOffsetTop: PropTypes.func.isRequired,
};
