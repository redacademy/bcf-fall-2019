import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import RatingScore from '../../components/RatingScore';
import TextWithIcon from '../../components/TextWithIcon';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';
import MapView from 'react-native-maps';
import Reviews from '../../components/Reviews';
import {Marker} from 'react-native-maps';
import SaveEventContext from '../../context/SaveEventContext';

const SingleSelfGuided = ({navigation, tour}) => {
  return (
    <SaveEventContext.Consumer>
      {({savedIds, addSaveId, removeSaveId}) => (
        <ScrollView>
          <View style={styles.eventImg}>
            <Image style={styles.eventImg} source={{uri: tour.image}} />

            <View style={styles.overlay}>
              <Text style={styles.eventName}>{tour.title}</Text>

              <View style={styles.flexRow}>
                <View style={styles.rightRow}>
                  <Text style={styles.eventLocation}>{tour.location}</Text>

                  <View style={styles.ratingWrapper}>
                    <RatingScore
                      score={calculateRatingScore(
                        tour.reviews ? tour.reviews : [],
                      )}
                    />
                    <Text style={styles.ratingText}>
                      {tour.reviews
                        ? `(${tour.reviews.length})`
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
            <View style={{...styles.flexRow, ...styles.infoDetails}}>
              <TextWithIcon
                label="Difficulty"
                iconSource={require('../../assets/images/icFilterDifficulty.png')}
                text={tour.difficulty}
                style={{...styles.cols2, ...styles.firstColumn}}
              />

              <TextWithIcon
                label="Duration"
                iconSource={require('../../assets/images/icFilterDuration.png')}
                text={`${tour.duration} hours`}
                style={{...styles.cols2}}
              />
            </View>

            <View style={{...styles.flexRow, ...styles.infoDetails}}>
              <TextWithIcon
                label="Distance"
                iconSource={require('../../assets/images/icFilterDistance.png')}
                text={tour.distance}
                style={{...styles.cols2, ...styles.firstColumn}}
              />

              <TextWithIcon
                label="Pet Friendly"
                iconSource={require('../../assets/images/icFilterPetFriendly.png')}
                text={tour.petFriendly ? 'Yes' : 'No'}
                style={{...styles.cols2}}
              />
            </View>

            {tour.audio ? (
              <>
                <Text style={styles.audioLabel}>Audio</Text>
                <View style={styles.audioWrapper}>
                  <View style={styles.audioTextWrapper}>
                    <Image
                      styles={styles.audioIcon}
                      source={require('../../assets/images/icFilterAudio.png')}
                      resizeMode="contain"
                    />
                    <Text style={styles.audioText}>
                      {tour.audio.markers.length} Points
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Text
                      style={{
                        ...styles.audioText,
                        ...styles.audioLinkText,
                      }}>
                      Download
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      navigation.push('StoryTrail', {
                        data: tour,
                      });
                    }}>
                    <Text
                      style={{
                        ...styles.audioText,
                        ...styles.audioLinkText,
                      }}>
                      Play
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <TextWithIcon
                label="Audio"
                iconSource={require('../../assets/images/icFilterAudio.png')}
                text="No Audio"
              />
            )}

            <Text style={styles.eventInfoTitle}>About the Trails:</Text>
            <Text style={styles.eventInfoDescription}>{tour.description}</Text>

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

            <View style={styles.reviewWrapper}>
              <Text style={styles.eventInfoTitle}>Reviews:</Text>

              {tour.reviews && tour.reviews.length > 0 ? (
                tour.reviews
                  .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB - dateA;
                  })
                  .map(review => <Reviews key={review.id} data={review} />)
              ) : (
                <Text style={styles.eventInfoDescription}>
                  There is no reviews yet
                </Text>
              )}
            </View>

            <ButtonDefault title="Write a review" isActive={false} />
          </View>
        </ScrollView>
      )}
    </SaveEventContext.Consumer>
  );
};

export default SingleSelfGuided;
