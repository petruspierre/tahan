import React from 'react';
import { View, StyleSheet } from 'react-native';

const BottomDecoration = () => {
  return (
    <>
      <View style={styles.decorationBottom1} />
      <View style={styles.decorationBottom2} />
    </>
  );
};

const styles = StyleSheet.create({
  decorationBottom1: {
    width: '100%',
    height: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#FF3358',
  },
  decorationBottom2: {
    width: '90%',
    height: 20,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FF3358',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default BottomDecoration;
