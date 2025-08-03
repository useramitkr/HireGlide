import { ScrollView, StyleSheet, Text, View, Pressable, Image, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome } from '@expo/vector-icons';
import { startThankYouTimer } from '@/utils/timerUtils';

const ThankYou: React.FC = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState<string>('');

  useEffect(() => {
    const generateOrderId = () => {
      const prefix = '#HR-GLD-';
      const randomDigits = Array(10)
        .fill(0)
        .map(() => Math.floor(Math.random() * 10))
        .join('');
      return prefix + randomDigits;
    };
    setOrderId(generateOrderId());
  }, []);

  //Start Blocked Timer
  useEffect(() => {
    startThankYouTimer();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen
        options={{
          headerTitle: 'Application Submitted',
          headerStyle: {
            backgroundColor: '#0489D9',
          },
          headerTintColor: '#ffffff',
          headerBackVisible: false, // Hides top left back button
          gestureEnabled: false,    // Disables swipe back gesture
        }}
      />
      <StatusBar style="light" />

      <View style={styles.contentContainer}>
        {/* Progress Bar */}
        <View style={styles.progressBarContainer}>
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <FontAwesome name="user" size={16} color="white" />
            </View>
            <Text style={styles.progressText}>Fill Details</Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <FontAwesome name="credit-card" size={16} color="white" />
            </View>
            <Text style={styles.progressText}>Documents</Text>
          </View>
          <View style={styles.progressLine} />
          <View style={styles.progressItem}>
            <View style={styles.progressCircle}>
              <FontAwesome name="check-circle" size={16} color="white" />
            </View>
            <Text style={styles.progressText}>Submitted</Text>
          </View>
        </View>

        {/* Confirmed Order Section */}
        <View style={styles.orderConfirmedContainer}>
          <View style={styles.badgeContainer}>
            <Image
              source={{ uri: 'https://img.icons8.com/fluency/96/approval.png' }}
              style={styles.badgeImage}
            />
          </View>

          <Text style={styles.confirmedTitle}>Application Successfully Submitted!</Text>
          <Text style={styles.orderIdText}>Application ID: {orderId}</Text>
          <Text style={styles.thankYouText}>
            Thank you for completing the application process. You will receive a confirmation email soon.
            All updates regarding your application status will be sent to your registered email.
          </Text>

          <Pressable style={styles.trackButton}>
            <Text style={styles.trackButtonText}>View Application Status</Text>
          </Pressable>

          <Pressable onPress={() => router.push('/')}>
            <Text style={styles.homeLinkText}>Back to Home</Text>
          </Pressable>
        </View>

        {/* Rate your experience section */}
        <View style={styles.rateExperienceContainer}>
          <Text style={styles.rateExperienceTitle}>Rate your experience</Text>
          <View style={styles.ratingsContainer}>
            <Pressable style={styles.ratingButton}>
              <Text style={styles.ratingEmoji}>😔</Text>
              <Text style={styles.ratingText}>Bad</Text>
            </Pressable>
            <Pressable style={styles.ratingButton}>
              <Text style={styles.ratingEmoji}>😐</Text>
              <Text style={styles.ratingText}>Okay</Text>
            </Pressable>
            <Pressable style={styles.ratingButton}>
              <Text style={styles.ratingEmoji}>😍</Text>
              <Text style={styles.ratingText}>Loved it</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ThankYou;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    width: '100%',
  },
  progressItem: {
    alignItems: 'center',
  },
  progressCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#0489D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressLine: {
    flex: 1,
    height: 2,
    backgroundColor: '#e0e0e0',
  },
  progressText: {
    marginTop: 8,
    fontSize: 12,
    color: '#0489D9',
  },
  orderConfirmedContainer: {
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  badgeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  badgeImage: {
    width: 100,
    height: 100,
  },
  confirmedTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#303742',
    marginBottom: 8,
    textAlign: 'center',
  },
  orderIdText: {
    fontSize: 15,
    color: '#666',
    marginBottom: 15,
  },
  thankYouText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  linkText: {
    color: '#0489D9',
    fontWeight: 'bold',
  },
  trackButton: {
    backgroundColor: '#0489D9',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  trackButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  homeLinkText: {
    color: '#0489D9',
    fontSize: 14,
    fontWeight: '600',
  },
  rateExperienceContainer: {
    width: '100%',
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  rateExperienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303742',
    textAlign: 'center',
    marginBottom: 15,
  },
  ratingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingButton: {
    alignItems: 'center',
  },
  ratingEmoji: {
    fontSize: 32,
  },
  ratingText: {
    marginTop: 5,
    fontSize: 13,
    color: '#303742',
  },
});
