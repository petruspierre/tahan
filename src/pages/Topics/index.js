import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Entypo as Icon } from '@expo/vector-icons';

import { TopDecoration } from '../../components';

import { mediumShadow } from '../../commonStyles';
import styles from './styles';

const Topics = () => {
  return (
    <View style={styles.container}>
      <TopDecoration title="TÓPICOS" />

      <RectButton style={[styles.searchContainer, mediumShadow]}>
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.big}>Pesquisar</Text>
          <Text style={styles.small}>por tópicos</Text>
        </View>
        <Icon name="magnifying-glass" size={32} color="white" />
      </RectButton>
      <RectButton style={[styles.recentContainer, mediumShadow]}>
        <View style={{ marginBottom: 6, alignItems: 'center' }}>
          <Text style={styles.big}>Lidos</Text>
          <Text style={[styles.small, { marginTop: -6 }]}>recentemente</Text>
        </View>
        <Icon name="open-book" size={64} color="white" />
      </RectButton>
    </View>
  );
};

export default Topics;
