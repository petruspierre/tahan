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
});

export default styles;
