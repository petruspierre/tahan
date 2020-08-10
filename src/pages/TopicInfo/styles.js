import { StyleSheet } from 'react-native';

import { colors, font, metrics } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: metrics.pagePadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  pageTitle: {
    fontFamily: font.bold,
    fontSize: 25,
  },
  mainContent: {
    width: '100%',
    marginTop: 16,
  },
  image: {
    height: 196,
    borderRadius: 8,
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 40,
    fontFamily: font.bold,
    color: colors.black,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontFamily: font.bold,
    color: colors.black,
    textAlign: 'center',
  },
  postContentContainer: {
    width: '100%',
    marginTop: 16,
  },
  postContent: {
    backgroundColor: '#ECECEC',
    borderRadius: 5,
    padding: 8,
    marginBottom: 16,
  },
  postText: {
    fontSize: 15,
    fontFamily: font.bold,
    color: colors.black,
    textAlign: 'justify',
  },

  contentFooterContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  likesText: {
    fontSize: 30,
    fontFamily: font.bold,
    color: '#B2B2B2',
    marginLeft: 8,
  },
  author: {
    flexDirection: 'row',
  },
  mediumText: {
    fontSize: 20,
    fontFamily: font.bold,
    color: colors.black,
    marginTop: 14,
  },
  authorInfo: {
    alignItems: 'center',
  },
  authorImage: {
    height: 48,
    width: 48,
    borderRadius: 24,
    backgroundColor: '#B2B2B2',
  },
  authorName: {
    fontSize: 15,
    fontFamily: font.bold,
    color: colors.black,
  },
  createdAt: {
    fontSize: 15,
    fontFamily: font.bold,
    color: '#B2B2B2',
  },
  commentsContainer: {
    width: '100%',
    marginTop: -22,
  },
  commentsDivider: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 2,
  },

  commentList: {
    width: '100%',
    alignItems: 'center',
  },
  comment: {
    width: '90%',
    backgroundColor: '#DCDADA',
    padding: 9,
    borderRadius: 10,
    marginTop: 16,
  },
  commentAuthorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentAuthorImage: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#B2B2B2',
  },
  commentAuthorName: {
    fontSize: 15,
    fontFamily: font.bold,
    color: '#B2B2B2',
    marginLeft: 8,
  },
  commentText: {
    fontSize: 15,
    fontFamily: font.bold,
    color: colors.black,
    textAlign: 'justify',
    lineHeight: 15,
  },
  commentButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    marginTop: 32,
    width: '45%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: font.bold,
    textAlign: 'center',
  },

  actionButton: {
    backgroundColor: colors.primary,
    height: 70,
    width: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 20,
  },
});

export default styles;
