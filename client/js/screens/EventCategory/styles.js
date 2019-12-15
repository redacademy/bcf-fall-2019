import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    ...THEME.padding.appScreen,
  },
  eventsNumber: {
    ...THEME.typography.size.caption,
  },
  dynamicHeader: {
    position: 'absolute',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '100%',
  },
});

export default styles;
