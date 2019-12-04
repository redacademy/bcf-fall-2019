import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  pageDefault: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  contentWrap: {
    width: '100%',
    paddingHorizontal: 20,
    height: 164,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 140,
  },
  content: {
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
