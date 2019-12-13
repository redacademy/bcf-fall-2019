import {StyleSheet} from 'react-native';
import {THEME} from '../../config/';

const styles = StyleSheet.create({
  imageMainBackground: {
    width: '100%',
    height: 230,
    opacity: 0.16,
  },
  wrapperTrailImage: {
    position: 'absolute',
    top: 135,
    width: '100%',
    alignItems: 'center',
  },
  circleTrailImage: {
    width: 130,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TrailImage: {
    borderRadius: 60,
    width: 120,
    height: 120,
  },
  contents: {
    ...THEME.padding.appScreen,
  },
  title: {
    marginTop: THEME.spacing.default(2.75),
    ...THEME.typography.bold,
    color: THEME.colors.astronautBlue,
    fontSize: 24,
    textAlign: 'center',
  },
  location: {
    marginTop: THEME.spacing.default(0.25),
    ...THEME.typography.size.caption,
    textAlign: 'center',
    color: THEME.colors.grey,
  },
  wrapperController: {
    marginTop: THEME.spacing.default(2.25),
  },
  wrapperSlider: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSlider: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.grey,
  },
  wrapperControllerIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: THEME.spacing.default(3),
    marginTop: THEME.spacing.default(0.25),
  },
  hotspotController: {
    width: 46,
    height: 46,
    opacity: 0.16,
    borderRadius: 23,
  },
  activeController: {
    opacity: 1,
  },
});

export default styles;
