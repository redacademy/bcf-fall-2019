import {StyleSheet} from 'react-native';
import {THEME} from '../../config/';

const styles = StyleSheet.create({
  container: {...THEME.padding.bottomGap},
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

  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
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
    width: 36,
  },
  leftText: {
    textAlign: 'left',
    marginRight: THEME.spacing.default(1.25),
  },
  rightText: {
    textAlign: 'right',
    marginLeft: THEME.spacing.default(1.25),
  },
  slider: {flex: 1},
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
  wrapperListsOfAudio: {
    marginTop: THEME.spacing.default(2.25),
  },
  sectionTitle: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
  },
});

export default styles;
