import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Stack, useRouter } from 'expo-router';

const WaitScreen = () => {
    const [remainingTime, setRemainingTime] = useState(0);
    const [countdownOver, setCountdownOver] = useState(false);
    const router = useRouter();

    // Format seconds to MM:SS
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs
            .toString()
            .padStart(2, '0')}`;
    };

    // Get remaining block time
    const getRemainingTime = async () => {
        const blockUntilStr = await AsyncStorage.getItem('thankYouBlockUntil');
        const blockUntil = blockUntilStr ? parseInt(blockUntilStr, 10) : 0;
        const now = Date.now();
        const remaining = Math.max(Math.floor((blockUntil - now) / 1000), 0);
        setRemainingTime(remaining);
    };

    useEffect(() => {
        // Fetch initial timer
        getRemainingTime();

        const interval = setInterval(() => {
            setRemainingTime((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setCountdownOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Delay navigation AFTER render is done (to avoid "ImperativeApiEmitter" warning)
    useEffect(() => {
        if (countdownOver) {
            const timeout = setTimeout(() => {
                router.replace('/');
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [countdownOver, router]);

    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    headerTitle: 'Processing...',
                    headerStyle: {
                        backgroundColor: '#0489D9',
                    },
                    headerTintColor: '#ffffff',
                    headerBackVisible: false, 
                    gestureEnabled: false,   
                }}
            />
            <StatusBar barStyle="light-content" />
            
            <Text style={styles.title}>⏳ Application Processing...</Text>
            <Text style={styles.message}>
                Your last application is processing! We're working on it, and it will take a moment. Please hold tight until the timer finishes, and then you'll be ready to submit again.
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
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ff3333',
        marginBottom: 30,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 30,
    },
});
