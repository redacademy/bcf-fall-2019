import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  signInBgImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  title: {
    marginTop: 140,
    marginBottom: 32,
    textAlign: 'center',
  },
  inputEmail: {
    marginBottom: THEME.spacing.default(2),
  },
  inputPassword: {
    marginBottom: THEME.spacing.default(1),
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
    marginLeft: THEME.spacing.default(0.5),
    color: THEME.colors.astronautBlue,
    fontWeight: THEME.typography.weight.medium,
    flex: 1,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },
  button: {
    width: 147,
    alignSelf: 'center',
    marginBottom: 16,
  },
  text: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
    textAlign: 'center',
    marginBottom: 16,
  },
  wrapSocial: {
    height: 46,
    marginBottom: 36,
  },
  socialIcon: {
    flex: 1,
  },
  secondIcon: {marginLeft: 16},
  btnSocial: {
    ...THEME.borders.radius.default,
    ...THEME.shadow.onText,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialText: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.semibold,
    marginLeft: 4,
  },
  btnFacebook: {
    backgroundColor: 'rgb(17, 82, 187)',
  },
  textFacebook: {
    color: THEME.colors.white,
  },
  btnGoogle: {
    backgroundColor: THEME.colors.white,
  },
  textGoogle: {
    color: THEME.colors.grey,
  },
  lastText: {marginBottom: 8},
  textNewAcc: {
    fontWeight: THEME.typography.weight.medium,
    textDecorationLine: 'underline',
  },
});

export default styles;
