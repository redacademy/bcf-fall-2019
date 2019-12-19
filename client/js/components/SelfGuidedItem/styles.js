import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  title: {
    ...THEME.typography.bold,
    color: THEME.colors.white,
    fontSize: 16,
    marginBottom: THEME.spacing.default(0.25),
    marginTop: 8,
  },
  subTitles: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.white,
  },
  infobox: {
    marginRight: 8,
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
  location: {
    color: THEME.colors.white,
    marginBottom: 52,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 12,
  },
  infoContainer: {
    marginLeft: 8,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  contactSocialMediaIcon: {
    height: 20,
    width: 20,
    marginTop: THEME.spacing.default(1.35),
    marginRight: 8,
  },
  contactSocialMediaIconShare: {
    marginRight: THEME.spacing.default(0.75),
    marginTop: THEME.spacing.default(1.35),
  },
  backgroundImage: {
    height: 150,
    borderRadius: 4,
    overflow: 'hidden',
  },
  bgImgWrapper: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

export default styles;
