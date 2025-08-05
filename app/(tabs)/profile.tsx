import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUserData, isUserLoggedIn, clearUserData } from '@/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    state: '',
  });

  const [loggedIn, setLoggedIn] = useState(false);

  // Fetches user data from storage
  const getData = async () => {
    const loginStatus = await isUserLoggedIn();
    setLoggedIn(loginStatus);

    if (!loginStatus) {
      Alert.alert(
        'Login Required',
        'You need to log in to access these features.',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Okay',
            onPress: () => router.replace('/screens/auth/login'),
          },
        ],
        { cancelable: false }
      );
      return;
    }

    try {
      const user = await getUserData();
      const name = await AsyncStorage.getItem('userName'); 
      const email = await AsyncStorage.getItem('userEmail'); 
      const password = await AsyncStorage.getItem('userPassword'); 
      const phone = await AsyncStorage.getItem('userPhone'); 
      const state = await AsyncStorage.getItem('userState'); 

      if (user && typeof user === 'object') {
        setUserData({
          name: user.name || name || '',
          email: user.email || email || '',
          password: user.password || password || '',
          phone: user.phone || phone || '',
          state: user.state || state || '',
        });
      } else {
        setUserData({
          name: name || '',
          email: email || '',
          password: password || '',
          phone: phone || '',
          state: state || '',
        });
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Clear all user data
  const handleClear = async () => {
    try {
      await clearUserData();
      await getData();
      Alert.alert('Success', 'User data has been cleared.');
    } catch (error) {
      console.error('Failed to clear data:', error);
      Alert.alert('Error', 'Failed to clear data.');
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await clearUserData();
      setLoggedIn(false);
      Alert.alert('Logged Out', 'You have been logged out.');
      router.replace('/screens/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
      Alert.alert('Error', 'Logout failed.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>User Profile</Text>

      <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: loggedIn ? 'green' : 'red' },
          ]}
        />
        <Text style={styles.statusText}>
          {loggedIn ? 'Logged In' : 'Logged Out'}
        </Text>
      </View>

      {loggedIn && (
        <>
          <View style={styles.itemContainer}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>
              {userData.name || 'Not available'}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>
              {userData.email || 'Not available'}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.label}>Password</Text>
            <Text style={styles.value}>
              {userData.password || 'Not available'}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>
              {userData.phone || 'Not available'}
            </Text>
          </View>

          <View style={styles.itemContainer}>
            <Text style={styles.label}>State</Text>
            <Text style={styles.value}>
              {userData.state || 'Not available'}
            </Text>
          </View>

          <Pressable onPress={handleClear} style={styles.button}>
            <Text style={styles.buttonText}>Clear All Data</Text>
          </Pressable>

          <Pressable
            onPress={handleLogout}
            style={[styles.button, { backgroundColor: '#555' }]}
          >
            <Text style={styles.buttonText}>Logout</Text>
          </Pressable>
        </>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFE0',
    flexGrow: 1,
    paddingBottom: 200,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303742',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#303742',
  },
  itemContainer: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#303742',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#0489D9',
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#DC143C',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
