import { StyleSheet } from 'react-native';

import { colors } from '../../commonStyles';

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
  decorationTop1: {
    width: '100%',
    height: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  decorationTop2: {
    width: '90%',
    height: 10,
    position: 'absolute',
    top: 25,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  decorationBottom1: {
    width: '100%',
    height: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  decorationBottom2: {
    width: '90%',
    height: 10,
    position: 'absolute',
    bottom: 25,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  googleButton: {
    width: 280,
    height: 65,
    backgroundColor: '#f4f2f2',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});

export default styles;
