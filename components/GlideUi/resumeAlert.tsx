import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const ResumeAlert: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.alertText}>
        To ensure our automation tool works effectively, you must upload your resume before submitting your application. Without a resume, our system cannot perform optimally. Please make sure your resume is uploaded before you begin.
      </Text>
    </View>
  );
};

export default ResumeAlert;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: width * 0.95,
    backgroundColor: '#222831',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  alertText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#ffffff',
    textAlign: 'justify',
  },
});
