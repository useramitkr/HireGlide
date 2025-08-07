import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ApplicationProgressReport = () => {
    const [remainingTime, setRemainingTime] = useState<number>(0);
    // State to track if the countdown has finished
    const [countdownOver, setCountdownOver] = useState<boolean>(false);

    // This effect handles the timer initialization and countdown logic.
    useEffect(() => {
        let timerInterval: NodeJS.Timeout | undefined;

        const initializeTimer = async () => {
            try {
                const blockUntilStr = await AsyncStorage.getItem('thankYouBlockUntil');
                const blockUntil = blockUntilStr ? parseInt(blockUntilStr, 10) : 0;
                
                const now = Date.now();
                const initialRemaining = Math.max(Math.floor((blockUntil - now) / 1000), 0);
                
                // Set the initial remaining time in state
                setRemainingTime(initialRemaining);

                // Start the countdown interval only if there is time remaining
                if (initialRemaining > 0) {
                    timerInterval = setInterval(() => {
                        setRemainingTime((prev) => {
                            if (prev <= 1) {
                                clearInterval(timerInterval);
                                setCountdownOver(true);
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
                } else {
                    // If no time is remaining, set the countdownOver flag immediately
                    setCountdownOver(true);
                }
            } catch (error) {
                console.error("Failed to fetch timer data from AsyncStorage:", error);
                setCountdownOver(true);
            }
        };
        initializeTimer();

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
        };
    }, []); 

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.containerTitle}>Application Report</Text>
                <Text style={styles.containerText}>
                    {countdownOver 
                        ? "Processing complete." 
                        : "Application processing..."}
                </Text>
            </View>
            <View style={styles.counterContainer}>
                {/* Conditionally render the status dot and text */}
                {countdownOver ? (
                    <>
                        <Text style={styles.successDot}>🟢</Text>
                        <Text style={styles.successText}>Success</Text>
                    </>
                ) : (
                    <>
                        <Text style={styles.pendingDot}>🔴</Text>
                        <Text style={styles.pendingText}>Pending</Text>
                    </>
                )}
            </View>
        </View>
    );
};

export default ApplicationProgressReport;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#0489D9',
        marginTop: 10,
        marginBottom: 10,
        padding: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    containerText: {
        color: '#e6e6e6ff',
        fontSize: 12,
        marginTop: 5,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#303742',
    },
    pendingDot: {
        fontSize: 14,
        marginRight: 5,
    },
    pendingText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },
    successDot: {
        fontSize: 14,
        marginRight: 5,
    },
    successText: {
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '500',
    },
});
