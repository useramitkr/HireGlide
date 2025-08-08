import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const TrendingCards = () => {

    const router = useRouter();

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >

            {/* 01. Success Story */}
            <View style={[styles.card, { backgroundColor: '#6b71e5ff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="rocket" size={20} color="white" />
                    <Text style={styles.cardTab}>Trending Now</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        <Text style={styles.highlightText}>750+</Text> students already landed a job using our automation tool.
                    </Text>
                    <Text style={styles.subText}>
                        Your next career move is waiting.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]} onPress={() => router.push('/screens/jobs/jobCategory')}>
                    <Text style={[styles.actionButtonText, { color: '#6b72e5' }]}>Start Your Journey</Text>
                </Pressable>
            </View>

            {/* 02. AI Interview Simulator */}
            <View style={[styles.card, { backgroundColor: '#e57f6bfd' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="circle-check" size={20} color="white" />
                    <Text style={styles.cardTab}>Career Boost</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Get instant feedback with our <Text style={styles.highlightText}>AI Interview</Text> simulator.
                    </Text>
                    <Text style={styles.subText}>
                        Practice questions from top companies.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    {/* <Text style={[styles.actionButtonText, { color: '#e5806b' }]}>Practice Now</Text> */}
                    <Text style={[styles.actionButtonText, { color: '#e5806b' }]}>Coming Soon!</Text>
                </Pressable>
            </View>

            {/* 03. Resume Builder */}
            <View style={[styles.card, { backgroundColor: '#467743ff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="file-lines" size={20} color="white" />
                    <Text style={styles.cardTab}>Resume Master</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Build and optimize your resume for <Text style={styles.highlightText}>AI-driven hiring</Text> systems.
                    </Text>
                    <Text style={styles.subText}>
                        Stand out to recruiters and get shortlisted.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    {/* <Text style={[styles.actionButtonText, { color: '#467743ff' }]}>Build My Resume</Text> */}
                    <Text style={[styles.actionButtonText, { color: '#467743ff' }]}>Coming Soon!</Text>
                </Pressable>
            </View>

            {/* 04. Job Application Tracker */}
            <View style={[styles.card, { backgroundColor: '#b1721aff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="list-check" size={20} color="white" />
                    <Text style={styles.cardTab}>Stay Organized</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Track every job application in one <Text style={styles.highlightText}>central dashboard</Text>.
                    </Text>
                    <Text style={styles.subText}>
                        Never miss a follow-up again.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    <Text style={[styles.actionButtonText, { color: '#b1721a' }]}>View Dashboard</Text>
                </Pressable>
            </View>

            {/* 05. Personalized Job Alerts */}
            <View style={[styles.card, { backgroundColor: '#217b6fff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="bell" size={20} color="white" />
                    <Text style={styles.cardTab}>New Opportunities</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Get <Text style={styles.highlightText}>personalized job alerts</Text> that match your skills.
                    </Text>
                    <Text style={styles.subText}>
                        Receive real-time notifications for new roles.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    <Text style={[styles.actionButtonText, { color: '#217b6fff' }]}>Set Alerts</Text>
                </Pressable>
            </View>

            {/* 06. Skill Development */}
            <View style={[styles.card, { backgroundColor: '#e56bb0ff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="brain" size={20} color="white" />
                    <Text style={styles.cardTab}>Skill Up</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Identify <Text style={styles.highlightText}>skill gaps</Text> and find learning paths to bridge them.
                    </Text>
                    <Text style={styles.subText}>
                        Grow your expertise for your next role.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    <Text style={[styles.actionButtonText, { color: '#e56bb1' }]}>Explore Skills</Text>
                </Pressable>
            </View>

            {/* 07. Community & Mentorship */}
            <View style={[styles.card, { backgroundColor: '#6b94e5ff' }]}>
                <View style={styles.header}>
                    <FontAwesome6 name="users-gear" size={20} color="white" />
                    <Text style={styles.cardTab}>Career Connect</Text>
                </View>

                <View style={styles.content}>
                    <Text style={styles.mainText}>
                        Connect with mentors and a community of <Text style={styles.highlightText}>job seekers</Text>.
                    </Text>
                    <Text style={styles.subText}>
                        Get advice and support from peers.
                    </Text>
                </View>

                <Pressable style={[styles.actionButton, { backgroundColor: '#fff' }]}>
                    <Text style={[styles.actionButtonText, { color: '#6b93e5' }]}>Join Community</Text>
                </Pressable>
            </View>

        </ScrollView>
    );
};

export default TrendingCards;

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 16,
        marginVertical: 20,
    },
    card: {
        width: 320,
        height: 200,
        backgroundColor: '#6b72e595',
        borderRadius: 12,
        marginRight: 12,
        padding: 16,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        alignSelf: 'flex-start',
        marginBottom: 8,
    },
    cardTab: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
        marginLeft: 6,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    mainText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 24,
    },
    highlightText: {
        color: '#ffc800',
    },
    subText: {
        color: '#e0e0e0',
        fontSize: 14,
        marginTop: 4,
    },
    actionButton: {
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    actionButtonText: {
        color: '#6b72e5',
        fontWeight: 'bold',
        fontSize: 14,
    },
});
