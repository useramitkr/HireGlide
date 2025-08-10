import React from 'react';
import { StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';

const TncCard = () => {
  const router = useRouter();

  return (
    <Pressable
      style={styles.cardContainer}
      onPress={() => router.push('/screens/legal/tnc')}
    >
      <View style={styles.iconBackground}>
        <FontAwesome6 name="file-contract" size={24} color="#fff" />
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.cardTitle}>Terms and Conditions</Text>
        <Text style={styles.cardSubtitle}>Review our policies.</Text>
      </View>
      <View style={styles.arrowIcon}>
          <FontAwesome6 name="chevron-right" size={20} color="#6b7280" />
      </View>
    </Pressable>
  );
};

export default TncCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#6366f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  arrowIcon: {
      padding: 8,
  },
});
