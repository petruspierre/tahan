import React, { createContext, useState, useEffect, useContext } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';

import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signIn() {
    try {
      const googleResponse = await auth.signIn();
      if (googleResponse) {
        const { accessToken } = await GoogleSignin.getTokens();

        const data = {
          access_token: accessToken,
          occupation: 'student',
        };

        const response = await api.post('users/sign-in', data);

        console.log(response.data.login_token);
        api.defaults.headers.Authorization = `Bearer ${response.data.login_token}`;

        await AsyncStorage.setItem(
          '@Tahan:user',
          JSON.stringify(response.data.user)
        );
        await AsyncStorage.setItem('@Tahan:token', accessToken);
        setUser(response.data.user);
        return true;
      }
    } catch {
      return false;
    }
    return false;
  }

  async function signOut() {
    await AsyncStorage.clear();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUser(null);
  }

  useEffect(() => {
    async function checkInternetConnection() {
      const state = await NetInfo.fetch();

      if (state.isConnected === false) {
        signOut();
      }
    }

    async function checkAPIConnection() {
      try {
        await api.get('topics');
      } catch {
        signOut();
      }
    }

    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Tahan:user');
      const storagedToken = await AsyncStorage.getItem('@Tahan:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
    }

    async function loadApp() {
      await checkAPIConnection();
      await checkInternetConnection();
      await loadStorageData();
      setLoading(false);
    }
    loadApp();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthContext, useAuth };
