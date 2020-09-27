import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import ButtonNavigateRound from '../../components/ButtonNavigateRound';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  label: {
    fontSize: 12,
  },
  title: {
    fontWeight: 'bold',
  },
});
export default function Register({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>
      <Text style={{marginVertical: 10}}>
        Lengkapi data dirimu di bawah ini, ya
      </Text>
      <Text style={styles.label}>Nama Lengkap</Text>
      <TextInput placeholder="Cth: Name" />
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="name@email.com" />
      <Text style={styles.label}>Nomor HP</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{alignSelf: 'center'}}>+62</Text>
        <TextInput placeholder="12345678" />
      </View>
      <Text style={styles.label}>Kode referral</Text>
      <TextInput placeholder="e.g. G-000XXXX" />
      <ButtonNavigateRound navigateToNextRoute={() => navigate('Login')} />
    </View>
  );
}
