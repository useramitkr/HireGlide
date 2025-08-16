import React from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const themeColors = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: '#0489D9' }, // consistent blue background
        headerTintColor: '#fff', // white text/icons
        tabBarActiveTintColor: themeColors.tint,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            backgroundColor: 'transparent',
          },
          android: {
            backgroundColor: themeColors.background,
            elevation: 4,
          },
        }),
      }}
    >

      {/* Internship tab */}
      <Tabs.Screen
        name="internship"
        options={{
          title: 'Internship',
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="briefcase" size={24} color={color} />
          ),
        }}
      />
      {/* Home tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      {/* Dashboard tab */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
