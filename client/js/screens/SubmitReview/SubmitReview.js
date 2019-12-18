import React from 'react';
import {View, Image, Text, ScrollView, AsyncStorage} from 'react-native';
import ButtonDefault from '../../components/ButtonDefault';
import ReviewScore from '../../components/ReviewScore';
import RatingScore from '../../components/RatingScore';
import styles from './styles';
import InputDefaultField from '../../components/InputDefaultField';
import {Field, FormSpy, Form} from 'react-final-form';
import {Mutation} from 'react-apollo';
import {MUTATION_ADD_REVIEW} from '../../apollo/mutations';

const SubmitReview = ({navigation, eventInfo}) => {
  return (
    <Mutation mutation={MUTATION_ADD_REVIEW}>
      {(addReview, {loading, error, data}) => (
        <>
          <ScrollView>
            <View>
              <Image style={styles.eventImg} source={{uri: eventInfo.image}} />
              <View style={styles.overlay}>
                <View style={styles.hostAvatar}>
                  <Image
                    source={{uri: eventInfo.host.image}}
                    style={styles.hostImage}
                  />
                </View>
                <Text style={styles.hostReviewName}>{eventInfo.host.name}</Text>
                <Text style={styles.eventName}>{eventInfo.title}</Text>
                <Text style={styles.eventLocation}>
                  {eventInfo.locationTitle}
                </Text>

                <RatingScore style={styles.starRating} score={4} />
                <View style={styles.eventButtons}>
                  <View style={styles.eventReviewRating}></View>
                </View>
              </View>
            </View>

            <View style={styles.eventScreenInfo}>
              <Text style={styles.ratingText}>Rate It</Text>
              <View>
                <ReviewScore style={styles.starReviewRating} score={5} />
              </View>

              <Text style={styles.reviewInputTitle}>Write a Review!</Text>

              <Form
                onSubmit={async values => {
                  try {
                    await addReview({variables: score, comment, id});
                  } catch (error) {
                    let message = error.message.split(': ')[1];
                    Alert.alert(
                      message,
                      '',
                      [
                        {
                          text: 'Thanks',
                        },
                      ],
                      {cancelable: true},
                    );
                  }
                }}>
                {() => (
                  <Field name="reviewInput" placeholder="Type Here ...">
                    {({input, meta, placeholder}) => {
                      return (
                        <InputDefaultField
                          {...input}
                          title="Event Review"
                          autoCapitalize="none"
                          placeholder={placeholder}
                          style={styles.inputEmail}
                        />
                      );
                    }}
                  </Field>
                )}
              </Form>

              <View style={styles.submitButton}>
                <ButtonDefault title="Submit" />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </Mutation>
  );
};

export default SubmitReview;
