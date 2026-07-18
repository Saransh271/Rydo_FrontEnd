// import React from 'react';
// import {View, TextInput, Text, StyleSheet} from 'react-native';
// import Colors from '../styles/Colors';

// export default function PhoneInput() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.country}>+91</Text>

//       <View style={styles.separator} />

//       <TextInput
//         keyboardType="phone-pad"
//         placeholder="Enter mobile number"
//         placeholderTextColor={Colors.placeholder}
//         style={styles.input}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     height: 58,
//     borderWidth: 1,
//     borderColor: Colors.inputBorder,
//     borderRadius: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 18,
//   },

//   country: {
//     fontWeight: '700',
//     fontSize: 16,
//     color: Colors.text,
//   },

//   separator: {
//     width: 1,
//     height: 24,
//     backgroundColor: Colors.inputBorder,
//     marginHorizontal: 15,
//   },

//   input: {
//     flex: 1,
//     fontSize: 16,
//     color: Colors.text,
//   },
// });
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Colors from '../styles/Colors';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export default function PhoneInput({
  value,
  onChangeText,
}: PhoneInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.country}>+91</Text>

      <View style={styles.separator} />

      <TextInput
        value={value}
        onChangeText={text => {
          // Allow only digits
          const cleaned = text.replace(/[^0-9]/g, '');

          // Maximum 10 digits
          if (cleaned.length <= 10) {
            onChangeText(cleaned);
          }
        }}
        keyboardType="number-pad"
        maxLength={10}
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