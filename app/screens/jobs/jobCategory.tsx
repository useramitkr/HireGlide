import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import JobsCategory from '@/components/GlideUi/jobsCategory';
import AsyncStorage from '@react-native-async-storage/async-storage';

const JobCategory = () => {

  // Fetch User Data 
  const [userData, setUserData] = useState({
    name: '',
  });

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');

      setUserData({
        name: name || '',
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Fetch User Data End

  return (
    <View style={styles.scrollContainer}>
      <View>
        {/* Scree title  */}
        <Stack.Screen
          options={{
            headerTitle: 'Job Categories',
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: '#0489D9',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <StatusBar style="light" />
        {/* Screen title end  */}
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Hello {userData.name},</Text>
        <Text style={styles.headingText}>Let's find you a great job!</Text>
      </View>

      {/* Category list will be here  */}
      <JobsCategory />
    </View>
  )
}

export default JobCategory;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 16,
    backgroundColor: 'white',
    width: '100%',
  },
  heading: {
    fontSize: 16,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'semibold',
    marginTop: 8,
    width: '60%',
  },
})