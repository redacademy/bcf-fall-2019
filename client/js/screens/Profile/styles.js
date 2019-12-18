import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  dynamicHeader: {
    position: 'absolute',
    width: '100%',
  },
  header: {
    width: '100%',
    height: '100%',
  },
  container: {
    ...THEME.padding.appScreen,
    paddingTop: THEME.spacing.default(),
  },
  imageProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: THEME.spacing.default(),
  },
  noImage: {
    backgroundColor: THEME.colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initial: {
    fontSize: 52,
    fontWeight: THEME.typography.weight.bold,
    color: THEME.colors.white,
  },
  name: {
    textAlign: 'center',
    marginTop: THEME.spacing.default(0.5),
  },
  email: {
    ...THEME.typography.size.caption,
    color: THEME.colors.grey,
    textAlign: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: THEME.spacing.default(1.5),
  },
  flexChildren: {
    flex: 1,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexMiddle: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: THEME.colors.astronautBlue,
  },
  label: {
    ...THEME.typography.size.caption,
    color: THEME.colors.astronautBlue,
  },
  content: {
    ...THEME.typography.size.title,
  },
  sectionHeader: {
    marginTop: THEME.spacing.default(2.25),
  },
  section: {
    marginTop: THEME.spacing.default(0.25),
  },
  lastSection: {
    marginBottom: THEME.spacing.default(2.25),
  },
});

export default styles;
