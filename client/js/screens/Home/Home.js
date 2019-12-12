import React from 'react';
import {Text, ScrollView, Button} from 'react-native';
import {removeViewer} from '../../config/models';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <Text>Hello Home</Text>
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
      <Button
        onPress={() => {
          navigation.navigate('SelfGuidedTour');
        }}
        title="Self Guided Tour"
      />
    </ScrollView>
  );
};

export default Home;

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};
