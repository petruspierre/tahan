import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export default AppRoutes;
