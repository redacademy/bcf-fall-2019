import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {Mutation} from 'react-apollo';
import {MUTATION_LOG_IN} from '../../apollo/mutations';
import {THEME} from '../../config';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
// import RatingScore from '../../components/RatingScore';
// import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
// import Reviews from '../../components/Reviews';

const SingleSelfGuided = ({navigation, tour}) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.eventImg}>
            <Image style={styles.eventImg} source={{uri: tour.image}} />

            <View style={styles.overlay}>
              <Text style={styles.eventName}>{tour.title}</Text>
              <Text style={styles.eventLocation}>{tour.location}</Text>
              <View style={styles.eventButtons}>
                <View style={styles.eventStarRating}>
                  {/*<RatingScore score={4} />*/}
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
            <View style={styles.eventDetails}>
              <View style={styles.difficultyFilter}>
                <Text style={styles.infoText}>Difficulty</Text>
                <View style={styles.filterSectionImages}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterDifficulty.png')}
                  />
                  <Text style={styles.tourDiffucultyTitle}>
                    {tour.difficulty}
                  </Text>
                </View>
              </View>

              <View style={styles.languageSection}>
                <Text style={styles.infoText}>Duration</Text>
                <View style={styles.languageInputField}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterDuration.png')}
                  />
                  <Text style={styles.languageTitle}>
                    {tour.duration} hours
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.eventDetails}>
              <View style={styles.difficultyFilter}>
                <Text style={styles.infoText}>Distance</Text>
                <View style={styles.filterSectionImages}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterDistance.png')}
                  />
                  <Text style={styles.tourDiffucultyTitle}>
                    {tour.distance}
                  </Text>
                </View>
              </View>

              <View style={styles.languageSection}>
                <Text style={styles.infoText}>Pet Friendly</Text>
                <View style={styles.languageInputField}>
                  <Image
                    style={styles.eventTextFields}
                    source={require('../../assets/images/icFilterPetFriendly.png')}
                  />
                  <Text style={styles.languageTitle}>
                    {tour.petFriendly ? 'Yes' : 'No'}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.infoText}>Audio</Text>
            <View style={styles.inputFieldStyles}>
              <Image
                style={styles.eventTextFields}
                source={require('../../assets/images/icFilterAudio.png')}
              />
              <Text style={{fontSize: 12}}>
                {tour.audio && tour.audio.markers.length > 1
                  ? `${tour.audio.markers.length} Points`
                  : 'No Audio'}
              </Text>
              <TouchableOpacity>
                <Text style={styles.downloadAudio}>
                  {tour.audio && tour.audio.markers.length > 1
                    ? 'Download'
                    : ''}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (tour.audio) {
                    return navigation.push('StoryTrail', {
                      audio: tour.audio,
                    });
                  }
                }}>
                <Text style={styles.playAudio}>
                  {tour.audio && tour.audio.markers.length > 1 ? 'Play' : ''}
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.eventInfoTitle}>About the Trails:</Text>

              <Text style={styles.eventInfoDescription}>
                {tour.description}
              </Text>
              {/* <Text style={styles.eventReadMore}>(Read More)</Text> */}
            </View>
            <View style={styles.eventMapContainer}>
              <MapView
                style={styles.eventMap}
                mapType="satellite"
                region={{
                  latitude: 50.922148,
                  longitude: -119.643196,
                  latitudeDelta: 0.02,
                  longitudeDelta: 0.0121,
                }}>
                {tour.audio &&
                  tour.audio.markers.map(each => (
                    <Marker
                      key={each.id}
                      coordinate={{
                        latitude: each.latitude,
                        longitude: each.longitude,
                      }}
                      title={each.title}
                      description={each.description}
                    />
                  ))}
              </MapView>

              <Text style={styles.eventViewMap}>View Map</Text>
            </View>

            <View>
              <Text style={styles.eventReviewsTitle}>Reviews:</Text>

              {/*<Reviews />*/}
            </View>
            <ButtonDefault title="Show More Reviews" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SingleSelfGuided;
