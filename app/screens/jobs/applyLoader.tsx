import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const loadingMessages = [
  "Data loading...",
  "CV processing...",
  "Scanning keywords...",
  "Ranking your profile...",
  "Almost done..."
];

const ApplyLoader = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Message change every 1.5s
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    // Redirect after 7s
    const redirectTimeout = setTimeout(() => {
      clearInterval(messageInterval);
      router.replace('/screens/jobs/jobThankYou'); 
    }, 7000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(redirectTimeout);
    };
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen
        options={{
          headerTitle: 'Application Processing...',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#0489D9',
          },
          headerTintColor: '#ffffff',
        }}
      />
      <StatusBar style="light" />

      <View style={styles.content}>
        <Text style={styles.title}>Application Processing...</Text>
        <Text style={styles.description}>
          We’re processing your application. Please wait...
        </Text>

        <ActivityIndicator size="large" color="#0489D9" style={styles.loader} />

        <Text style={styles.loadingMessage}>
          {loadingMessages[messageIndex]}
        </Text>
      </View>
    </ScrollView>
  );
};

export default ApplyLoader;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    marginTop: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#303742',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#606770',
    textAlign: 'center',
    marginBottom: 30,
  },
  loader: {
    marginVertical: 20,
  },
  loadingMessage: {
    fontSize: 16,
    color: '#0489D9',
    marginTop: 10,
  },
});
