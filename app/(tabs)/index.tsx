import HomeAnalytics from '@/components/GlideUi/homeAnalytics';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Let's find you a great job!</Text>
      </View>

      {/* Header Analytics  */}
      <HomeAnalytics />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 60,
    backgroundColor: 'white',
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    paddingTop: 16,
    backgroundColor: 'white', 
    width: '100%',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
