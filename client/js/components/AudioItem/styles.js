import {StyleSheet} from 'react-native';
import {THEME} from '../../config/';

const styles = StyleSheet.create({
  container: {
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    marginTop: THEME.spacing.default(0.5),
    paddingHorizontal: THEME.spacing.default(0.75),
    paddingTop: THEME.spacing.default(0.25),
    paddingBottom: THEME.spacing.default(0.75),
    borderColor: THEME.colors.grey,
    backgroundColor: THEME.colors.paleGrey,
    flexDirection: 'row',
  },
  leftColumn: {
    width: 72,
    height: 36,
    marginRight: THEME.spacing.default(0.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightColumn: {flex: 1},
  time: {
    ...THEME.typography.size.caption,
    color: THEME.colors.grey,
    textAlign: 'left',
    width: 40,
  },
  wrapperIcPlay: {
    borderRadius: 16,
  },
  icPlay: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 16,
    lineHeight: 32,
    marginBottom: THEME.spacing.default(0.25),
  },
  description: {
    ...THEME.typography.size.caption,
    color: THEME.colors.grey,
    lineHeight: 16,
  },
});

export default styles;
