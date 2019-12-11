import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  input: {
    marginBottom: THEME.spacing.default(1.5),
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexField: {
    marginRight: THEME.spacing.default(0.5),
    minWidth: 80,
  },
  cols2: {
    flex: 1,
  },
  firstChild: {
    marginRight: 8,
  },
  whatIs: {
    flex: 1,
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 24,
  },
  imgCvv: {
    width: 36,
    height: 36,
    marginRight: THEME.spacing.default(0.25),
  },
  textCvv: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.astronautBlue,
  },
});

export default styles;
