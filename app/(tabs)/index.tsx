// import BannerAds from '@/components/gAds/bannerAds';
import HomeAnalytics from '@/components/GlideUi/homeAnalytics';
import JobCurator from '@/components/GlideUi/jobCurator';
import ServiceBoxes from '@/components/GlideUi/serviceBoxes';
import { Stack } from 'expo-router';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

      <Stack.Screen
        options={{
          headerTintColor: '#ffffff',
        }}
      />
      <StatusBar barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.heading}>Let us find you a great job!</Text>
      </View>

      {/* Header Analytics  */}
      <HomeAnalytics />

      {/* Service Boxes */}
      <ServiceBoxes />

      {/* Job Curator */}
      <JobCurator />

      {/* Banner Ads */}
      {/* <BannerAds /> */}

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
    paddingTop: 60,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});
