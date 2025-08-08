import { StyleSheet, Text, View, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import Svg, { Circle, G } from 'react-native-svg';

const HomeAnalytics = () => {
    const [userApplied, setUserApplied] = useState(0);
    const [applicationsSubmitted, setApplicationsSubmitted] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    const randomInt = (min: number, max: number): number =>
        Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
        const updateMetrics = () => {
            setUserApplied(randomInt(9, 23));
            setApplicationsSubmitted(randomInt(113, 461));
            setSuccessRate(randomInt(65, 94));
        };

        // Update values on mount
        updateMetrics();

        // Set up the interval for updates
        const interval = setInterval(updateMetrics, 60000);

        return () => clearInterval(interval);
    }, []);

    // Chart properties for the success rate
    const size = 180;
    const strokeWidth = 24;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = successRate / 100;
    const strokeDashoffset = circumference - progress * circumference;

    return (
        <View style={styles.wrapper}>
            <View style={styles.analyticsContainer}>
                
                {/* Chart Section for Success Rate */}
                <Text style={styles.chartTitle}>Success Rate</Text>
                <View style={styles.chartWrapper}>
                    <Svg width={size} height={size}>
                        <G rotation="-90" origin={`${size / 2}, ${size / 2}`}>
                            <Circle
                                stroke="#e5e7eb"
                                fill="none"
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                strokeWidth={strokeWidth}
                            />
                            <Circle
                                stroke="#10b981"
                                fill="none"
                                cx={size / 2}
                                cy={size / 2}
                                r={radius}
                                strokeWidth={strokeWidth}
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                            />
                        </G>
                    </Svg>
                    <View style={styles.chartTextContainer}>
                        <Text style={styles.chartValue}>{successRate}%</Text>
                    </View>
                </View>
                
                {/* Horizontal Card Section for the other two metrics */}
                <View style={styles.cardContainer}>
                    {/* Users Applied Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Users Applied</Text>
                        <Text style={styles.cardValue}>{userApplied}</Text>
                        <Text style={styles.cardSubtitle}>Total users since launch</Text>
                        <View style={styles.cardSubText}>
                            <FontAwesome6 name="chart-simple" size={14} color="#10b981" />
                            <Text style={{color: '#10b981', marginLeft: 4}}>+15%</Text>
                        </View>
                    </View>

                    {/* Applications Submitted Card */}
                    <View style={styles.card}>
                        <Text style={styles.cardTitle}>Submissions</Text>
                        <Text style={styles.cardValue}>{applicationsSubmitted}</Text>
                        <Text style={styles.cardSubtitle}>Total applications by all users</Text>
                        <View style={styles.cardSubText}>
                            <FontAwesome6 name="chart-simple" size={14} color="#ef4444" />
                            <Text style={{color: '#ef4444', marginLeft: 4}}>-5%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default HomeAnalytics;

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
    },
    analyticsContainer: {
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginVertical: 16,
        width: '100%',
        maxWidth: 700,
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.05,
                shadowRadius: 10,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 16,
        textAlign: 'center',
    },
    chartWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 32,
    },
    chartTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    chartLabel: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        gap: 16,
    },
    card: {
        flex: 1,
        backgroundColor: '#f1f5f9',
        padding: 16,
        borderRadius: 12,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6b7280',
        marginBottom: 8,
    },
    cardValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    cardSubtitle: {
        fontSize: 12,
        color: '#9ca3af',
        marginTop: 4,
    },
    cardSubText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
});
