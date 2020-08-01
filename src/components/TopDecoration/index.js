import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const TopDecoration = ({ title }) => {
  const { width, height } = Dimensions.get('window');

  function Top() {
    return (
      <Svg height="100" width={width}>
        <Polygon
          points={`0,0, ${width},0 ${width},50 ${width / 2},55 0,50`}
          fill="#FF3358"
        />
      </Svg>
    );
  }

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height,
        width,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: 10,
          height: 65,
          backgroundColor: '#FF3358',
          borderBottomRightRadius: 8,
        }}
      />
      <Top />
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 10,
          height: 65,
          backgroundColor: '#FF3358',
          borderBottomLeftRadius: 8,
        }}
      />
      <Text
        style={{
          fontFamily: 'RobotoSlab_700Bold',
          color: '#fff',
          marginTop: -95,
          alignSelf: 'center',
          fontSize: 30,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default TopDecoration;
