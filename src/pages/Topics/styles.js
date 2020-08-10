import { StyleSheet } from 'react-native';

import { metrics } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: metrics.tabPadding,
  },
  searchContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FF2258',
    borderRadius: 10,
    marginBottom: 48,
  },
  recentContainer: {
    padding: 16,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2E2E2E',
    borderRadius: 10,
  },
  big: {
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 30,
    color: 'white',
  },
  small: {
    fontFamily: 'RobotoSlab_700Bold',
    fontSize: 15,
    color: 'white',
    marginTop: -3,
  },
});

export default styles;
