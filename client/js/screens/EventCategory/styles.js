import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    ...THEME.padding.appScreen,
    paddingTop: THEME.spacing.default(),
    paddingBottom: THEME.spacing.default(3),
  },
  filterWrapper: {
    flexDirection: 'row',
  },
  eventsNumber: {
    ...THEME.typography.size.caption,
  },
  dynamicHeader: {
    position: 'absolute',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '100%',
  },
  buttonFilter: {
    backgroundColor: THEME.colors.astronautBlue,
    borderRadius: 16,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: THEME.spacing.default(0.75),
    marginRight: THEME.spacing.default(0.75),
    paddingLeft: THEME.spacing.default(0.875),
    paddingRight: THEME.spacing.default(0.25),
  },
  buttonFilterText: {
    ...THEME.typography.size.caption,
    marginRight: THEME.spacing.default(0.25),
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.white,
  },
});

export default styles;
