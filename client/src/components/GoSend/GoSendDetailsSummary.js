import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  fineprint: {
    fontSize: 12,
    color: 'silver',
  },
});

const GoSendDetailsSummary = ({icon: {name, color}, estimation}) => (
  <View style={{flexDirection: 'row'}}>
    <MaterialCommunityIcons
      name={name}
      size={24}
      color={color}
      style={{marginRight: 16}}
    />
    <View style={{flex: 1}}>
      <Text style={styles.fineprint}>Pengirim</Text>
      <Text style={styles.title}>pengirim.nama</Text>
      <Text>pengirim.telepon</Text>
      <Text>pengirim.alamat</Text>
      {estimation && (
        <>
          <View style={styles.divider} />
          <Text style={styles.fineprint}>Estimasi pengiriman</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.title, {flex: 1}]}>Sunday, Sep 27</Text>
            <Text style={styles.title}>14:00 - 16:00</Text>
          </View>
        </>
      )}
    </View>
  </View>
);

export default GoSendDetailsSummary;
