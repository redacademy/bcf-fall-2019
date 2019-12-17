import React from 'react';
import {View, Image, Text, TextInput, Button} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import ReviewScore from '../../components/ReviewScore';
import {calculateRatingScore} from '../../lib/calculateRatingScore';
import styles from './styles';
import SafeAreaView from 'react-native-safe-area-view';

const SubmitReview = ({navigation, eventInfo}) => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Image
            style={styles.eventImg}
            // source={require('../../assets/images/imgHomeCatFamily.png')}
            source={{uri: eventInfo.image}}
          />

          <View style={styles.overlay}>
            <Image
              source={require('../../assets/images/icSocialTwitter.png')}
            />
            <Text style={styles.hostReviewName}>Yahiro Ayuko</Text>
            <Text style={styles.eventName}>Forest Tour</Text>
            <Text style={styles.eventLocation}>BC Park</Text>

            <RatingScore style={styles.starRating} score={4} />
            <View style={styles.eventButtons}>
              <View style={styles.eventReviewRating}></View>
            </View>
          </View>
        </View>

        <View style={styles.eventScreenInfo}>
          <Text style={styles.ratingText}>Rate It</Text>
          <View>
            <ReviewScore style={styles.starReviewRating} score={4} />
          </View>

          <Text style={styles.reviewInputTitle}>Write a Review!</Text>
          <TextInput
            style={styles.reviewInput}
            placeholder="Type here ..."
            onChangeText={text => this.setState({text})}

            // value={this.state.text}
          />
          <View style={styles.submitButton}>
            <ButtonDefault title="Submit" />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SubmitReview;
