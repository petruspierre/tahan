import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputTitle: {
    color: '#FF3358',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 12,
    width: 219,
    marginLeft: 5,
    marginBottom: 3,

  },
  inputBorder: {
    justifyContent: 'center',
    alignItems: 'center',

    width: 224,
    height: 54,
    borderWidth: 2,
    borderColor: '#FF0000',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 8,
  },
  input: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 18,
    width: 210,
    height: 41,
    backgroundColor: '#EAE8E8',
    borderRadius: 7,
    paddingLeft: 8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 224,
  },
  button: {
    backgroundColor: '#FF3358',
    width: 106,
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 26,
  },
  smallButton: {
    backgroundColor: '#2E2E2E',
    borderRadius: 7,

    width: 104,
    height: 31,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  smallButtonText: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 10,
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#2e2e2e',
    borderRadius: 10,
    width: 162,
    height: 52,

    position: 'absolute',
    bottom: 40,

    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 28,
    color: '#fff',
  },

  mediumShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  decorationTop1: {
    width: '100%',
    height: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#FF3358',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  decorationTop2: {
    width: '90%',
    height: 10,
    position: 'absolute',
    top: 25,
    backgroundColor: '#FF3358',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  decorationRegisterButton: {
    width: '100%',
    height: 102,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderColor: '#FF3358',
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  decorationBottom1: {
    width: '100%',
    height: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#FF3358',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  decorationBottom2: {
    width: '90%',
    height: 10,
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#FF3358',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default styles;
