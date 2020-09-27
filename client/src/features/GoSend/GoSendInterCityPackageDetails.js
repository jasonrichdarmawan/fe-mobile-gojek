import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ButtonNavigate from '../../components/ButtonNavigate';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 15,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default function GoSendInterCityPackageDetails({
  route: {params},
  navigation: {navigate},
}) {
  const {select} = params;

  const selectName =
    select === 1 ? 'Kecil' : select === 2 ? 'Sedang' : select === 3 && 'Besar';

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={styles.row}>
          <Text style={[styles.title, {flex: 1}]}>Ukuran</Text>
          <Text style={styles.title}>{selectName}</Text>
        </View>
        <View style={[styles.divider, {marginLeft: 20}]} />
        <View style={styles.row}>
          <Text style={[styles.title, {flex: 1}]}>Barang pecah belah</Text>
          <Ionicons name="checkmark-circle-sharp" size={24} color="silver" />
        </View>
        <View style={styles.divider} />
        <View style={{marginVertical: 15, marginHorizontal: 20}}>
          <Text style={styles.title}>Deskripsi</Text>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 10,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: 'floralwhite',
              backgroundColor: 'ghostwhite',
            }}>
            <FontAwesome5
              style={{marginHorizontal: 16, alignSelf: 'center'}}
              name="sticky-note"
              size={24}
              color="green"
            />
            <TextInput
              style={{color: 'black', paddingVertical: 5}}
              placeholder="Deskripsi paket (cth: baju)"
            />
          </View>
        </View>
      </View>
      <View style={{margin: 20, flex: 1, justifyContent: 'flex-end'}}>
        <ButtonNavigate
          text="Lanjut"
          navigateToNextRoute={() => navigate('null')}
        />
      </View>
    </View>
  );
}
