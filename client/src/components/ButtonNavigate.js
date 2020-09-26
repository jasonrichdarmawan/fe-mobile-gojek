import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  buttonNavigate: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 6,
    backgroundColor: 'green',
    padding: 16,
    marginTop: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
  },
});

const ButtonNavigate = ({textLeft, text, textRight, navigateToNextRoute}) => (
  <TouchableOpacity
    style={styles.buttonNavigate}
    onPress={() => navigateToNextRoute()}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.title}>{textLeft}</Text>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.title}>{textRight}</Text>
    </View>
  </TouchableOpacity>
);

export default ButtonNavigate;
