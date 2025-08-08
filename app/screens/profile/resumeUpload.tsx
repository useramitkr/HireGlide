import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Alert,
    ActivityIndicator,
    StatusBar,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';

interface FileInfo {
    name: string;
    size: number;
    uri: string;
    mimeType?: string;
}

export default function ResumeUpload() {
    const router = useRouter();

    const [selectedFile, setSelectedFile] = useState<FileInfo | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const [messageStep, setMessageStep] = useState(0);

    const uploadMessages: string[] = [
        'Evaluating resume data...',
        'Extracting name and contact...',
        'Analyzing skills and experience...',
        'Storing to secure database...',
        'Finalizing upload...',
    ];

    useEffect(() => {
        if (isUploading) {
            const interval = setInterval(() => {
                setMessageStep((prev) => (prev >= uploadMessages.length - 1 ? prev : prev + 1));
            }, 1800); // update every 1.8s

            const timeout = setTimeout(() => {
                clearInterval(interval);
                setIsUploading(false);
                setMessageStep(0);
                Alert.alert('Upload Complete', 'Your resume has been uploaded successfully.', [
                    {
                        text: 'OK',
                        onPress: () => router.replace('/profile'),
                    },
                ]);
            }, 9000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
        }
    }, [isUploading]);

    const handleFileSelect = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: '*/*',
                copyToCacheDirectory: true,
                multiple: false,
            });

            if (result.assets && result.assets.length > 0) {
                const file = result.assets[0];
                setSelectedFile({
                    name: file.name ?? 'Unnamed File',
                    size: file.size ?? 0,
                    uri: file.uri,
                    mimeType: file.mimeType,
                });
            }
        } catch (error) {
            console.error('Document selection failed:', error);
        }
    };

    const handleUpload = () => {
        if (!selectedFile) {
            Alert.alert('No File Selected', 'Please select a resume file first.');
            return;
        }

        setIsUploading(true);
        setMessageStep(0);
    };

    return (
        <View style={styles.container}>
            <View>
                {/* Scree title  */}
                <Stack.Screen
                    options={{
                        headerTitle: 'Resume Upload',
                        headerBackTitle: 'Back',
                        headerStyle: {
                            backgroundColor: '#0489D9',
                        },
                        headerTintColor: '#ffffffff',
                    }}
                />
                <StatusBar barStyle="light-content" />
                {/* Screen title end  */}
            </View>
            <Text style={styles.heading}>Upload Your Resume</Text>

            <Pressable onPress={handleFileSelect} style={styles.selectButton}>
                <Text style={styles.buttonText}>
                    {selectedFile ? `Selected: ${selectedFile.name}` : 'Choose Resume File'}
                </Text>
            </Pressable>

            <Pressable
                onPress={handleUpload}
                disabled={isUploading}
                style={[
                    styles.uploadButton,
                    { backgroundColor: isUploading ? '#999' : '#0489D9' },
                ]}
            >
                <Text style={styles.buttonText}>Upload Resume</Text>
            </Pressable>

            {isUploading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0489D9" />
                    <Text style={styles.statusText}>{uploadMessages[messageStep]}</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 40,
    },
    selectButton: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#454545ff',
        marginBottom: 20,
    },
    uploadButton: {
        padding: 14,
        borderRadius: 8,
        backgroundColor: '#0489D9',
        marginBottom: 30,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: '600',
    },
    loadingContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    statusText: {
        marginTop: 12,
        fontSize: 16,
        fontStyle: 'italic',
        color: '#333',
    },
});
