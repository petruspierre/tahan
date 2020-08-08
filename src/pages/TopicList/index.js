import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalSelector from 'react-native-modal-selector';
import { RectButton } from 'react-native-gesture-handler';

import { ErrorModal } from '../../components';

import api from '../../services/api';

import { lightShadow } from '../../commonStyles';
import styles from './styles';

const TopicList = () => {
  const navigation = useNavigation();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('Matemática');
  const [order, setOrder] = useState('Avaliação');
  const [search, setSearch] = useState('');
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const categorySelector = useRef(null);
  const orderSelector = useRef(null);

  const categories = [
    { key: 'MAT', label: 'Matemática' },
    { key: 'POR', label: 'Português' },
    { key: 'ING', label: 'Inglês' },
    { key: 'HIS', label: 'História' },
    { key: 'GEO', label: 'Geografia' },
    { key: 'FIS', label: 'Física' },
    { key: 'QUI', label: 'Química' },
    { key: 'SOC', label: 'Sociologia' },
    { key: 'FIL', label: 'Filosofia' },
  ];

  const orderOptions = [
    { key: 'RAT', label: 'Avaliação' },
    { key: 'REC', label: 'Recentes' },
  ];

  function handleNavigateBack() {
    navigation.goBack();
  }

  function Topic({ title, onPress }) {
    return (
      <RectButton style={styles.topicContainer} onPress={onPress}>
        <View style={styles.topicImage}>
          {/* Substituir essa View por uma Image */}
          <Entypo name="image" color="white" size={56} />
        </View>
        <View style={styles.topicTitleContainer}>
          <Text numberOfLines={2} style={styles.topicTitle}>
            {title}
          </Text>
        </View>
      </RectButton>
    );
  }

  function renderPost(post, index) {
    const next = posts[index + 1];
    if (next) {
      index += 1;
      return (
        <View style={styles.topicRow}>
          <Topic title={post.title} id={post.id} />
          <Topic title={next.title} id={next.id} />
        </View>
      );
    }
    return (
      <View style={styles.topicRow}>
        <Topic title={post.title} id={post.id} />
      </View>
    );
  }

  async function getPosts() {
    try {
      setLoading(true);
      const response = await api.get('/posts');

      const postsData = response.data.data.map((post) => ({
        id: post.id,
        title: post.title,
      }));
      setPosts(postsData);
    } catch (err) {
      setIsErrorModalVisible(true);
    }
    setLoading(false);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <View style={styles.container}>
      <ErrorModal
        visible={isErrorModalVisible}
        onPress={() => isErrorModalVisible(false)}
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
          <Entypo name="magnifying-glass" size={32} />
          <Text style={styles.pageTitle}>Tópicos</Text>
        </View>
      </View>
      <View style={styles.topContainer}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryTextContainer}>
            <Text style={styles.categoryText}>Categoria:</Text>
          </View>
          <ModalSelector
            data={categories}
            initValue={category}
            onChange={(option) => setCategory(option.label)}
            cancelText="CANCELAR"
            supportedOrientations={['portrait']}
            animationType="fade"
            backdropPressToClose
            //
            style={styles.categoryPickerContainerStyle}
            touchableStyle={styles.categoryTouchable}
            optionContainerStyle={styles.optionContainerStyle}
            selectTextStyle={styles.categoryTextStyle}
            optionTextStyle={styles.categoryOptionText}
            cancelStyle={styles.cancelContainerStyle}
            cancelTextStyle={styles.cancelTextStyle}
            //
            ref={categorySelector}
            customSelector={
              <RectButton
                style={styles.selectStyle}
                onPress={() => categorySelector.current.open()}
              >
                <Text style={styles.categoryInitValue}>{category}</Text>
                <View style={styles.arrowDownContainer}>
                  <Entypo name="chevron-down" size={24} color="white" />
                </View>
              </RectButton>
            }
          />
        </View>

        <View style={[styles.searchInputContainer, lightShadow]}>
          <TextInput
            style={styles.searchInput}
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Pesquise aqui!"
            placeholderTextColor="#C5BCBC"
          />
        </View>

        <View style={styles.orderContainer}>
          <View style={styles.orderTextContainer}>
            <Text style={styles.orderText}>Ordenar por:</Text>
          </View>
          <ModalSelector
            data={orderOptions}
            initValue={order}
            onChange={(option) => setOrder(option.label)}
            cancelText="CANCELAR"
            supportedOrientations={['portrait']}
            animationType="fade"
            backdropPressToClose
            //
            style={styles.categoryPickerContainerStyle}
            touchableStyle={styles.categoryTouchable}
            optionContainerStyle={styles.optionContainerStyle}
            selectTextStyle={styles.categoryTextStyle}
            optionTextStyle={styles.categoryOptionText}
            cancelStyle={styles.cancelContainerStyle}
            cancelTextStyle={styles.cancelTextStyle}
            //
            ref={orderSelector}
            customSelector={
              <RectButton
                style={styles.selectStyle}
                onPress={() => orderSelector.current.open()}
              >
                <Text style={styles.orderInitValue}>{order}</Text>
                <View style={styles.orderArrowDownContainer}>
                  <Entypo name="chevron-down" size={24} color="#FF3358" />
                </View>
              </RectButton>
            }
          />
        </View>
      </View>

      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" color="#FF3358" />
        </View>
      ) : (
        <FlatList
          style={styles.mainContent}
          data={posts}
          keyExtractor={(post) => String(post.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => renderPost(item, index)}
        />
      )}
    </View>
  );
};

export default TopicList;
