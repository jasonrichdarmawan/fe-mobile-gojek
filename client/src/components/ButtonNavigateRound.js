import React from 'react';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: 'silver',
    padding: 16,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
  },
});

export default function ButtonNavigateRound({navigateToNextRoute}) {
  return (
    <TouchableOpacity
      style={[styles.button, {position: 'absolute', right: 20, bottom: 20}]}
      onPress={() => navigateToNextRoute()}>
      <FontAwesome5Icon name="arrow-right" size={24} color="white" />
    </TouchableOpacity>
  );
}
