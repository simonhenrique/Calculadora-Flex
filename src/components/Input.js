import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = (props) => {
  return (
     <TextInput style={style.input}
    keyboardType='decimal-pad' 
    {...props}/>
  );
};

const style = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginBottom: 10,
  }
});

export default Input;