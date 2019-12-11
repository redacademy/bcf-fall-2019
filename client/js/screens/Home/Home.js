import React from 'react';
import {ImageBackground, Text, ScrollView, Button, View} from 'react-native';
import {removeViewer} from '../../config/models';
import styles from './styles';
import {THEME} from '../../config';
import PropTypes from 'prop-types';

const Home = ({navigation, detectOffsetTopm, data}) => {
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={event => {
        console.log(event.nativeEvent.contentOffset.y);
      }}>
      <ImageBackground
        source={require('../../assets/images/cities/imgCityVancouver.jpg')}
        style={styles.imgCity}>
        <View style={styles.overlay}>
          <View style={styles.wrapperMain}>
            {console.log(data)}
            <Text style={styles.title}>{data && data.location}</Text>
          </View>
        </View>
      </ImageBackground>

      <View>
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
      </View>
    </ScrollView>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  detectOffsetTop: PropTypes.func.isRequired,
  data: PropTypes.object,
};
