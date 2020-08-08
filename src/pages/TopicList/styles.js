import { StyleSheet } from 'react-native';

import { colors, font, metrics } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 32,
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
  topContainer: {
    marginTop: 16,
  },

  categoryContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    borderRadius: 8,
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryTextContainer: {
    backgroundColor: colors.black,
    borderRadius: 8,
    height: 36,
    padding: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  categoryText: {
    color: 'white',
    fontFamily: font.bold,
    fontSize: 18,
  },
  categoryPickerContainerStyle: {
    width: '55%',
    height: 36,
  },
  categoryChildrenContainer: {
    height: 36,
  },
  categoryTouchable: {
    height: 36,
  },
  selectStyle: {
    padding: 0,
    borderWidth: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 8,
    height: 36,
  },
  arrowDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    elevation: 5,
    height: '100%',
    paddingHorizontal: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },
  categoryTextStyle: {
    fontFamily: font.bold,
    color: 'white',
  },
  categoryOptionText: {
    fontSize: 18,
    fontFamily: font.bold,
    color: colors.primary,
  },
  categoryInitValue: {
    fontSize: 18,
    fontFamily: font.bold,
    color: 'white',
    textAlign: 'left',
  },
  cancelContainerStyle: {
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  optionContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  cancelTextStyle: {
    fontFamily: font.bold,
    color: 'white',
  },

  searchInputContainer: {
    height: 45,
    width: '100%',
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: 'white',
    padding: 3,
    borderRadius: 10,
    marginTop: 16,
  },
  searchInput: {
    backgroundColor: '#EAE8E8',
    borderRadius: 7,
    textAlign: 'left',
    fontSize: 18,
    padding: 0,
    paddingLeft: 16,
    height: '100%',
    fontFamily: font.bold,
  },

  orderContainer: {
    marginTop: 16,
    flexDirection: 'row',
    backgroundColor: colors.black,
    borderRadius: 8,
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderTextContainer: {
    backgroundColor: '#DCDADA',
    borderRadius: 8,
    height: 36,
    padding: 8,
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    color: colors.primary,
    fontFamily: font.bold,
    fontSize: 18,
  },
  orderInitValue: {
    fontSize: 18,
    fontFamily: font.bold,
    color: colors.primary,
    textAlign: 'left',
  },
  orderArrowDownContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDADA',
    height: '100%',
    paddingHorizontal: 8,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
  },

  mainContent: {
    width: '100%',
    marginTop: 16,
  },

  topicRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  topicContainer: {
    width: '48%',
    backgroundColor: '#393737',
    borderRadius: 10,
    height: 140,
  },
  topicImage: {
    height: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicTitleContainer: {
    height: '35%',
    width: '100%',
    padding: 5,
    backgroundColor: colors.black,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  topicTitle: {
    fontSize: 14,
    color: 'white',
    fontFamily: font.bold,
    textAlign: 'center',
  },
});

export default styles;
