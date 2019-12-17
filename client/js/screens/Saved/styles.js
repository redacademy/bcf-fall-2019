import {StyleSheet} from 'react-native';
import {THEME} from '../../config/';

const styles = StyleSheet.create({
  container: {
    ...THEME.padding.appScreen,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
  tabWrapper: {
    ...THEME.borders.width.default,
    borderColor: THEME.colors.astronautBlue,
    height: 31,
    flex: 1,
    justifyContent: 'center',
  },
  tabRight: {
    borderTopRightRadius: THEME.borders.radius.default.borderRadius,
    borderBottomRightRadius: THEME.borders.radius.default.borderRadius,
    borderLeftWidth: 0,
  },
  tabLeft: {
    borderTopLeftRadius: THEME.borders.radius.default.borderRadius,
    borderBottomLeftRadius: THEME.borders.radius.default.borderRadius,
    borderRightWidth: 0,
  },
  tabActive: {
    backgroundColor: THEME.colors.astronautBlue,
  },
  tabLabel: {
    ...THEME.typography.size.caption,
    textAlign: 'center',
    color: THEME.colors.astronautBlue,
  },
  labelActive: {
    color: THEME.colors.white,
  },
});

export default styles;
