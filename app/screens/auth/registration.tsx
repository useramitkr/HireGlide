import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Registration = () => {
    const router = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [state, setState] = useState('');

    const handleRegister = async () => {
        if (!name || !email || !password || !phone || !state) {
            Alert.alert('Missing Fields', 'Please fill in all fields.');
            return;
        }

        try {
            await AsyncStorage.setItem('userName', name);
            await AsyncStorage.setItem('userEmail', email);
            await AsyncStorage.setItem('userPassword', password);
            await AsyncStorage.setItem('userPhone', phone);
            await AsyncStorage.setItem('userState', state);

            Alert.alert('Success', 'Registration successful!');

            setTimeout(() => {
                router.replace('/screens/auth/login');
            }, 1000); // 1 second delay

        } catch (error) {
            console.error('Error saving user data:', error);
            Alert.alert('Error', 'Something went wrong while saving user data.');
        }
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled"
                >
                    <Stack.Screen
                        options={{
                            headerTitle: 'Registration - HireGlide',
                            headerStyle: { backgroundColor: '#FFFFFF' },
                            headerTintColor: '#000000',
                            headerBackVisible: false,
                            gestureEnabled: false,
                        }}
                    />
                    <StatusBar barStyle="dark-content" />
                    <View style={styles.loginScreen}>
                        <Image
                            source={require('@/assets/images/icon.png')}
                            style={styles.logo}
                        />

                        <View style={styles.loginZone}>
                            <Text style={styles.loginText}>Register Now!</Text>
                            <Text style={styles.loginTextPara}>
                                Please fill the details to create your account
                            </Text>

                            <View style={styles.loginCard}>
                                <Text style={styles.cardTitle}>Create Account</Text>

                                <TextInput
                                    style={styles.input}
                                    placeholder="Full Name"
                                    placeholderTextColor="#999"
                                    value={name}
                                    onChangeText={setName}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Email Address"
                                    placeholderTextColor="#999"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    value={email}
                                    onChangeText={setEmail}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Password"
                                    placeholderTextColor="#999"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="Phone Number"
                                    placeholderTextColor="#999"
                                    keyboardType="phone-pad"
                                    value={phone}
                                    onChangeText={setPhone}
                                />

                                <TextInput
                                    style={styles.input}
                                    placeholder="State"
                                    placeholderTextColor="#999"
                                    value={state}
                                    onChangeText={setState}
                                />

                                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                                    <Text style={styles.buttonText}>Register</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.linksContainer}>
                                <TouchableOpacity onPress={() => router.push('/screens/auth/login')}>
                                    <Text style={styles.forgotPassword}>
                                        Already Registered? Login Now!
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Registration;




const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    loginScreen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderRadius: 30,
    },
    loginZone: {
        flex: 1,
        width: '100%',
        backgroundColor: '#0489D9',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 20,
        marginTop: 30,
        justifyContent: 'center',
    },
    loginText: {
        color: '#FFFFE0',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    loginTextPara: {
        fontSize: 16,
        color: '#f2f2f2',
        marginBottom: 30,
    },
    loginCard: {
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 20,
        color: '#303742',
    },
    input: {
        height: 48,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 12,
        backgroundColor: '#F9F9F9',
        fontSize: 15,
    },
    button: {
        backgroundColor: '#FFA500',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#303742',
        fontWeight: 'bold',
        fontSize: 16,
    },
    linksContainer: {
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15,
    },
    forgotPassword: {
        color: '#ffffff',
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});
