import React from 'react';
import {View, StyleSheet, Dimensions, Image, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.6,
    shadowRadius: 14,
    elevation: 25,
  },
  pickup: {
    flexDirection: 'row',
  },
  destination: {
    flexDirection: 'row',
  },
  textModal: {padding: 9},
  line: {
    width: '90%',
    height: 1,
    backgroundColor: 'grey',
    marginLeft: 30,
  },
});

const SummaryModal = ({destination, pickup}) => (
  <View
    style={[
      styles.container,
      {position: 'absolute', top: 20, right: 15, left: 15},
    ]}>
    <View style={styles.pickup}>
      <Image
        source={require('../img/pickup-logo-small.png')}
        style={{width: 20, height: 20, marginTop: 10}}
      />
      <Text style={styles.textModal}>{destination}</Text>
    </View>
    <View style={styles.line} />
    <View style={styles.destination}>
      <Image
        source={require('../img/destination-logo-small.png')}
        style={{width: 23, height: 23, marginTop: 6}}
      />
      <Text style={styles.textModal}>{pickup}</Text>
    </View>
  </View>
);

export default SummaryModal;
