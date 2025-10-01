import React, {useState} from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Switch, SafeAreaViewBase } from "react-native";

export default function App() {
  const [screen, setscreen] = useState('Home');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topbar}>
        <Image source={require('assets/Logo.png')} style={styles.logo} resizeMode="cover"/>
      </View>

      <View style={styles.navRow}>
        <TouchableOpacity style={[styles.navButton, screen === 'Home' && styles.navActive]} onPress={() => setscreen('Home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navButton, screen === 'Courses' && styles.navActive]} onPress={() => setscreen('Courses')}>
          <Text style={styles.navText}>Courses</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navButton, screen === 'Fees' && styles.navActive]} onPress={() => setscreen('Fees')}>
          <Text style={styles.navText}>Fees</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.navButton, screen === 'Contact' && styles.navActive]} onPress={() => setscreen('Contact')}>
          <Text style={styles.navText}>Contact</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBar}>
        {screen === 'Home' && <HomeScreen/>}
        {screen === 'Courses' && <CoursesScreen/>}
        {screen === 'Fees' && <FeesScreen/>}
        {screen === 'Contact' && <ContactScreen/>}
      </View>

      <View style={styles.footerBar}>
        <Image source={require('./assets/footerIcons.png')} style={styles.footerIcons} resizeMode="contain"/>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>About us:</Text>
        <View style={styles.boxLarge}/>

        <Text style={styles.panelTitle}>Courses:</Text>
        <View style={styles.summaryBox}>
          <Text style={styles.smallText}>6 Week Courses:</Text>
          <Text style={styles.smallText}>6 Month Courses:</Text>
        </View>

        <Text style={styles.panelTitle}>Testimonials:</Text>
        <View style={styles.boxLarge}/>
      </View>
    </ScrollView>
  );
}

function CoursesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.colPanel}>
        <View style={styles.courseSection}>
          <Text style={styles.h2}>6 Week Courses:</Text>

          <View style={styles.card}>
            <View style={styles.cardTitle}>First Aid:</View>
            <Text style={styles.smallText}>Fees: R1500</Text>
            <Text style={styles.smallText}>Purpose: To provide first aid awareness and basic life support</Text>
            <Text style={styles.smallTextBold}>Content:</Text>
            <View style={styles.bullets}>
              <Text>Wounds and bleeding</Text>
              <Text>Burns and fractures</Text>
              <Text>Emergency scene management</Text>
              <Text>Cardio-Pulmonary Resuscitation (CPR)</Text>
              <Text>Respitory distress e.g., Choking</Text>
            </View>
          </View>

          <Text style={[styles.h2, {marginTop: 12}]}>6 Month Courses:</Text>

          <View style={styles.card}>
            <Text style={styles.cardTitle}>Life Skills:</Text>
            <Text style={styles.smallText}>Fees: R750</Text>
            <Text style={styles.smallText}>Purpose: To provide skills to navigate basic life necessities</Text>
            <Text style={styles.smallTextBold}>Content:</Text>
            <View style={styles.bullets}>
              <Text>Opening a bank account</Text>
              <Text>Basic labour law (know your rights)</Text>
              <Text>Basic reading and writing literacy</Text>
              <Text>Basic numeric literacy</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function FeesScreen() {
  //Simple form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subcribe, setSubscribe] = useState('');

  //Fake calculation
  const firstAid = 1500;
  const lifeSkills = 750;
  const subtotal = firstAid + lifeSkills;
  const discount = subtotal * 0.05;
  const total = subtotal - discount;

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.formPanel}>
        <Text style={styles.h3}>Enhance your skills by signing up</Text>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name"/>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="email"/>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Phone"/>

        <Text style={[styles.h4, {marginTop: 8}]}>Courses</Text>
        <View style={styles.selectBox}>
          <Text style={styles.smallText}>6 Week Courses - R1500</Text>
          <Text style={styles.smallText}>First Aid</Text>
          <Text style={styles.smallText}>Sewing</Text>
          <Text style={styles.smallText}>Lanscaping</Text>


          <Text style={styles.smallText}>6 Month Courses - R750</Text>
          <Text style={styles.smallText}>Life Skills</Text>
          <Text style={styles.smallText}>Child Minding</Text>
          <Text style={styles.smallText}>Cooking</Text>
          <Text style={styles.smallText}>Garden Maintenance</Text>
        </View>

        <View style={styles.priceRow}>
          <View>
            <Text>First Aid:</Text>
            <Text>Life Skills:</Text>
            <Text style={{fontWeight: '700'}}>Subtotal:</Text>
            <Text>Discount</Text>
            <Text style={{fontWeight: '700'}}>Total:</Text>
          </View>

          <View style={{alignItems: 'flex-end'}}>
            <Text>R{firstAid}</Text>
            <Text>R{lifeSkills}</Text>
            <Text>R{subtotal}</Text>
            <Text>R{discount.toFixed(2)}</Text>
            <Text>R{total.toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Checkout(demo)')}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function ContactScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [messege, setMessege] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.contactPanel}>
        <View style={styles.contactInfoBox}>
          <Text style={styles.smallText}>Email: info@empowering.co.za</Text>
          <Text style={styles.smallText}>Phone: 555-555-5555</Text>
          <Text style={styles.smallText}>Cell/Whatsapp: 666-666-6666</Text>
        </View>

        <View style={styles.mapBox}>
          <Text style={styles.mapPin}>📍</Text>
        </View>
        <View style={styles.mapBox}>
          <Text style={styles.mapPin}>📍</Text>
        </View>
        <View style={styles.mapBox}>
          <Text style={styles.mapPin}>📍</Text>
        </View>

        <Text style={styles.panelTitle}>Messege us:</Text>
        <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First name" />
        <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last name" />
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
        <TextInput style={[styles.input, { height: 100 }]} value={messege} onChangeText={setMessege} placeholder="Messege" multiline />


        <View style={styles.subRow}>
          <Switch value={subscribe} onValueChange={setSubscribe} />
          <Text style={{ marginLeft: 8 }}>Subscribe to mailing list</Text>
        </View>

        <TouchableOpacity style={styles.submitButton} onPress={() => alert('Message sent (demo)')}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//Styling (The IIE, 2025)
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFBB00'},
  topbar: {height: 80, backgroundColor: '#64B2DE', alignItems: "center", justifyContent: 'center'},
  logo: {width: "95%", height: 60},
  navRow: {flexDirection: "row", justifyContent: "space-around", paddingVertical: 8, backgroundColor: '#6DB436'},
  navButton: {paddingVertical: 6, paddingHorizontal: 8},
  navActive: {borderBottomWidth: 3, borderColor: '#333'},
  navText: {fontWeight: "700"},
  screenWrap: {flex: 1},

  page: {padding: 12},
  panel: {backgroundColor: '#F1F0EC', padding: 8, borderRadius: 4},
  panelTitle: {fontWeight: "700", marginTop: 10, marginBottom: 6},
  boxLarge: {height: 100, backgroundColor: '#efefef', borderWidth: 2, borderColor: '#d8b14a'},
  summaryBox: {backgroundColor: '#efefef', padding: 8, borderWidth: 2, borderColor: '#d8b14a'},
  smallText: {fontSize: 12, marginVertical: 2},
  smallTextBold: {fontSize: 12, fontWeight: '700', marginTop: 6},

  colPanel: {backgroundColor: '#'},
  courseSection: { paddingBottom: 24 },
  h2: { fontSize: 20, fontWeight: '900', textAlign: 'center' },
  card: { backgroundColor: '#fff', padding: 12, borderWidth: 2, borderColor: '#d8b14a', marginTop: 8 },
  cardTitle: { fontWeight: '900', fontSize: 16, marginBottom: 6 },
  bullets: { marginLeft: 8 },

  formPanel: { backgroundColor: '#fff0e6', padding: 12, borderRadius: 4 },
  h3: { fontWeight: '900', fontSize: 16, textAlign: 'center' },
  h4: { fontWeight: '700' },
  label: { marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#999', padding: 8, marginTop: 4, backgroundColor: '#fff' },
  selectBox: { borderWidth: 1, borderColor: '#999', padding: 8, marginTop: 6, backgroundColor: '#fff' },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  checkoutButton: { backgroundColor: '#ffbe00', padding: 12, marginTop: 12, alignItems: 'center', borderRadius: 4 },
  checkoutText: { fontWeight: '900' },

  contactPanel: { backgroundColor: '#fff0e6', padding: 12, borderRadius: 4 },
  contactInfoBox: { backgroundColor: '#eee', padding: 8, borderWidth: 1, borderColor: '#999' },
  mapBox: { height: 70, backgroundColor: '#ddd', marginTop: 8, alignItems: 'center', justifyContent: 'center' },
  mapPin: { fontSize: 28 },
  subRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  submitButton: { backgroundColor: '#ffbe00', padding: 12, marginTop: 12, alignItems: 'center', borderRadius: 4 },
  submitText: { fontWeight: '900' },

  footerBar: { height: 60, backgroundColor: '#2d8a3f', alignItems: 'center', justifyContent: 'center' },
  footerIcons: { width: '95%', height: 40 },
})