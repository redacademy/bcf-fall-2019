import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  title: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
    marginBottom: 6,
  },
  titleRegular: {
    fontWeight: THEME.typography.weight.regular,
  },
  default: {
    ...THEME.padding.inputField,
    ...THEME.typography.size.default,
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    color: THEME.colors.black,
    backgroundColor: THEME.colors.paleGrey,
    borderColor: THEME.colors.grey,
  },
  selected: {
    borderColor: THEME.colors.burntSienna,
  },
});

export default styles;
