import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { getUserData, isUserLoggedIn } from '@/utils/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import LogoutDel from '@/components/GlideUi/logoutDel';

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


  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* <View style={styles.statusContainer}>
        <View
          style={[
            styles.statusDot,
            { backgroundColor: loggedIn ? 'green' : 'red' },
          ]}
        />
        <Text style={styles.statusText}>
          {loggedIn ? 'Logged In' : 'Logged Out'}
        </Text>
      </View> */}

      {loggedIn && (
        <>
          <View style={styles.profileTop}>
            <View>
              <Text style={styles.heading}>Hello, {userData.name || 'Guest'}!</Text>
            </View>

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
          </View>

          <View style={styles.itemContainer}>
            {/* <Text style={styles.label}>Name</Text> */}
            <Text style={styles.value}>
              {userData.email || 'Not available'}
            </Text>
            <Text style={styles.value}>
              {userData.phone || 'Not available'}
            </Text>
          </View>

          {/* Blocked Timer  */}





          {/* Logout and Delete Acount  */}
          <LogoutDel />
        </>
      )}
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    paddingBottom: 200,
    paddingTop: 60,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#303742',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  profileTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: '#303742',
    padding: 10,
    borderRadius: 8,
  },
  // button: {
  //   backgroundColor: '#DC143C',
  //   padding: 15,
  //   borderRadius: 12,
  //   alignItems: 'center',
  //   marginTop: 20,
  // },
  // buttonText: {
  //   color: '#fff',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
});
