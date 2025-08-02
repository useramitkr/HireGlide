import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const InterviewCategory = () => {
    return (
        <View>
            {/* Scree title  */}
            <Stack.Screen
                options={{
                    headerTitle: 'Updated Interview Questions',
                    headerBackTitle: 'Back',
                    headerStyle: {
                        backgroundColor: '#0489D9',
                    },
                    headerTintColor: '#ffffffff',
                }}
            />
            <StatusBar style="light" />
            {/* Screen title end  */}

            <Text>InterviewCategory</Text>
        </View>
    )
}

export default InterviewCategory;

const styles = StyleSheet.create({})