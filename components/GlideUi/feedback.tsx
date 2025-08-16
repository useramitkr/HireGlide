import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform, Linking, Alert, Share } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Feedback = () => {
  const router = useRouter();

  // Function to open the app store for rating
  const handleRateApp = () => {
    const url = Platform.select({
      // ios: 'https://apps.apple.com/us/app/hireglide/idXXXXXXXXX', // Replace with your actual App Store ID
      android: 'market://details?id=com.amekr.hireglide', 
      default: 'https://play.google.com/store/apps/details?id=com.amekr.hireglide',
    });

    if (url) {
      Linking.openURL(url).catch((err) => {
        console.error('Failed to open app store link:', err);
      });
    }
  };

  // Function to open an external link for feedback
  const handleFeedbackLink = () => {
    const feedbackUrl = 'https://forms.gle/wC8Wie5FbHQVddxk9'; // Using the example URL you provided

    Linking.openURL(feedbackUrl).catch((err) => {
      console.error('Failed to open feedback link:', err);
      // In a real app, you might show an in-app alert here
      Alert.alert("Error", "Could not open the feedback link.");
    });
  };

  // Function to open the device's native share dialog
  const handleShareApp = async () => {
    try {
      const result = await Share.share({
        message: 'Check out HireGlide! It\'s a professional platform that uses automation to help you find and apply for jobs. Get it here: ',
        url: 'https://play.google.com/store/apps/details?id=com.amekr.hireglide',
        title: 'Share HireGlide',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Rate Your Experience Card */}
      <Pressable style={[styles.card, { borderColor: '#5a229a' }]} onPress={handleRateApp}>
        <FontAwesome6 name="star" size={24} color="#5a229a" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Rate your experience</Text>
          <Text style={styles.cardSubtitle}>Help us to improve our services</Text>
        </View>
        <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
      </Pressable>

      {/* Your Feedback Matters Card */}
      <Pressable style={[styles.card, { borderColor: '#5a229a' }]} onPress={handleFeedbackLink}>
        <FontAwesome6 name="comment-alt" size={24} color="#5a229a" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Your Feedback Matters!</Text>
          <Text style={styles.cardSubtitle}>Enter your question or suggestion</Text>
        </View>
        <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
      </Pressable>

      {/* Share This App Card */}
      <Pressable style={[styles.card, { borderColor: '#5a229a' }]} onPress={handleShareApp}>
        <FontAwesome6 name="share-alt" size={24} color="#5a229a" style={styles.cardIcon} />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Share this App</Text>
          <Text style={styles.cardSubtitle}>Help your friends in their job search</Text>
        </View>
        <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
      </Pressable>


      {/* About HireGlide Section - Now styled to match the Foundit image */}
      <View style={styles.aboutSection}>
        <Text style={styles.aboutHireGlideTitle}>HireGlide</Text>
        <Text style={styles.aboutJobsCount}>950K+ Opportunities</Text>
        <Text style={styles.aboutSlogan}>Connect. Apply. Succeed.</Text>
        <Text style={styles.aboutText}>A professional platform connecting ambitious freshers and early-career talent with companies that are ready to invest in growth.</Text>
      </View>
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderLeftWidth: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardIcon: {
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303742',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  aboutSection: {
    borderRadius: 12,
    padding: 20,
    marginTop: 30,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  aboutHireGlideTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5a229a', 
    marginBottom: 5,
  },
  aboutJobsCount: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#939599ff',
    marginBottom: 2,
  },
  aboutSlogan: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#939599ff',
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 14,
    color: '#939599ff',
    lineHeight: 20,
    marginBottom: 15,
  },
});
