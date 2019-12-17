import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  eventImg: {
    width: '100%',
    height: width,
  },
  eventName: {
    color: THEME.colors.white,
    fontSize: 36,
    fontFamily: 'Montserrat-Regular',
  },
  eventLocation: {
    color: THEME.colors.white,
    fontSize: 12,
    paddingTop: 5,
  },
  eventButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  eventshareButton: {
    paddingRight: 10,
  },

  eventStarRating: {
    paddingRight: 238,
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 100,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },

  eventInfoHeadings: {
    fontSize: 11,
    color: 'red',
  },

  eventTextInput: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
  },
  eventContactButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1785B',
  },
  eventScreenInfo: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 56,
  },
  eventDetails: {
    flexDirection: 'row',
    paddingBottom: 12,
  },
  cols2: {
    flex: 1,
  },
  firstColumn: {
    marginRight: 16,
  },
  eventInfoTitle: {
    fontSize: 20,
    color: '#013859',
    paddingTop: 24,
    fontWeight: '600',
    paddingBottom: 6,
  },
  eventInfoDescription: {
    fontSize: 16,
  },
  infoText: {
    fontWeight: '600',
    fontSize: 13,
    paddingRight: 15,
    paddingTop: 10,
    marginBottom: 5,
  },
  eventReadMore: {
    color: '#013859',
    fontSize: 16,
  },
  eventTextFields: {
    width: 32,
    height: 32,
    marginLeft: 2,
    marginRight: 4,
  },
  eventViewMap: {
    color: '#013859',
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
  hostTitle: {
    fontSize: 20,
    color: '#013859',
    fontWeight: '600',
    paddingTop: 40,
    paddingLeft: 15,
  },
  hostAvatar: {
    paddingRight: 15,
    paddingTop: 20,
    paddingLeft: 20,
  },
  hostNameField: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hostBio: {
    fontSize: 12,
    padding: 8,
    height: 76,
  },
  hostInformation: {
    marginRight: 16,
    width: '65%',
  },
  eventContactButton: {
    paddingBottom: 36,
  },
  eventReviewsTitle: {
    fontSize: 20,
    color: '#013859',
    fontWeight: '600',
    marginTop: 30,
  },
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RectangleShapeView: {
    width: '95%',
    borderRadius: 4,
    paddingHorizontal: 8,
    height: 60,
    backgroundColor: '#013859',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventBookingPrice: {
    color: 'white',
    fontSize: 22,
    paddingVertical: 17,
    paddingLeft: 8,
  },
  eventBookingButton: {
    padding: 2,
    width: 82,
    fontSize: 12,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
  },
  eventMap: {
    width: '100%',
    height: 201,
  },
  eventMapContainer: {
    paddingTop: 36,
  },
  hostImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  inputFieldStyles: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventInfoAddress: {
    fontSize: 12,
  },
  difficultyFilter: {
    flex: 1,
    marginRight: 16,
  },
  filterSectionImages: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventInfoDiffucultyTitle: {
    fontSize: 12,
  },
  languageSection: {
    flex: 1,
    marginRight: 16,
  },
  languageInputField: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageTitle: {
    fontSize: 12,
  },
  hostSection: {
    flex: 1,
    marginRight: 16,
  },
  hostNameTitle: {
    fontSize: 12,
    paddingLeft: 6,
  },
  hostBioSection: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    borderRadius: 4,
    height: 76,
    flexDirection: 'row',
    alignItems: 'center',
  },
  downloadAudio: {
    fontSize: 10,
    color: THEME.colors.blue,
    textDecorationLine: 'underline',
    marginLeft: 180,
  },
  playAudio: {
    fontSize: 10,
    color: THEME.colors.blue,
    textDecorationLine: 'underline',
    marginLeft: 10,
  },
});

export default styles;
