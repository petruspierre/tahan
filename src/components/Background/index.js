import React, { useEffect } from 'react';
import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  Easing,
} from 'react-native';

import bgElement1 from '../../assets/bg/bg_element_1.png';
import bgElement2 from '../../assets/bg/bg_element_2.png';
import bgElement3 from '../../assets/bg/bg_element_3.png';
import bgElement4 from '../../assets/bg/bg_element_4.png';
import bgElement5 from '../../assets/bg/bg_element_5.png';
import bgElement6 from '../../assets/bg/bg_element_6.png';
import bgElement7 from '../../assets/bg/bg_element_7.png';

const { width, height } = Dimensions.get('window');

const Background = () => {
  const animation1 = new Animated.Value(0);
  const animation2 = Animated.multiply(-1, animation1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation1, {
          toValue: 10,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(animation1, {
          toValue: -5,
          duration: 1500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: -1,
      }
    ).start();
  });

  function Icon({ source, x, y }) {
    return (
      <Image
        style={{
          position: 'absolute',
          top: height * y,
          left: width * x,
        }}
        source={source}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: [{ translateY: animation1 }],
        }}
      >
        <Icon source={bgElement5} x={0.1} y={0.15} />
        <Icon source={bgElement3} x={0.8} y={0.5} />
        <Icon source={bgElement7} x={0.83} y={0.28} />
        <Icon source={bgElement2} x={0.12} y={0.75} />
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          transform: [{ translateY: animation2 }],
        }}
      >
        <Icon source={bgElement1} x={0.05} y={0.45} />
        <Icon source={bgElement6} x={0.7} y={0.72} />
        <Icon source={bgElement4} x={0.7} y={0.15} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width,
    height,
    backgroundColor: '#fff',
  },
});

export default Background;
