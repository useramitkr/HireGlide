import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, Image, Platform } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { isBlockedByThankYouTimer } from '@/utils/timerUtils';

// Content for the two different tabs
const whyInternshipsMatter = [
  {
    icon: 'lightbulb',
    title: 'Gain Real-World Experience',
    description: 'Apply your knowledge in a professional setting and build a portfolio that stands out.',
    color: '#3498db',
  },
  {
    icon: 'user-group',
    title: 'Build Your Network',
    description: 'Connect with industry professionals and open doors to future full-time roles.',
    color: '#2ecc71',
  },
  {
    icon: 'chart-line',
    title: 'Accelerate Your Growth',
    description: 'Learn new skills and discover your career path faster, all while getting paid.',
    color: '#e67e22',
  },
];

const howHireGlideHelps = [
  {
    icon: 'robot',
    title: 'AI-Powered Matching',
    description: 'Our system intelligently matches your skills and resume with the best internship postings.',
    color: '#0489D9',
  },
  {
    icon: 'bolt',
    title: 'Automated Applications',
    description: 'With one click, our tool fills out and submits your applications for you, saving you hours.',
    color: '#f1c40f',
  },
  {
    icon: 'user-check',
    title: 'Seamless Submissions',
    description: 'We ensure a smooth application process so you can focus on preparing for the interview.',
    color: '#10b981',
  },
];

const Internship = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('descriptions');

  const handleApplyInternship = async () => {
    const blocked = await isBlockedByThankYouTimer();
    if (blocked) {
      router.replace('/screens/wait');
    } else {
      router.push('/screens/jobs/jobCategory');
    }
  };
  
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Stack.Screen
        options={{
          headerTitle: 'Internships',
          headerBackTitle: 'Back',
          headerStyle: { backgroundColor: '#0489D9' },
          headerTintColor: '#ffffff',
        }}
      />

      <View style={styles.header}>
        <Image source={{ uri: 'https://placehold.co/60x60/0489D9/FFFFFF?text=HG' }} style={styles.companyLogo} />
        <Text style={styles.jobTitle}>Internship Program</Text>
        <Text style={styles.jobInfo}>A great way to start your career.</Text>
      </View>

      <View style={styles.tabContainer}>
        <Pressable 
          style={[styles.tabButton, activeTab === 'descriptions' && styles.activeTab]}
          onPress={() => setActiveTab('descriptions')}
        >
          <Text style={activeTab === 'descriptions' ? styles.activeTabText : styles.tabText}>Why Internships</Text>
        </Pressable>
        <Pressable 
          style={[styles.tabButton, activeTab === 'company' && styles.activeTab]}
          onPress={() => setActiveTab('company')}
        >
          <Text style={activeTab === 'company' ? styles.activeTabText : styles.tabText}>How We Help</Text>
        </Pressable>
      </View>

      {activeTab === 'descriptions' && (
        <View style={styles.contentCard}>
          <Text style={styles.cardHeader}>Why Internships Are Important</Text>
          {whyInternshipsMatter.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesome6 name={item.icon} size={16} color={item.color} style={styles.bulletPoint} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      )}

      {activeTab === 'company' && (
        <View style={styles.contentCard}>
          <Text style={styles.cardHeader}>How HireGlide Helps You</Text>
          {howHireGlideHelps.map((item, index) => (
            <View key={index} style={styles.listItem}>
              <FontAwesome6 name={item.icon} size={16} color={item.color} style={styles.bulletPoint} />
              <View style={{ flex: 1 }}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.itemText}>{item.description}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
      
      <View style={styles.applyButtonWrapper}>
        <Pressable style={styles.applyButton} onPress={handleApplyInternship}>
          <Text style={styles.applyButtonText}>Apply Internship</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Internship;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f0f2f5',
    paddingBottom: 100,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
    marginBottom: 20,
  },
  companyLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 5,
  },
  jobInfo: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 10,
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    overflow: 'hidden',
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
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#0489D9',
    borderBottomColor: '#FFA500',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6b7280',
  },
  activeTabText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  contentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
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
  cardHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  bulletPoint: {
    marginRight: 15,
    marginTop: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#303742',
    lineHeight: 20,
  },
  itemText: {
    fontSize: 14,
    color: '#4b5563',
    flex: 1,
    marginTop: 2,
  },
  applyButtonWrapper: {
    paddingHorizontal: 20,
    marginTop: 'auto',
  },
  applyButton: {
    backgroundColor: '#0489D9',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
