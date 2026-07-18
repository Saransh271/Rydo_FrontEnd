// // import React from 'react';
// // import {
// //   SafeAreaView,
// //   View,
// //   Text,
// //   StyleSheet,
// // } from 'react-native';

// // import Colors from '../styles/Colors';
// // import Typography from '../styles/Typography';

// // import PhoneInput from '../components/PhoneInput';
// // import PrimaryButton from '../components/PrimaryButton';
// // import Divider from '../components/Divider';
// // import SocialButton from '../components/SocialButton';

// // const Login = () => {
// //   return (
// //     <SafeAreaView style={styles.container}>

// //       <View style={styles.hero}>

// //         <Text style={styles.logo}>RYDO</Text>

// //         <Text style={Typography.heading}>
// //           Premium rides.
// //         </Text>

// //         <Text style={Typography.subtitle}>
// //           Wherever you're going,
// //           {'\n'}
// //           ride with confidence.
// //         </Text>

// //       </View>

// //       <View style={styles.card}>

// //         <PhoneInput />

// //         <PrimaryButton title="Continue" />

// //         <Divider />

// //         <SocialButton />

// //         <Text style={styles.footer}>
// //           By continuing you agree to our
// //           {' '}
// //           Terms & Privacy Policy
// //         </Text>

// //       </View>

// //     </SafeAreaView>
// //   );
// // };

// // export default Login;

// // const styles = StyleSheet.create({

// //   container: {
// //     flex: 1,
// //     backgroundColor: Colors.background,
// //     justifyContent: 'space-between',
// //   },

// //   hero: {
// //     flex: 0.42,
// //     justifyContent: 'center',
// //     paddingHorizontal: 28,
// //   },

// //   logo: {
// //     color: Colors.white,
// //     fontSize: 42,
// //     fontWeight: '900',
// //     letterSpacing: 3,
// //     marginBottom: 20,
// //   },

// //   card: {
// //     flex: 0.58,
// //     backgroundColor: Colors.card,
// //     borderTopLeftRadius: 36,
// //     borderTopRightRadius: 36,
// //     padding: 28,
// //   },

// //   footer: {
// //     textAlign: 'center',
// //     marginTop: 30,
// //     color: Colors.subtitle,
// //     lineHeight: 22,
// //     fontSize: 13,
// //   },

// // });
// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   StatusBar,
// } from 'react-native';

// import Colors from '../../styles/Colors';
// import Typography from '../../styles/Typography';

// import PhoneInput from '../../components/PhoneInput';
// import PrimaryButton from '../../components/PrimaryButton';
// import Divider from '../../components/Divider';
// import SocialButton from '../../components/SocialButton';

// const Login = () => {
//   return (
//     <>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={Colors.background}
//       />

//       <SafeAreaView style={styles.container}>
//         {/* Hero Section */}
//         <View style={styles.hero}>
//           <Text style={styles.logo}>RYDO</Text>

//           <View style={styles.heroContent}>
//             <View style={styles.heroText}>
//               <Text style={Typography.heading}>
//                 Premium rides.
//               </Text>

//               <Text style={Typography.subtitle}>
//                 Wherever you're going,
//                 {'\n'}
//                 ride with confidence.
//               </Text>
//             </View>

//             <Image
//               source={require('../../assets/images/car_cabs.jpg')}
//               style={styles.carImage}
//               resizeMode="contain"
//             />
//           </View>
//         </View>

//         {/* Login Card */}
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>Get Started</Text>

//           <Text style={styles.cardSubtitle}>
//             Enter your mobile number to continue
//           </Text>

//           <PhoneInput />

//           <PrimaryButton title="Continue" />

//           <Divider />

//           <SocialButton />

//           <Text style={styles.footer}>
//             By continuing, you agree to our{' '}
//             <Text style={styles.link}>Terms</Text> &{' '}
//             <Text style={styles.link}>Privacy Policy</Text>.
//           </Text>
//         </View>
//       </SafeAreaView>
//     </>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.background,
//   },

//   hero: {
//     flex: 0.42,
//     paddingHorizontal: 28,
//     paddingTop: 20,
//     paddingBottom: 24,
//     justifyContent: 'flex-start',
//   },

//   heroContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginTop: 10,
//   },

//   heroText: {
//     flex: 1,
//     paddingRight: 12,
//   },

