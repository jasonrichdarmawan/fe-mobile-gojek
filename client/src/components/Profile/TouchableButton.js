import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const TouchableButton = () => (
  <TouchableOpacity onPress={() => alert('Saved!')}>
    <View
      style={{
        backgroundColor: 'grey',
        width: 55,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginRight: 15,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: 'white',
        }}>
        Save
      </Text>
    </View>
  </TouchableOpacity>
);

export default TouchableButton;
