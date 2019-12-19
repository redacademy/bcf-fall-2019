import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContent: {paddingBottom: THEME.spacing.default(3)},
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
    ...THEME.typography.size.title,
    color: THEME.colors.white,
    ...THEME.typography.regular,
  },
  eventLocation: {
    color: THEME.colors.white,
    ...THEME.typography.size.caption,
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
  lastInfo: {marginTop: 0, marginBottom: 0},
  cols2: {
    flex: 1,
  },
  firstColumn: {
    marginRight: 16,
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
  eventDetails: {
    flexDirection: 'row',
  },
  hostSection: {
    marginRight: THEME.spacing.default(),
  },
  hostInfoSection: {flex: 1},
  infoText: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.semibold,
    marginBottom: THEME.spacing.default(0.25),
  },
  hostField: {
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    borderColor: THEME.colors.grey,
    backgroundColor: THEME.colors.paleGrey,
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: THEME.spacing.default(0.75),
    paddingHorizontal: THEME.spacing.default(0.75),
  },
  hostText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
  },
  hostBio: {
    paddingVertical: THEME.spacing.default(0.75),
    height: 100,
  },
  hostImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  eventReviewsButton: {
    marginTop: THEME.spacing.default(2.25),
  },
  container: {
    position: 'absolute',
    width: '100%',
    bottom: 10,
    padding: THEME.spacing.default(0.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  RectangleShapeView: {
    ...THEME.borders.radius.default,
    width: '100%',
    height: 58,
    paddingHorizontal: THEME.spacing.default(0.75),
    backgroundColor: THEME.colors.astronautBlue,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  eventBookingPrice: {
    ...THEME.typography.size.default,
    color: THEME.colors.white,
  },
  eventBookingButton: {
    ...THEME.borders.width.default,
    ...THEME.borders.radius.default,
    width: 72,
    height: 36,
    borderColor: THEME.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventBookingButtonText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.white,
  },
});

export default styles;
