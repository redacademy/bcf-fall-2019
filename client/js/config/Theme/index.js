import {Platform} from 'react-native';

const THEME = {
  typography: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    bold: {
      fontFamily: 'Montserrat-SemiBold',
    },
    size: {
      default: {
        fontSize: 17,
      },
      caption: {
        fontSize: 12,
      },
    },
    weight: {
      medium: '500',
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
    white: '#FFFFFF',
    black: '#000000',
    grey: 'rgba(0,0,0,0.5)',
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
    default: int => {
      return 16 * int;
    },
    accountScreen: {
      paddingHorizontal: 32,
    },
    inputField: {
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
  },
};

export default THEME;
