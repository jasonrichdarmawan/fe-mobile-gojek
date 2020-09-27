import React from 'react';
import {Image, Text, View} from 'react-native';

export default function Konten() {
  // TODO: get GoJek news API.
  return (
    <View>
      <Image
        source={require('../../../assets/GoPay.jpg')}
        style={{height: 180, width: 360}}
      />
      <View style={{padding: 20}}>
        <Text>Gojek, 30 Sep 2019</Text>
        <Text style={{fontWeight: 'bold', marginVertical: 20}}>
          Isi Saldo GoPay Bisa Langsung di Aplikasi Gojek!
        </Text>
        <Text>
          Kamu pasti setuju kan kalau hadirnya GoPay sangat mempermudah hidup
          kamu. Kamu bisa bayar ini itu dengan praktis. Makanya, jangan sampe
          saldo GoPay kamu habis. Kamu harus rajin isi saldo GoPay kamu, apalagi
          saat ini Gojek dan BCA sudah bekerjasama untuk membuat sebuah fitur
          yang semakin mempermudah hidup kamu. Jadi, sekarang kamu bisa isi
          saldo GoPay langsung dari aplikasi Gojek!
        </Text>
      </View>
    </View>
  );
}
