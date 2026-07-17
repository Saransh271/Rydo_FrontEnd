import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import Typography from '../styles/Typography';

interface Props {
  title: string;
  onPress?: () => void;
}

const PrimaryButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={onPress}>
      <Text style={Typography.button}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});