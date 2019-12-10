import React from 'react';
import {ScrollView, Text, View, Linking, Image} from 'react-native';
import {TouchableOpacity, TouchableHighlight} from 'react-native';

const Contact = ({contact}) => {
  return (
    <ScrollView>
      <Text>Contact Us</Text>
      <View>
        <Text>Feel free to contact us</Text>
        <Text>BC Parks Foundation</Text>
        <Text>#301 - 470 Granville Street</Text>
        <Text>Vancouver, BC Canada</Text>
        <Text>V6C 1V5</Text>

        <TouchableOpacity>
          <Text
            onPress={() => {
              Linking.openURL('tel:604-343-3975');
            }}>
            604-343-3975
          </Text>
        </TouchableOpacity>

        <Text>info@bcparksfoundation.ca</Text>

        <TouchableOpacity
          onPress={() => LinkingIOS.openURL('https://facebook.com')}>
          <Image source={require('../../assets/images/icSocialFacebook.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => LinkingIOS.openURL('https://twitter.com')}>
          <Image source={require('../../assets/images/icSocialTwitter.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => LinkingIOS.openURL('https://instagram.com')}>
          <Image
            source={require('../../assets/images/icSocialInstagram.png')}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Contact;
