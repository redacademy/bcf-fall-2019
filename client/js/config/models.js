import AsyncStorage from '@react-native-community/async-storage';

export const getOnboarding = async () => {
  try {
    return await AsyncStorage.getItem('isOnBoardingCompleted');
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const setOnboarding = async () => {
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

export const addSave = async saveID => {
  try {
    return await AsyncStorage.setItem(
      `${saveID}`,
      JSON.stringify({
        id: saveID,
        saved_on: new Date(),
      }),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeSave = async saveID => {
  try {
    return await AsyncStorage.removeItem(`${saveID}`);
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getAllSaves = async () => {
  const keys = await AsyncStorage.getAllKeys();
  try {
    const values = await AsyncStorage.multiGet(keys);
    return values.filter(value => value[1].includes('saved_on'));
  } catch (e) {
    console.log(e);
    return false;
  }
};
