import React from 'react';
import {View, Image, Text, ScrollView, Button} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import RatingScore from '../../components/RatingScore';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import MapView from 'react-native-maps';
import Reviews from '../../components/Reviews';

const Event = ({navigation, eventInfo}) => {
  return (
    <>
      {console.log(eventInfo)}
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

            <View style={styles.eventDetails}>
              <View style={{...styles.cols2, ...styles.firstColumn}}>
                <Text style={styles.infoText}>Difficulty</Text>
                <View
                  style={{
                    ...styles.eventTextInput,
                    height: 36,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterDifficulty.png')}
                  />
                  <Text style={{fontSize: 12}}>{eventInfo.difficulty}</Text>
                </View>
              </View>

              <View style={{...styles.cols2, ...styles.firstColumn}}>
                <Text style={styles.infoText}>Language</Text>
                <View
                  style={{
                    ...styles.eventTextInput,
                    height: 36,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterLanguage.png')}
                  />
                  <Text style={{fontSize: 12}}>{eventInfo.language}</Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={styles.eventInfoTitle}>Event Details</Text>

              <Text style={styles.eventInfoDescription}>
                {eventInfo.details.replace(/\\n/g, '\n')}
              </Text>
              {/* <Text style={styles.eventReadMore}>(Read More)</Text> */}
            </View>
            <View style={styles.eventMapContainer}>
              <MapView
                style={styles.eventMap}
                region={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.015,
                  longitudeDelta: 0.0121,
                }}></MapView>

              <Text style={styles.eventViewMap}>View Map</Text>
            </View>

            <Text style={styles.hostTitle}>Your Host</Text>
            <View style={styles.eventDetails}>
              <View style={{...styles.cols2, ...styles.firstColumn}}>
                <View style={styles.hostAvatar}>
                  <Image
                    source={{uri: eventInfo.host.image}}
                    style={styles.hostImage}
                  />
                </View>
              </View>

              <View style={styles.hostInformation}>
                <Text style={styles.infoText}>Name</Text>
                <View style={styles.hostNameField}>
                  <Text style={{fontSize: 12, paddingLeft: 6}}>
                    {eventInfo.host.name}
                  </Text>
                </View>

                <Text style={styles.infoText}>Bio</Text>
                <View
                  style={{
                    ...styles.eventTextInput,
                    height: 76,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.hostBio}>{eventInfo.host.bio}</Text>
                </View>
              </View>
            </View>
            <View style={styles.eventContactButton}>
              <ButtonDefault title="Contact" />
            </View>
            <View>
              <Text style={styles.eventReviewsTitle}>Reviews</Text>

              <Reviews />
            </View>
            <ButtonDefault title="Show More Reviews" />
          </View>
        </SafeAreaView>
      </ScrollView>
      <View style={styles.container}>
        <View style={styles.RectangleShapeView}>
          <View style={styles.eventBooking}>
            <Text style={styles.eventBookingPrice}>${eventInfo.price}</Text>
          </View>
          <View style={styles.eventBookingButton}>
            <Button title="Book" color="white" />
          </View>
        </View>
      </View>
    </>
  );
};

export default Event;