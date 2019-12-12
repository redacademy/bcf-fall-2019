import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  button: {
    ...THEME.button,
    borderColor: THEME.colors.astronautBlue,
    paddingVertical: THEME.spacing.default(0.5),
  },
  title: {
    ...THEME.typography.button,
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.medium,
    lineHeight: 16,
  },
});

export default styles;
