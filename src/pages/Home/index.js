import React, { useState, useRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { TopDecoration } from '../../components';

import { mediumShadow } from '../../commonStyles';
import styles from './styles';

const Home = () => {
  const [code1, setCode1] = useState('');
  const [code2, setCode2] = useState('');
  const [code3, setCode3] = useState('');
  const [code4, setCode4] = useState('');
  const input1 = useRef(null);
  const input2 = useRef(null);
  const input3 = useRef(null);
  const input4 = useRef(null);

  return (
    <>
      <View style={styles.container}>
        <TopDecoration title="JOGAR" />

        <View style={[styles.joinContainer, mediumShadow]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={styles.big}>Entrar</Text>
              <Text style={[styles.small, { marginTop: -5 }]}>em uma sala</Text>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.small, { color: '#EAE8E8' }]}>
                insira o código
              </Text>
              <Text style={[styles.small, { color: '#EAE8E8', marginTop: -5 }]}>
                no espaço abaixo
              </Text>
            </View>
          </View>
          <View style={styles.inputsContainer}>
            <TextInput
              onFocus={() => setCode1('')}
              value={code1}
              ref={input1}
              style={styles.input}
              onChangeText={(text) => {
                text = text[text.length - 1];
                setCode1(text);
                if (text !== '') {
                  input2.current.focus();
                }
              }}
            />
            <TextInput
              onFocus={() => setCode2('')}
              value={code2}
              ref={input2}
              style={styles.input}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') input1.current.focus();
              }}
              onChangeText={(text) => {
                text = text[text.length - 1];
                setCode2(text);
                if (text !== '') {
                  input3.current.focus();
                }
              }}
            />
            <TextInput
              onFocus={() => setCode3('')}
              value={code3}
              ref={input3}
              style={styles.input}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') input2.current.focus();
              }}
              onChangeText={(text) => {
                text = text[text.length - 1];
                setCode3(text);
                if (text !== '') {
                  input4.current.focus();
                }
              }}
            />
            <TextInput
              onFocus={() => setCode4('')}
              value={code4}
              ref={input4}
              style={styles.input}
              onKeyPress={({ nativeEvent }) => {
                if (nativeEvent.key === 'Backspace') input3.current.focus();
              }}
              onChangeText={(text) => {
                text = text[text.length - 1];
                setCode4(text);
                if (text !== '') {
                  // do-something
                }
              }}
            />
          </View>
        </View>

        <RectButton style={[styles.createRoomContainer, mediumShadow]}>
          <Text style={styles.createRoomText}>Criar sala</Text>
        </RectButton>
      </View>
    </>
  );
};

export default Home;
