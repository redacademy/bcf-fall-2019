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
});

export default styles;
