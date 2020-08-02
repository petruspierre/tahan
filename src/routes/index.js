/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  useFonts,
  RobotoSlab_400Regular,
  RobotoSlab_700Bold,
} from '@expo-google-fonts/roboto-slab';
import { GoogleSignin } from '@react-native-community/google-signin';
import * as SplashScreen from 'expo-splash-screen';

import { useAuth } from '../contexts/auth';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes = () => {
  const { signed, loading } = useAuth();
  const [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_700Bold,
  });

  GoogleSignin.configure();

  useEffect(() => {
    async function keepSplash() {
      await SplashScreen.hideAsync();
    }

    keepSplash();
  });

  if (loading && !fontsLoaded) {
    return null;
  }
  SplashScreen.hideAsync();
  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
