import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  pickerWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: THEME.colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  header: {
    ...THEME.padding.appScreen,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
  },
  headerTitle: {
    ...THEME.typography.size.default,
  },
  actionBtn: {
    ...THEME.typography.size.caption,
    fontWeight: THEME.typography.weight.medium,
    color: THEME.colors.blue,
  },
});

export default styles;
