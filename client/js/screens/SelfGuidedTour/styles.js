import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
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
    borderColor: 'black',
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
    borderColor: 'black',
    marginRight: 20,
    backgroundColor: THEME.colors.astronautBlue,
    color: 'white',
  },
  buttonText: {
    color: THEME.colors.astronautBlue,
    fontSize: 13,
    fontFamily: THEME.typography.bold.fontFamily,
    paddingLeft: 14,
  },
  buttonTextON: {
    color: THEME.colors.white,
    fontSize: 13,
    fontFamily: THEME.typography.bold.fontFamily,
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
  topPart: {
    opacity: 0.5,
  },
  bottomPart: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    paddingHorizontal: 24,
  },
  sortOff: {
    display: 'none',
  },
  sortHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  radioContainer: {
    paddingTop: 24,
  },
  title: {
    fontFamily: THEME.typography.regular.fontFamily,
    fontSize: THEME.typography.size.title.fontSize,
  },
  subTitle: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: 'bold',
    color: THEME.colors.astronautBlue,
  },
  singleSelection: {
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 5,
    color: THEME.colors.astronautBlue,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
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
