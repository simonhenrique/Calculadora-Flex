import React, { useState } from 'react';
import { StyleSheet, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

const App = () => {
  const [gas, setGas] = React.useState('');
  const [eta, setEta] = React.useState('');
  const [res, setRes] = React.useState('');

  const RandleCalcular = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      Alert.alert(
        'Atenção, Obrigatorio informar o valor da Gasolina e do Etanol'
      );
    }else {
      let pct = Math.round((eta/gas)*100);
      if(pct < 70){
      setRes(pct + '% Recomendamos o uso da Etanol')
      }else{
      setRes(pct + '% Recomendamos o uso da Gasolina')
      }
    }
  };

  return (
    <Container>
      <Header title={'React Native'} />
      <Body>
        <Text style={style.texttitle}>Calculadora Flex</Text>
        <Input
          mode="outlined"
          label="Preço da Gasolina"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        <Input
          mode="outlined"
          label="Preço da Etanol"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button style={style.buttom} mode="elevated" onPress={RandleCalcular}>
          Calcular
        </Button>
        <Text style={style.text}> {res} </Text>
      </Body>
    </Container>
  );
};

const style = StyleSheet.create({
  texttitle: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 15
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    margin: 10,
  },
  buttom: {
    backgroundColor: '#E6E6FA',
    marginTop: 10,
    padding: 3,
    height: 45, 
  }
});

export default App;
