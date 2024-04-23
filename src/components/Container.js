import React from 'react';
import { StyleSheet, View } from 'react-native';

const Container = ({ children }) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Container;
