import React from 'react';

import Svg, { Circle, Path } from 'react-native-svg';
import { TouchableOpacity, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../pages/Home';
import Quizzes from '../pages/Quizzes';
import Profile from '../pages/Profile';

const AppStack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

function PlayIcon({ fill }) {
  return (
    <Svg width={57} height={38} viewBox="0 0 57 38" fill="none">
      <Path
        d="M16.804 28.148l-8.36 8.445C7.516 37.437 6.277 38 4.926 38A4.926 4.926 0 010 33.074v-.704l2.815-20.773A12.734 12.734 0 0115.482 0h25.333C47.458 0 52.89 5.095 53.48 11.597l2.815 20.773v.704A4.926 4.926 0 0151.37 38c-1.35 0-2.59-.563-3.518-1.407l-8.36-8.445H16.804zM14.074 5.63v5.63h-5.63v2.814h5.63v5.63h2.815v-5.63h5.63V11.26h-5.63V5.63h-2.815zm26.74 0a2.111 2.111 0 100 4.222 2.111 2.111 0 000-4.222zm-4.925 4.926a2.111 2.111 0 100 4.222 2.111 2.111 0 000-4.222zm9.852 0a2.11 2.11 0 100 4.221 2.11 2.11 0 000-4.221zm-4.926 4.926a2.111 2.111 0 100 4.222 2.111 2.111 0 000-4.223z"
        fill={fill}
      />
    </Svg>
  );
}

function QuizIcon({ fill }) {
  return (
    <Svg width={27} height={43} viewBox="0 0 27 43" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.54 24.306c-.764 1.241-1.155 3.199-1.174 5.872H16.7c0-1.585.181-2.826.544-3.723.363-.917 1.127-1.824 2.291-2.721a18.884 18.884 0 005.328-5.185C26.188 16.642 26.9 14.58 27 12.363v-1.182c-.133-3.423-1.35-6.152-3.654-8.185C21.617 1.444 19.418.446 16.748 0H9.881C7.43.412 5.34 1.296 3.61 2.652 1.148 4.6-.055 7.407.002 11.073l.057.172h8.135c.019-1.623.515-2.855 1.49-3.695.992-.84 2.195-1.26 3.608-1.26 1.719 0 3.036.496 3.953 1.49.936.992 1.403 2.367 1.403 4.124 0 1.585-.41 3.017-1.231 4.296-.802 1.28-1.881 2.473-3.237 3.58-2.31 1.777-3.857 3.285-4.64 4.526zm-1.203 17.73h8.421v-7.16h-8.42v7.16z"
        fill={fill}
      />
    </Svg>
  );
}

function ProfileIcon({ fill }) {
  return (
    <Svg width={53} height={37} viewBox="0 0 53 37" fill="none">
      <Path
        d="M33.17 22.966c10.502 0 19.008 4.335 19.008 9.687V37H14.034l.128-4.347c0-5.352 8.506-9.687 19.008-9.687z"
        fill={fill}
      />
      <Path
        d="M15.656 25.517c8.593 0 15.552 3.547 15.552 7.927V37H0l.105-3.556c0-4.38 6.96-7.927 15.551-7.927z"
        fill={fill}
      />
      <Circle cx={32.535} cy={9.569} r={9.569} fill={fill} />
      <Circle cx={14.672} cy={17.224} r={7.017} fill={fill} />
    </Svg>
  );
}

function TabBar({ state, descriptors, navigation, position }) {
  return (
    <View
      style={{ flexDirection: 'row', height: 90, backgroundColor: '#E4E0E0' }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const icon = options.tabBarIcon;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            {!isFocused ? icon : React.cloneElement(icon, { fill: '#FF3358' })}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function TabRoutes() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      tabBarPosition="bottom"
    >
      <Tab.Screen
        options={{ tabBarIcon: <ProfileIcon fill="#C2A4B6" /> }}
        name="Perfil"
        component={Profile}
      />
      <Tab.Screen
        options={{ tabBarIcon: <PlayIcon fill="#C2A4B6" /> }}
        name="Jogar"
        component={Home}
      />
      <Tab.Screen
        options={{ tabBarIcon: <QuizIcon fill="#C2A4B6" /> }}
        name="Quizzes"
        component={Quizzes}
      />
    </Tab.Navigator>
  );
}

const AppRoutes = () => (
  <AppStack.Navigator headerMode="none">
    <AppStack.Screen name="Home" component={TabRoutes} />
  </AppStack.Navigator>
);

export default AppRoutes;
