import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

{/* Header Analytics  */ }

const HomeAnalytics = () => {
    const [userApplied, setUserApplied] = useState(0);
    const [applicationsSubmitted, setApplicationsSubmitted] = useState(0);
    const [successRate, setSuccessRate] = useState(0);

    useEffect(() => {
        const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

        setUserApplied(randomInt(9, 23));
        setApplicationsSubmitted(randomInt(113, 461));
        setSuccessRate(randomInt(65, 94));
    }, [])

    return (
        <View style={styles.wrapper}>
            <View style={styles.analyticsContainer}>
                <Text style={styles.anaHead}>Analytics</Text>

                {/* Counters and other analytics components can be added here. */}
                <View style={styles.counterDirection}>

                    {/* Total user hit on apply button */}
                    <View style={styles.counterView}>
                        <View style={styles.counter}>
                            <FontAwesome6 name="user-tie" size={24} color="white" style={styles.anaHeadIcon} />
                            <Text style={styles.anaHeadText}>{userApplied}</Text>
                        </View>
                        <View>
                            <Text style={styles.anaHeadSupportText}>Users Applied</Text>
                        </View>
                    </View>

                    {/* Total number of applications submitted */}
                    <View style={styles.counterView}>
                        <View style={styles.counter}>
                            <FontAwesome6 name="user-check" size={24} color="white" style={styles.anaHeadIcon} />
                            <Text style={styles.anaHeadText}>{applicationsSubmitted}</Text>
                        </View>
                        <View>
                            <Text style={styles.anaHeadSupportText}>Application Submitted</Text>
                        </View>
                    </View>

                    {/* Success Rate */}
                    <View style={styles.counterView}>
                        <View style={styles.counter}>
                            <FontAwesome6 name="chart-simple" size={24} color="white" style={styles.anaHeadIcon} />
                            <Text style={styles.anaHeadText}>{successRate}%</Text>
                        </View>
                        <View>
                            <Text style={styles.anaHeadSupportText}>Success Rate</Text>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    )
}

export default HomeAnalytics;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    analyticsContainer: {
        padding: 20,
        backgroundColor: '#0489D9',
        borderRadius: 8,
        marginVertical: 8,
        maxWidth: 400,
        width: '100%',
    },
    anaHead: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    counterDirection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    counter: {
        color: 'white',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counterView: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 16,
    },
    anaHeadText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    anaHeadIcon: {
        fontSize: 20,
    },
    anaHeadSupportText: {
        color: 'white',
        fontSize: 12,
    }
})
