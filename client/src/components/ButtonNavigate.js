import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  buttonNavigate: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    backgroundColor: 'green',
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

const ButtonNavigate = ({text, navigateToNextRoute}) => (
  <TouchableOpacity
    style={styles.buttonNavigate}
    onPress={() => navigateToNextRoute()}>
    <Text style={[styles.title, {color: 'white'}]}>{text}</Text>
  </TouchableOpacity>
);

export default ButtonNavigate;