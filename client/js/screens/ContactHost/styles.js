import {StyleSheet, Dimensions} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  title: {
    fontSize: 34,
    fontFamily: THEME.typography.regular.fontFamily,
    marginTop: 16,
    marginBottom: 8,
    width: '100%',
    height: 52,
    textAlign: 'center',
    letterSpacing: 0.25,
    color: THEME.colors.astronautBlue,
  },
  hostImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 8,
  },
  name: {
    fontSize: 17,
    color: THEME.colors.astronautBlue,
    textAlign: 'center',
    letterSpacing: 0.25,
    marginBottom: 16,
  },
  subtext: {
    fontSize: 16,
    color: THEME.colors.grey,
    textAlign: 'center',
    paddingHorizontal: 80,
    marginBottom: 32,
  },
  askText: {
    fontSize: 17,
    marginBottom: 6,
  },
  inputTextOne: {
    height: 160,
    backgroundColor: THEME.colors.paleGrey,
    paddingBottom: 126,
    paddingLeft: 16,
    paddingTop: 12,
    fontSize: 17,
    color: THEME.colors.grey,
    borderColor: THEME.colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
  },
  inputTextTwo: {
    height: 46,
    backgroundColor: THEME.colors.paleGrey,
    paddingBottom: 12,
    paddingLeft: 16,
    paddingTop: 12,
    fontSize: 17,
    color: THEME.colors.grey,
    borderColor: THEME.colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 36,
  },
});

export default styles;
