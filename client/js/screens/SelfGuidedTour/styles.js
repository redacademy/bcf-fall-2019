import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  dynamicHeader: {
    position: 'absolute',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '100%',
  },

  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 12,
    marginTop: 16,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27%',
    height: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: THEME.colors.astronautBlue,
    marginRight: 20,
    marginBottom: 12,
  },
  audionButtonOn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27%',
    height: 32,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: THEME.colors.astronautBlue,
    marginRight: 20,
    backgroundColor: THEME.colors.astronautBlue,
    color: 'white',
  },
  buttonText: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.semibold,
    paddingLeft: 14,
  },
  buttonTextON: {
    ...THEME.typography.size.caption,
    color: THEME.colors.white,
    fontWeight: THEME.typography.weight.semibold,
    paddingLeft: 14,
  },
  sortOn: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: THEME.colors.grey,
  },
  sortOff: {display: 'none'},
  bottomPart: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },

  sortHeader: {
    ...THEME.padding.appScreen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 48,
  },
  radioContainer: {
    ...THEME.padding.appScreen,
    marginTop: 24,
  },
  checkBoxContainer: {
    ...THEME.padding.appScreen,
    marginTop: 0,
  },

  title: {
    ...THEME.typography.regular,
    ...THEME.typography.size.title,
  },

  subTitle: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    color: THEME.colors.astronautBlue,
    marginBottom: THEME.spacing.default(0.75),
  },
  singleSelection: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
    marginLeft: THEME.spacing.default(0.5),
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 24,
    marginBottom: THEME.spacing.default(0.75),
  },
  tourNumbers: {
    ...THEME.typography.size.caption,
    marginLeft: 24,
  },
  sortTitle: {
    fontSize: 17,
    marginVertical: 13,
  },
  resetDoneSort: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.blue,
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginLeft: -10,
    width: '120%',
  },
  separatorTwo: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginLeft: -10,
    width: '120%',
    marginTop: 24,
    marginBottom: 16,
  },
});

export default styles;
