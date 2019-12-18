import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    marginTop: THEME.spacing.default(0.75),
  },
  flexRow: {
    marginTop: THEME.spacing.default(0.5),
    flexDirection: 'row',
    height: 52,
    alignItems: 'center',
    marginBottom: THEME.spacing.default(),
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: THEME.spacing.default(0.75),
  },
  noImage: {
    backgroundColor: THEME.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noImageText: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.white,
  },
  text: {
    ...THEME.typography.size.caption,
  },
  name: {
    fontWeight: THEME.typography.weight.medium,
    marginBottom: THEME.spacing.default(0.25),
  },
  date: {
    color: THEME.colors.grey,
    fontSize: 10,
    marginBottom: THEME.spacing.default(0.25),
  },
  comment: {
    ...THEME.typography.size.default,
    lineHeight: 22,
    marginBottom: THEME.spacing.default(0.5),
  },
  separator: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 1,
    width: '100%',
    bottom: 0,
    left: 0,
  },
});

export default styles;
