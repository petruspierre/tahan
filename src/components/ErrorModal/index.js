import React from 'react';
import { View, Modal, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { colors, font, mediumShadow } from '../../commonStyles';

const ErrorModal = ({ visible, error, dismiss }) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.container}>
        <View style={[styles.centeredView, mediumShadow]}>
          <Text style={styles.errorTitle}>Ooops...</Text>
          <View style={styles.errorDescriptionContainer}>
            <Text style={styles.errorDescription}>{error}</Text>
          </View>
          <TouchableOpacity style={styles.exitButton} onPress={dismiss}>
            <Text style={styles.exitButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 32,
  },
  centeredView: {
    width: '100%',
    minHeight: 150,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  errorTitle: {
    fontSize: 30,
    fontFamily: font.bold,
    color: colors.primary,
  },
  errorDescriptionContainer: {
    margin: 16,
    justifyContent: 'center',
  },
  errorDescription: {
    fontSize: 15,
    fontFamily: font.regular,
    color: colors.black,
    textAlign: 'center',
  },
  exitButton: {
    width: 100,
    padding: 8,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  exitButtonText: {
    fontSize: 15,
    fontFamily: font.bold,
    color: 'white',
  },
});

export default ErrorModal;
