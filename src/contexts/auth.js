import React, { createContext, useState, useEffect, useContext } from 'react';
import { GoogleSignin } from '@react-native-community/google-signin';
import AsyncStorage from '@react-native-community/async-storage';

import * as auth from '../services/auth';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  async function signIn() {
    const googleResponse = await auth.signIn();
    if (googleResponse) {
      try {
        const { accessToken } = await GoogleSignin.getTokens();

        const data = {
          access_token: accessToken,
          occupation: 'student',
        };

        const response = await api.post('users/sign-in', data);

        api.defaults.headers.Authorization = `Bearer ${response.data.login_token}`;

        await AsyncStorage.setItem(
          '@Tahan:user',
          JSON.stringify(response.data.user)
        );
        await AsyncStorage.setItem('@Tahan:token', accessToken);
        setUser(response.data.user);
      } catch (err) {
        console.error(err);
      }
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUser(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@Tahan:user');
      const storagedToken = await AsyncStorage.getItem('@Tahan:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }
      setLoading(false);
    }
    loadStorageData();
  });

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
