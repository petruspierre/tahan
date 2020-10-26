import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { ErrorModal, PostContent } from '../../components';

import { useAuth } from '../../contexts/auth';

import api from '../../services/api';

import { lightShadow } from '../../commonStyles';
import styles from './styles';

const TopicInfo = () => {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Falha ao recuperar os dados desse post'
  );

  const [loading, setLoading] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const [postData, setPostData] = useState({});

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [creatingComment, setCreatingComment] = useState(false);

  const commentInput = useRef(null);
  const scroll = useRef(null);

  const { user } = useAuth();

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
      setLiked(response.data.likes.user_liked);
      setLikes(response.data.likes.count);

      setLoading(false);
    } catch {
      setIsErrorModalVisible(true);
    }
  }

  async function getComments() {
    try {
      setLoadingComments(true);
      const { id } = route.params;
      const response = await api.get(`/posts/${id}/comments`);
      setComments(response.data);
    } catch {
      setErrorMessage(
        'Não foi possível carregar os comentários desse tópico. Tente novamente'
      );
      setIsErrorModalVisible(true);
    }
    setLoadingComments(false);
  }

  function handleGetError() {
    setIsErrorModalVisible(false);
    navigation.goBack();
  }

  async function handleLike() {
    try {
      await api.post(`posts/${postData.id}/like`);
      if (liked) {
        setLiked(false);
        setLikes(likes - 1);
      } else {
        setLiked(true);
        setLikes(likes + 1);
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Falha ao dar like. Favor tentar novamente');
      setIsErrorModalVisible(true);
    }
  }

  function handleCreateComment() {}

  function handleStartComment() {
    setCreatingComment(true);
    setTimeout(() => {
      scroll.current.scrollToEnd();
    }, 1000);
  }

  async function handleDeleteComment(id) {
    try {
      await api.delete(`/posts/comments/${id}`);
      getComments();
    } catch {
      setErrorMessage('Não foi possível deletar esse comentário.');
      setIsErrorModalVisible(true);
    }
  }

  function handleTrashClick(id) {
    Alert.alert(
      'Deletar comentário',
      'Tem certeza que você quer deletar esse comentário?',
      [
        {
          text: 'NÃO',
          style: 'cancel',
        },
        { text: 'SIM', onPress: () => handleDeleteComment(id) },
      ],
      { cancelable: false }
    );
  }

  useEffect(() => {
    getTopicInfo();
    getComments();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#FF3358" />
      </View>
    );
  }

  return (
    <>
      <ScrollView
        ref={scroll}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="never"
        contentContainerStyle={styles.contentContainer}
      >
        <ErrorModal
          visible={isErrorModalVisible}
          error={errorMessage}
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
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.likes}
            onPress={handleLike}
          >
            {liked ? (
              <Icon name="heart" size={40} color="#FF3358" />
            ) : (
              <Icon name="heart" size={40} color="#B2B2B2" />
            )}
            <Text style={styles.likesText}>{likes}</Text>
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
        <View style={styles.commentsContainer}>
          <Text style={styles.mediumText}>Comentários</Text>
          <View style={styles.commentsDivider} />

          <View style={styles.commentList}>
            {!loadingComments &&
              comments.map((comment) => (
                <View
                  key={String(comment.id)}
                  style={[styles.comment, lightShadow]}
                >
                  <View style={styles.commentAuthorInfo}>
                    <Image
                      style={styles.commentAuthorImage}
                      source={{ uri: comment.author.image_url }}
                    />
                    <Text numberOfLines={1} style={styles.commentAuthorName}>
                      {comment.author.username}
                    </Text>
                    {user.id === comment.author.id && (
                      <TouchableOpacity
                        style={styles.trashIcon}
                        onPress={() => handleTrashClick(comment.id)}
                      >
                        <Icon name="delete" size={16} color="#FF3358" />
                      </TouchableOpacity>
                    )}
                  </View>
                  <Text style={styles.commentText}>{comment.text}</Text>
                </View>
              ))}
            {creatingComment && (
              <View style={[styles.createComment, lightShadow]}>
                <TextInput
                  ref={commentInput}
                  style={styles.commentText}
                  value={commentText}
                  onChangeText={setCommentText}
                  multiline
                  autoFocus
                />
                <View style={styles.creatingButtons}>
                  <RectButton
                    onPress={handleCreateComment}
                    style={styles.creatingButton}
                  >
                    <Text style={styles.creatingButtonText}>Enviar</Text>
                  </RectButton>
                  <RectButton
                    onPress={() => setCommentText('')}
                    style={[styles.creatingButton, { marginLeft: 16 }]}
                  >
                    <Text style={styles.creatingButtonText}>Limpar</Text>
                  </RectButton>
                </View>
              </View>
            )}
          </View>

          <RectButton style={styles.commentButton} onPress={handleStartComment}>
            <Text style={styles.buttonText}>Comentar</Text>
          </RectButton>
        </View>
      </ScrollView>
    </>
  );
};

export default TopicInfo;
