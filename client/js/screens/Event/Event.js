import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  TextInput,
  ScrollView,
  Button,
} from 'react-native';
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
            <Text>Beaver Lake Tour</Text>
            <Text>Stanley Park</Text>
          </View>
        </View>

        <View>
          <Text>Date/Time</Text>
          <TextInput
            style={styles.eventTextInput}
            onChangeText={text => onChangeText(text)}
          />
          <Text>Location</Text>
          <TextInput
            style={styles.eventTextInput}
            onChangeText={text => onChangeText(text)}
          />
        </View>

        <View>
          <Text>Difficulty</Text>
          <TextInput
            style={styles.eventTextInputSmall}
            onChangeText={text => onChangeText(text)}
          />
          <Text>Language</Text>
          <TextInput
            style={styles.eventTextInputSmall}
            onChangeText={text => onChangeText(text)}
          />
        </View>

        <View>
          <Text>Event Details</Text>
          <Text>
            Come join us as we see take a scenic ferry ride to stanley park, the
            gem of the Islands. We will then walk off the ferry and hike to
            where on a clear day you will have views of stanley park Afterwards,
            we will explore…(Read More)
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

        <Button style={styles.eventContactButton} title="Contact" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Event;
