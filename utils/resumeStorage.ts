import AsyncStorage from '@react-native-async-storage/async-storage';

// Define a key for storing the resume data
const RESUME_DATA_KEY = 'resumeData';

/**
 * Saves the complete resume data object to AsyncStorage.
 * The object is serialized to a JSON string before saving.
 * @param resume The resume data object to be stored.
 */
export const saveResumeData = async (resume: any): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(resume);
    await AsyncStorage.setItem(RESUME_DATA_KEY, jsonValue);
    console.log('✅ Resume data saved successfully.');
  } catch (e) {
    console.error('❌ Failed to save resume data to AsyncStorage:', e);
  }
};

/**
 * Retrieves the resume data object from AsyncStorage.
 * The JSON string is parsed back into a JavaScript object.
 * @returns The resume data object or null if no data is found.
 */
export const getResumeData = async (): Promise<any | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(RESUME_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('❌ Failed to load resume data from AsyncStorage:', e);
    return null;
  }
};
