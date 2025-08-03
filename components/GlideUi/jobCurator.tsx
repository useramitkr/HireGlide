import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const JobCurator = () => {

    const [jobCount, setJobCount] = useState(0);

    useEffect(() => {
        const randomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
        setJobCount(randomInt(1, 100));

        setJobCount(randomInt(13, 977));
    }, [])

    const now = new Date();

    const currentTime = now.toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true,
});


    return (
        <View style={styles.curatorContainer}>

            <View style={styles.mainCurator}>
                <View style={styles.curatorBox}>
                    <Text style={styles.curatorBoxNumber}>{jobCount} - New Jobs Curated</Text>
                    <Text style={styles.curatorBoxText}>{currentTime}</Text>
                </View>

                <View style={styles.curatorBoxPara}>
                    <Text style={styles.curatorBoxParaText}>Just discovered {jobCount} fresh job opportunities at {currentTime}! Our tools constantly refresh and scan the web to uncover new openings for you.</Text>
                </View>
            </View>
        </View>
    )
}

export default JobCurator;

const styles = StyleSheet.create({
    curatorContainer: {
        width: '100%',
        padding: 8,
        justifyContent: 'flex-start',
    },
    mainCurator: {
        backgroundColor: '#222831',
        padding: 16,
        borderRadius: 8,
    },
    curatorBox: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        paddingTop: 10,
    },
    curatorBoxNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#d48e0cff',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    curatorBoxText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#d48e0cff',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    curatorBoxPara: {
        marginTop: 18,
        borderRadius: 8,
        marginBottom: 8,
    },
    curatorBoxParaText: {
        color: 'white',
        fontSize: 14,
    },
}) 