import React from 'react';
import { StyleSheet, View } from 'react-native';

const Body = ({ children }) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    margin: 10,
  },
});

export default Body;
