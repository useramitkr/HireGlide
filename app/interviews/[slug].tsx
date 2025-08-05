import { useLocalSearchParams } from 'expo-router';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { useEffect, useState } from 'react';
import { qnaData } from '../../lib/qnaMap';

type QnaItem = {
  question: string;
  answer: string;
};

export default function InterviewQnA() {
  const { slug } = useLocalSearchParams();
  const [qnaList, setQnaList] = useState<QnaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const key = slug?.toString().toLowerCase();

    if (key && qnaData[key]) {
      setQnaList(qnaData[key]);
    } else {
      console.warn(`QnA not found for: ${key}`);
    }

    setLoading(false);
  }, [slug]);

  return (
    <View style={styles.container}>
      {/* <StatusBar barStyle="light-content" /> */}
      
      <Text style={styles.title}>{slug?.toString().replace(/^\w/, (c) => c.toUpperCase())}</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0077cc" />
      ) : (
        <FlatList
          data={qnaList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.qnaCard}>
              <Text style={styles.question}>Q: {item.question}</Text>
              <Text style={styles.answer}>A: {item.answer}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222',
    textAlign: 'center',
  },
  qnaCard: {
    backgroundColor: '#f0f4ff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#6a5acd',
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  answer: {
    fontSize: 15,
    color: '#444',
  },
});
