import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  signInBgImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  title: {
    marginTop: 116,
    textAlign: 'center',
  },
  inputEmail: {
    marginBottom: THEME.padding.default(2),
  },
});

export default styles;
