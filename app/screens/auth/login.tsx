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
import { DEMO_USER_DATA, storeUserData } from '@/utils/storage';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email.trim() || !password) {
            Alert.alert('Validation Error', 'Email and password are required.');
            return;
        }

        // Email format check
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.trim())) {
            Alert.alert('Invalid Email', 'Please enter a valid email address.');
            return;
        }
        
        // Check for demo credentials first
        if (email.trim() === DEMO_USER_DATA.email && password === DEMO_USER_DATA.password) {
            try {
                // Save the demo user data to AsyncStorage
                await storeUserData(DEMO_USER_DATA);
                Alert.alert('Success', 'Login successful!');
                router.replace('/');
            } catch (error) {
                console.error('Error logging in with demo account:', error);
                Alert.alert('Error', 'Something went wrong with the demo login.');
            }
            return;
        }

        try {
            const storedEmail = await AsyncStorage.getItem('userEmail');
            const storedPassword = await AsyncStorage.getItem('userPassword');
            const storedPhone = await AsyncStorage.getItem('userPhone');
            const storedState = await AsyncStorage.getItem('userState');
            const storedName = await AsyncStorage.getItem('userName');


            if (email.trim() === storedEmail && password === storedPassword) {
                // If credentials match, create a user object and store it
                const user = {
                    name: storedName,
                    email: storedEmail,
                    password: storedPassword,
                    phone: storedPhone,
                    state: storedState
                };
                await storeUserData(user);
                Alert.alert('Success', 'Login successful!');
                router.replace('/');
            } else {
                Alert.alert('Login Failed', 'Incorrect email or password.');
            }
        } catch (error) {
            console.log('Login error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again later.');
        }
    };

    return (
        <>
            <Stack.Screen
                options={{
                    headerTitle: 'Login - HireGlide',
                    headerStyle: {
                        backgroundColor: '#FFFFFF',
                    },
                    headerTintColor: '#000000',
                    headerBackVisible: false,
                    gestureEnabled: false,
                }}
            />
            <StatusBar barStyle="dark-content" />

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
                        <View style={styles.loginScreen}>
                            <Image
                                source={require('@/assets/images/icon.png')}
                                style={styles.logo}
                            />

                            <View style={styles.loginZone}>
                                <Text style={styles.loginText}>Login</Text>
                                <Text style={styles.loginTextPara}>
                                    Please enter your credentials to continue
                                </Text>

                                <View style={styles.loginCard}>
                                    <Text style={styles.cardTitle}>Sign in to your account</Text>

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Email Address"
                                        placeholderTextColor="#999"
                                        keyboardType="email-address"
                                        autoCapitalize="none"
                                        value={email}
                                        onChangeText={setEmail}
                                        autoComplete="email"
                                    />

                                    <TextInput
                                        style={styles.input}
                                        placeholder="Password"
                                        placeholderTextColor="#999"
                                        secureTextEntry
                                        value={password}
                                        onChangeText={setPassword}
                                        autoComplete="password"
                                    />

                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={handleLogin}
                                    >
                                        <Text style={styles.buttonText}>Sign In</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={styles.linksContainer}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            router.push('/screens/auth/registration')
                                        }
                                    >
                                        <Text style={styles.forgotPassword}>Register Now!</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={() => router.push('/')}
                                    >
                                        <Text style={styles.forgotPassword}>Back to Home</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </>
    );
};

export default Login;


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
        width: 150,
        height: 150,
        marginTop: 50,
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
