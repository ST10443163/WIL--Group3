// ===========================================
// Import Required Libraries and Components (The IIE, 2025)
// ===========================================
import React, { useState } from "react";
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

// Define available screen types for navigation (The IIE, 2025)
type ScreenType = 'Home' | 'Courses' | 'Fees' | 'Contact';

// ===========================================
// MAIN APP COMPONENT (The IIE, 2025)
// Controls navigation and layout structure (The IIE, 2025)
// ===========================================
export default function App() {
  const [screen, setScreen] = useState<ScreenType>('Home'); // Track the current active screen (The IIE, 2025)

  // Function to render the appropriate screen (The IIE, 2025)
  const renderScreen = () => {
    switch(screen) {
      case 'Home': return <HomeScreen />;       // Show Home (The IIE, 2025)
      case 'Courses': return <CoursesScreen />; // Show Courses (The IIE, 2025)
      case 'Fees': return <FeesScreen />;       // Show Fees (The IIE, 2025)
      case 'Contact': return <ContactScreen />; // Show Contact (The IIE, 2025)
      default: return <HomeScreen />;           // Default fallback (The IIE, 2025)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* ---------- HEADER (The IIE, 2025) ---------- */}
      <View style={styles.topbar}>
        {/* Logo and Title (The IIE, 2025) */}
        <Image 
          source={require('./assets/logo.png')} 
          style={styles.logo} 
          resizeMode="cover"
        />
        <Text style={styles.logoText}>EMPOWERING SKILLS ACADEMY</Text>
      </View>

      {/* ---------- NAVIGATION BAR (The IIE, 2025) ---------- */}
      <View style={styles.navRow}>
        {/* Each button switches the screen when pressed (The IIE, 2025) */}
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

      {/* ---------- MAIN SCREEN CONTENT (The IIE, 2025) ---------- */}
      <View style={styles.mainContent}>
        {renderScreen()}
      </View>

      {/* ---------- FOOTER (The IIE, 2025) ---------- */}
      <View style={styles.footerBar}>
        <Text style={styles.footerText}>© 2024 Empowering Skills Academy</Text>
      </View>
    </SafeAreaView>
  );
}

// ===========================================
// HOME SCREEN (The IIE, 2025)
// Displays About info, courses summary, and testimonials (The IIE, 2025)
// ===========================================
function HomeScreen() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        
        {/* About Us Section (The IIE, 2025) */}
        <Text style={styles.panelTitle}>About Us</Text>
        <Text style={styles.aboutText}> 
          Empowering the Nation was established in 2018 in Johannesburg to provide 
          valuable skills training for domestic workers and gardeners...
        </Text>

        {/* Course Overview Section (The IIE, 2025) */}
        <Text style={styles.panelTitle}>Our Courses</Text>
        <View style={styles.courseSummary}>
          <Text style={styles.courseItem}>• 6 Week Courses</Text>
          <Text style={styles.courseItem}>• 6 Month Courses</Text>
        </View>

        {/* Testimonials Placeholder (The IIE, 2025) */}
        <Text style={styles.panelTitle}>Testimonials</Text>
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Student Reviews</Text>
        </View>
      </View>
    </ScrollView>
  );
}

