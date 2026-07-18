import React, { useEffect, useRef, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';
import PrimaryButton from '../../components/PrimaryButton';

const OTP_LENGTH = 6;
const DUMMY_OTP = '123456';

const Otp = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const phone = route.params?.phone || '';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState('');

  const inputs = useRef<TextInput[]>([]);

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (text: string, index: number) => {
    if (!/^\d*$/.test(text)) return;

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: any,
    index: number,
  ) => {
    if (
      e.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length < OTP_LENGTH) {
      setError('Please enter complete OTP');
      return;
    }

    if (enteredOtp === DUMMY_OTP) {
      setError('');

      navigation.replace('Home');
    } else {
      setError('Invalid OTP');
    }
  };

  const resendOtp = () => {
    setTimer(30);
    setOtp(['', '', '', '', '', '']);
    setError('');

    inputs.current[0]?.focus();

    Alert.alert('OTP Sent',
  'Dummy OTP: 123456');
  };

  return (
    <>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="light-content"
      />

      <SafeAreaView style={styles.container}>
        <View style={styles.card}>

          <Text style={Typography.heading}>
            Verify OTP
          </Text>

          <Text style={styles.subtitle}>
            We have sent a verification code to
          </Text>

          <Text style={styles.phone}>
            +91 {phone}
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  if (ref) inputs.current[index] = ref;
                }}
                value={digit}
                style={styles.input}
                keyboardType="number-pad"
                maxLength={1}
                onChangeText={text =>
                  handleChange(text, index)
                }
                onKeyPress={e =>
                  handleKeyPress(e, index)
                }
              />
            ))}
          </View>

          {error ? (
            <Text style={styles.error}>
              {error}
            </Text>
          ) : null}

          <PrimaryButton
            title="Verify OTP"
            onPress={verifyOtp}
          />

          {timer > 0 ? (
            <Text style={styles.timer}>
              Resend OTP in 00:
              {timer.toString().padStart(2, '0')}
            </Text>
          ) : (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={resendOtp}>
              <Text style={styles.resend}>
                Resend OTP
              </Text>
            </TouchableOpacity>
          )}

        </View>
      </SafeAreaView>
    </>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    paddingHorizontal: 22,
  },

  card: {
    backgroundColor: Colors.white,
    borderRadius: 28,
    padding: 28,
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  subtitle: {
    marginTop: 15,
    color: Colors.subtitle,
    textAlign: 'center',
    fontSize: 15,
  },

  phone: {
    marginTop: 10,
    marginBottom: 35,
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text,
    textAlign: 'center',
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },

  input: {
    width: 48,
    height: 58,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#D9D9D9',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text,
  },

  error: {
    color: '#FF3B30',
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 14,
  },

  timer: {
    marginTop: 22,
    textAlign: 'center',
    color: Colors.subtitle,
    fontSize: 14,
  },

  resend: {
    marginTop: 22,
    textAlign: 'center',
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 16,
  },
});