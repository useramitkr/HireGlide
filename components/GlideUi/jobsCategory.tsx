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

type JobItem = {
  id: number;
  title: string;
  colorStyle: ViewStyle;
};

const JobsCategory: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState<string>('');

  const jobList: JobItem[] = [
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
  { id: 11, title: 'Cybersecurity Analyst', colorStyle: styles.categoryItem2 },
  { id: 12, title: 'Database Administrator', colorStyle: styles.categoryItem3 },
  { id: 13, title: 'Network Administrator', colorStyle: styles.categoryItem1 },
  { id: 14, title: 'System Administrator', colorStyle: styles.categoryItem2 },
  { id: 15, title: 'AI/ML Engineer', colorStyle: styles.categoryItem3 },
  { id: 16, title: 'Business Analyst (IT)', colorStyle: styles.categoryItem1 },
  { id: 17, title: 'Solutions Architect', colorStyle: styles.categoryItem2 },
  { id: 18, title: 'Scrum Master', colorStyle: styles.categoryItem3 },
  { id: 19, title: 'Product Owner', colorStyle: styles.categoryItem1 },
  { id: 20, title: 'IT Support Specialist', colorStyle: styles.categoryItem2 },
  { id: 21, title: 'Web Developer', colorStyle: styles.categoryItem3 },
  { id: 22, title: 'Game Developer', colorStyle: styles.categoryItem1 },
  { id: 23, title: 'Embedded Software Engineer', colorStyle: styles.categoryItem2 },
  { id: 24, title: 'Release Engineer', colorStyle: styles.categoryItem3 },
  { id: 25, title: 'Technical Writer', colorStyle: styles.categoryItem1 },
  { id: 26, title: 'Marketing Manager', colorStyle: styles.categoryItem2 },
  { id: 27, title: 'Digital Marketing Specialist', colorStyle: styles.categoryItem3 },
  { id: 28, title: 'SEO Specialist', colorStyle: styles.categoryItem1 },
  { id: 29, title: 'SEM Specialist', colorStyle: styles.categoryItem2 },
  { id: 30, title: 'Content Marketing Manager', colorStyle: styles.categoryItem3 },
  { id: 31, title: 'Social Media Manager', colorStyle: styles.categoryItem1 },
  { id: 32, 'title': 'Email Marketing Specialist', colorStyle: styles.categoryItem2 },
  { id: 33, title: 'Brand Manager', colorStyle: styles.categoryItem3 },
  { id: 34, title: 'Marketing Analyst', colorStyle: styles.categoryItem1 },
  { id: 35, title: 'Marketing Operations Specialist', colorStyle: styles.categoryItem2 },
  { id: 36, title: 'Product Marketing Manager', colorStyle: styles.categoryItem3 },
  { id: 37, title: 'Growth Hacker', colorStyle: styles.categoryItem1 },
  { id: 38, title: 'Public Relations Specialist', colorStyle: styles.categoryItem2 },
  { id: 39, title: 'Copywriter', colorStyle: styles.categoryItem3 },
  { id: 40, title: 'Graphic Designer', colorStyle: styles.categoryItem1 },
  { id: 41, title: 'Video Editor (Marketing)', colorStyle: styles.categoryItem2 },
  { id: 42, title: 'Campaign Manager', colorStyle: styles.categoryItem3 },
  { id: 43, title: 'Market Research Analyst', colorStyle: styles.categoryItem1 },
  { id: 44, title: 'E-commerce Manager', colorStyle: styles.categoryItem2 },
  { id: 45, title: 'Affiliate Marketing Manager', colorStyle: styles.categoryItem3 },
  { id: 46, title: 'Conversion Rate Optimization Specialist', colorStyle: styles.categoryItem1 },
  { id: 47, title: 'CRM Manager', colorStyle: styles.categoryItem2 },
  { id: 48, title: 'Ad Operations Specialist', colorStyle: styles.categoryItem3 },
  { id: 49, title: 'Sales Manager', colorStyle: styles.categoryItem1 },
  { id: 50, title: 'Account Executive', colorStyle: styles.categoryItem2 },
  { id: 51, title: 'Business Development Representative', colorStyle: styles.categoryItem3 },
  { id: 52, title: 'Sales Engineer', colorStyle: styles.categoryItem1 },
  { id: 53, title: 'Sales Operations Analyst', colorStyle: styles.categoryItem2 },
  { id: 54, title: 'Customer Success Manager', colorStyle: styles.categoryItem3 },
  { id: 55, title: 'Customer Support Specialist', colorStyle: styles.categoryItem1 },
  { id: 56, title: 'Call Center Representative', colorStyle: styles.categoryItem2 },
  { id: 57, title: 'Financial Analyst', colorStyle: styles.categoryItem3 },
  { id: 58, title: 'Accountant', colorStyle: styles.categoryItem1 },
  { id: 59, title: 'Auditor (Private Firm)', colorStyle: styles.categoryItem2 },
  { id: 60, title: 'Investment Banker', colorStyle: styles.categoryItem3 },
  { id: 61, title: 'Portfolio Manager', colorStyle: styles.categoryItem1 },
  { id: 62, title: 'Financial Advisor', colorStyle: styles.categoryItem2 },
  { id: 63, title: 'Trader', colorStyle: styles.categoryItem3 },
  { id: 64, title: 'Underwriter', colorStyle: styles.categoryItem1 },
  { id: 65, title: 'Actuary', colorStyle: styles.categoryItem2 },
  { id: 66, title: 'Credit Analyst', colorStyle: styles.categoryItem3 },
  { id: 67, title: 'Risk Manager', colorStyle: styles.categoryItem1 },
  { id: 68, title: 'Tax Consultant', colorStyle: styles.categoryItem2 },
  { id: 69, title: 'Payroll Specialist', colorStyle: styles.categoryItem3 },
  { id: 70, title: 'Billing Specialist', colorStyle: styles.categoryItem1 },
  { id: 71, title: 'Human Resources Generalist', colorStyle: styles.categoryItem2 },
  { id: 72, title: 'Recruiter', colorStyle: styles.categoryItem3 },
  { id: 73, title: 'Talent Acquisition Specialist', colorStyle: styles.categoryItem1 },
  { id: 74, title: 'HR Business Partner', colorStyle: styles.categoryItem2 },
  { id: 75, title: 'Compensation & Benefits Specialist', colorStyle: styles.categoryItem3 },
  { id: 76, title: 'Training & Development Specialist', colorStyle: styles.categoryItem1 },
  { id: 77, title: 'Employee Relations Specialist', colorStyle: styles.categoryItem2 },
  { id: 78, title: 'Organizational Development Consultant', colorStyle: styles.categoryItem3 },
  { id: 79, title: 'Operations Manager', colorStyle: styles.categoryItem1 },
  { id: 80, title: 'Supply Chain Manager', colorStyle: styles.categoryItem2 },
  { id: 81, title: 'Logistics Coordinator', colorStyle: styles.categoryItem3 },
  { id: 82, title: 'Warehouse Manager', colorStyle: styles.categoryItem1 },
  { id: 83, title: 'Procurement Specialist', colorStyle: styles.categoryItem2 },
  { id: 84, title: 'Production Manager', colorStyle: styles.categoryItem3 },
  { id: 85, title: 'Quality Control Inspector', colorStyle: styles.categoryItem1 },
  { id: 86, title: 'Business Analyst', colorStyle: styles.categoryItem2 },
  { id: 87, title: 'Strategy Consultant', colorStyle: styles.categoryItem3 },
  { id: 88, title: 'Management Consultant', colorStyle: styles.categoryItem1 },
  { id: 89, title: 'Research & Development Scientist', colorStyle: styles.categoryItem2 },
  { id: 90, title: 'Biomedical Engineer', colorStyle: styles.categoryItem3 },
  { id: 91, title: 'Chemical Engineer', colorStyle: styles.categoryItem1 },
  { id: 92, title: 'Mechanical Engineer', colorStyle: styles.categoryItem2 },
  { id: 93, title: 'Electrical Engineer', colorStyle: styles.categoryItem3 },
  { id: 94, title: 'Civil Engineer (Private)', colorStyle: styles.categoryItem1 },
  { id: 95, title: 'Environmental Engineer', colorStyle: styles.categoryItem2 },
  { id: 96, title: 'Architect', colorStyle: styles.categoryItem3 },
  { id: 97, title: 'Interior Designer', colorStyle: styles.categoryItem1 },
  { id: 98, title: 'Landscape Architect', colorStyle: styles.categoryItem2 },
  { id: 99, title: 'Construction Project Manager', colorStyle: styles.categoryItem3 },
  { id: 100, title: 'Site Supervisor', colorStyle: styles.categoryItem1 },
  { id: 101, title: 'Quantity Surveyor', colorStyle: styles.categoryItem2 },
  { id: 102, title: 'Carpenter', colorStyle: styles.categoryItem3 },
  { id: 103, title: 'Electrician', colorStyle: styles.categoryItem1 },
  { id: 104, title: 'Plumber', colorStyle: styles.categoryItem2 },
  { id: 105, title: 'HVAC Technician', colorStyle: styles.categoryItem3 },
  { id: 106, title: 'General Laborer (Construction)', colorStyle: styles.categoryItem1 },
  { id: 107, title: 'Pilot (Commercial)', colorStyle: styles.categoryItem2 },
  { id: 108, title: 'Flight Attendant', colorStyle: styles.categoryItem3 },
  { id: 109, title: 'Truck Driver', colorStyle: styles.categoryItem1 },
  { id: 110, title: 'Bus Driver (Private Company)', colorStyle: styles.categoryItem2 },
  { id: 111, title: 'Forklift Operator', colorStyle: styles.categoryItem3 },
  { id: 112, title: 'Dispatch Manager', colorStyle: styles.categoryItem1 },
  { id: 113, title: 'Logistics Analyst', colorStyle: styles.categoryItem2 },
  { id: 114, title: 'Customs Broker', colorStyle: styles.categoryItem3 },
  { id: 115, title: 'Chef', colorStyle: styles.categoryItem1 },
  { id: 116, title: 'Restaurant Manager', colorStyle: styles.categoryItem2 },
  { id: 117, title: 'Hotel Manager', colorStyle: styles.categoryItem3 },
  { id: 118, title: 'Event Planner', colorStyle: styles.categoryItem1 },
  { id: 119, title: 'Caterer', colorStyle: styles.categoryItem2 },
  { id: 120, title: 'Concierge', colorStyle: styles.categoryItem3 },
  { id: 121, title: 'Tour Guide (Private Company)', colorStyle: styles.categoryItem1 },
  { id: 122, title: 'Travel Agent', colorStyle: styles.categoryItem2 },
  { id: 123, title: 'Bartender', colorStyle: styles.categoryItem3 },
  { id: 124, title: 'Barista', colorStyle: styles.categoryItem1 },
  { id: 125, title: 'Retail Manager', colorStyle: styles.categoryItem2 },
  { id: 126, title: 'Sales Associate (Retail)', colorStyle: styles.categoryItem3 },
  { id: 127, title: 'Merchandiser', colorStyle: styles.categoryItem1 },
  { id: 128, title: 'Buyer (Retail)', colorStyle: styles.categoryItem2 },
  { id: 129, title: 'Fashion Designer', colorStyle: styles.categoryItem3 },
  { id: 130, title: 'Textile Designer', colorStyle: styles.categoryItem1 },
  { id: 131, title: 'Jewelry Designer', colorStyle: styles.categoryItem2 },
  { id: 132, title: 'Personal Stylist', colorStyle: styles.categoryItem3 },
  { id: 133, title: 'Photographer (Commercial)', colorStyle: styles.categoryItem1 },
  { id: 134, title: 'Videographer (Commercial)', colorStyle: styles.categoryItem2 },
  { id: 135, title: 'Film Producer', colorStyle: styles.categoryItem3 },
  { id: 136, title: 'Film Director', colorStyle: styles.categoryItem1 },
  { id: 137, title: 'Actor', colorStyle: styles.categoryItem2 },
  { id: 138, title: 'Musician', colorStyle: styles.categoryItem3 },
  { id: 139, title: 'Music Producer', colorStyle: styles.categoryItem1 },
  { id: 140, title: 'Sound Engineer', colorStyle: styles.categoryItem2 },
  { id: 141, title: 'Animator', colorStyle: styles.categoryItem3 },
  { id: 142, title: 'Video Game Tester', colorStyle: styles.categoryItem1 },
  { id: 143, title: 'Journalist (Private Media)', colorStyle: styles.categoryItem2 },
  { id: 144, title: 'Editor (Publishing)', colorStyle: styles.categoryItem3 },
  { id: 145, title: 'Book Publisher', colorStyle: styles.categoryItem1 },
  { id: 146, title: 'Librarian (Private)', colorStyle: styles.categoryItem2 },
  { id: 147, title: 'Lawyer (Private Practice)', colorStyle: styles.categoryItem3 },
  { id: 148, title: 'Paralegal', colorStyle: styles.categoryItem1 },
  { id: 149, title: 'Legal Assistant', colorStyle: styles.categoryItem2 },
  { id: 150, title: 'Corporate Counsel', colorStyle: styles.categoryItem3 },
  { id: 151, title: 'Private Investigator', colorStyle: styles.categoryItem1 },
  { id: 152, title: 'Security Guard (Private)', colorStyle: styles.categoryItem2 },
  { id: 153, title: 'Personal Trainer', colorStyle: styles.categoryItem3 },
  { id: 154, title: 'Yoga Instructor', colorStyle: styles.categoryItem1 },
  { id: 155, title: 'Pilates Instructor', colorStyle: styles.categoryItem2 },
  { id: 156, title: 'Fitness Coach', colorStyle: styles.categoryItem3 },
  { id: 157, title: 'Physical Therapist (Private Clinic)', colorStyle: styles.categoryItem1 },
  { id: 158, title: 'Occupational Therapist (Private Clinic)', colorStyle: styles.categoryItem2 },
  { id: 159, title: 'Speech-Language Pathologist (Private Clinic)', colorStyle: styles.categoryItem3 },
  { id: 160, title: 'Registered Nurse (Private Hospital)', colorStyle: styles.categoryItem1 },
  { id: 161, title: 'Medical Assistant', colorStyle: styles.categoryItem2 },
  { id: 162, title: 'Dental Assistant', colorStyle: styles.categoryItem3 },
  { id: 163, title: 'Veterinarian (Private Practice)', colorStyle: styles.categoryItem1 },
  { id: 164, title: 'Veterinary Technician', colorStyle: styles.categoryItem2 },
  { id: 165, title: 'Pharmacist (Retail/Private)', colorStyle: styles.categoryItem3 },
  { id: 166, title: 'Pharmacy Technician', colorStyle: styles.categoryItem1 },
  { id: 167, title: 'Optometrist', colorStyle: styles.categoryItem2 },
  { id: 168, title: 'Chiropractor', colorStyle: styles.categoryItem3 },
  { id: 169, title: 'Massage Therapist', colorStyle: styles.categoryItem1 },
  { id: 170, title: 'Esthetician', colorStyle: styles.categoryItem2 },
  { id: 171, title: 'Hair Stylist', colorStyle: styles.categoryItem3 },
  { id: 172, title: 'Barber', colorStyle: styles.categoryItem1 },
  { id: 173, title: 'Nail Technician', colorStyle: styles.categoryItem2 },
  { id: 174, title: 'Home Health Aide', colorStyle: styles.categoryItem3 },
  { id: 175, title: 'Caregiver (Private)', colorStyle: styles.categoryItem1 },
  { id: 176, title: 'Nanny', colorStyle: styles.categoryItem2 },
  { id: 177, title: 'Childcare Worker (Private)', colorStyle: styles.categoryItem3 },
  { id: 178, title: 'Tutor (Private)', colorStyle: styles.categoryItem1 },
  { id: 179, title: 'Private School Teacher', colorStyle: styles.categoryItem2 },
  { id: 180, title: 'University Professor (Private)', colorStyle: styles.categoryItem3 },
  { id: 181, title: 'Academic Advisor (Private University)', colorStyle: styles.categoryItem1 },
  { id: 182, title: 'Librarian (Corporate/Private)', colorStyle: styles.categoryItem2 },
  { id: 183, title: 'Museum Curator (Private)', colorStyle: styles.categoryItem3 },
  { id: 184, title: 'Zoo Keeper (Private Zoo)', colorStyle: styles.categoryItem1 },
  { id: 185, title: 'Farmer (Private)', colorStyle: styles.categoryItem2 },
  { id: 186, title: 'Agricultural Technician', colorStyle: styles.categoryItem3 },
  { id: 187, title: 'Forester (Private Company)', colorStyle: styles.categoryItem1 },
  { id: 188, title: 'Fisherman (Commercial)', colorStyle: styles.categoryItem2 },
  { id: 189, title: 'Environmental Consultant', colorStyle: styles.categoryItem3 },
  { id: 190, title: 'Geologist (Private Sector)', colorStyle: styles.categoryItem1 },
  { id: 191, title: 'Chemist (Private Industry)', colorStyle: styles.categoryItem2 },
  { id: 192, title: 'Biologist (Private Research)', colorStyle: styles.categoryItem3 },
  { id: 193, title: 'Physicist (Private Research)', colorStyle: styles.categoryItem1 },
  { id: 194, title: 'Mathematician (Private Industry)', colorStyle: styles.categoryItem2 },
  { id: 195, title: 'Statistician (Private Industry)', colorStyle: styles.categoryItem3 },
  { id: 196, title: 'Astronomer (Private Observatory)', colorStyle: styles.categoryItem1 },
  { id: 197, title: 'Meteorologist (Private Weather Service)', colorStyle: styles.categoryItem2 },
  { id: 198, title: 'Private Chef', colorStyle: styles.categoryItem3 },
  { id: 199, title: 'Household Manager', colorStyle: styles.categoryItem1 },
  { id: 200, title: 'Executive Assistant', colorStyle: styles.categoryItem2 },
  { id: 201, title: 'Administrative Assistant', colorStyle: styles.categoryItem3 },
  { id: 202, title: 'Office Manager', colorStyle: styles.categoryItem1 },
  { id: 203, title: 'Data Entry Clerk', colorStyle: styles.categoryItem2 },
  { id: 204, title: 'Receptionist', colorStyle: styles.categoryItem3 },
  { id: 205, title: 'Secretary', colorStyle: styles.categoryItem1 },
  { id: 206, title: 'Virtual Assistant', colorStyle: styles.categoryItem2 },
  { id: 207, title: 'Transcriptionist', colorStyle: styles.categoryItem3 },
  { id: 208, title: 'Translator', colorStyle: styles.categoryItem1 },
  { id: 209, title: 'Interpreter', colorStyle: styles.categoryItem2 },
  { id: 210, title: 'Professional Organizer', colorStyle: styles.categoryItem3 }
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

export default JobsCategory;

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
