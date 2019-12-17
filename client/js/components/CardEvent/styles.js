import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    marginTop: THEME.spacing.default(0.75),
  },
  bgImg: {
    height: 150,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bgImgWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    padding: THEME.spacing.default(0.5),
  },
  title: {
    ...THEME.typography.bold,
    color: THEME.colors.white,
    fontSize: 16,
    marginBottom: THEME.spacing.default(0.25),
  },
  location: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.white,
  },
  info: {
    alignSelf: 'center',
    position: 'absolute',
    width: '100%',
    marginBottom: THEME.spacing.default(0.5),
    bottom: 0,
  },
  details: {
    marginTop: THEME.spacing.default(0.25),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsWrapper: {
    flexDirection: 'row',
  },
  shareWrapper: {
    flexDirection: 'row-reverse',
  },
  detailsInfo: {
    marginRight: THEME.spacing.default(0.5),
  },
  caption: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.white,
  },
  detailContent: {
    ...THEME.borders.radius.default,
    overflow: 'hidden',
    ...THEME.typography.size.caption,
    backgroundColor: THEME.colors.white,
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.medium,
    marginTop: THEME.spacing.default(0.25),
    paddingHorizontal: 14,
    paddingVertical: 4,
  },
  buttons: {
    marginTop: THEME.spacing.default(1.25),
  },
  icShare: {
    marginRight: THEME.spacing.default(0.75),
  },
});

export default styles;
