import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 12,
  },
  icMenu: {
    marginRight: 12,
  },
  eventImg: {
    width: '100%',
    height: width,
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 200,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  eventName: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
  },
  eventLocation: {
    color: 'white',
    fontSize: 12,
    paddingTop: 5,
  },
  eventScreenInfo: {
    marginLeft: 24,
    marginRight: 24,
  },
  ratingText: {
    paddingTop: 32,
    fontSize: 17,
    paddingBottom: 8,
  },
  starRating: {
    height: 48,
    width: 48,
  },
  reviewInputTitle: {
    fontSize: 17,
    paddingTop: 16,
    paddingBottom: 6,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 160,
  },
  eventReviewRating: {
    height: 48,
    width: 48,
  },
  hostReviewName: {
    color: 'white',
  },
  hostImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  submitButton: {
    paddingTop: 36,
    paddingBottom: 50,
  },
  starReviewRating: {
    height: 48,
    width: 48,
  },
});

export default styles;
