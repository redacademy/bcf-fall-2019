import {Dimensions, StyleSheet} from 'react-native';
import {THEME} from '../../config';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imgCity: {
    width: '100%',
    height: width,
  },
  overlay: {
    width: '100%',
    flex: 1,
    backgroundColor: THEME.colors.grey,
  },
});

export default styles;
