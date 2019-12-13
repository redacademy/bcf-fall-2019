import {Platform} from 'react-native';

const THEME = {
  spacing: {
    default: (int = 1) => {
      return 16 * int;
    },
  },
  typography: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    bold: {
      fontFamily: 'Montserrat-SemiBold',
    },
    size: {
      caption: {
        fontSize: 12,
      },
      default: {
        fontSize: 17,
      },
      title: {
        fontSize: 22,
      },
    },
    weight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    button: {
      fontSize: 17,
      fontWeight: '400',
      textAlign: 'center',
      letterSpacing: -0.41,
      lineHeight: 22,
    },
  },
  borders: {
    radius: {
      default: {
        borderRadius: 4,
      },
    },
    width: {
      default: {
        borderWidth: 1,
      },
    },
  },
  colors: {
    astronautBlue: '#013859',
    puertoRico: '#3BBFB2',
    tropicalRainForest: '#027353',
    burntSienna: '#F1785B',
    paleLeaf: '#BACFB6',
    blue: 'rgba(0, 122, 255, 1)',
    white: '#FFFFFF',
    black: '#000000',
    grey: 'rgba(0, 0, 0, 0.5)',
    paleGrey: '#F8FBFD',
  },
  shadow: {
    onText: {
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.5,
          shadowRadius: 4,
        },
        android: {
          elevation: 3,
        },
      }),
    },
  },
  padding: {
    accountScreen: {
      paddingTop: '22%',
      paddingHorizontal: 32,
    },
    appScreen: {
      paddingHorizontal: 24,
    },
    inputField: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    bottomGap: {
      paddingBottom: '12%',
    },
  },
  button: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F1785B',
    paddingVertical: 12,
  },
};

export default THEME;