// ===========================================
// COURSES SCREEN (The IIE, 2025)
// Displays detailed course information (The IIE, 2025)
// ===========================================
function CoursesScreen() {
  const sixMonthCourses = [
    {
      id: "1",
      name: "First Aid",
      fee: "R1500",
      purpose: "To provide first aid awareness and basic life support",
      content: [
        "Wounds and bleeding",
        "Burns and fractures",
        "Emergency scene management",
        "Cardio-Pulmonary Resuscitation (CPR)",
        "Respiratory distress e.g., Choking, blocked airway",
      ],
    },
    {
      id: "2",
      name: "Sewing",
      fee: "R1500",
      purpose: "To provide alterations and new garment tailoring services",
      content: [
        "Types of stitches",
        "Threading a sewing machine",
        "Sewing buttons, zips, hems and seams",
        "Alterations",
        "Designing and sewing new garments",
      ],
    },
    {
      id: "3",
      name: "Landscaping",
      fee: "R1500",
      purpose: "To provide landscaping services for new and established gardens",
      content: [
        "Indigenous and exotic plants and trees",
        "Fixed structures (fountains, statues, benches, tables, built-in braai)",
        "Balancing of plants and trees in a garden",
        "Aesthetics of plant shapes and colours",
        "Garden layout",
      ],
    },
    {
      id: "4",
      name: "Life Skills",
      fee: "R1500",
      purpose: "To provide skills to navigate basic life necessities",
      content: [
        "Opening a bank account",
        "Basic labour law (know your rights)",
        "Basic reading and writing literacy",
        "Basic numeric literacy",
      ],
    },
  ];

  const sixWeekCourses = [
    {
      id: "5",
      name: "Child Minding",
      fee: "R750",
      purpose: "To provide basic child and baby care",
      content: [
        "Birth to six-month old baby needs",
        "Seven-month to one year old needs",
        "Toddler needs",
        "Educational toys",
      ],
    },
    {
      id: "6",
      name: "Cooking",
      fee: "R750",
      purpose: "To prepare and cook nutritious family meals",
      content: [
        "Nutritional requirements for a healthy body",
        "Types of protein, carbohydrates and vegetables",
        "Planning meals",
        "Preparation and cooking of meals",
      ],
    },
    {
      id: "7",
      name: "Garden Maintenance",
      fee: "R750",
      purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden",
      content: [
        "Water restrictions and watering requirements of indigenous and exotic plants",
        "Pruning and propagation of plants",
        "Planting techniques for different plant types",
      ],
    },
  ];

  const renderCourse = ({ item }) => (
    <View style={styles.courseCard}>
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.courseFee}>Fee: {item.fee}</Text>
      <Text style={styles.courseDescription}>{item.purpose}</Text>
      <Text style={styles.contentTitle}>Course Content:</Text>
      {item.content.map((point, index) => (
        <Text key={index} style={styles.bulletPoint}>• {point}</Text>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>6 Month Courses</Text>
        <FlatList
          data={sixMonthCourses}
          renderItem={renderCourse}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          pagingEnabled
          decelerationRate="fast"
          contentContainerStyle={{ paddingBottom: 10 }}
        />

        <Text style={styles.sectionTitle}>6 Week Courses</Text>
        <FlatList
          data={sixWeekCourses}
          renderItem={renderCourse}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="center"
          pagingEnabled
          decelerationRate="fast"
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      </View>
    </ScrollView>
  );
}

// ===========================================
// FEES SCREEN (The IIE, 2025)
// Displays enrollment form and fee breakdown (The IIE, 2025)
// ===========================================
function FeesScreen() { 
  // Input states for user form fields (The IIE, 2025)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Static course list with fees (The IIE, 2025)
  const courses = [
    { name: 'First Aid', fee: 1500 },
    { name: 'Child Minding', fee: 750 }
  ];

  // Calculate totals dynamically (The IIE, 2025)
  const subtotal = courses.reduce((sum, course) => sum + course.fee, 0); // Add all fees (The IIE, 2025)
  const discount = subtotal * 0.05; // 5% discount (The IIE, 2025)
  const total = subtotal - discount; // Total after discount (The IIE, 2025)

  // Alert confirmation for "Enroll" action (The IIE, 2025)
  const handleEnroll = () => {
    Alert.alert('Success', 'Enrollment Submitted!');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>
        <Text style={styles.sectionTitle}>Enrollment Form</Text>

        {/* ---------- INPUT FIELDS (The IIE, 2025) ---------- */}
        <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
        <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        {/* ---------- PRICE BREAKDOWN (The IIE, 2025) ---------- */}
        <Text style={styles.subTitle}>Fee Calculation</Text>
        <View style={styles.priceBreakdown}>
          {/* Individual course fees (The IIE, 2025) */}
          <View style={styles.priceRow}><Text>First Aid:</Text><Text>R1500</Text></View>
          <View style={styles.priceRow}><Text>Child Minding:</Text><Text>R750</Text></View>

          {/* Subtotal, discount, total (The IIE, 2025) */}
          <View style={styles.priceRow}><Text style={styles.boldText}>Subtotal:</Text><Text style={styles.boldText}>R{subtotal}</Text></View>
          <View style={styles.priceRow}><Text>Discount (5%):</Text><Text>R{discount.toFixed(2)}</Text></View>
          <View style={styles.priceRow}><Text style={styles.boldText}>Total:</Text><Text style={styles.boldText}>R{total.toFixed(2)}</Text></View>
        </View>

        {/* ---------- ENROLL BUTTON (The IIE, 2025) ---------- */}
        <TouchableOpacity style={styles.actionButton} onPress={handleEnroll}>
          <Text style={styles.actionButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ===========================================
// CONTACT SCREEN (The IIE, 2025)
// Displays contact info and message form (The IIE, 2025)
// ===========================================
function ContactScreen() {
  // Form field states (The IIE, 2025)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false); // Newsletter toggle (The IIE, 2025)

  // Simple confirmation alert when form is submitted (The IIE, 2025)
  const handleSubmit = () => {
    Alert.alert('Success', 'Message Sent!');
  };

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <View style={styles.panel}>

        {/* ---------- CONTACT INFORMATION (The IIE, 2025) ---------- */}
        <View style={styles.contactContainer}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={styles.contactText}>📍 Empowering the Nation Training Centre</Text>
          <Text style={styles.contactText}>📞 Phone: 011 456 7890</Text>
          <Text style={styles.contactText}>✉ Email: info@empoweringthenation.co.za</Text>
          <Text style={styles.contactText}>🏫 Training Venues:</Text>
          <Text style={styles.contactSubText}>• Soweto Campus – 45 Vilakazi Street</Text>
          <Text style={styles.contactSubText}>• Sandton Campus – 120 Rivonia Road</Text>
          <Text style={styles.contactSubText}>• Alexandra Campus – 78 2nd Avenue</Text>

          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.buttonText}>Get Directions</Text>
          </TouchableOpacity>
        </View>

        {/* ---------- MESSAGE FORM (The IIE, 2025) ---------- */}
        <Text style={styles.subTitle}>Send us a Message</Text>
        <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={[styles.input, styles.textArea]} placeholder="Your Message" value={message} onChangeText={setMessage} multiline numberOfLines={4} />

        {/* Newsletter Subscription Switch (The IIE, 2025) */}
        <View style={styles.switchContainer}>
          <Switch value={subscribe} onValueChange={setSubscribe} />
          <Text style={styles.switchLabel}>Subscribe to our newsletter</Text>
        </View>

        {/* Submit Button (The IIE, 2025) */}
        <TouchableOpacity style={styles.actionButton} onPress={handleSubmit}>
          <Text style={styles.actionButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// ===========================================
// STYLES (The IIE, 2025)
// Contains all app-wide visual styling (The IIE, 2025)
// ===========================================
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFBB00' }, // Full-screen container (The IIE, 2025)
  topbar: { height: 80, backgroundColor: '#64B2DE', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
  logoText: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', textAlign: 'center' },
  logo: {},
  navRow: { flexDirection: 'row', backgroundColor: '#6DB436', paddingVertical: 10 },
  navButton: { flex: 1, alignItems: 'center', paddingVertical: 8 },
  navActive: { borderBottomWidth: 3, borderBottomColor: '#333333' }, // Highlight active tab (The IIE, 2025)
  navText: { fontWeight: 'bold', color: '#333333' },
  mainContent: { flex: 1 },
  scrollView: { flex: 1 },
  contentContainer: { padding: 16, paddingBottom: 20 },
  panel: { backgroundColor: '#FFFFFF', borderRadius: 8, padding: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  panelTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12, color: '#333333' },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 16, color: '#2d8a3f' },
  subTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 16, marginBottom: 8, color: '#333333' },
  placeholderBox: { height: 100, backgroundColor: '#f0f0f0', borderRadius: 6, borderWidth: 2, borderColor: '#d8b14a', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  placeholderText: { color: '#666666', fontStyle: 'italic' },
  courseSummary: { backgroundColor: '#f9f9f9', padding: 12, borderRadius: 6, borderWidth: 1, borderColor: '#d8b14a', marginBottom: 16 },
  courseCard: { courseCard: {
  backgroundColor: '#ffffff',
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#f4b400',
  padding: 20,
  marginHorizontal: 12,
  width: 320,
  elevation: 5,
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowOffset: { width: 0, height: 3 },
  shadowRadius: 4,
},
},
  courseName: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#333333' },
  courseFee: { fontSize: 14, fontWeight: '600', marginBottom: 4, color: '#2d8a3f' },
  courseDescription: { fontSize: 14, marginBottom: 8, color: '#666666' },
  courseItem: {},
  contentTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 6, color: '#333333' },
  bulletPoint: { fontSize: 14, marginLeft: 8, marginBottom: 2, color: '#666666' },
  input: { borderWidth: 1, borderColor: '#cccccc', borderRadius: 6, padding: 12, marginBottom: 12, fontSize: 16, backgroundColor: '#ffffff' },
  textArea: { height: 100, textAlignVertical: 'top' },
  priceBreakdown: { backgroundColor: '#f9f9f9', padding: 12, borderRadius: 6, marginBottom: 16 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  boldText: { fontWeight: 'bold' },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  switchLabel: { marginLeft: 12, fontSize: 16, color: '#333333' },
  actionButton: { backgroundColor: '#ffbe00', padding: 16, borderRadius: 8, alignItems: 'center' },
  actionButtonText: { fontSize: 18, fontWeight: 'bold', color: '#333333' },
  footerBar: { height: 60, backgroundColor: '#2d8a3f', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 },
  footerText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
  aboutText: { fontSize: 14, lineHeight: 20, color: '#444', textAlign: 'justify', marginHorizontal: 10, marginTop: 10 },
  contactContainer: { backgroundColor: '#e6f5f0', borderRadius: 12, padding: 15, margin: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  contactText: { fontSize: 14, color: '#1b4d3e', marginBottom: 6 },
  contactSubText: { fontSize: 13, color: '#333', marginLeft: 10, marginBottom: 4 },
  contactButton: { backgroundColor: '#006994', padding: 10, borderRadius: 8, marginTop: 10, alignItems: 'center' },
  buttonText: { textAlign: 'center' },
  horizontalScroll: {
  flexDirection: 'row',
  paddingVertical: 10,
},
});


/*
Referencing:
- The IIE. 2025. Web Development [WEDE5020 Module Manual]. The Independent Institute of Education: Unpublished.
*/