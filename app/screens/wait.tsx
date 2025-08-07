import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';

// This component displays a countdown timer and waits for a specific
// timestamp stored in AsyncStorage to pass before navigating away.
const WaitScreen = () => {
    // State to hold the remaining time in seconds
    const [remainingTime, setRemainingTime] = useState<number>(0);
    // State to track when the countdown has finished
    const [countdownOver, setCountdownOver] = useState<boolean>(false);
    // Hook to access the Expo router for navigation
    const router = useRouter();

    // Helper function to format seconds into a MM:SS string
    const formatTime = (seconds: number): string => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`;
    };

    // This effect handles the timer initialization and countdown logic.
    // It runs only once when the component mounts.
    useEffect(() => {
        // A variable to hold the interval ID so it can be cleared later
        let timerInterval: NodeJS.Timeout | undefined;

        // An async function to fetch the time and start the countdown
        const initializeTimer = async () => {
            try {
                // Fetch the stored timestamp from AsyncStorage
                const blockUntilStr = await AsyncStorage.getItem('thankYouBlockUntil');
                const blockUntil = blockUntilStr ? parseInt(blockUntilStr, 10) : 0;
                
                // Get the current time and calculate the remaining time
                const now = Date.now();
                const initialRemaining = Math.max(Math.floor((blockUntil - now) / 1000), 0);
                
                // Set the initial remaining time in state
                setRemainingTime(initialRemaining);

                // Start the countdown interval only if there is time remaining
                if (initialRemaining > 0) {
                    timerInterval = setInterval(() => {
                        setRemainingTime((prev) => {
                            // Check if the countdown is finished
                            if (prev <= 1) {
                                // If so, clear the interval and set the countdownOver flag
                                clearInterval(timerInterval);
                                setCountdownOver(true);
                                return 0;
                            }
                            // Otherwise, decrement the time by one second
                            return prev - 1;
                        });
                    }, 1000);
                } else {
                    // If no time is remaining, set the countdownOver flag immediately
                    setCountdownOver(true);
                }
            } catch (error) {
                // Log any errors that occur while fetching from AsyncStorage
                console.error("Failed to fetch timer data from AsyncStorage:", error);
                // In case of an error, assume the timer is over to prevent the user from being stuck
                setCountdownOver(true);
            }
        };

        // Call the initialization function
        initializeTimer();

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, []); // Empty dependency array means this effect runs once

    // This effect handles the navigation once the countdown is over.
    // It runs whenever the `countdownOver` state or `router` changes.
    useEffect(() => {
        let navigationTimeout: NodeJS.Timeout | undefined;
        if (countdownOver) {
            // Set a small delay before navigating to avoid a race condition
            navigationTimeout = setTimeout(() => {
                router.replace('/');
            }, 1000);
        }
        // Cleanup function to clear the timeout
        return () => {
            if (navigationTimeout) {
                clearTimeout(navigationTimeout);
            }
        };
    }, [countdownOver, router]);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: 'Processing...',
                    headerStyle: { backgroundColor: '#0489D9' },
                    headerTintColor: '#ffffff',
                    headerBackVisible: false,
                    gestureEnabled: false,
                }}
            />
            <StatusBar barStyle="light-content" />

            <Text style={styles.title}>⏳ Application Processing...</Text>
            <Text style={styles.message}>
                Your last application is processing! We are working on it, and it will take a moment. Please hold tight until the timer finishes, and then you will be ready to submit again.
            </Text>
            <Text style={styles.timer}>{formatTime(remainingTime)}</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Back to Home"
                    color="#0489D9"
                    onPress={() => router.replace('/')}
                />
            </View>
        </View>
    );
};

export default WaitScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#0489D9',
        marginBottom: 10,
    },
    message: {
        fontSize: 16,
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    timer: {
        fontSize: 48,
        fontWeight: '700',
        color: '#ffffff',
        backgroundColor: '#0489D9',
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 100,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        textAlign: 'center',
        marginBottom: 30,
        minWidth: 160,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 30,
    },
});
