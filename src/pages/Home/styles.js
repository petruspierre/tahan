import { StyleSheet } from 'react-native';

import { font, colors } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
  },
  joinContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: colors.black,
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 48,
  },
  big: {
    fontSize: 30,
    fontFamily: font.bold,
    color: '#fff',
  },
  small: {
    fontSize: 15,
    fontFamily: font.bold,
    maxWidth: 200,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 65,
    borderWidth: 3,
    borderColor: colors.primary,
    backgroundColor: '#fff',
    width: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: font.bold,
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  createRoomContainer: {
    width: '100%',
    marginTop: 24,
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createRoomText: {
    fontSize: 30,
    fontFamily: font.bold,
    color: 'white',
  },
});

export default styles;
