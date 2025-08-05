import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function InterviewLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0489D9' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
        }}
      >

        <Stack.Screen
          name="[slug]"
          options={{
            headerTitle: 'Interview Questions',
            // headerBackTitle: 'Back',
          }}
        />
      </Stack>
    </>
  );
}
