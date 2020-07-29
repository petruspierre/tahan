import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';

export async function signIn() {
  let userInfo;
  try {
    await GoogleSignin.hasPlayServices();
    userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error) {
    console.error('oxe')
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
  return userInfo;
}
