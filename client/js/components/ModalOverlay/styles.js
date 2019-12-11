import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  modalDefault: {
    position: 'absolute',
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
    backgroundColor: THEME.colors.grey,
  },
});

export default styles;
