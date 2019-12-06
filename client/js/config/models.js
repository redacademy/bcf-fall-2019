import AsyncStorage from '@react-native-community/async-storage';

export const addViewer = async viewer => {
  try {
    return await AsyncStorage.setItem(
      `${viewer}`,
      JSON.stringify({
        id: viewer.id,
        token: viewer.token,
        viewerLoggedDate: new Date(),
      }),
    );
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getViewer = async () => {
  let value = null;
  try {
    const keys = await AsyncStorage.getAllKeys();
    value = await AsyncStorage.multiGet(keys);
    return value;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const removeViewer = async viewerId => {
  try {
    return await AsyncStorage.removeItem(`${viewerId}`);
  } catch (e) {
    console.log(e);
    return false;
  }
};
