import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  profileWrap: {
    alignItems: 'center',
    marginTop: THEME.spacing.default(),
    marginBottom: THEME.spacing.default(0.25),
  },
  profileImg: {
    width: '48%',
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
  locationTitle: {
    ...THEME.typography.size.default,
    fontWeight: THEME.typography.weight.regular,
    color: THEME.colors.astronautBlue,
    marginBottom: 6,
  },
  locaitonInput: {
    ...THEME.padding.inputField,
    ...THEME.typography.size.default,
    ...THEME.borders.radius.default,
    ...THEME.borders.width.default,
    color: 'rgba(0,0,0,0.25)',
    backgroundColor: THEME.colors.paleGrey,
    borderColor: THEME.colors.grey,
  },
  locationTextSelected: {
    color: THEME.colors.black,
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
