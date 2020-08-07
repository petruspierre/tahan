import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  width,
  height,
};
const font = {
  regular: 'RobotoSlab_400Regular',
  bold: 'RobotoSlab_700Bold',
};
const colors = {
  primary: '#FF3358',
  black: '#2E2E2E',
};
const mediumShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 8,
};

const lightShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.36,
  shadowRadius: 6.68,

  elevation: 5,
};

export { metrics, font, colors, mediumShadow, lightShadow };
