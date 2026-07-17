import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export default function PhoneInput() {
  return (
    <View style={styles.container}>
      <Text style={styles.country}>+91</Text>

      <View style={styles.separator} />

      <TextInput
        keyboardType="phone-pad"
        placeholder="Enter mobile number"
        placeholderTextColor={Colors.placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderWidth: 1,
    borderColor: Colors.inputBorder,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  country: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.text,
  },

  separator: {
    width: 1,
    height: 24,
    backgroundColor: Colors.inputBorder,
    marginHorizontal: 15,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.text,
  },
});