import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { colors, font, lightShadow } from '../../commonStyles';

const PostContent = ({ type, text }) => {
  const aditionalStyle = {};

  if (type === 'title') {
    aditionalStyle.fontSize = 20;
    aditionalStyle.fontFamily = font.bold;
    aditionalStyle.alignSelf = 'center';
  } else if (type === 'subtitle') {
    aditionalStyle.fontSize = 18;
    aditionalStyle.alignSelf = 'center';
  } else if (type === 'paragraph') {
    aditionalStyle.textAlign = 'justify';
    text = `   ${text}`;
  } else if (type === 'topic') {
    text = `• ${text}`;
  }

  return (
    <View style={[styles.postContent, aditionalStyle, lightShadow]}>
      <Text style={[styles.postText, aditionalStyle]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postContent: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  postText: {
    fontSize: 15,
    fontFamily: font.regular,
    color: colors.black,
  },
});

export default PostContent;
