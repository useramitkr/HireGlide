import AsyncStorage from '@react-native-async-storage/async-storage';

// To check if user is still blocked
export const isBlockedByThankYouTimer = async (): Promise<boolean> => {
  const blockUntilStr = await AsyncStorage.getItem('thankYouBlockUntil');
  const blockUntil = blockUntilStr ? parseInt(blockUntilStr, 10) : 0;
  return Date.now() < blockUntil;
};

// To start the block for 2 minutes
export const startThankYouTimer = async (): Promise<void> => {
  const blockUntil = Date.now() + 1 * 30 * 1000; // 2 minutes in ms
  await AsyncStorage.setItem('thankYouBlockUntil', blockUntil.toString());
};
