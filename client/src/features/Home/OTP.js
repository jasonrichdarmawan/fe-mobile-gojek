import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ButtonNavigateRound from '../../components/ButtonNavigateRound';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});
export default function OTP({route: {params}, navigation: {navigate}}) {
  const {text} = params;
  const [timer, setTimer] = React.useState(100);

  React.useEffect(() => {
    if (timer > 0) {
      const timer = setTimeout(() => {
        setTimer((initial) => initial - 1);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [timer]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kode OTP sudah dikirimi!</Text>
      <Text style={{marginVertical: 10}}>
        Masukkan kode OTP yang kami SMS ke nomor HP-mu yang terdaftar {text}
      </Text>
      <Text>OTP</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder=". . . ."
          style={{flex: 1, fontWeight: 'bold', fontSize: 20}}
        />
        <Text style={{alignSelf: 'center'}}>
          {Math.floor(timer / 60) + ':' + (timer % 60)}
        </Text>
      </View>
      <ButtonNavigateRound navigateToNextRoute={() => navigate('Home')} />
    </View>
  );
}
