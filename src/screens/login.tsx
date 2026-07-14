import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topContainer}>

        <Text style={Typography.heading}>
          Welcome Back
        </Text>

        <Text style={[Typography.subHeading, styles.subtitle]}>
          Ride smarter with Rydo
        </Text>

      </View>

      <View style={styles.inputContainer}>

        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={Colors.textSecondary}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.textSecondary}
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Text style={Typography.button}>
            Login
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.bottomContainer}>

        <Text style={Typography.body}>
          Don't have an account?
        </Text>

        <TouchableOpacity>
          <Text style={Typography.link}>
            {' '}Sign Up
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },

  topContainer: {
    marginTop: 90,
  },

  subtitle: {
    marginTop: 10,
  },

  inputContainer: {
    gap: 18,
  },

  input: {
    backgroundColor: Colors.inputBackground,
    borderRadius: 14,
    paddingHorizontal: 18,
    height: 56,
    color: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
  },

  loginButton: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 35,
  },

});