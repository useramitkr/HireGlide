import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Platform
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { getUserData, isUserLoggedIn } from '@/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useFocusEffect } from 'expo-router';
import LogoutDel from '@/components/GlideUi/logoutDel';
import ApplicationProgressReport from '@/components/GlideUi/ApplicationProgressReport';
import ResumeBoxes from '@/components/GlideUi/resumeBoxes';
import ResumeAlert from '@/components/GlideUi/resumeAlert';
import HowItWorksCard from '@/components/GlideUi/howItWorks';
import TncCard from '@/components/GlideUi/TncCard';

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

  // Fetches user data from storage.
  const getData = useCallback (async () => {
    const loginStatus = await isUserLoggedIn();
    setLoggedIn(loginStatus);

    if (!loginStatus) {
      Alert.alert(
        'Login Required',
        'You need to log in to access these features.',
        [
          { 
            text: 'Cancel', 
            style: 'cancel', 
            onPress: () => router.replace('/')
          },
          {
            text: 'Okay',
            onPress: () => router.replace('/screens/auth/login'),
          },
        ],
        { cancelable: false }
      );
      // Exit the function to prevent rendering protected content
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
  }, [router]);

  // Use useFocusEffect to call getData whenever the screen gains focus.
  // This ensures the login status is always checked when the user navigates here.
  useFocusEffect(useCallback(() => {
    getData();
  }, [getData]));

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loggedIn ? (
        <>
          <View style={styles.profileTop}>
            <Text style={styles.heading}>Hello, {userData.name || 'Guest'}!</Text>
            <View style={styles.statusContainer}>
              <View style={[styles.statusDot, { backgroundColor: 'green' }]} />
              <Text style={styles.statusText}>Logged In</Text>
            </View>
          </View>
          
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Account Details</Text>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>{userData.email || 'Not available'}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.label}>Phone</Text>
              <Text style={styles.value}>{userData.phone || 'Not available'}</Text>
            </View>
          </View>
          
          <ApplicationProgressReport />
          <ResumeBoxes />
          <ResumeAlert />
          <HowItWorksCard />
          <TncCard />
          <LogoutDel />
        </>
      ) : (
        // Render nothing or a loading indicator while not logged in
        null
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
    paddingBottom: 100,
  },
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
    marginTop: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7e9',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1f2937',
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  value: {
    fontSize: 16,
    color: '#1f2937',
    fontWeight: '600',
  },
});
