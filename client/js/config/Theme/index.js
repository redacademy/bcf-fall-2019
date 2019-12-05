import {Platform} from 'react-native';

const THEME = {
  typography: {
    regular: {
      fontFamily: 'Montserrat-Regular',
    },
    bold: {
      fontFamily: 'Montserrat-SemiBold',
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
      paddingHorizontal: 32,
    },
  },
};

export default THEME;
