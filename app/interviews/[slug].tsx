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
    backgroundColor: '#1b1c1eff',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff',
    textAlign: 'center',
  },
  qnaCard: {
    backgroundColor: '#000000',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#FFA500',
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#ccccccff',
    textAlign: 'justify',
  },
  answer: {
    fontSize: 16,
    color: '#b8b8b8ff',
    lineHeight: 22,
    textAlign: 'justify',
  },
});
