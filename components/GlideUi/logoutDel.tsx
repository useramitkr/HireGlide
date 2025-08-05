import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { clearUserData } from '@/utils/storage';

const LogoutDel = () => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    // Clear all user data
    const handleClear = async () => {
        try {
            await AsyncStorage.clear();
            Alert.alert("Account Deleted", "All your data has been removed.");
            router.replace('/screens/auth/login'); // 👈 Redirect to login (or change path as needed)
        } catch (error) {
            Alert.alert("Error", "Failed to delete account.");
        }
    };

    // Confirmation before delete
    const confirmDelete = () => {
        Alert.alert(
            "Confirm Deletion",
            "Are you sure you want to permanently delete your account? This action cannot be undone.",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    onPress: handleClear,
                    style: "destructive",
                },
            ]
        );
    };

    // Logout function (after confirmation)
    const handleLogout = async () => {
        try {
            await clearUserData();
            setLoggedIn(false);
            Alert.alert('Logged Out', 'You have been logged out.');
            router.replace('/screens/auth/login'); // Redirect to login
        } catch (error) {
            console.error('Logout failed:', error);
            Alert.alert('Error', 'Logout failed.');
        }
    };

    // Show confirmation first
    const confirmLogout = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: handleLogout,
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <View>
            <Pressable
                onPress={confirmLogout}
                style={[styles.button, { backgroundColor: '#555' }]}
            >
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>

            <Pressable onPress={confirmDelete} style={styles.button}>
                <Text style={styles.buttonText}>Delete Account Permanently</Text>
            </Pressable>
        </View>
    )
}

export default LogoutDel;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#DC143C',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})