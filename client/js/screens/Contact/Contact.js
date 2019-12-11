import React from 'react';
import {ScrollView, Text, View, Linking, Image} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const Contact = ({contact}) => {
  return (
    <ScrollView style={styles.contactPage}>
      <Text style={styles.contactTitle}>Contact Us</Text>

      <View>
        <View>
          <Text style={styles.contactSubHead}>Feel free to contact us</Text>
        </View>

        <View>
          <Text style={styles.contactAddress}>BC Parks Foundation</Text>

          <Text style={styles.contactAddress}>#301 - 470 Granville Street</Text>

          <Text style={styles.contactAddress}>Vancouver, BC Canada</Text>

          <Text style={styles.contactAddress}>V6C 1V5</Text>
        </View>

        <TouchableOpacity>
          <Text
            style={styles.contactNumber}
            onPress={() => {
              Linking.openURL('tel:604-343-3975');
            }}>
            604-343-3975
          </Text>
        </TouchableOpacity>

        <Text style={styles.contactEmail}>info@bcparksfoundation.ca</Text>

        <View style={styles.contactSocialMedia}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://facebook.com')}>
            <Image
              style={styles.contactSocialMediaIcon}
              source={require('../../assets/images/icSocialFacebook.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://twitter.com')}>
            <Image
              style={styles.contactSocialMediaIcon}
              source={require('../../assets/images/icSocialTwitter.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => Linking.openURL('https://instagram.com')}>
            <Image
              style={styles.contactSocialMediaIcon}
              source={require('../../assets/images/icSocialInstagram.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Contact;
