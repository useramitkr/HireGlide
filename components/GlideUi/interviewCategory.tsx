import {
    FlatList,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    ViewStyle,
    TextStyle,
} from 'react-native';
import React, { useState } from 'react';
import { FontAwesome6 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type InterviewItem = {
    id: number;
    title: string;
    colorStyle: ViewStyle;
};

const InterviewCategory: React.FC = () => {
    const router = useRouter();
    const [searchText, setSearchText] = useState<string>('');

    const jobList: InterviewItem[] = [
        { id: 1, title: 'Frontend Developer', colorStyle: styles.categoryItem1 },
        { id: 2, title: 'Backend Developer', colorStyle: styles.categoryItem2 },
        { id: 3, title: 'Full Stack Engineer', colorStyle: styles.categoryItem3 },
        { id: 4, title: 'UI/UX Designer', colorStyle: styles.categoryItem1 },
        { id: 5, title: 'Mobile Developer', colorStyle: styles.categoryItem2 },
        { id: 6, title: 'QA Tester', colorStyle: styles.categoryItem3 },
        { id: 7, title: 'DevOps Engineer', colorStyle: styles.categoryItem1 },
        { id: 8, title: 'Project Manager', colorStyle: styles.categoryItem2 },
        { id: 9, title: 'Data Scientist', colorStyle: styles.categoryItem3 },
        { id: 10, title: 'Cloud Engineer', colorStyle: styles.categoryItem1 },
    ];

    const filteredJobs = jobList.filter((job) =>
        job.title.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={filteredJobs}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search job title..."
                        placeholderTextColor="#999"
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                }
                renderItem={({ item }) => (
                    <Pressable
                        style={item.colorStyle}
                        onPress={() => router.push('/screens/jobs/jobApply')}
                    >
                        <FontAwesome6
                            name="square-up-right"
                            size={24}
                            color="white"
                            style={styles.categoryIcon}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.categoryText}>{item.title}</Text>
                            <Text style={styles.categoryText2}>Apply Now</Text>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default InterviewItem;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 16,
    },
    searchInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 10,
    },
    categoryItem1: {
        width: '100%',
        backgroundColor: '#f0dfbfff',
        padding: 16,
        paddingLeft: 30,
        borderRadius: 30,
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryItem2: {
        width: '100%',
        backgroundColor: '#eeeebfff',
        padding: 16,
        paddingLeft: 30,
        borderRadius: 30,
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryItem3: {
        width: '100%',
        backgroundColor: '#b5aff16d',
        padding: 16,
        paddingLeft: 30,
        borderRadius: 30,
        flexDirection: 'row',
        gap: 30,
        alignItems: 'center',
        marginBottom: 10,
    },
    categoryIcon: {
        fontSize: 40,
        color: '#222831',
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    categoryText: {
        fontSize: 18,
        fontWeight: '500',
        flexWrap: 'wrap',
        color: '#222',
    },
    categoryText2: {
        fontSize: 14,
        color: '#555',
    },
});
