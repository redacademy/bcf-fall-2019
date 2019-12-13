import {Dimensions, StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgCity: {
    width: '100%',
    height: width,
  },
  overlay: {
    ...THEME.padding.appScreen,
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.colors.grey,
  },
  centerOverlayContents: {
    justifyContent: 'center',
  },
  wrapperMain: {
    position: 'absolute',
    width: '100%',
    bottom: 16,
  },
  wrapperLocation: {
    marginBottom: THEME.spacing.default(2),
  },
  title: {
    ...THEME.typography.bold,
    ...THEME.shadow.onText,
    color: THEME.colors.white,
    textAlign: 'center',
    fontSize: 34,
    lineHeight: 52,
    letterSpacing: 0.25,
  },
  textChangeLocation: {
    ...THEME.shadow.onText,
    ...THEME.typography.size.caption,
    color: THEME.colors.white,
    lineHeight: 16,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 46,
    borderRadius: 23,
    backgroundColor: THEME.colors.white,
    paddingHorizontal: THEME.spacing.default(0.5),
  },
  icSearch: {
    marginRight: THEME.spacing.default(0.5),
  },
  placeholder: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
  },
  contents: {
    paddingTop: THEME.spacing.default(3),
  },
  wrapperSelfGuidedTour: {
    ...THEME.borders.radius.default,
    overflow: 'hidden',
    width: '100%',
    height: 166,
  },
  textSelfGuidedTour: {
    ...THEME.typography.bold,
    ...THEME.shadow.onText,
    color: THEME.colors.white,
    textAlign: 'center',
    fontSize: 24,
  },
  section: {
    ...THEME.padding.appScreen,
    marginBottom: THEME.spacing.default(3),
  },
  sectionCategory: {
    marginBottom: THEME.spacing.default(2),
  },
  sectionTitle: {
    ...THEME.typography.bold,
    fontSize: 24,
    color: THEME.colors.astronautBlue,
    marginBottom: THEME.spacing.default(0.5),
  },
  sectionCategoryTitle: {
    paddingLeft: 24,
  },
  categoryList: {
    width: '100%',
    height: 100 + THEME.spacing.default(1),
  },
  wrapperCol2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  noData: {
    ...THEME.typography.size.default,
    color: THEME.colors.grey,
  },
});

export default styles;
