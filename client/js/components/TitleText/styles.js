import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  text: {
    ...THEME.typography.regular,
    lineHeight: 52,
    fontSize: 34,
    letterSpacing: 0.25,
    color: THEME.colors.astronautBlue,
  },
});

export default styles;
