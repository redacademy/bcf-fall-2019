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
  },
});

export default styles;
