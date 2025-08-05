import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';
const LOGIN_KEY = 'isLoggedIn';

/**
 * Save user data and mark user as logged in
 */
export const storeUserData = async (user: object) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    await AsyncStorage.setItem(LOGIN_KEY, 'true');
  } catch (error) {
    console.error('❌ Failed to save user data:', error);
  }
};

/**
 * Get stored user data
 */
export const getUserData = async (): Promise<any | null> => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('❌ Failed to get user data:', error);
    return null;
  }
};

/**
 * Check if user is logged in
 */
export const isUserLoggedIn = async (): Promise<boolean> => {
  try {
    const status = await AsyncStorage.getItem(LOGIN_KEY);
    return status === 'true';
  } catch (error) {
    console.error('❌ Failed to check login status:', error);
    return false;
  }
};

/**
 * Clear user data and mark user as logged out
 */
export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    await AsyncStorage.setItem(LOGIN_KEY, 'false');
  } catch (error) {
    console.error('❌ Failed to clear user data:', error);
  }
};
