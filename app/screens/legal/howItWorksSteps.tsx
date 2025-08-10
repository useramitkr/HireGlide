import React from 'react';
import { StyleSheet, Text, View, ScrollView, Platform, Dimensions } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome6 } from '@expo/vector-icons';

const howItWorksSteps = [
    {
        icon: 'file-import',
        title: 'Upload Your Resume',
        description: 'First, you upload your resume in the profile section. This is a crucial step as our automation tool uses this single document to apply to multiple jobs on your behalf. A well-prepared resume is key to a successful run.',
    },
    {
        icon: 'robot',
        title: 'Our AI Tool Processes Your Data',
        description: 'Our AI engine securely extracts all your information, like your name, email, skills, and contact details, and stores it in our database. This data is linked to your user account via an authentication token for your security.',
    },
    {
        icon: 'arrow-right-to-bracket',
        title: 'Your Request is Submitted',
        description: 'When you request a job submission, our system receives your data and queues it up. This tells our tools to prepare for the application process, so you don’t have to manually fill out the same details over and over.',
    },
    {
        icon: 'globe',
        title: 'Automated Job Discovery',
        description: 'Our system constantly scans the web for new job openings. It finds company career pages, identifies application forms, and stores them in a temporary database. We re-check these sites daily to ensure the job listings are fresh and active.',
    },
    {
        icon: 'laptop-code',
        title: 'Seamless Form Filling',
        description: 'Once a job form is identified, our automation tool steps in. It meticulously fills out the form with your resume information, ensuring that every detail is accurately entered as if you were doing it yourself.',
    },
    {
        icon: 'signature',
        title: 'Your Identity is Preserved',
        description: 'Important to note: our tool fills out the application as "you," not as "HireGlide." When a company receives your submission, they see it as a direct application from you, ensuring they are unaware that an automation tool was used.',
    },
    {
        icon: 'exclamation-circle',
        title: 'A Word of Caution',
        description: 'Our app is a powerful supplement to your job search, not a replacement. We strongly recommend that you continue to apply through other platforms and maintain an active search, as this increases your chances of success. We are not able to track application status after submission.',
    },
];

const HowItWorks = () => {
    return (
        <View style={styles.outerContainer}>
            <Stack.Screen
                options={{
                    headerTitle: 'How This App Works',
                    headerBackTitle: 'Back',
                    headerStyle: { backgroundColor: '#0489D9' },
                    headerTintColor: '#ffffff',
                }}
            />
            <StatusBar style="light" />
            
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.mainTitle}>How HireGlide Works</Text>
                <Text style={styles.mainSubtitle}>
                    Here is a step-by-step breakdown of our automation process, designed to give you full transparency on how we help your job search.
                </Text>

                <View style={styles.stepsContainer}>
                    {howItWorksSteps.map((step, index) => (
                        <View key={index} style={styles.stepCard}>
                            <View style={styles.stepIndicator}>
                                <Text style={styles.stepNumber}>{index + 1}</Text>
                                <View style={[styles.stepIcon, { backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4', '#ec4899'][index % 7] }]}>
                                    <FontAwesome6 name={step.icon} size={20} color="#fff" />
                                </View>
                            </View>
                            <View style={styles.stepContent}>
                                <Text style={styles.stepTitle}>{step.title}</Text>
                                <Text style={styles.stepDescription}>{step.description}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default HowItWorks;

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    container: {
        padding: 24,
        paddingBottom: 50,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: 8,
    },
    mainSubtitle: {
        fontSize: 14,
        color: '#6b7280',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 20,
        paddingHorizontal: 16,
    },
    stepsContainer: {
        gap: 24,
    },
    stepCard: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
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
    stepIndicator: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 16,
    },
    stepNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#9ca3af',
        marginBottom: 8,
    },
    stepIcon: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepContent: {
        flex: 1,
        flexDirection: 'column',
    },
    stepTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1f2937',
        marginBottom: 4,
    },
    stepDescription: {
        fontSize: 14,
        color: '#6b7280',
        lineHeight: 20,
        textAlign: 'justify',
    },
});
