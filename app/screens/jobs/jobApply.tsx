import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const JobApply = () => {
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
        <StatusBar style="light" />
        {/* Screen title end  */}
      </View>
      </ScrollView>
  )
}

export default JobApply;

const styles = StyleSheet.create({
    scrollContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
})