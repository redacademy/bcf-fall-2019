import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import styles from './styles';
import ButtonDefault from '../../components/ButtonDefault';

const SubmitReview = ({navigation, eventInfo}) => {
  return (
    <>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.eventImg}>
            <Image style={styles.eventImg} source={{uri: eventInfo.image}} />

            <View style={styles.overlay}>
              <Text style={styles.eventName}>{eventInfo.title}</Text>
              <Text style={styles.eventLocation}>
                {eventInfo.locationTitle}
              </Text>
              <View style={styles.eventButtons}>
                <View style={styles.eventStarRating}>
                  <RatingScore score={4} />
                </View>
                <View style={styles.eventshareButton}>
                  <Image
                    source={require('../../assets/images/icFaveShareDefault.png')}
                  />
                </View>
                <View style={styles.eventButton}>
                  <Image
                    source={require('../../assets/images/icFaveCircleDefault.png')}
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.eventScreenInfo}>
            <Text style={styles.infoText}>Date / Time</Text>
            <View
              style={{
                ...styles.eventTextInput,
                height: 36,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.eventTextFields}
                source={require('../../assets/images/icFilterDate.png')}
              />
              <Text style={{fontSize: 12}}>{eventInfo.date}</Text>
            </View>

            <Text style={styles.infoText}>Location</Text>
            <View
              style={{
                ...styles.eventTextInput,
                height: 36,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={styles.eventTextFields}
                source={require('../../assets/images/icFilterLocation.png')}
              />
              <Text style={{fontSize: 12}}>{eventInfo.address}</Text>
            </View>

            <ButtonDefault title="Submit" />
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default SubmitReview;
