import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import styles from './styles';

const Event = props => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.eventImg}>
          <Image
            style={styles.eventImg}
            source={require('../../assets/images/imgHomeCatFamily.png')}
          />

          <View style={styles.overlay}>
            <Text style={styles.eventName}>Beaver Lake Tour</Text>
            <Text style={styles.eventLocation}>Stanley Park</Text>
            <View style={styles.eventButtons}>
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
            <Text style={{fontSize: 12}}>Nov 11, 2019 10-12 PM</Text>
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
            <Text style={{fontSize: 12}}>1005 E Street Vancouver</Text>
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
                <Text style={{fontSize: 12}}>Easy</Text>
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
                <Text style={{fontSize: 12}}>English</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.eventInfoTitle}>Event Details</Text>
            <Text style={styles.eventInfoDescription}>
              Come join us as we see take a scenic ferry ride to stanley park,
              the gem of the Islands. We will then walk off the ferry and hike
              to where on a clear day you will have views of stanley park
              Afterwards, we will explore…
              <Text style={styles.eventReadMore}>(Read More)</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.eventViewMap}>View Map</Text>
          </View>
          {/*  */}
          <Text style={styles.hostTitle}>Your Host</Text>
          <View style={styles.eventDetails}>
            <View style={{...styles.cols2, ...styles.firstColumn}}>
              <View style={styles.hostAvatar}>
                <Image source={require('../../assets/images/icGoogle.png')} />
              </View>
            </View>

            <View style={styles.hostInformation}>
              <Text style={styles.infoText}>Name</Text>
              <View style={styles.hostNameField}>
                <Text style={{fontSize: 12, paddingLeft: 6}}>
                  Elise Beverley
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
                <Text style={styles.hostBio}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  interdum gravida ipsum, nec egestas mauris. Suspendisse
                  bibendum erat metus, eu semper massa
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.eventContactButton}>
            <ButtonDefault title="Contact" />
          </View>
          {/*  */}
          <View>
            <Text style={styles.eventReviewsTitle}>Reviews</Text>
          </View>
          <ButtonDefault title="Show More Reviews" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Event;
