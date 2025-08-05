import {
    View,
    Text,
    FlatList,
    Pressable,
    StyleSheet,
    TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

const categories = [
    { name: 'React Native', slug: 'reactnative', color: '#4B7BE5' },
    { name: 'JavaScript', slug: 'javascript', color: '#4CAF50' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#FF9800' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#9C27B0' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#E91E63' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#2196F3' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#009688' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#795548' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#3F51B5' },
    //   { name: 'JavaScript', slug: 'javascript', color: '#607D8B' },
    // Add more if needed with custom colors
];

export default function InterviewCategory() {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');

    const filteredCategory = categories.filter((cat) =>
        cat.name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.container}>
            {/* <Stack.Screen
                options={{
                    headerTitle: 'Interview Questions',
                    headerStyle: { backgroundColor: '#0489D9' },
                    headerTintColor: '#fff',
                }}
            /> */}
            {/* <StatusBar barStyle="light-content" /> */}

            <FlatList
                data={filteredCategory}
                keyExtractor={(item) => item.slug}
                ListHeaderComponent={
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search category..."
                        placeholderTextColor="#666"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                }
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => router.push(`/interviews/${item.slug}`)}
                        style={[
                            styles.card,
                            {
                                backgroundColor: item.color + '22',
                                borderLeftColor: item.color,
                            },
                        ]}
                    >
                        <View
                            style={[styles.iconDot, { backgroundColor: item.color }]}
                        />
                        <Text style={styles.cardText}>{item.name}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7ff',
        padding: 16,
    },
    searchInput: {
        backgroundColor: '#fff',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 16,
        borderColor: '#ccc',
        borderWidth: 1,
        color: '#000',
        elevation: 2,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 12,
        borderRadius: 12,
        borderLeftWidth: 5,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    cardText: {
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
        color: '#333',
    },
    iconDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
    },
});
