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
          By accessing and using the HireGlide application ("the App"), you ("User," "you," or "your") agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any part of these Terms, you must not use or access the App. These Terms constitute a legally binding agreement between you and HireGlide.
        </Text>

        <Text style={styles.sectionTitle}>2. Description of Service</Text>
        <Text style={styles.text}>
          HireGlide provides a platform designed to assist job seekers. Our services include, but are not limited to: automated job application submission, access to interview questions and answers, resume management, and career analytics. Some features may be in a "coming soon" status and are subject to change.
        </Text>

        <Text style={styles.sectionTitle}>3. User Accounts and Registration</Text>
        <Text style={styles.text}>
          To access certain features of the App, you must register for an account. You agree to provide accurate and complete information during registration and to keep your account details updated. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. HireGlide is not liable for any loss or damage arising from your failure to protect your account information.
        </Text>

        <Text style={styles.sectionTitle}>4. User Content and Data</Text>
        <Text style={styles.text}>
          You retain ownership of any content you upload, including your resume ("User Content"). By uploading your resume and other personal data, you grant HireGlide a limited, non-exclusive, worldwide, and royalty-free license to use, store, and process your User Content for the sole purpose of providing the App's services, including automated job applications and resume parsing. You represent and warrant that you have all necessary rights to grant this license.
        </Text>

        <Text style={styles.sectionTitle}>5. Use of Automated Tools</Text>
        <Text style={styles.text}>
          The App's automation tool is designed to submit job applications on your behalf. While we strive for accuracy, HireGlide does not guarantee that every application will be submitted successfully or that it will result in a job offer. The User acknowledges and accepts the risks associated with automated application submissions. You agree not to use the automation tool in a manner that may harm, disable, or impair the functionality of any third-party websites or services.
        </Text>
        <Text style={styles.text}>
          We implement a temporary timer block on job submissions to prevent system abuse and ensure fair usage for all users.
        </Text>

        <Text style={styles.sectionTitle}>6. Prohibited Conduct</Text>
        <Text style={styles.text}>
          You agree not to engage in any of the following prohibited activities:
          {'\n\n'}- Violating any local, state, national, or international law.
          {'\n'}- Using the App for any fraudulent or illegal purpose.
          {'\n'}- Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the App.
          {'\n'}- Impersonating any person or entity or misrepresenting your affiliation with a person or entity.
        </Text>

        <Text style={styles.sectionTitle}>7. Disclaimer of Warranties</Text>
        <Text style={styles.text}>
          The App is provided on an "as is" and "as available" basis. HireGlide makes no warranties, either express or implied, regarding the accuracy, completeness, reliability, or availability of the App or its services.
        </Text>

        <Text style={styles.sectionTitle}>8. Limitation of Liability</Text>
        <Text style={styles.text}>
          To the maximum extent permitted by law, in no event shall HireGlide, its affiliates, or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (a) your access to or use of or inability to access or use the App; (b) any conduct or content of any third party on the App; or (c) unauthorized access, use, or alteration of your transmissions or content.
        </Text>
        
        <Text style={styles.sectionTitle}>9. Modifications to Terms</Text>
        <Text style={styles.text}>
          We reserve the right to modify or replace these Terms at our sole discretion. We will notify you of any changes by posting the new Terms on this page. By continuing to access or use the App after those revisions become effective, you agree to be bound by the revised terms.
        </Text>

        <Text style={styles.sectionTitle}>10. Contact Us</Text>
        <Text style={styles.text}>
          If you have any questions about these Terms, you can contact us at hireglide@amekr.com.
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
    textAlign: 'justify', // Added for better readability
  },
  footer: {
    fontSize: 16,
    fontWeight: '500',
    color: '#303742',
    marginTop: 30,
    textAlign: 'center',
  },
});
