import {Dimensions, StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgCity: {
    width: '100%',
    height: width,
  },
  overlay: {
    ...THEME.padding.appScreen,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.colors.grey,
  },
  wrapperMain: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  },
  title: {
    ...THEME.typography.regular,
    ...THEME.shadow.onText,
    color: THEME.colors.white,
    textAlign: 'center',
    fontSize: 34,
    lineHeight: 52,
    letterSpacing: 0.25,
  },
});

export default styles;
