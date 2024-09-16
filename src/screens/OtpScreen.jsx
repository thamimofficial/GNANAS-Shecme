import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../components/color';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleVerifyOtp = () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      Alert.alert("Invalid OTP", "Please enter a valid 4-digit OTP.");
      return;
    }
    Alert.alert("OTP Verified", `Entered OTP: ${otpValue}`);
    // Logic to verify the OTP
  };

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Automatically focus on the next input if the current one is filled
    if (text && index < 3) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInDown" style={styles.header}>
        <Text style={styles.headerText}>OTP Verification</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.footer}>
        {/* OTP Input Boxes */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => (inputs.current[index] = ref)}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              keyboardType="numeric"
              maxLength={1}
              style={styles.otpInput}
              textAlign="center"
            />
          ))}
        </View>

        {/* Verify OTP Button */}
        <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>

        {/* Resend OTP */}
        <TouchableOpacity onPress={() => Alert.alert('OTP Resent')}>
          <Text style={styles.resendOtp}>Resend OTP</Text>
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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    fontSize: 24,
    color: '#05375a',
    backgroundColor: '#f2f2f2',
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
  resendOtp: {
    color: '#009387',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
  },
});

export default OtpScreen;
