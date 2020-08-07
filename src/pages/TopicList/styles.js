import { StyleSheet } from 'react-native';

import { colors, font } from '../../commonStyles';

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
    elevation: 11,
  },
  categoryText: {
    color: 'white',
    fontFamily: font.bold,
    fontSize: 20,
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
    elevation: 11,
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
    fontSize: 20,
    fontFamily: font.bold,
    color: colors.primary,
  },
  categoryInitValue: {
    fontSize: 20,
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
});

export default styles;
