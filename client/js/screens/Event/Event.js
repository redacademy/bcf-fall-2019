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

          <TextInput
            style={styles.eventTextInput}
            onChangeText={text => onChangeText(text)}
          />

          <Text style={styles.infoText}>Location</Text>

          <TextInput
            style={styles.eventTextInput}
            onChangeText={text => onChangeText(text)}
          />

          <View style={styles.eventDetails}>
            <View style={{...styles.cols2, ...styles.firstColumn}}>
              <Text style={styles.infoText}>Difficulty</Text>
              <TextInput
                style={styles.eventTextInput}
                onChangeText={text => onChangeText()}
              />
            </View>
            <View style={styles.cols2}>
              <Text style={styles.infoText}>Language</Text>
              <TextInput
                style={styles.eventTextInput}
                onChangeText={text => onChangeText()}
              />
            </View>
          </View>

          <View>
            <Text style={styles.eventInfo}>Event Details</Text>
            <Text>
              Come join us as we see take a scenic ferry ride to stanley park,
              the gem of the Islands. We will then walk off the ferry and hike
              to where on a clear day you will have views of stanley park
              Afterwards, we will explore…
              <Text style={styles.eventReadMore}>(Read More)</Text>
            </Text>
          </View>

          <View>
            <Text>Map goes here</Text>
            <Text>View Map</Text>
          </View>

          <View>
            <Text>Your Host</Text>
            <Text>Name</Text>
            <TextInput
              style={styles.eventTextInputSmall}
              onChangeText={text => onChangeText(text)}
            />
            <Text>Bio</Text>
            <TextInput
              style={styles.eventTextInputSmall}
              onChangeText={text => onChangeText(text)}
            />
          </View>

          <ButtonDefault title="Contact" />

          <View>
            <Text>Reviews</Text>
          </View>

          <ButtonDefault title="Show More Reviews" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Event;
