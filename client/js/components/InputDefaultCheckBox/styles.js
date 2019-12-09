import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    ...THEME.typography.size.caption,
    marginLeft: THEME.spacing.default(0.5),
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.medium,
  },
});

export default styles;
