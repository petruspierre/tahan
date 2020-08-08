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
});

export default styles;
