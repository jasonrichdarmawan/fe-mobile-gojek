import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import ButtonNavigate from '../../components/ButtonNavigate';
import GoSendDetailsSummary from '../../components/GoSend/GoSendDetailsSummary';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default function GoSendInterCitySummary({
  route: {params},
  navigation: {navigate},
}) {
  const {select} = params;
  const selectName =
    select === 1
      ? `Kecil \u2022 20x11x7cm`
      : select === 2
      ? `Sedang \u2022 30x21x8cm`
      : select === 3 && `Besar \u2022 40x31x9cm`;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
          <Text style={styles.title}>Rincian Alamat</Text>
          <View style={{marginVertical: 10}}>
            <GoSendDetailsSummary
              icon={{name: 'arrow-up-box', color: 'blue'}}
              estimation={true}
            />
            <View
              style={[styles.divider, {marginVertical: 10, marginLeft: 40}]}
            />
            <GoSendDetailsSummary
              icon={{name: 'arrow-down-box', color: 'orange'}}
              estimation={true}
            />
          </View>
        </View>
        <View style={{paddingVertical: 5, backgroundColor: 'ghostwhite'}} />
        <View style={{paddingLeft: 20, paddingTop: 20}}>
          <Text style={styles.title}>Rincian paket</Text>
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <FontAwesome5Icon
              name="sticky-note"
              color="green"
              size={24}
              style={{marginRight: 16}}
            />
            {/* TODO: pass props */}
            <Text style={{alignSelf: 'center', fontWeight: 'bold'}}>
              catatan
            </Text>
          </View>
          <View style={[styles.divider, {marginLeft: 40}]} />
          <View style={{flexDirection: 'row', marginVertical: 10}}>
            <View style={{marginLeft: 40}} />
            <Text style={{alignSelf: 'center'}}>{selectName}</Text>
          </View>
        </View>
        <View style={{paddingVertical: 5, backgroundColor: 'ghostwhite'}} />
      </View>
      <View style={{padding: 20}}>
        <ButtonNavigate
          textLeft="Pesan GoSend"
          textRight="Rp18.000"
          navigateToNextRoute={() => navigate('null')}
        />
      </View>
    </View>
  );
}
