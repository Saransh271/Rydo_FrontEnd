import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  StatusBar,
} from 'react-native';

import Colors from '../styles/Colors';

const SplashScreen = ({navigation}: any) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const logoTranslate = useRef(new Animated.Value(-60)).current;
  const textOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(logoTranslate, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),

      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="light-content"
      />

      <Animated.Image
        source={require('../assets/images/car_cabs.jpg')}
        style={[
          styles.image,
          {
            opacity: logoOpacity,
            transform: [{translateX: logoTranslate}],
          },
        ]}
        resizeMode="contain"
      />

      <Animated.Text
        style={[
          styles.logo,
          {
            opacity: textOpacity,
          },
        ]}>
        RYDO
      </Animated.Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 240,
    height: 240,
  },

  logo: {
    marginTop: 20,
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: 6,
  },
});