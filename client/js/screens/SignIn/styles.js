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
  inputPassword: {
    marginBottom: THEME.padding.default(1),
  },
  columnCols2: {
    height: 24,
    marginBottom: 16,
    paddingLeft: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot: {
    ...THEME.typography.size.caption,
    marginLeft: THEME.padding.default(0.5),
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.medium,
    flex: 1,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  button: {
    width: 147,
    alignSelf: 'center',
  },
});

export default styles;
