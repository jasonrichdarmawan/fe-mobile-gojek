import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = {
  container: {
    paddingTop: 18,
    marginHorizontal: 18,
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
};

export default function GoSendCurrentCity({title, goBack}) {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <View style={[{flex: 1, flexDirection: 'row'}]}>
        <View style={{marginRight: 16}}>
          <Icon name="city" size={24} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => goBack()}>
        <Text style={{fontWeight: 'bold', color: 'green'}}>Change</Text>
      </TouchableOpacity>
    </View>
  );
}
