import React from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    return null; // Prevent rendering until fonts are loaded
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' },
            headerTintColor: colorScheme === 'dark' ? '#fff' : '#000',
            headerTitleStyle: { fontWeight: 'bold' },
            headerTransparent: false,
          }}
        >
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar
          style={colorScheme === 'dark' ? 'light' : 'dark'} // readable icons
          backgroundColor={colorScheme === 'dark' ? '#000' : '#fff'} // solid background
          translucent={false} // don't overlay content
        />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
