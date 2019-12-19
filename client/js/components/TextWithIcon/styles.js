import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  label: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.semibold,
    marginBottom: THEME.spacing.default(0.25),
  },
  wrapper: {
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    borderColor: THEME.colors.grey,
    backgroundColor: THEME.colors.paleGrey,
    paddingHorizontal: 2,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: THEME.spacing.default(0.25),
  },
  text: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
  },
});

export default styles;
