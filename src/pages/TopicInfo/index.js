import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { ErrorModal } from '../../components';

import api from '../../services/api';

import { lightShadow } from '../../commonStyles';
import styles from './styles';

const TopicInfo = () => {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const commentsContainer = useRef(null);
  const scroll = useRef(null);

  const navigation = useNavigation();
  const route = useRoute();

  function handleNavigateBack() {
    navigation.goBack();
  }

  async function getTopicInfo() {
    try {
      const { id } = route.params;
      const response = await api.get(`/posts/${id}`);
    } catch {
      setIsErrorModalVisible(true);
    }
  }

  function handleGetError() {
    setIsErrorModalVisible(false);
    navigation.goBack();
  }

  useEffect(() => {
    getTopicInfo();
  }, []);

  return (
    <>
      <ScrollView
        ref={scroll}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.contentContainer}
      >
        <ErrorModal
          visible={isErrorModalVisible}
          error="Falha ao recuperar os dados desse post"
          dismiss={handleGetError}
        />
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
        <View style={styles.mainContent}>
          <View style={styles.image} />
          <Text style={styles.title}>Título</Text>
          <Text style={styles.subtitle}>Subtítulo</Text>
          <View style={styles.postContentContainer}>
            <View
              style={[styles.postContent, lightShadow, { alignSelf: 'center' }]}
            >
              <Text style={styles.postText}>Lorem ipsum</Text>
            </View>
            <View style={[styles.postContent, lightShadow]}>
              <Text style={styles.postText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
            <View style={[styles.postContent, lightShadow]}>
              <Text style={styles.postText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentFooterContainer}>
          <TouchableOpacity style={styles.likes}>
            <Icon name="heart" size={40} color="#B2B2B2" />
            <Text style={styles.likesText}>220</Text>
          </TouchableOpacity>
          <View style={styles.author}>
            <Text style={styles.mediumText}>Por:</Text>
            <TouchableOpacity style={styles.authorInfo}>
              <View style={styles.authorImage} />
              <Text style={styles.authorName}>username</Text>
              <Text style={styles.createdAt}>22/11/2020</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentsContainer} ref={commentsContainer}>
          <Text style={styles.mediumText}>Comentários</Text>
          <View style={styles.commentsDivider} />

          <View style={styles.commentList}>
            <View style={[styles.comment, lightShadow]}>
              <View style={styles.commentAuthorInfo}>
                <View style={styles.commentAuthorImage} />
                <Text style={styles.commentAuthorName}>username</Text>
              </View>
              <Text style={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
            </View>
            <View style={[styles.comment, lightShadow]}>
              <View style={styles.commentAuthorInfo}>
                <View style={styles.commentAuthorImage} />
                <Text style={styles.commentAuthorName}>username</Text>
              </View>
              <Text style={styles.commentText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
            </View>
          </View>

          <RectButton style={styles.commentButton}>
            <Text style={styles.buttonText}>Comentar</Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default TopicInfo;
