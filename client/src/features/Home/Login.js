import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import ButtonNavigateRound from '../../components/ButtonNavigateRound';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white', padding: 20},
  title: {
    fontWeight: 'bold',
  },
  label: {
    fontSize: 12,
  },
});

export default function Login({navigation: {navigate}}) {
  const [text, setText] = React.useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Masuk</Text>
      <Text style={{marginVertical: 10}}>Silakan masuk dengan nomor HP-mu yang terdaftar</Text>
      <Text style={styles.label}>Nomor HP</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={{alignSelf: 'center'}}>+62</Text>
        <TextInput style={[styles.title, {flex: 1, fontSize: 24}]} placeholder="12345678" onChangeText={text => setText(text)}/>
      </View>
      <ButtonNavigateRound navigateToNextRoute={() => navigate('OTP', {text})} />
    </View>
  );
}
