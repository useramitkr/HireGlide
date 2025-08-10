import React, { useEffect, useState, ReactNode } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

interface AppLayoutProps {
  children: ReactNode;
}


//No Internet detector Layout
export default function AppLayout({ children }: AppLayoutProps) {
  const [isConnected, setIsConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setIsConnected(state.isConnected);
    });

    return () => unsubscribe();
  }, []);

  if (isConnected === null) {
    // While checking connection
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
        <Text style={styles.loadingText}>Checking network...</Text>
      </View>
    );
  }

  if (!isConnected) {
    // Show offline screen
    return (
      <View style={styles.offlineContainer}>
        <Text style={styles.offlineEmoji}>📡</Text>
        <Text style={styles.offlineTitle}>No Internet Connection</Text>
        <Text style={styles.offlineSubtitle}>
          Please check your network and try again.
        </Text>
      </View>
    );
  }

  // ✅ Only render the app when online
  return <>{children}</>;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F9FA",
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: "#555",
  },
  offlineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F8F9FA",
  },
  offlineEmoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  offlineTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  offlineSubtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
});
