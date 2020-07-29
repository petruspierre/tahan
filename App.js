import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </NavigationContainer>
);

export default App;
