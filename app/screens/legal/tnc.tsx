import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const Terms = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen
        options={{
          headerTitle: 'Terms and Conditions',
          headerBackTitle: 'Back',
          headerStyle: {
            backgroundColor: '#0489D9',
          },
          headerTintColor: '#ffffff',
        }}
      />
      <StatusBar style="light" />

      <View style={styles.container}>
        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.date}>Effective Date: September 1, 2025</Text>

        <Text style={styles.sectionTitle}>1. Acceptance of Terms</Text>
        <Text style={styles.text}>
          By using our app, you agree to be bound by these Terms and Conditions. If you do not agree with any part of the terms, you may not use the app.
        </Text>

        <Text style={styles.sectionTitle}>2. Use of the Application</Text>
        <Text style={styles.text}>
          You agree to use the application only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use and enjoyment of the app.
        </Text>

        <Text style={styles.sectionTitle}>3. User Responsibilities</Text>
        <Text style={styles.text}>
          You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account.
        </Text>

        <Text style={styles.sectionTitle}>4. International Applications</Text>
        <Text style={styles.text}>
          If applying for jobs outside of your country, you are responsible for complying with local laws and visa requirements.
        </Text>

        <Text style={styles.sectionTitle}>5. Modifications</Text>
        <Text style={styles.text}>
          We reserve the right to modify or update these Terms at any time. Continued use of the app after changes implies your acceptance.
        </Text>

        <Text style={styles.sectionTitle}>6. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about these Terms, you can contact us at support@example.com.
        </Text>

        <Text style={styles.footer}>
          Thank you for using our application!
        </Text>
      </View>
    </ScrollView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#303742',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#7c7c7c',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0489D9',
    marginTop: 20,
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    lineHeight: 22,
    color: '#303742',
  },
  footer: {
    fontSize: 16,
    fontWeight: '500',
    color: '#303742',
    marginTop: 30,
    textAlign: 'center',
  },
});
