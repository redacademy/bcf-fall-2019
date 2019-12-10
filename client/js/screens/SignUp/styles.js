import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  profileWrap: {
    alignItems: 'center',
    marginTop: THEME.spacing.default(),
    marginBottom: THEME.spacing.default(0.25),
  },
  profileImg: {
    width: 169,
    height: 169,
  },
  title: {
    textAlign: 'center',
  },
  text: {
    ...THEME.typography.size.caption,
    textAlign: 'center',
    marginBottom: THEME.spacing.default(3),
  },
  formTitle: {
    marginBottom: THEME.spacing.default(),
  },
  input: {
    marginBottom: THEME.spacing.default(1.5),
  },
  lastInput: {
    marginBottom: THEME.spacing.default(3),
  },
  billingTitle: {
    marginBottom: THEME.spacing.default(0.5),
  },
  skipView: {
    height: 24,
    justifyContent: 'center',
    paddingLeft: 2,
    marginBottom: THEME.spacing.default(),
  },
  textSkip: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
    marginLeft: THEME.spacing.default(0.5),
  },
  cardFormMargin: {
    marginBottom: THEME.spacing.default(3),
  },
});

export default styles;
