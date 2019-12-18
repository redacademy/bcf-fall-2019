import React from 'react';
import {View, Text} from 'react-native';
import {StackActions} from 'react-navigation';
import TitleText from '../../components/TitleText';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';

const ThankYouReview = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TitleText style={styles.title}>Thank you</TitleText>
      <Text style={styles.text}>We hope you enjoy your activity.</Text>
      <Text style={styles.description}>
        You will recieve a confirmation email with your event details. To view
        your booking, check My Tickets on the navigation bar.
      </Text>

      <ButtonDefault
        isActive={true}
        onPress={() => {
          navigation.dispatch(StackActions.popToTop());
        }}
        title="Discover More"
      />
    </View>
  );
};

export default ThankYouReview;
