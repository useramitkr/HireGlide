import { Pressable, StyleSheet, Text, View, Alert } from 'react-native';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { isUserLoggedIn } from '../../utils/storage'; // ✅ Import login check

const ServiceBoxes = () => {
  const router = useRouter();

  const handleAccess = async (route: string) => {
    const loggedIn = await isUserLoggedIn();
    if (loggedIn) {
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
          style={styles.ServiceBox}
          onPress={() => handleAccess('/screens/jobs/jobCategory')}
        >
          <View>
            <Text style={styles.ServiceText}>Apply Jobs with Automation</Text>
          </View>
          <View style={styles.ServiceFooter}>
            <FontAwesome6 name="circle-play" size={24} color="black" style={styles.ServiceTextIcon} />
            <Text style={styles.ServiceIconText}>Apply Now</Text>
          </View>
        </Pressable>

        {/* Interview Questions */}
        <Pressable
          style={styles.ServiceBox}
          onPress={() => handleAccess('/interviews/category')}
        >
          <View>
            <Text style={styles.ServiceText}>Updated Interview Questions</Text>
          </View>
          <View style={styles.ServiceFooter}>
            <FontAwesome6 name="circle-play" size={24} color="black" style={styles.ServiceTextIcon} />
            <Text style={styles.ServiceIconText}>Start</Text>
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
    padding: 8,
    justifyContent: 'flex-start',
  },
  ServiceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ServiceBoxs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  ServiceBox: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: 8,
    padding: 18,
    backgroundColor: '#FFFFE0',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 180,
  },
  ServiceFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 8,
    gap: 10,
  },
  ServiceTextIcon: {
    backgroundColor: '#FFA500',
    color: 'white',
    fontSize: 35,
    borderRadius: 50, // ✅ fixed from '50%' to numeric
  },
  ServiceIconText: {
    fontSize: 16,
  },
});
