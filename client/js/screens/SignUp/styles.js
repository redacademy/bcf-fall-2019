import {StyleSheet} from 'react-native';
import {THEME} from '../../config';
import {ThemeColors} from 'react-navigation';

const styles = StyleSheet.create({
  profileWrap: {
    alignItems: 'center',
    marginBottom: 4,
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
  },
});

export default styles;
