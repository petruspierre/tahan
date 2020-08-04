import React, { useState } from 'react';

import { View, Image, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '../../contexts/auth';

import { Background } from '../../components';

import { mediumShadow, font, colors } from '../../commonStyles';
import styles from './styles';
import logo from '../../assets/logo.png';

const SignIn = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const { signIn } = useAuth();

  async function handleSignIn() {
    setIsSigninInProgress(true);
    await signIn();
    setIsSigninInProgress(false);
  }

  function GoogleSigninButton() {
    return (
      <TouchableOpacity
        style={[styles.googleButton, mediumShadow]}
        onPress={handleSignIn}
        disabled={isSigninInProgress}
      >
        <Image
          style={{ width: 35, height: 35 }}
          source={{
            uri:
              'https://img2.gratispng.com/20180324/sbe/kisspng-google-logo-g-suite-google-5ab6f1f0dbc9b7.1299911115219389289003.jpg',
          }}
        />
        <Text
          style={{
            fontFamily: font.bold,
            fontSize: 20,
            color: '#B2B2B2',
          }}
        >
          Entrar com Google
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.primary}
        translucent={false}
      />
      <Background />
      <View style={styles.container}>
        <View style={styles.decorationTop1} />
        <View style={styles.decorationTop2} />

        <Image source={logo} style={styles.logo} />

        <GoogleSigninButton />

        <View style={styles.decorationBottom1} />
        <View style={styles.decorationBottom2} />
      </View>
    </>
  );
};

export default SignIn;
