import {StyleSheet} from 'react-native';
import {THEME} from '../../../config/';

const styles = StyleSheet.create({
  container: {
    ...THEME.padding.appScreen,
    minHeight: '100%',
  },
  dataWrapper: {
    paddingBottom: THEME.spacing.default(7),
  },
  noDataWrapper: {
    paddingTop: THEME.spacing.default(3),
  },
  noDataText: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
    textAlign: 'center',
    marginBottom: THEME.spacing.default(2.25),
  },
  noDataImage: {
    width: 128,
    height: 128,
    alignSelf: 'center',
    marginBottom: THEME.spacing.default(2.25),
  },
});

export default styles;
