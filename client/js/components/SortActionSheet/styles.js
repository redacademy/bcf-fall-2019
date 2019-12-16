import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  // container: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   zIndex: 999,
  //   backgroundColor: THEME.colors.grey,
  // },
  actionSheetWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: THEME.colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  header: {
    ...THEME.padding.appScreen,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  headerTitle: {
    ...THEME.typography.size.default,
  },
  actionBtn: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.blue,
  },
  filterOptionsWrapper: {
    paddingTop: THEME.spacing.default(1.5),
    paddingBottom: THEME.spacing.default(),
  },
  optionWrapper: {
    ...THEME.padding.appScreen,
  },
  label: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
    marginBottom: THEME.spacing.default(0.75),
  },
  rightText: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
    marginLeft: THEME.spacing.default(0.5),
  },
  option: {
    marginBottom: THEME.spacing.default(0.75),
  },
  firstOption: {
    marginTop: THEME.spacing.default(),
    marginBottom: THEME.spacing.default(1.5),
  },
  lastOption: {
    marginBottom: THEME.spacing.default(1.5),
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

export default styles;
