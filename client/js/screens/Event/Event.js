import React from 'react';
import {View, Image, Text, ScrollView, Button} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import RatingScore from '../../components/RatingScore';
import moment from 'moment';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import Reviews from '../../components/Reviews';
import PropTypes from 'prop-types';
import SaveEventContext from '../../context/SaveEventContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Event = ({navigation, eventInfo, geoLocation}) => {
  return (
    <SaveEventContext.Consumer>
      {({savedIds, addSaveId, removeSaveId}) => {
        const isFaved = savedIds.includes(eventInfo.id);
        return (
          <>
            <ScrollView>
              <View style={styles.eventImg}>
                <Image
                  style={styles.eventImg}
                  source={{uri: eventInfo.image}}
                />
                <View style={styles.overlay}>
                  <Text style={styles.eventName}>{eventInfo.title}</Text>
                  <Text style={styles.eventLocation}>
                    {eventInfo.locationTitle}
                  </Text>
                  <View style={styles.eventButtons}>
                    <View style={styles.eventStarRating}>
                      <RatingScore
                        score={calculateRatingScore(eventInfo.reviews)}
                      />
                    </View>
                    <View style={styles.eventshareButton}>
                      <Image
                        source={require('../../assets/images/icFaveShareDefault.png')}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() =>
                        isFaved
                          ? removeSaveId(eventInfo.id)
                          : addSaveId(eventInfo.id)
                      }>
                      <Image
                        source={
                          isFaved
                            ? require('../../assets/images/icFaveCircleActive.png')
                            : require('../../assets/images/icFaveCircleDefault.png')
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={styles.eventScreenInfo}>
                <Text style={styles.infoText}>Date / Time</Text>
                <View style={styles.inputFieldStyles}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterDate.png')}
                  />
                  <Text style={{fontSize: 12}}>
                    {moment(eventInfo.date).format('MMM, D, YYYY')}{' '}
                    {eventInfo.startAt}-{eventInfo.endAt}
                  </Text>
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
                  <Text style={styles.eventInfoAddress}>
                    {eventInfo.address}
                  </Text>
                </View>

                <View style={styles.eventDetails}>
                  <View style={styles.difficultyFilter}>
                    <Text style={styles.infoText}>Difficulty</Text>
                    <View style={styles.filterSectionImages}>
                      <Image
                        style={styles.eventTextFields}
                        source={require('../../assets/images/icFilterDifficulty.png')}
                      />
                      <Text style={styles.eventInfoDiffucultyTitle}>
                        {eventInfo.difficulty}
                      </Text>
                    </View>
                  </View>

                  <View style={styles.languageSection}>
                    <Text style={styles.infoText}>Language</Text>
                    <View style={styles.languageInputField}>
                      <Image
                        style={styles.eventTextFields}
                        source={require('../../assets/images/icFilterLanguage.png')}
                      />
                      <Text style={styles.languageTitle}>
                        {eventInfo.language}
                      </Text>
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={styles.eventInfoTitle}>Event Details</Text>

                  <Text style={styles.eventInfoDescription}>
                    {eventInfo.details.replace(/\\n/g, '\n')}
                  </Text>
                </View>
                <View style={styles.eventMapContainer}>
                  <MapView
                    style={styles.eventMap}
                    scrollEnabled={false}
                    region={{
                      latitude: geoLocation
                        ? geoLocation.geometry.location.lat
                        : 37.78825,
                      longitude: geoLocation
                        ? geoLocation.geometry.location.lng
                        : -122.4324,
                      latitudeDelta: 0.015,
                      longitudeDelta: 0.0121,
                    }}>
                    <Marker
                      coordinate={{
                        latitude: geoLocation
                          ? geoLocation.geometry.location.lat
                          : 37.78825,
                        longitude: geoLocation
                          ? geoLocation.geometry.location.lng
                          : -122.4324,
                      }}
                    />
                  </MapView>

                  <Text style={styles.eventViewMap}>View Map</Text>
                </View>

                <Text style={styles.hostTitle}>Your Host</Text>
                <View style={styles.eventDetails}>
                  {/*  */}
                  <View style={styles.hostSection}>
                    <Image
                      source={{uri: eventInfo.host.image}}
                      style={styles.hostImage}
                    />
                  </View>

                  <View style={styles.hostInfoSection}>
                    <Text style={styles.infoText}>Name</Text>
                    <View style={styles.hostNameField}>
                      <Text style={styles.hostNameTitle}>
                        {eventInfo.host.name}
                      </Text>
                    </View>
                    <Text style={styles.infoText}>Bio</Text>
                    <View style={styles.hostBioSection}>
                      <Text style={styles.hostBio} numberOfLines={4}>
                        {eventInfo.host.bio}
                      </Text>
                    </View>
                  </View>
                  {/*  */}
                </View>

                <ButtonDefault
                  onPress={() => {
                    if (eventInfo) {
                      return navigation.push('ContactHost', {
                        host: eventInfo.host,
                      });
                    }
                  }}
                  title="Contact"
                />

                <View>
                  <Text style={styles.eventReviewsTitle}>Reviews</Text>

                  {eventInfo.reviews.length > 0 ? (
                    eventInfo.reviews
                      .sort((a, b) => {
                        const dateA = new Date(a.date);
                        const dateB = new Date(b.date);
                        return dateB - dateA;
                      })
                      .map(review => <Reviews key={review.id} data={review} />)
                  ) : (
                    <Text> There are no reviews yet!</Text>
                  )}
                </View>

                <View style={styles.eventReviewsButton}>
                  <ButtonDefault
                    onPress={e => {
                      navigation.push('SubmitReview', {eventInfo});
                    }}
                    title="Submit a Review!"
                  />
                </View>
              </View>
            </ScrollView>

            <View style={styles.container}>
              <View style={styles.RectangleShapeView}>
                <View style={styles.eventBooking}>
                  <Text style={styles.eventBookingPrice}>
                    ${eventInfo.price}
                  </Text>
                </View>
                <View style={styles.eventBookingButton}>
                  <Button
                    title="Book"
                    color="white"
                    onPress={() => {
                      navigation.push('EventBooking', {eventInfo});
                    }}
                  />
                </View>
              </View>
            </View>
          </>
        );
      }}
    </SaveEventContext.Consumer>
  );
};

export default Event;

Event.propTypes = {
  navigation: PropTypes.object,
  eventInfo: PropTypes.object,
  geoLocation: PropTypes.object,
};
