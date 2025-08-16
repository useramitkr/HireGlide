import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';

// A static list of application tips.
const tips = [
  {
    icon: 'file-signature',
    title: 'Review Your Resume',
    description: 'Double-check your resume and contact information for accuracy before submitting.',
    color: '#3498db',
  },
  {
    icon: 'bullseye',
    title: 'Target Your Application',
    description: 'Ensure your skills and experience align with the job description for a higher success rate.',
    color: '#2ecc71',
  },
  {
    icon: 'paper-plane',
    title: 'Confirm Your Details',
    description: 'Before you hit apply, ensure your contact information is correct.',
    color: '#e67e22',
  },
];

const ApplicationTips: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Pro Tips for a Successful Application</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.tipCard}>
          <View style={[styles.iconCircle, { backgroundColor: tip.color }]}>
            <FontAwesome6 name={tip.icon} size={20} color="white" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.tipTitle}>{tip.title}</Text>
            <Text style={styles.tipDescription}>{tip.description}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ApplicationTips;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ecf0f1',
    borderRadius: 16,
    padding: 20,
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495e',
    marginBottom: 20,
    textAlign: 'center',
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  tipDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    lineHeight: 20,
  },
});
