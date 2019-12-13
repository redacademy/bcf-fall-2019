import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  eventImg: {
    width: '100%',
    height: width,
  },
  eventName: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'Montserrat-Regular',
  },
  eventLocation: {
    color: 'white',
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
    paddingVertical: 13,
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
  },
  eventReadMore: {
    color: '#013859',
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
    padding: 6,
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
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  RectangleShapeView: {
    // position: 'absolute',
    width: 400,
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
    // height: 60,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
  },
});

export default styles;
