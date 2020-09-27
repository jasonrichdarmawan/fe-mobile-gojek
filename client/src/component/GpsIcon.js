import React from 'react';
import {TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import IconMatic from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 9,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    width: 40,
    height: 40,
  },
});

const GpsIcon = () => (
  <TouchableOpacity style={styles.button}>
    <IconMatic name="gps-fixed" size={18} color="black" />
  </TouchableOpacity>
);

export default GpsIcon;
