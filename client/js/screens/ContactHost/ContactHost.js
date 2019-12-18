import React, {Component} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';
import ButtonDefault from '../../components/ButtonDefault';

const ContactHost = ({navigation, host}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Contact Your Host </Text>
        <Image source={{uri: host.image}} style={styles.hostImage} />
        <Text style={styles.name}>{host.name}</Text>
        <Text style={styles.subtext}>
          If you have any questions, our host will be happy help!
        </Text>
        <Text style={styles.askText}>Ask a Question</Text>
        <TextInput style={styles.inputTextOne} value={'Type here...'} />
        <Text style={styles.askText}>How do we reach you?</Text>
        <TextInput style={styles.inputTextTwo} value={'-'} />
        <ButtonDefault
          onPress={() => navigation.push('ThankYouHost')}
          title="Submit"
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactHost;
