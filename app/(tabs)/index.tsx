// import BannerAds from '@/components/gAds/bannerAds';
import HomeAnalytics from '@/components/GlideUi/homeAnalytics';
import JobCurator from '@/components/GlideUi/jobCurator';
import ResumeAlert from '@/components/GlideUi/resumeAlert';
import ServiceBoxes from '@/components/GlideUi/serviceBoxes';
import TrendingCards from '@/components/GlideUi/trendingCards';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  // State to track whether user is logged in
  const [loggedIn, setLoggedIn] = useState(false);

  // Check login status from AsyncStorage
  const checkLoginStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      setLoggedIn(value === 'true'); // true means user is logged in
    } catch (error) {
      console.error('Failed to get login status:', error);
    }
  };

  // Run check when screen loads
  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen
        options={{
          headerTintColor: '#ffffff',
          headerStyle: { backgroundColor: '#0489D9' },
          statusBarStyle: 'light', // iOS
          statusBarBackgroundColor: '#0489D9', // Android
        }}
      />


      {/* Header Section */}
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Let us find you a great job!</Text>
        </View>

        {/* Login status indicator dot */}
        <View style={styles.statusWrapper}>
          <View
            style={[
              styles.statusDotLarge,
              { backgroundColor: loggedIn ? 'green' : 'red' },
            ]}
          />
        </View>
      </View>

      {/* App Sections */}
      <TrendingCards />
      <JobCurator />
      <ServiceBoxes />
      <HomeAnalytics />
      <ResumeAlert />

      {/* Temp Button to go to Login */}
      {/* <Pressable
        onPress={() => router.push('/screens/auth/login')}
        style={{
          padding: 16,
          backgroundColor: '#0489D9',
          borderRadius: 8,
          alignItems: 'center',
          margin: 5,
        }}
      >
        <Text style={{ color: 'white' }}>Temporary Login Button</Text>
      </Pressable> */}
    </ScrollView>
  );
}

// #FFA500 Lite Orange
// #303742 Dark Blue
// #FFFFE0 Light Yellow
// #0489D9 Light Blue

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 100,
    backgroundColor: 'white',
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  statusDotLarge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: 10,
  },
});
