import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27%',
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 20,
    marginBottom: 15,
  },
  audionButtonOn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '27%',
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 20,
    backgroundColor: THEME.colors.astronautBlue,
    color: 'white',
  },
  buttonTextON: {
    color: THEME.colors.white,
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
  },
  sortOff: {
    display: 'none',
  },
  sortHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  radioContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomColor: THEME.colors.black,
    borderBottomWidth: 1,
  },
  title: {
    fontFamily: THEME.typography.regular.fontFamily,
    fontSize: THEME.typography.size.title.fontSize,
  },
  subTitle: {
    fontFamily: THEME.typography.bold.fontFamily,
    paddingTop: 5,
    paddingBottom: 5,
  },
  singleSelection: {
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 5,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
