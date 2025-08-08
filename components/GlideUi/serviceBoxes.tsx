import { Pressable, StyleSheet, Text, View, Alert, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { isUserLoggedIn } from '../../utils/storage'; // ✅ Import login check

const ServiceBoxes = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loggedIn = await isUserLoggedIn();
        setIsLoggedIn(loggedIn);
      } catch (error) {
        console.error('Failed to check login status:', error);
        setIsLoggedIn(false);
      }
    };
    checkLoginStatus();
  }, []);

  const handleAccess = async (route: string) => {
    if (isLoggedIn) {
      router.push(route);
    } else {
      Alert.alert(
        "Login Required",
        "Please login to access these features.",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Okay",
            onPress: () => router.push('/screens/auth/login'),
          }
        ],
        { cancelable: true }
      );
    }
  };

  return (
    <View style={styles.ServiceContainer}>
      <View style={styles.ServiceBoxs}>

        {/* Job Application */}
        <Pressable
          style={[styles.ServiceBox, styles.jobApplyCard]}
          onPress={() => handleAccess('/screens/jobs/jobCategory')}
        >
          <View style={styles.header}>
            <View style={[styles.iconContainer, { backgroundColor: '#7768e6' }]}>
              <FontAwesome6 name="briefcase" size={24} color="#fff" />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.boxTitle}>Apply Jobs with Automation</Text>
              <Text style={styles.boxSubtitle}>Fast and efficient job hunting</Text>
            </View>
          </View>
          
          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <FontAwesome6 name="check" size={14} color="#1f2937" style={styles.checkIcon} />
              <Text style={styles.detailText}>Automated form filling</Text>
            </View>
            <View style={styles.detailItem}>
              <FontAwesome6 name="check" size={14} color="#1f2937" style={styles.checkIcon} />
              <Text style={styles.detailText}>Apply to 20+ jobs at once</Text>
            </View>
          </View>

        </Pressable>

        {/* Interview Questions */}
        <Pressable
          style={[styles.ServiceBox, styles.interviewCard]}
          onPress={() => handleAccess('/interviews/category')}
        >
          <View style={styles.header}>
            <View style={[styles.iconContainer, { backgroundColor: '#f1c40f' }]}>
              <FontAwesome6 name="comments" size={24} color="#fff" />
            </View>
            <View style={styles.textWrapper}>
              <Text style={styles.boxTitle}>Updated Interview Questions</Text>
              <Text style={styles.boxSubtitle}>Practice & prepare for success</Text>
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <FontAwesome6 name="check" size={14} color="#1f2937" style={styles.checkIcon} />
              <Text style={styles.detailText}>Updated mock interviews</Text>
            </View>
            <View style={styles.detailItem}>
              <FontAwesome6 name="check" size={14} color="#1f2937" style={styles.checkIcon} />
              <Text style={styles.detailText}>Company-specific questions</Text>
            </View>
          </View>
        </Pressable>

      </View>
    </View>
  );
};

export default ServiceBoxes;

const styles = StyleSheet.create({
  ServiceContainer: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  ServiceBoxs: {
    flexDirection: 'column',
    width: '100%',
    maxWidth: 700, 
    gap: 16,
  },
  ServiceBox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 24,
    borderRadius: 20,
    minHeight: 180,
    backgroundColor: '#fff',
    borderWidth: 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  jobApplyCard: {
    borderColor: '#7768e6',
  },
  interviewCard: {
    borderColor: '#f1c40f',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flexDirection: 'column',
  },
  boxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
    lineHeight: 22,
  },
  boxSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  detailsContainer: {
    marginTop: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginLeft: 8,
  },
  checkIcon: {
    color: '#10b981', // A nice green for the checkmarks
  }
});
