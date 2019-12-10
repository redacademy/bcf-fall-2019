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
});

export default styles;
