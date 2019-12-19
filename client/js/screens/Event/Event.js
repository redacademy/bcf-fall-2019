import React from 'react';
import {View, Image, Text, ScrollView, Button} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import RatingScore from '../../components/RatingScore';
import moment from 'moment';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import Reviews from '../../components/Reviews';
import TextWithIcon from '../../components/TextWithIcon';
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
            <ScrollView contentContainerStyle={styles.mainContent}>
              <View style={styles.eventImg}>
                <Image
                  style={styles.eventImg}
                  source={{uri: eventInfo.image}}
                />
                {/*  */}
                <View style={styles.overlay}>
                  <Text style={styles.eventName}>{eventInfo.title}</Text>
                  {/*  */}
                  <View style={styles.flexRow}>
                    <View style={styles.rightRow}>
                      <Text style={styles.eventLocation}>
                        {eventInfo.locationTitle}
                      </Text>

                      <View style={styles.ratingWrapper}>
                        <RatingScore
                          score={calculateRatingScore(
                            eventInfo.reviews ? eventInfo.reviews : [],
                          )}
                        />
                        <Text style={styles.ratingText}>
                          {eventInfo.reviews
                            ? `(${eventInfo.reviews.length})`
                            : '(No reviews)'}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.buttonWrapper}>
                      <Image
                        style={styles.icBtn}
                        source={require('../../assets/images/icFaveShareDefault.png')}
                      />

                      <TouchableOpacity
                        style={styles.icBtn}
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
              </View>

              <View style={styles.eventScreenInfo}>
                {/*  */}
                <TextWithIcon
                  label="Date / Time"
                  iconSource={require('../../assets/images/icFilterDate.png')}
                  text={`${moment(eventInfo.date).format('MMM, D, YYYY')} ${
                    eventInfo.startAt
                  }-${eventInfo.endAt}`}
                  style={styles.infoDetails}
                />

                <TextWithIcon
                  label="Location"
                  iconSource={require('../../assets/images/icFilterLocation.png')}
                  text={eventInfo.address}
                  style={styles.infoDetails}
                />

                <View style={{...styles.flexRow, ...styles.lastInfo}}>
                  <TextWithIcon
                    label="Difficulty"
                    iconSource={require('../../assets/images/icFilterDifficulty.png')}
                    text={eventInfo.difficulty}
                    style={{...styles.cols2, ...styles.firstColumn}}
                  />
                  <TextWithIcon
                    label="Language"
                    iconSource={require('../../assets/images/icFilterLanguage.png')}
                    text={eventInfo.language}
                    style={styles.cols2}
                  />
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

                <Text style={styles.eventInfoTitle}>Your Host</Text>

                <View style={styles.eventDetails}>
                  <View style={styles.hostSection}>
                    <Image
                      source={{uri: eventInfo.host.image}}
                      style={styles.hostImage}
                    />
                  </View>

                  <View style={styles.hostInfoSection}>
                    <Text style={styles.infoText}>Name</Text>

                    <View style={styles.hostField}>
                      <Text style={styles.hostText}>{eventInfo.host.name}</Text>
                    </View>

                    <Text style={styles.infoText}>Bio</Text>
                    <View style={{...styles.hostField, ...styles.hostBio}}>
                      <Text style={styles.hostText} numberOfLines={6}>
                        {eventInfo.host.bio.replace(/\\n/g, '\n')}
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
                  <Text style={styles.eventInfoTitle}>Reviews</Text>

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
                    {eventInfo.price === 0
                      ? 'Free'
                      : `$${eventInfo.price} / each`}
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.eventBookingButton}
                  onPress={() => {
                    navigation.push('EventBooking', {eventInfo});
                  }}>
                  <Text style={styles.eventBookingButtonText}>Book</Text>
                </TouchableOpacity>
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
