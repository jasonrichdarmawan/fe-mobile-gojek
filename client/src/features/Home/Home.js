import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: 20,
  },
  button: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 50,
    backgroundColor: 'green',
  },
  title: {
    fontWeight: 'bold',
  },
});

export default function Home({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/GoSend_Home.jpg')}
        resizeMode="stretch"
        style={{
          width: 300,
          height: 200,
          marginVertical: 20,
          alignSelf: 'center',
        }}
      />
      <Text style={[styles.title, {fontSize: 20}]}>
        Selamat datang di Gojek!
      </Text>
      <Text style={{fontSize: 15}}>
        Aplikasi yang bikin hidup kamu lebih nyaman. Siap bantuin semua
        kebutuhanmu, kapanpun, dan dimanapun.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10,
        }}>
        <TouchableOpacity style={styles.button} onPress={() => navigate('LoginScreen')}>
          <Text style={[styles.title, {color: 'white'}]}>Masuk</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal: 10}} />
        <TouchableOpacity style={styles.button} onPress={() => navigate('RegisterScreen')}>
          <Text style={[styles.title, {color: 'white'}]}>Daftar</Text>
        </TouchableOpacity>
      </View>
      <Text>
        Dengan masuk atau mendaftar, kamu menyetujui Ketentuan Layanan dan
        Kebijakan Privasi
      </Text>
    </View>
  );
}