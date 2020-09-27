import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 8,
  },
});

const GoBackButton = ({goBack}) => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, left: 20}]}
    onPress={() => goBack()}>
    <Icon name="arrow-left" size={18} color="black" />
  </TouchableOpacity>
);

export default GoBackButton;
