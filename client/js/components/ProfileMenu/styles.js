import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    height: 52,
  },
  separator: {
    position: 'absolute',
    left: 0,
    width: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 1,
  },
  flexRow: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    ...THEME.typography.size.default,
  },
});

export default styles;
