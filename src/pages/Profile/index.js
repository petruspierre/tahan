import React from 'react';
import { View, Text, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useAuth } from '../../contexts/auth';

import { TopDecoration } from '../../components';

import styles from './styles';
import { colors } from '../../commonStyles';

const Profile = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <StatusBar
        style="light"
        backgroundColor={colors.primary}
        translucent={false}
      />
      <View style={styles.container}>
        <TopDecoration title="PERFIL" />
        <Text>{user?.name}</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </>
  );
};

export default Profile;
