import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 32,
  },
  joinContainer: {
    width: '100%',
    padding: 16,
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 48,
  },
  big: {
    fontSize: 30,
    fontFamily: 'RobotoSlab_700Bold',
    color: '#fff',
  },
  small: {
    fontSize: 15,
    fontFamily: 'RobotoSlab_700Bold',
    maxWidth: 200,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 65,
    borderWidth: 3,
    borderColor: '#FF3358',
    backgroundColor: '#fff',
    width: 50,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'RobotoSlab_700Bold',
  },
  inputsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
  },
  createRoomContainer: {
    width: '70%',
    marginTop: 24,
    backgroundColor: '#F73F60',
    borderRadius: 10,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createRoomText: {
    fontSize: 30,
    fontFamily: 'RobotoSlab_700Bold',
    color: 'white',
  },
  mediumShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 8,
  },
});

export default styles;
