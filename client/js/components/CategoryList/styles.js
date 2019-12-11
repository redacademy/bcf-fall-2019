import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  wrapper: {
    ...THEME.borders.radius.default,
    width: 120,
    height: '100%',
    overflow: 'hidden',
    marginRight: THEME.spacing.default(),
  },
  overlay: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.colors.grey,
    justifyContent: 'center',
  },
  title: {
    ...THEME.typography.bold,
    ...THEME.shadow.onText,
    color: THEME.colors.white,
    textAlign: 'center',
  },
});

export default styles;
