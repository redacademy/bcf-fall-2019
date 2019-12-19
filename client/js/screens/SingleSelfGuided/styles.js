import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 12,
  },
  icMenu: {
    marginRight: 12,
  },
  eventImg: {
    width: '100%',
    height: width,
  },
  overlay: {
    ...THEME.padding.appScreen,
    backgroundColor: THEME.colors.grey,
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    paddingVertical: THEME.spacing.default(0.5),
  },
  eventName: {
    color: THEME.colors.white,
    fontSize: 36,
    ...THEME.typography.regular,
  },
  flexRow: {
    marginTop: THEME.spacing.default(0.25),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightRow: {
    marginRight: THEME.spacing.default(0.75),
  },
  eventLocation: {
    color: THEME.colors.white,
    ...THEME.typography.size.caption,
  },
  ratingWrapper: {
    marginTop: THEME.spacing.default(0.25),
    flexDirection: 'row',
  },
  ratingText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.white,
    marginRight: THEME.spacing.default(0.375),
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  icBtn: {
    marginLeft: THEME.spacing.default(0.75),
  },
  eventScreenInfo: {
    ...THEME.padding.appScreen,
    paddingTop: 16,
    paddingBottom: 56,
  },
  infoDetails: {
    marginTop: 0,
    marginBottom: THEME.spacing.default(0.75),
  },
  cols2: {
    flex: 1,
  },
  firstColumn: {
    marginRight: 16,
  },
  audioLabel: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.semibold,
    marginBottom: THEME.spacing.default(0.25),
  },
  audioWrapper: {
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    borderColor: THEME.colors.grey,
    backgroundColor: THEME.colors.paleGrey,
    paddingLeft: 2,
    paddingRight: THEME.spacing.default(0.75),
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioIcon: {
    width: 32,
    height: 32,
    marginRight: THEME.spacing.default(0.25),
  },
  audioTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  audioText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
  },
  audioLinkText: {
    marginLeft: THEME.spacing.default(0.75),
    textDecorationLine: 'underline',
  },
  eventInfoTitle: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.semibold,
    marginTop: THEME.spacing.default(2.25),
    marginBottom: THEME.spacing.default(0.25),
  },
  eventInfoDescription: {
    fontSize: 16,
    lineHeight: 22,
  },
  reviewWrapper: {
    marginBottom: THEME.spacing.default(2.25),
  },
  eventMap: {
    width: '100%',
    height: 201,
  },
  eventMapContainer: {
    paddingTop: 36,
  },
  eventViewMap: {
    color: THEME.colors.astronautBlue,
    textDecorationLine: 'underline',
    paddingTop: 10,
  },
});

export default styles;
