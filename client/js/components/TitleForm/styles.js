import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  text: {
    ...THEME.typography.size.title,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.astronautBlue,
    lineHeight: 28,
    letterSpacing: 0.35,
  },
});

export default styles;
