import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    ...THEME.padding.appScreen,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
  text: {
    ...THEME.typography.size.default,
    color: THEME.colors.astronautBlue,
    textAlign: 'center',
    marginTop: THEME.spacing.default(),
    marginBottom: THEME.spacing.default(),
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: THEME.colors.grey,
    marginBottom: THEME.spacing.default(3),
  },
});

export default styles;
