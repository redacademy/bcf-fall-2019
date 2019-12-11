import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {position: 'absolute', zIndex: 1000, bottom: 0, width: '100%'},
  wrapper: {
    position: 'absolute',
    zIndex: 1000,
    bottom: 0,
    width: '100%',
    backgroundColor: THEME.colors.white,
  },
  inputAccessoryView: {
    paddingTop: 14,
    paddingBottom: 10,
    paddingLeft: THEME.spacing.default(0.5),
  },
  inputAccessoryText: {
    color: THEME.colors.blue,
  },
});

export default styles;
