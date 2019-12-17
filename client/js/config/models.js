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

export const addEventBooked = async event => {
  try {
    console.log(event);
    return await AsyncStorage.setItem(
      `${event.id}`,
      JSON.stringify({
        id: event.id,
        create_at: new Date(),
      }),
    );
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllEventsBooked = async () => {
  const keys = await AsyncStorage.getAllKeys();
  try {
    const events = await AsyncStorage.multiGet(keys);
    return events.filter(event => event[1].includes('create_at'));
  } catch (error) {
    console.log(error);
    return false;
  }
};
