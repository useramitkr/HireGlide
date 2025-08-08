import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ResumeBoxes = () => {
const router = useRouter();

    return (
        <>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <View style={styles.textBox}>
                        <Text style={styles.boxTitle}>ATS Friendly Resume Builder</Text>
                        <FontAwesome6 name="wave-square" size={24} color="gray" />
                    </View>
                    <Pressable>
                        <Text style={styles.iconBox}>Coming up!</Text>
                    </Pressable>
                </View>

                <View style={styles.boxContainer}>
                    <View style={styles.textBox}>
                        <Text style={styles.boxTitle}>Update/Upload Your Resume</Text>
                        <FontAwesome6 name="upload" size={24} color="gray" />
                    </View>
                    <Pressable onPress={() => router.push('/screens/profile/resumeUpload')}>
                        <Text style={styles.iconBox}>Update</Text>
                    </Pressable>
                </View>
            </View>
        </>
    )
}

export default ResumeBoxes;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    boxContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 180,
        width: '49%',
    },
    textBox: {
        flexDirection: 'column',
        gap: 8,
    },
    boxTitle: {
        fontSize: 20,
        fontWeight: 'semibold',
    },
    iconBox: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 15,
        paddingLeft: 15,
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 'semibold',
        backgroundColor: '#303742',
        alignSelf: 'flex-start',
        color: '#ffffff',
        textAlign: 'center',
    },
})