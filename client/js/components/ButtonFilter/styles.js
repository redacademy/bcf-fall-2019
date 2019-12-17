import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  filterBtn: {
    ...THEME.borders.width.default,
    borderColor: THEME.colors.astronautBlue,
    borderRadius: 16,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: THEME.spacing.default(0.75),
    marginRight: THEME.spacing.default(0.75),
    paddingLeft: THEME.spacing.default(0.875),
    paddingRight: THEME.spacing.default(0.125),
  },
  activeBtn: {
    backgroundColor: THEME.colors.astronautBlue,
  },
  buttonText: {
    ...THEME.typography.size.caption,
    width: 46,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
  },
  activeBtnText: {
    color: THEME.colors.white,
  },
});

export default styles;
