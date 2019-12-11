import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contactPage: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contactTitle: {
    fontWeight: '300',
    color: '#013859',
    fontSize: 52,
    paddingBottom: 24,
  },
  contactSubHead: {
    color: '#013859',
    paddingBottom: 24,
    fontSize: 23,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: '700',
  },
  contactAddress: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
  },
  contactNumber: {
    paddingVertical: 16,
    fontSize: 18,
    color: '#013859',
    textDecorationLine: 'underline',
  },
  contactEmail: {
    paddingVertical: 16,
    fontSize: 18,
    color: '#013859',
    textDecorationLine: 'underline',
  },
  contactSocialMedia: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  contactSocialMediaIcon: {
    marginRight: 28,
  },
});

export default styles;