//   carImage: {
//     width: 132,
//     height: 104,
//     opacity: 0.95,
//   },

//   logo: {
//     fontSize: 42,
//     fontWeight: '900',
//     letterSpacing: 4,
//     color: Colors.white,
//     marginBottom: 16,
//   },

//   card: {
//     flex: 0.58,

//     backgroundColor: Colors.white,

//     borderTopLeftRadius: 36,
//     borderTopRightRadius: 36,

//     marginTop: -20,

//     paddingHorizontal: 28,
//     paddingVertical: 30,

//     shadowColor: '#000',
//     shadowOpacity: 0.12,
//     shadowRadius: 12,
//     shadowOffset: {
//       width: 0,
//       height: -4,
//     },

//     elevation: 12,
//   },

//   cardTitle: {
//     fontSize: 28,
//     fontWeight: '700',
//     color: Colors.text,
//     marginBottom: 8,
//   },

//   cardSubtitle: {
//     fontSize: 15,
//     color: Colors.subtitle,
//     marginBottom: 28,
//   },

//   footer: {
//     marginTop: 30,
//     textAlign: 'center',
//     fontSize: 13,
//     color: Colors.subtitle,
//     lineHeight: 22,
//   },

//   link: {
//     color: Colors.primary,
//     fontWeight: '700',
//   },
// });
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../../styles/Colors';
import Typography from '../../styles/Typography';

import PhoneInput from '../../components/PhoneInput';
import PrimaryButton from '../../components/PrimaryButton';
import Divider from '../../components/Divider';
import SocialButton from '../../components/SocialButton';

const Login = () => {
  const navigation = useNavigation<any>();

  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleContinue = () => {
    const cleanedPhone = phone.replace(/\D/g, '');

    if (cleanedPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');

    // Later:
    // await sendOtpApi(cleanedPhone);

    navigation.navigate('Otp', {
      phone: cleanedPhone,
    });
  };

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.background}
      />

      <SafeAreaView style={styles.container}>
        {/* Hero Section */}
        <View style={styles.hero}>
          <Text style={styles.logo}>RYDO</Text>

          <View style={styles.heroContent}>
            <View style={styles.heroText}>
              <Text style={Typography.heading}>
                Premium rides.
              </Text>

              <Text style={Typography.subtitle}>
                Wherever you're going,
                {'\n'}
                ride with confidence.
              </Text>
            </View>

            <Image
              source={require('../../assets/images/car_cabs.jpg')}
              style={styles.carImage}
              resizeMode="contain"
            />
          </View>
        </View>

        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Get Started
          </Text>

          <Text style={styles.cardSubtitle}>
            Enter your mobile number to continue
          </Text>

          <PhoneInput
            value={phone}
            onChangeText={setPhone}
          />

          {error ? (
            <Text style={styles.error}>
              {error}
            </Text>
          ) : null}

          <PrimaryButton
            title="Continue"
            onPress={handleContinue}
          />

          <Divider />

          <SocialButton />

          <Text style={styles.footer}>
            By continuing, you agree to our{' '}
            <Text style={styles.link}>
              Terms
            </Text>{' '}
            &{' '}
            <Text style={styles.link}>
              Privacy Policy
            </Text>.
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  hero: {
    flex: 0.42,
    paddingHorizontal: 28,
    paddingTop: 20,
    paddingBottom: 24,
    justifyContent: 'flex-start',
  },

  heroContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  heroText: {
    flex: 1,
    paddingRight: 12,
  },

  carImage: {
    width: 132,
    height: 104,
    opacity: 0.95,
  },

  logo: {
    fontSize: 42,
    fontWeight: '900',
    letterSpacing: 4,
    color: Colors.white,
    marginBottom: 16,
  },

  card: {
    flex: 0.58,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    marginTop: -20,
    paddingHorizontal: 28,
    paddingVertical: 30,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    elevation: 12,
  },

  cardTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: Colors.text,
    marginBottom: 8,
  },

  cardSubtitle: {
    fontSize: 15,
    color: Colors.subtitle,
    marginBottom: 28,
  },

  error: {
    color: '#FF3B30',
    marginTop: 8,
    marginBottom: 16,
    fontSize: 14,
  },

  footer: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 13,
    color: Colors.subtitle,
    lineHeight: 22,
  },

  link: {
    color: Colors.primary,
    fontWeight: '700',
  },
});