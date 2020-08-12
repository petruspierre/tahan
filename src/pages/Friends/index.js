import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { TopDecoration } from '../../components';

import styles from './styles';
import { colors } from '../../commonStyles';

const Profile = () => {
  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.primary}
        translucent={false}
      />
      <View style={styles.container}>
        <TopDecoration title="AMIGOS" />
      </View>
    </>
  );
};

export default Profile;
