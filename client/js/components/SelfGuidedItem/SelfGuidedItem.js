import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import SaveEventContext from '../../context/SaveEventContext';
import styles from './styles';

const SelfGuidedItem = ({selfGuidedItem, navigation}) => (
  <SaveEventContext.Consumer>
    {({savedIds, addSaveId, removeSaveId}) => (
      <TouchableOpacity
        onPress={() => {
          if (selfGuidedItem) {
            return navigation.push('SingleSelfGuided', {
              itemId: selfGuidedItem.id,
            });
          }
        }}
        style={styles.container}>
        <ImageBackground
          source={{uri: selfGuidedItem.image}}
          style={styles.backgroundImage}>
          <View style={styles.bgImgWrapper}>
            <View style={styles.infoContainer}>
              <Text style={styles.title}>{selfGuidedItem.title}</Text>
              <Text style={styles.location}>{selfGuidedItem.location}</Text>
              <View style={styles.flexRow}>
                <View style={styles.flexRow}>
                  <View style={styles.flexColumn}>
                    <Text style={styles.subTitles}>Difficulty</Text>
                    <Text style={styles.infobox}>
                      {selfGuidedItem.difficulty
                        .toLowerCase()
                        .charAt(0)
                        .toUpperCase() +
                        selfGuidedItem.difficulty.toLowerCase().slice(1)}
                    </Text>
                  </View>
                  <View style={styles.flexColumn}>
                    <Text style={styles.subTitles}>Distance</Text>
                    <Text style={styles.infobox}>
                      {selfGuidedItem.distance}
                    </Text>
                  </View>
                  <View style={styles.flexColumn}>
                    <Text style={styles.subTitles}>Duration</Text>
                    <Text style={styles.infobox}>
                      {selfGuidedItem.duration} hours
                    </Text>
                  </View>
                </View>
                <View style={styles.flexRow}>
                  <Image
                    style={styles.contactSocialMediaIconShare}
                    source={require('../../assets/images/icFaveShareDefault.png')}
                  />
                  <TouchableOpacity
                    onPress={async e => {
                      try {
                        if (
                          await savedIds.some(
                            savedId => savedId === selfGuidedItem.id,
                          )
                        ) {
                          removeSaveId(selfGuidedItem.id);
                        } else {
                          addSaveId(selfGuidedItem.id);
                        }
                      } catch (error) {
                        throw new Error(error);
                      }
                    }}>
                    <Image
                      style={styles.contactSocialMediaIcon}
                      source={
                        savedIds.some(savedId => savedId === selfGuidedItem.id)
                          ? require('../../assets/images/icFaveCircleActive.png')
                          : require('../../assets/images/icFaveCircleDefault.png')
                      }
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )}
  </SaveEventContext.Consumer>
);

export default SelfGuidedItem;
