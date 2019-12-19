import React, {Component} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import SaveEventContext from '../../context/SaveEventContext';

const SingleSelfGuided = ({navigation, tour}) => {
  return (
    <SafeAreaView>
      <SaveEventContext.Consumer>
        {({savedIds, addSaveId, removeSaveId}) => (
          <ScrollView>
            <View style={styles.eventImg}>
              <Image style={styles.eventImg} source={{uri: tour.image}} />

              <View style={styles.overlay}>
                <Text style={styles.eventName}>{tour.title}</Text>
                <Text style={styles.eventLocation}>{tour.location}</Text>
                <View style={styles.eventButtons}>
                  <View style={styles.eventStarRating}></View>
                  <View style={styles.eventshareButton}>
                    <Image
                      source={require('../../assets/images/icFaveShareDefault.png')}
                    />
                  </View>
                  <View style={styles.eventButton}>
                    <TouchableOpacity
                      style={{...styles.buttons}}
                      onPress={async e => {
                        try {
                          if (savedIds.some(savedId => savedId === tour.id)) {
                            removeSaveId(tour.id);
                          } else {
                            addSaveId(tour.id);
                          }
                        } catch (error) {
                          console.log(error);
                        }
                      }}>
                      <Image
                        source={
                          savedIds.some(savedId => savedId === tour.id)
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
              {/*  */}
              <Text style={styles.infoText}>Audio</Text>
              <View style={styles.inputFieldStyles}>
                <Image
                  style={styles.eventTextFields}
                  source={require('../../assets/images/icFilterAudio.png')}
                />
                <Text style={styles.audioInfo}>
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
                        data: tour,
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
                    tour.audio.markers.map(each => {
                      console.log(each);
                      return (
                        <Marker
                          key={each.id}
                          coordinate={{
                            latitude: parseFloat(each.latitude),
                            longitude: parseFloat(each.longitude),
                          }}
                          title={each.title}
                          description={each.description}
                        />
                      );
                    })}
                </MapView>

                <Text style={styles.eventViewMap}>View Map</Text>
              </View>

              <View>
                <Text style={styles.eventReviewsTitle}>Reviews:</Text>
              </View>
              <ButtonDefault title="Show More Reviews" />
            </View>
          </ScrollView>
        )}
      </SaveEventContext.Consumer>
    </SafeAreaView>
  );
};

export default SingleSelfGuided;
