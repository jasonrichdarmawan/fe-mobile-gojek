import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ButtonNavigate from '../../components/ButtonNavigate';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 20,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
  },
  button: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 16,
    paddingHorizontal: 10,
  },
  separator: {
    marginHorizontal: 5,
  },
});

const ButtonSelect = ({text, id, select, setSelect}) => (
  <TouchableOpacity
    style={[styles.button, id === select && {backgroundColor: 'green'}]}
    onPress={() => id !== select && setSelect(id)}>
    <Text style={[styles.title, id === select && {color: 'white'}]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default function GoSendPackageSize({navigation: {navigate}}) {
  const [select, setSelect] = React.useState(1);

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={styles.title}>Pilih ukuran paket</Text>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <ButtonSelect
            select={select}
            setSelect={setSelect}
            text="Kecil"
            id={1}
          />
          <View style={styles.separator} />
          <ButtonSelect
            select={select}
            setSelect={setSelect}
            text="Sedang"
            id={2}
          />
          <View style={styles.separator} />
          <ButtonSelect
            select={select}
            setSelect={setSelect}
            text="Besar"
            id={3}
          />
        </View>
        <Image
          source={require('../../../assets/GoSend_PackageSize.jpg')}
          style={{alignSelf: 'center', marginVertical: 10}}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <ButtonNavigate
          text="Lanjut"
          navigateToNextRoute={() =>
            navigate('GoSendInterCityPackageDetails', {select})
          }
        />
      </View>
    </View>
  );
}
