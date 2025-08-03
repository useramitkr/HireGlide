import { Alert, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useRouter } from 'expo-router';
import Checkbox from 'expo-checkbox'
import { isBlockedByThankYouTimer } from '@/utils/timerUtils';

const JobApply = () => {

  const [outsideCountry, setOutsideCountry] = useState(false)
  const [openToRelocate, setOpenToRelocate] = useState(false)
  const [remoteWork, setRemoteWork] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)

  const router = useRouter();

  const handleApply = () => {
    if (!agreeTerms) {
      Alert.alert('Notice', 'Please agree to the Terms & Conditions.')
      return
    }

    // Will add API logic here
    // Alert.alert('Success', 'Your application has been submitted!')
    router.push('/screens/jobs/applyLoader');
  }

  //Blocked Timer
  useEffect(() => {
    const checkBlock = async () => {
      const blocked = await isBlockedByThankYouTimer();
      if (blocked) {
        router.replace('/screens/wait'); 
      }
    };
    checkBlock();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View>
        {/* Scree title  */}
        <Stack.Screen
          options={{
            headerTitle: 'Check and Apply',
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: '#0489D9',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <StatusBar barStyle="light-content" />
        {/* Screen title end  */}
      </View>

      <View>
        <Text style={styles.title}>
          Final Step Before Submission
        </Text>
        <Text style={styles.subtitle}>
          Please confirm your preferences before applying for jobs.
        </Text>
      </View>

      {/* Screen Content  */}
      <View>
        <View style={styles.checkboxContainer}>
          <Checkbox value={outsideCountry} onValueChange={setOutsideCountry} />
          <Text style={styles.checkboxLabel}>I want to apply for jobs outside my country.</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox value={openToRelocate} onValueChange={setOpenToRelocate} />
          <Text style={styles.checkboxLabel}>I am open to relocate internationally.</Text>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox value={remoteWork} onValueChange={setRemoteWork} />
          <Text style={styles.checkboxLabel}>I prefer remote work opportunities only.</Text>
        </View>

        <Pressable style={styles.applyButton} onPress={handleApply}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </Pressable>

        <View style={[styles.checkboxContainer, { marginTop: 20 }]}>
          <Checkbox value={agreeTerms} onValueChange={setAgreeTerms} />
          <Text style={styles.checkboxLabel}>I agree to the
            <Text style={{ color: '#0489D9' }} onPress={() => router.push('/screens/legal/tnc')}> Terms & Conditions</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default JobApply;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 20,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#303742',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#303742',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#303742',
    flex: 1,
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: '#0489D9',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
})