import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import { Stack, useRouter, useFocusEffect } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { getUserData } from '@/utils/storage';
import { saveResumeData, getResumeData } from '@/utils/resumeStorage';

interface WorkExperience {
  id: number;
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface Education {
  id: number;
  degree: string;
  university: string;
  graduationDate: string;
}

interface Project {
  id: number;
  projectName: string;
  projectDescription: string;
  projectLink: string;
}

interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  profileSummary: string;
  workExperience: WorkExperience[];
  education: Education[];
  projects: Project[];
  skills: string[];
  socialLinks: SocialLink[];
  portfolioLink: string;
}

const ResumeBuilder = () => {
  const router = useRouter();

  const [resume, setResume] = useState<ResumeData>({
    fullName: '',
    email: '',
    phone: '',
    profileSummary: '',
    workExperience: [{
      id: 1,
      jobTitle: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
    }],
    education: [{
      id: 1,
      degree: '',
      university: '',
      graduationDate: '',
    }],
    projects: [{
      id: 1,
      projectName: '',
      projectDescription: '',
      projectLink: '',
    }],
    skills: [''],
    socialLinks: [{
      id: 1,
      platform: '',
      url: '',
    }],
    portfolioLink: '',
  });

  // Load saved resume data and user data when the screen comes into focus
  useFocusEffect(
    useCallback(() => {
      const loadResumeAndUserData = async () => {
        const userData = await getUserData();
        const savedResumeData = await getResumeData();

        if (savedResumeData) {
          // If saved resume data exists, use it to populate the form
          setResume(savedResumeData);
        } else if (userData) {
          // If no saved resume data, use basic user details from login data
          setResume(prev => ({
            ...prev,
            fullName: userData.name || '',
            email: userData.email || '',
            phone: userData.phone || '',
          }));
        }
      };
      loadResumeAndUserData();
    }, [])
  );

  const handleInputChange = (section: keyof ResumeData, index: number, field: string, value: string) => {
    setResume(prev => {
      const newSection = [...(prev[section] as any)];
      if (typeof newSection[index] === 'string') {
        newSection[index] = value;
      } else {
        newSection[index][field] = value;
      }
      return { ...prev, [section]: newSection };
    });
  };

  const addWorkExperience = () => {
    setResume(prev => ({
      ...prev,
      workExperience: [
        ...prev.workExperience,
        {
          id: prev.workExperience.length + 1,
          jobTitle: '',
          company: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    }));
  };

  const removeWorkExperience = (id: number) => {
    setResume(prev => ({
      ...prev,
      workExperience: prev.workExperience.filter(exp => exp.id !== id),
    }));
  };

  const addEducation = () => {
    setResume(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: prev.education.length + 1,
          degree: '',
          university: '',
          graduationDate: '',
        },
      ],
    }));
  };

  const removeEducation = (id: number) => {
    setResume(prev => ({
      ...prev,
      education: prev.education.filter(edu => edu.id !== id),
    }));
  };

  const addProject = () => {
    setResume(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          id: prev.projects.length + 1,
          projectName: '',
          projectDescription: '',
          projectLink: '',
        },
      ],
    }));
  };

  const removeProject = (id: number) => {
    setResume(prev => ({
      ...prev,
      projects: prev.projects.filter(proj => proj.id !== id),
    }));
  };

  const addSocialLink = () => {
    setResume(prev => ({
      ...prev,
      socialLinks: [
        ...prev.socialLinks,
        {
          id: prev.socialLinks.length + 1,
          platform: '',
          url: '',
        },
      ],
    }));
  };

  const removeSocialLink = (id: number) => {
    setResume(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter(link => link.id !== id),
    }));
  };

  const addSkill = () => {
    setResume(prev => ({
      ...prev,
      skills: [...prev.skills, ''],
    }));
  };

  const removeSkill = (index: number) => {
    setResume(prev => {
      const newSkills = [...prev.skills];
      newSkills.splice(index, 1);
      return { ...prev, skills: newSkills };
    });
  };

  const handleSaveResume = async () => {
    if (!resume.fullName || !resume.email) {
      Alert.alert('Validation Error', 'Full Name and Email are required.');
      return;
    }
    
    // Save the data to AsyncStorage
    await saveResumeData(resume);
    Alert.alert('Success', 'Resume saved successfully!');
    router.back();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Stack.Screen
        options={{
          headerTitle: 'Updated Resume',
          headerBackTitle: 'Back',
          headerStyle: { backgroundColor: '#0489D9' },
          headerTintColor: '#ffffff',
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Personal Information Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.sectionDescription}>Basic contact details for your profile.</Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#555"
            value={resume.fullName}
            onChangeText={text => setResume({ ...resume, fullName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#555"
            keyboardType="email-address"
            value={resume.email}
            onChangeText={text => setResume({ ...resume, email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            placeholderTextColor="#555"
            keyboardType="phone-pad"
            value={resume.phone}
            onChangeText={text => setResume({ ...resume, phone: text })}
          />
        </View>

        {/* Profile Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Profile Summary</Text>
          <Text style={styles.sectionDescription}>Write a brief summary of your professional experience and goals.</Text>
          <TextInput
            style={[styles.input, { height: 120 }]}
            placeholder="e.g., A highly motivated software developer with 2 years of experience..."
            placeholderTextColor="#555"
            multiline
            textAlignVertical="top"
            value={resume.profileSummary}
            onChangeText={text => setResume({ ...resume, profileSummary: text })}
          />
        </View>

        {/* Work Experience Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            <TouchableOpacity onPress={addWorkExperience}>
              <FontAwesome6 name="plus" size={24} color="#0489D9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>Add your past roles and responsibilities.</Text>
          {resume.workExperience.map((exp, index) => (
            <View key={exp.id} style={styles.subsection}>
              <View style={styles.subsectionHeader}>
                <Text style={styles.subsectionTitle}>Experience #{index + 1}</Text>
                <TouchableOpacity onPress={() => removeWorkExperience(exp.id)}>
                  <FontAwesome6 name="trash" size={20} color="#DC143C" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Job Title"
                placeholderTextColor="#555"
                value={exp.jobTitle}
                onChangeText={text => handleInputChange('workExperience', index, 'jobTitle', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Company"
                placeholderTextColor="#555"
                value={exp.company}
                onChangeText={text => handleInputChange('workExperience', index, 'company', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Start Date (e.g., Jan 2020)"
                placeholderTextColor="#555"
                value={exp.startDate}
                onChangeText={text => handleInputChange('workExperience', index, 'startDate', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="End Date (e.g., Dec 2022)"
                placeholderTextColor="#555"
                value={exp.endDate}
                onChangeText={text => handleInputChange('workExperience', index, 'endDate', text)}
              />
              <TextInput
                style={[styles.input, { height: 100 }]}
                placeholder="Job Description"
                placeholderTextColor="#555"
                multiline
                textAlignVertical="top"
                value={exp.description}
                onChangeText={text => handleInputChange('workExperience', index, 'description', text)}
              />
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Education</Text>
            <TouchableOpacity onPress={addEducation}>
              <FontAwesome6 name="plus" size={24} color="#0489D9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>List your academic qualifications.</Text>
          {resume.education.map((edu, index) => (
            <View key={edu.id} style={styles.subsection}>
              <View style={styles.subsectionHeader}>
                <Text style={styles.subsectionTitle}>Education #{index + 1}</Text>
                <TouchableOpacity onPress={() => removeEducation(edu.id)}>
                  <FontAwesome6 name="trash" size={20} color="#DC143C" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Degree/Course"
                placeholderTextColor="#555"
                value={edu.degree}
                onChangeText={text => handleInputChange('education', index, 'degree', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="University/College"
                placeholderTextColor="#555"
                value={edu.university}
                onChangeText={text => handleInputChange('education', index, 'university', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Graduation Date (e.g., May 2023)"
                placeholderTextColor="#555"
                value={edu.graduationDate}
                onChangeText={text => handleInputChange('education', index, 'graduationDate', text)}
              />
            </View>
          ))}
        </View>

        {/* Personal Projects Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Personal Projects</Text>
            <TouchableOpacity onPress={addProject}>
              <FontAwesome6 name="plus" size={24} color="#0489D9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>Showcase projects you've worked on.</Text>
          {resume.projects.map((project, index) => (
            <View key={project.id} style={styles.subsection}>
              <View style={styles.subsectionHeader}>
                <Text style={styles.subsectionTitle}>Project #{index + 1}</Text>
                <TouchableOpacity onPress={() => removeProject(project.id)}>
                  <FontAwesome6 name="trash" size={20} color="#DC143C" />
                </TouchableOpacity>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Project Name"
                placeholderTextColor="#555"
                value={project.projectName}
                onChangeText={text => handleInputChange('projects', index, 'projectName', text)}
              />
              <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Project Description"
                placeholderTextColor="#555"
                multiline
                textAlignVertical="top"
                value={project.projectDescription}
                onChangeText={text => handleInputChange('projects', index, 'projectDescription', text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Project Link (e.g., GitHub URL)"
                placeholderTextColor="#555"
                value={project.projectLink}
                onChangeText={text => handleInputChange('projects', index, 'projectLink', text)}
              />
            </View>
          ))}
        </View>
        
        {/* Skills Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <TouchableOpacity onPress={addSkill}>
              <FontAwesome6 name="plus" size={24} color="#0489D9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>List your key technical and soft skills.</Text>
          <View style={styles.skillsContainer}>
            {resume.skills.map((skill, index) => (
              <View key={index} style={styles.skillInputWrapper}>
                <TextInput
                  style={styles.input}
                  placeholder={`Skill #${index + 1}`}
                  placeholderTextColor="#555"
                  value={skill}
                  onChangeText={text => {
                    const newSkills = [...resume.skills];
                    newSkills[index] = text;
                    setResume({ ...resume, skills: newSkills });
                  }}
                />
                <TouchableOpacity onPress={() => removeSkill(index)} style={styles.removeSkillButton}>
                  <FontAwesome6 name="xmark" size={16} color="#DC143C" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>

        {/* Links Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Portfolio & Social Links</Text>
            <TouchableOpacity onPress={addSocialLink}>
              <FontAwesome6 name="plus" size={24} color="#0489D9" />
            </TouchableOpacity>
          </View>
          <Text style={styles.sectionDescription}>Add links to your portfolio, GitHub, or LinkedIn.</Text>
          <TextInput
            style={styles.input}
            placeholder="Portfolio Link"
            placeholderTextColor="#555"
            value={resume.portfolioLink}
            onChangeText={text => setResume({ ...resume, portfolioLink: text })}
          />
          {resume.socialLinks.map((link, index) => (
            <View key={link.id} style={styles.linkContainer}>
              <View style={styles.linkInputs}>
                <TextInput
                  style={[styles.input, { flex: 1, marginBottom: 0 }]}
                  placeholder="Platform (e.g., GitHub)"
                  placeholderTextColor="#555"
                  value={link.platform}
                  onChangeText={text => handleInputChange('socialLinks', index, 'platform', text)}
                />
                <TextInput
                  style={[styles.input, { flex: 2, marginBottom: 0 }]}
                  placeholder="URL"
                  placeholderTextColor="#555"
                  value={link.url}
                  onChangeText={text => handleInputChange('socialLinks', index, 'url', text)}
                />
              </View>
              <TouchableOpacity onPress={() => removeSocialLink(link.id)} style={styles.removeLinkButton}>
                <FontAwesome6 name="trash" size={20} color="#DC143C" />
              </TouchableOpacity>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.saveButton} onPress={handleSaveResume}>
          <Text style={styles.saveButtonText}>Save Resume</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ResumeBuilder;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 25,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303742',
  },
  sectionDescription: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 15,
  },
  subsection: {
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  subsectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 10,
    fontSize: 16,
    color: '#303742',
  },
  dateContainer: {
    marginBottom: 10,
  },
  dateInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 16,
    color: '#303742',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  linkInputs: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  removeLinkButton: {
    padding: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  skillInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  skillInput: {
    flex: 1,
    marginRight: 10,
  },
  removeSkillButton: {
    padding: 8,
  },
  saveButton: {
    backgroundColor: '#0489D9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
