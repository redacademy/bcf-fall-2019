import {Dimensions, StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  wrapper: {
    width: '50%',
  },
  leftItem: {paddingRight: THEME.spacing.default(0.5)},
  rightItem: {paddingLeft: THEME.spacing.default(0.5)},
  bgImage: {
    ...THEME.borders.radius.default,
    overflow: 'hidden',
    width: '100%',
    height: 120,
    marginBottom: THEME.spacing.default(0.25),
  },
  wrapperFave: {
    width: '100%',
    height: '100%',
  },
  wrapperFaveIcon: {
    position: 'absolute',
    bottom: THEME.spacing.default(0.5),
    right: THEME.spacing.default(0.5),
  },
  icFave: {
    width: 20,
    height: 20,
  },
  category: {
    ...THEME.typography.size.caption,
    marginBottom: THEME.spacing.default(0.25),
  },
  title: {
    ...THEME.typography.bold,
    color: THEME.colors.astronautBlue,
    fontSize: 16,
    marginBottom: THEME.spacing.default(0.25),
  },
  price: {
    ...THEME.typography.size.caption,
    color: THEME.colors.grey,
    marginBottom: THEME.spacing.default(0.25),
  },
  wrapperRating: {
    height: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME.spacing.default(1.5),
  },
  ratingText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
    marginLeft: THEME.spacing.default(0.375),
  },
});

export default styles;
