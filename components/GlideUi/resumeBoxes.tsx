import { Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const ResumeBoxes = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* ATS Friendly Resume Builder Card */}
            <Pressable style={styles.boxContainer} onPress={() => {}}>
                <View style={styles.contentRow}>
                    <View style={styles.iconBackground}>
                        <FontAwesome6 name="wave-square" size={24} color="#6b7280" />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.boxTitle}>ATS Friendly Resume Builder</Text>
                        <Text style={styles.boxSubtitle}>Coming soon!</Text>
                    </View>
                </View>
                {/* <View style={styles.arrowIcon}>
                    <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
                </View> */}
            </Pressable>

            {/* Update/Upload Resume Card */}
            <Pressable
                style={styles.boxContainer}
                onPress={() => router.push('/screens/profile/resumeUpload')}
            >
                <View style={styles.contentRow}>
                    <View style={styles.iconBackground}>
                        <FontAwesome6 name="upload" size={24} color="#6b7280" />
                    </View>
                    <View style={styles.textWrapper}>
                        <Text style={styles.boxTitle}>Update/Upload Your Resume</Text>
                        <Text style={styles.boxSubtitle}>Current resume on file</Text>
                    </View>
                </View>
                {/* <View style={styles.arrowIcon}>
                    <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
                </View> */}
            </Pressable>
        </View>
    );
};

export default ResumeBoxes;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },
    boxContainer: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBackground: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: '#f1f5f9',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textWrapper: {
        flex: 1,
    },
    boxTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
    },
    boxSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        marginTop: 4,
    },
    // arrowIcon: {
    //     padding: 8,
    // },
});
