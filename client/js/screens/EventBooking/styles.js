import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  headerBackArrow: {
    marginLeft: 12,
  },
  headerMenu: {
    marginRight: 12,
  },
  container: {
    ...THEME.padding.appScreen,
    paddingTop: THEME.spacing.default(),
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
  title: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
    marginBottom: 6,
  },
  titleRegular: {
    fontWeight: THEME.typography.weight.regular,
  },
  currencyText: {
    color: THEME.colors.black,
    marginBottom: 0,
  },
  priceText: {flex: 1, textAlign: 'right', marginBottom: 0},
  inputDefault: {
    ...THEME.padding.inputField,
    ...THEME.typography.size.default,
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    color: THEME.colors.black,
    backgroundColor: THEME.colors.paleGrey,
    borderColor: THEME.colors.grey,
  },
  flexRow: {flexDirection: 'row'},
  columnItem: {flex: 1},
  firstColumnItem: {marginRight: THEME.spacing.default()},
  firstInput: {
    marginTop: THEME.spacing.default(1.5),
  },
  input: {
    marginBottom: THEME.spacing.default(0.75),
  },
  lastInput: {
    marginBottom: THEME.spacing.default(2),
  },
  checkBox: {
    marginTop: 6,
    marginBottom: THEME.spacing.default(0.75),
  },
  textCheckbox: {
    ...THEME.typography.size.caption,
    marginLeft: THEME.spacing.default(0.5),
  },

  flexField: {
    marginRight: THEME.spacing.default(0.5),
    minWidth: 80,
  },
  whatIs: {
    flex: 1,
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
  },
  imgCvv: {
    width: 36,
    height: 36,
    marginRight: THEME.spacing.default(0.25),
  },
  textCvv: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.astronautBlue,
  },
});

export default styles;
