import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useAuth } from '../../contexts/auth';

import { TopDecoration } from '../../components';

const Home = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#FF3358" translucent={false} />
      <View style={styles.container}>
        <TopDecoration title="JOGAR" />
        <Text>{user?.name}</Text>
        <Button title="Sign Out" onPress={handleSignOut} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Home;
