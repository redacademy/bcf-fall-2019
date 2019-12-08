import AsyncStorage from '@react-native-community/async-storage';

export const getOnboarding = async () => {
  try {
    return await AsyncStorage.getItem('isOnBoardingCompleted');
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeOnboarding = async () => {
  try {
    return await AsyncStorage.setItem(`isOnBoardingCompleted`, `true`);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addViewer = async viewer => {
  try {
    return await AsyncStorage.setItem(
      `user`,
      JSON.stringify({
        id: viewer.id,
        token: viewer.token,
      }),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getViewer = async () => {
  try {
    return await AsyncStorage.getItem('user');
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeViewer = async () => {
  try {
    return await AsyncStorage.removeItem(`user`);
  } catch (e) {
    console.log(e);
    return false;
  }
};
