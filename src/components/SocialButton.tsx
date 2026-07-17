import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

export default function SocialButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={Typography.social}>
        Continue with Google
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.googleBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
});