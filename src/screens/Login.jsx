import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../components/color';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleLogin = () => {
    if (phoneNumber.length < 10 || password.length < 6) {
      Alert.alert("Invalid Input", "Please enter a valid phone number and password.");
      return;
    }
    Alert.alert("Login Success", `Phone: ${phoneNumber}`);
    // Your login logic here, e.g., API call to authenticate
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
        {/* Image above the text */}
        <Image 
          source={require('../../assets/GNANASLOGO.jpg')} 
          style={styles.logo} 
          resizeMode="contain"
        />

        <Text style={styles.headerText}>Welcome Back!</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.footer}>
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

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY_COLOR,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 0,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    alignItems: 'center',
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

export default LoginScreen;
