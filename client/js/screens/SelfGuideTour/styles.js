import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
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
    width: '25%',
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 10,
  },
  audionButtonOn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '25%',
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 10,
    backgroundColor: THEME.colors.astronautBlue,
    color: 'white',
  },
  buttonTextON: {
    color: THEME.colors.white,
  },
});

export default styles;
