import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
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
    height: 100,
  },
  eventTextInput: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
  },
  eventTextInputSmall: {
    height: 36,
    borderColor: 'gray',
    borderWidth: 1,
    width: '40%',
  },
  eventContactButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1785B',
    color: 'red',
  },
});

export default styles;
