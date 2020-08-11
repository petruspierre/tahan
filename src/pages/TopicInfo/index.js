import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ErrorModal, PostContent } from '../../components';

import api from '../../services/api';

import { lightShadow } from '../../commonStyles';
import styles from './styles';

const TopicInfo = () => {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [postData, setPostData] = useState({});
  const [loading, setLoading] = useState(true);
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
      setPostData(response.data);
      setLoading(false);
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

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

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
          <Text style={styles.title}>{postData.title}</Text>
          <View style={styles.postContentContainer}>
            {postData.contents.map((post) => (
              <PostContent
                key={String(post.id)}
                type={post.type}
                text={post.data}
              />
            ))}
          </View>
        </View>
        <View style={styles.contentFooterContainer}>
          <TouchableOpacity activeOpacity={0.7} style={styles.likes}>
            <Icon name="heart" size={40} color="#B2B2B2" />
            <Text style={styles.likesText}>{postData.likes.count}</Text>
          </TouchableOpacity>
          <View style={styles.author}>
            <Text style={styles.mediumText}>Por:</Text>
            <TouchableOpacity activeOpacity={0.7} style={styles.authorInfo}>
              <Image
                style={styles.authorImage}
                source={{ uri: postData.author.image_url }}
              />
              <Text style={styles.authorName}>{postData.author.username}</Text>
              <Text style={styles.createdAt}>
                {format(parseISO(postData.created_at), 'P', {
                  locale: ptBR,
                })}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentsContainer} ref={commentsContainer}>
          <Text style={styles.mediumText}>Comentários</Text>
          <View style={styles.commentsDivider} />

          <View style={styles.commentList}>
            {postData.comments.data.map((comment) => (
              <View
                key={String(comment.id)}
                style={[styles.comment, lightShadow]}
              >
                <View style={styles.commentAuthorInfo}>
                  <View style={styles.commentAuthorImage} />
                  <Text style={styles.commentAuthorName}>username</Text>
                </View>
                <Text style={styles.commentText}>{comment.text}</Text>
              </View>
            ))}
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
