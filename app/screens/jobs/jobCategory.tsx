import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';

const JobCategory = () => {
  return (
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

      <Text>JobCategory</Text>
    </View>
  )
}

export default JobCategory;

const styles = StyleSheet.create({})