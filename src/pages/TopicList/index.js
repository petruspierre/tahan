import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign as Icon, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalSelector from 'react-native-modal-selector';

import styles from './styles';

const TopicList = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('Matemática');
  const categorySelector = useRef(null);

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

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleNavigateBack}
        >
          <Icon name="arrowleft" size={32} color="white" />
        </TouchableOpacity>
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
              <TouchableOpacity
                style={styles.selectStyle}
                onPress={() => categorySelector.current.open()}
              >
                <Text style={styles.categoryInitValue}>{category}</Text>
                <View style={styles.arrowDownContainer}>
                  <Icon name="down" size={16} color="white" />
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    </View>
  );
};

export default TopicList;
