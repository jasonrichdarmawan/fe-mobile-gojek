import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Animatable from 'react-native-animatable';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ButtonNavigate from '../../components/ButtonNavigate';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoBackButton from '../../components/GoBackButton';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  details: {
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 5,
  },
  border: {
    borderColor: 'silver',
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 5,
  },
  divider: {
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },
});

const TextInputIcon = ({icon, placeholder, onChangeText}) => (
  <View style={[styles.border, {flexDirection: 'row'}]}>
    <View style={{margin: 16}}>
      <Icon name={icon} size={16} color="silver" />
    </View>
    <TextInput style={{flex: 1}} placeholder={placeholder} onChangeText={onChangeText}/>
  </View>
);

const RadioButton = ({textLeft, textRight, id, select, setSelect}) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 20,
    }}
    onPress={() => id !== select && setSelect(id)}>
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{marginRight: 20}}>
        <Ionicons
          name={id === select ? 'radio-button-on' : 'radio-button-off'}
          size={16}
          color={id === select ? 'green' : 'silver'}
        />
      </View>
      <Text>{textLeft}</Text>
    </View>
    <Text>{textRight}</Text>
  </TouchableOpacity>
);

export default function GoSendPackageDetails({navigation: {navigate, goBack}}) {
  const [select, setSelect] = React.useState(1);
  const [note, setNote] = React.useState();

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={coordinate}
        // onRegionChangeComplete={handleRegionChange}
      />
      <GoBackButton goBack={goBack} />
      <View style={{flex: 1}}>
        <View style={{flex: 1}} />
        <Animatable.View animation="fadeInUp" style={styles.details}>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={styles.title}>Detail paket</Text>
            <Text style={styles.title}>Deskripsi barang</Text>
            <TextInputIcon
              icon="sticky-note"
              placeholder="Contoh: Baju, buku, sepatu"
              onChangeText={(text) => setNote(text)}
            />
          </View>
          <View style={styles.divider}></View>
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <Text style={styles.title}>Perlindungan barang</Text>
            <View style={styles.border}>
              <RadioButton
                textLeft="Standar"
                textRight="Gratis"
                id={1}
                select={select}
                setSelect={setSelect}
              />
              <View style={[styles.divider, {marginLeft: 56}]}></View>
              <RadioButton
                textLeft="Ekstra"
                textRight="Rp500"
                id={2}
                select={select}
                setSelect={setSelect}
              />
            </View>
            <Text style={{marginVertical: 5}}>
              Paketmu otomatis dapet jaminan perlindungan sampai Rp1.000.000 jt
              dari Gojek. Kalau Ekstra, perlindungannya sampai Rp10.000.000 jt.
              Deskripsi paket harus lengkap, biar dilindungi seutuhnya.
            </Text>
            <ButtonNavigate
              text="Lanjut"
              navigateToNextRoute={() =>
                navigate('GoSendWithInCitySummary', {note: note})
              }
            />
          </View>
        </Animatable.View>
      </View>
    </View>
  );
}
