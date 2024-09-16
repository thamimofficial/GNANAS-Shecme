import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../components/color';

const RegisterScreen = () => {
    const navigation = useNavigation()
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleRegister = () => {
    if (!fullName || !phoneNumber || !email || !address || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'Password must be at least 6 characters long.');
      return;
    }

    Alert.alert('Registration Success', `Welcome, ${fullName}!`);
    // Add your registration logic here, such as API call to backend
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
        <Text style={styles.headerText}>Create an Account</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <Icon name="person-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.inputContainer}>
          <Icon name="call-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Phone Number"
            keyboardType="numeric"
            style={styles.input}
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon name="mail-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Address Input */}
        <View style={styles.inputContainer}>
          <Icon name="home-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Address"
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Password"
            secureTextEntry={hidePassword}
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
            <Icon
              name={hidePassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={hideConfirmPassword}
            style={styles.input}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
          <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
            <Icon
              name={hideConfirmPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="grey"
            />
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.forgotPassword}>Already have an Account ? Login</Text>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: PRIMARY_COLOR,

  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  footer: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    backgroundColor: '#009387',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#009387',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default RegisterScreen;
