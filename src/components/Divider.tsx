import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../styles/Colors';

export default function Divider() {
  return (
    <View style={styles.row}>
      <View style={styles.line} />
      <Text style={styles.text}>OR</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.divider,
  },

  text: {
    marginHorizontal: 12,
    color: Colors.subtitle,
    fontWeight: '600',
  },
});