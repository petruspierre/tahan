import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    margin: 16,
    marginBottom: 64,
  },
  mediumShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 5,
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
