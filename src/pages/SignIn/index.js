import React, { useState } from 'react';

import {
  View
} from 'react-native';

import { useAuth } from '../../contexts/auth';

import {
  GoogleSigninButton,
} from '@react-native-community/google-signin';

import styles from './styles';

const SignIn = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false)
  const { signIn } = useAuth();

  async function handleSignIn() {
    setIsSigninInProgress(true);
    await signIn();
    setIsSigninInProgress(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.decorationTop1} />
      <View style={styles.decorationTop2} />

      <GoogleSigninButton
        style={{ width: 230, height: 48 }}
        size={GoogleSigninButton.Size.Standard}
        color={GoogleSigninButton.Color.Light}
        onPress={handleSignIn}
        disabled={isSigninInProgress} />

      <View style={styles.decorationBottom1} />
      <View style={styles.decorationBottom2} />
    </View>
  );
};

export default SignIn;
