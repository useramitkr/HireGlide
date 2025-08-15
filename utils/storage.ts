import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_KEY = 'user';
const LOGIN_KEY = 'isLoggedIn';

// Pre-built demo user data for manual login.
export const DEMO_USER_DATA = {
  name: 'Demo Singh',
  email: 'demo@hireglide.com',
  password: '12345',
  phone: '9876543210',
  state: 'Bihar',
};

/**
 * Saves user data and a login status flag to AsyncStorage.
 * @param user The user object to be stored.
 */
export const storeUserData = async (user: any) => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    await AsyncStorage.setItem(LOGIN_KEY, 'true');
  } catch (error) {
    console.error('❌ Failed to save user data:', error);
  }
};

/**
 * Retrieves the user object from AsyncStorage.
 * @returns The user object or null if not found.
 */
export const getUserData = async () => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('❌ Failed to get user data:', error);
    return null;
  }
};

/**
 * Checks if a user is currently logged in.
 * @returns A boolean indicating the login status.
 */
export const isUserLoggedIn = async () => {
  try {
    const status = await AsyncStorage.getItem(LOGIN_KEY);
    return status === 'true';
  } catch (error) {
    console.error('❌ Failed to check login status:', error);
    return false;
  }
};

/**
 * Clears user-related data from AsyncStorage.
 */
export const clearUserData = async () => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
    await AsyncStorage.setItem(LOGIN_KEY, 'false');
  } catch (error) {
    console.error('❌ Failed to clear user data:', error);
  }
};
