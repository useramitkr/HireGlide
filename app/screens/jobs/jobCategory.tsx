import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import JobsCategory from '@/components/GlideUi/jobsCategory';

const JobCategory = () => {
  
  return (
    <View style={styles.scrollContainer}>
      <View>
        {/* Scree title  */}
        <Stack.Screen
          options={{
            headerTitle: 'Job Categories',
            headerBackTitle: 'Back',
            headerStyle: {
              backgroundColor: '#0489D9',
            },
            headerTintColor: '#ffffffff',
          }}
        />
        <StatusBar style="light" />
        {/* Screen title end  */}
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Hello Name,</Text>
        <Text style={styles.headingText}>Let's find you a great job!</Text>
      </View>

      {/* Category list will be here  */}
      <JobsCategory />
    </View>
  )
}

export default JobCategory;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 16,
    backgroundColor: 'white',
    width: '100%',
  },
  heading: {
    fontSize: 16,
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'semibold',
    marginTop: 8,
    width: '60%',
  },
})