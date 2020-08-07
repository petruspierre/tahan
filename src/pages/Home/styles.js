import { StyleSheet } from 'react-native';

import { font, colors, metrics } from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: '70%',
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
  invitesContainer: {
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 24,
  },
  invitesTitle: {
    fontSize: 20,
    fontFamily: font.bold,
    color: '#362E2E',
  },
  noInvites: {
    marginTop: 16,
    flexDirection: 'row',
    width: '100%',
  },
  noInvitesText: {
    fontSize: 15,
    fontFamily: font.bold,
    maxWidth: 200,
    textAlign: 'center',
    color: '#b2b2b2',
    width: metrics.width * 0.7 - 32,
    marginRight: -32,
  },
  confusedIcon: {
    width: metrics.width * 0.6 - 32,
    resizeMode: 'contain',
    marginTop: -64,
    marginLeft: -24,
  },
});

export default styles;
