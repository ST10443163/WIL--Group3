import React, {useState} from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  StyleSheet, 
  Image, 
  Switch,
  Alert 
} from "react-native";

type ScreenType = 'Home' | 'Courses' | 'Fees' | 'Contact';

export default function App() {
  const [screen, setScreen] = useState<ScreenType>('Home');

  const renderScreen = () => {
    switch(screen) {
      case 'Home': return <HomeScreen />;
      case 'Courses': return <CoursesScreen />;
      case 'Fees': return <FeesScreen />;
      case 'Contact': return <ContactScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.topbar}>

        <Image source={require('./assets/logo.png')} style={styles.logo} resizeMode="cover"/>
        <Text style={styles.logoText}>EMPOWERING SKILLS ACADEMY</Text>
      </View>

      {/* Navigation */}
      <View style={styles.navRow}>
        <TouchableOpacity 
          style={[styles.navButton, screen === 'Home' && styles.navActive]} 
          onPress={() => setScreen('Home')}
        >
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, screen === 'Courses' && styles.navActive]} 
          onPress={() => setScreen('Courses')}
        >
          <Text style={styles.navText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, screen === 'Fees' && styles.navActive]} 
          onPress={() => setScreen('Fees')}
        >
          <Text style={styles.navText}>Fees</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, screen === 'Contact' && styles.navActive]} 
          onPress={() => setScreen('Contact')}
        >
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>

      {/* Footer */}
      <View style={styles.footerBar}>
        <Text style={styles.footerText}>© 2024 Empowering Skills Academy</Text>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>About Us</Text>
        <Text style={styles.aboutText}> 
         Empowering the Nation was established in 2018 in Johannesburg to provide 
         valuable skills training for domestic workers and gardeners. Founded by 
         Precious Radebe, the organization aims to uplift community members by 
         teaching professional skills that increase employability and income potential. 
         Hundreds of learners have graduated from both the six-month Learnerships and 
         six-week Short Skills Training programmes, building brighter futures for 
         themselves and their families.
       </Text>
   




  


        <Text style={styles.panelTitle}>Our Courses</Text>
        <View style={styles.courseSummary}>
          <Text style={styles.courseItem}>• 6 Week Courses</Text>
          <Text style={styles.courseItem}>• 6 Month Courses</Text>
        </View>

        <Text style={styles.panelTitle}>Testimonials</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Student Reviews</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function CoursesScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>6 Month Courses</Text>
        
        <View style={styles.courseCard}>
          <Text style={styles.courseName}>First Aid Training</Text>
          <Text style={styles.courseFee}>Fee: R1500</Text>
          <Text style={styles.courseDescription}>Purpose: To provide first aid awareness and basic life support</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• Wounds and bleeding</Text>
          <Text style={styles.bulletPoint}>• Burns and fractures</Text>
          <Text style={styles.bulletPoint}>• Emergency scene management</Text>
          <Text style={styles.bulletPoint}>• Cardio-Pulmonary Resuscitation (CPR)</Text>
          <Text style={styles.bulletPoint}>• Respiratory distress (Choking)</Text>
        </View>

        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Sewing</Text>
          <Text style={styles.courseFee}>Fee: R1500</Text>
          <Text style={styles.courseDescription}>Purpose: To provide alterations and new garment tailoring services</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• Types of stitches</Text>
          <Text style={styles.bulletPoint}>• Threading a sewing machine</Text>
          <Text style={styles.bulletPoint}>• Sewing buttons, zips, hems and seams</Text>
          <Text style={styles.bulletPoint}>• Alterations</Text>
          <Text style={styles.bulletPoint}>• Designing and sewing new garments</Text>
        </View>

        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Landscaping</Text>
          <Text style={styles.courseFee}>Fee: R1500</Text>
          <Text style={styles.courseDescription}>Purpose: To provide landscaping services for new and established gardens</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• Indigenous and exotic plants and trees</Text>
          <Text style={styles.bulletPoint}>• Fixed structures (fountains, statues, benches, tables, built-in braai)</Text>
          <Text style={styles.bulletPoint}>• Balancing of plants and trees in a garden</Text>
          <Text style={styles.bulletPoint}>• Aestetics of plant shapes and colors</Text>
          <Text style={styles.bulletPoint}>• Garden layout</Text>
        </View>

        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Life Skills</Text>
          <Text style={styles.courseFee}>Fee: R1500</Text>
          <Text style={styles.courseDescription}>Purpose: To provide skills to navigate basic life necessities</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• Opening a bank account</Text>
          <Text style={styles.bulletPoint}>• Basic labour law (know your rights)</Text>
          <Text style={styles.bulletPoint}>• Basic reading and writing literacy</Text>
          <Text style={styles.bulletPoint}>• Basic numeric literacy</Text>
        </View>

        <Text style={styles.sectionTitle}>6 Week Courses</Text>
        
        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Child Minding</Text>
          <Text style={styles.courseFee}>Fee: R750</Text>
          <Text style={styles.courseDescription}>Purpose: To provide basic child and baby care</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• birth to six-month old baby needs</Text>
          <Text style={styles.bulletPoint}>• seven-month to one year old needs</Text>
          <Text style={styles.bulletPoint}>• Toddler needs</Text>
          <Text style={styles.bulletPoint}>• Educational toys</Text>
        </View>


        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Cooking</Text>
          <Text style={styles.courseFee}>Fee: R750</Text>
          <Text style={styles.courseDescription}>Purpose: To prepare and cook nutritious family meals</Text>
          <Text style={styles.contentTitle}>Course Content:</Text>
          <Text style={styles.bulletPoint}>• Nutritional requirements for a healthy body</Text>
          <Text style={styles.bulletPoint}>• Types of protein, carbohydrates and vegetables</Text>
          <Text style={styles.bulletPoint}>• Planning meals</Text>
          <Text style={styles.bulletPoint}>• Tasty and nutritious recipes</Text>
          <Text style={styles.bulletPoint}>• Preparation and cooking of meals</Text>
        </View>



        <View style={styles.courseCard}>
          <Text style={styles.courseName}>Garden Maintenance</Text>
          <Text style={styles.courseFee}>Fee: R750</Text>
          <Text style={styles.courseDescription}>Purpose: 
          <Text style={styles.contentTitle}>Course Content:</Text>To provide basic knowledge of watering, pruning and planting in a domestic garden</Text>
          <Text style={styles.bulletPoint}>Water restrictions and the watering requirements of indigenous and exotic plants</Text>
          <Text style={styles.bulletPoint}>•runing and propagation of plants</Text>
          <Text style={styles.bulletPoint}>Planting techniques for different plant types</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function FeesScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const courses = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Child Minding', fee: 750 }
  ];

  const subtotal = courses.reduce((sum, course) => sum + course.fee, 0);
  const discount = subtotal * 0.05;
  const total = subtotal - discount;

  const handleEnroll = () => {
    Alert.alert('Success', 'Enrollment Submitted!');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Enrollment Form</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.subTitle}>Available Courses</Text>
        <View style={styles.courseList}>
          <Text style={styles.courseCategory}>6 Week Courses (R1500 each):</Text>
          <Text style={styles.courseItem}>• First Aid</Text>
          <Text style={styles.courseItem}>• Sewing</Text>
          <Text style={styles.courseItem}>• Landscaping</Text>
          <Text style={styles.courseItem}>• Life Skills</Text>
          
          <Text style={styles.courseCategory}>6 Month Courses (R750 each):</Text>
          <Text style={styles.courseItem}>• Child Minding</Text>
          <Text style={styles.courseItem}>• Cooking</Text>
          <Text style={styles.courseItem}>• Garden Maintenance</Text>
        </View>

        <Text style={styles.subTitle}>Fee Calculation</Text>
        <View style={styles.priceBreakdown}>
          <View style={styles.priceRow}>
            <Text>First Aid:</Text>
            <Text>R1500</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Child Minding:</Text>
            <Text>R750</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.boldText}>Subtotal:</Text>
            <Text style={styles.boldText}>R{subtotal}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text>Discount (5%):</Text>
            <Text>R{discount.toFixed(2)}</Text>
          </View>
          <View style={styles.priceRow}>
            <Text style={styles.boldText}>Total:</Text>
            <Text style={styles.boldText}>R{total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={handleEnroll}>
          <Text style={styles.actionButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function ContactScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Success', 'Message Sent!');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <View style={styles.contactContainer}>
  <Text style={styles.sectionTitle}>Contact Us</Text>
  <Text style={styles.contactText}>
    📍 Empowering the Nation Training Centre
  </Text>
  <Text style={styles.contactText}>
    📞 Phone: 011 456 7890
  </Text>
  <Text style={styles.contactText}>
    ✉ Email: info@empoweringthenation.co.za
  </Text>

  <Text style={styles.contactText}>
    🏫 Training Venues:
  </Text>
  <Text style={styles.contactSubText}>• Soweto Campus – 45 Vilakazi Street</Text>
  <Text style={styles.contactSubText}>• Sandton Campus – 120 Rivonia Road</Text>
  <Text style={styles.contactSubText}>• Alexandra Campus – 78 2nd Avenue</Text>

  <TouchableOpacity style={styles.contactButton}>
    <Text style={styles.buttonText}>Get Directions</Text>
  </TouchableOpacity>
</View>


        <Text style={styles.subTitle}>Send us a Message</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Your Message"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />

        <View style={styles.switchContainer}>
          <Switch value={subscribe} onValueChange={setSubscribe} />
          <Text style={styles.switchLabel}>Subscribe to our newsletter</Text>
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={handleSubmit}>
          <Text style={styles.actionButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBB00',
  },
  topbar: {
    height: 80,
    backgroundColor: '#64B2DE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  navRow: {
    flexDirection: 'row',
    backgroundColor: '#6DB436',
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#333333',
  },
  navText: {
    fontWeight: 'bold',
    color: '#333333',
  },
  mainContent: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 20,
  },
  panel: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333333',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#2d8a3f',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333333',
  },
  placeholderBox: {
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#d8b14a',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  placeholderText: {
    color: '#666666',
    fontStyle: 'italic',
  },
  courseSummary: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d8b14a',
    marginBottom: 16,
  },
  courseCard: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d8b14a',
    marginBottom: 16,
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  courseFee: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
    color: '#2d8a3f',
  },
  courseDescription: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666666',
  },
  contentTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333333',
  },
  bulletPoint: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 2,
    color: '#666666',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  courseList: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#cccccc',
    marginBottom: 16,
  },
  courseCategory: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 4,
    color: '#333333',
  },
  courseItem: {
    fontSize: 14,
    marginLeft: 8,
    marginBottom: 2,
    color: '#666666',
  },
  priceBreakdown: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  boldText: {
    fontWeight: 'bold',
  },
  contactInfo: {
    backgroundColor: '#f0f8ff',
    padding: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#64B2DE',
    marginBottom: 16,
  },
  contactItem: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333333',
  },
  locationBox: {
    height: 70,
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#cccccc',
  },
  locationText: {
    fontSize: 16,
    color: '#666666',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  switchLabel: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333333',
  },
  actionButton: {
    backgroundColor: '#ffbe00',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  footerBar: {
    height: 60,
    backgroundColor: '#2d8a3f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
footerText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
aboutText: {
  fontSize: 14,
  lineHeight: 20,
  color: '#444',
  textAlign: 'justify',
  marginHorizontal: 10,
  marginTop: 10,
  },
contactContainer: {
  backgroundColor: '#e6f5f0',
  borderRadius: 12,
  padding: 15,
  margin: 15,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

contactText: {
  fontSize: 14,
  color: '#1b4d3e',
  marginBottom: 6,
},

contactSubText: {
  fontSize: 13,
  color: '#333',
  marginLeft: 10,
  marginBottom: 4,
},

contactButton: {
  backgroundColor: '#006994',
  padding: 10,
  borderRadius: 8,
  marginTop: 10,
  alignItems: 'center',
},
buttonText: {
  textAlign: 'center'
}
});