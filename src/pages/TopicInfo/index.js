import React from 'react';
import { View, Text } from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

const TopicInfo = () => {
  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RectButton style={styles.backButton} onPress={handleNavigateBack}>
          <Icon name="arrowleft" size={32} color="white" />
        </RectButton>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'center',
            marginLeft: -40,
          }}
        >
          <Entypo name="text" size={32} />
          <Text style={styles.pageTitle}>Tópico</Text>
        </View>
      </View>
      <Text>ID: {route.params.id}</Text>
    </View>
  );
};

export default TopicInfo;
