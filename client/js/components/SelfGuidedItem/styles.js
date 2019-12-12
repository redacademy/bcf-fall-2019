import {StyleSheet} from 'react-native';
import {THEME} from '../../config';

const styles = StyleSheet.create({
  title: {
    color: THEME.colors.white,
    fontFamily: THEME.typography.bold.fontFamily,
    fontSize: THEME.typography.size.title.fontSize,
    shadowColor: THEME.shadow.onText.shadowColor,
  },
  subTitles: {
    color: THEME.colors.white,
  },
  infobox: {
    backgroundColor: THEME.colors.white,
    padding: 5,
    marginRight: 30,
    fontSize: THEME.typography.size.caption.fontSize,
    width: '80%',
  },
  location: {
    color: THEME.colors.white,
    marginBottom: 60,
  },
  container: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 170,
    marginBottom: 20,
  },
  infoContainer: {
    margin: 10,
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  contactSocialMediaIcon: {
    marginTop: 20,
    marginLeft: 10,
  },
});

export default styles;
