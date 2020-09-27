import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ButtonNavigate from '../../components/ButtonNavigate';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
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

const Item = ({text}) => (
  <View style={{flexDirection: 'row'}}>
    <Text style={{fontWeight: 'bold', marginRight: 10}}>{'\u2022'}</Text>
    <Text>{text}</Text>
  </View>
);

export default function GoSendPackageSize({navigation: {navigate}}) {
  const [select, setSelect] = React.useState(1);

  const data = [
    [
      {
        id: '3ac68afc-c1b1-46c2-aed5-3ad53abb28ba',
        text: 'Berat paket maks. 5 kg',
      },
      {
        id: 'bd7acbea-c605-48d3-471f-fbd91aa97f63',
        text: 'Dimensi paket maks. 20 cm',
      },
      {
        id: '58694a0f-3da1-a4f8-bd96-145571e29d72',
        text: 'Bisa untuk buku, baju, makanan, dokumen, dll.',
      },
    ],
    [
      {
        id: 'bd7acbea-48d3-46c2-aed5-3ad53abb28ba',
        text: 'Berat paket maks. 5 kg',
      },
      {
        id: '3ac68afc-c605-c1b1-3da1-fbd91aa97f63',
        text: 'Dimensi paket maks. 30 cm',
      },
      {
        id: '58694a0f-a4f8-471f-bd96-145571e29d72',
        text: 'Bisa untuk sepatu',
      },
    ],
    [
      {
        id: 'bd7acbea-c1b1-46c2-aed5-fbd91aa97f63',
        text: 'Berat paket maks. 5 kg',
      },
      {
        id: '3ac68afc-c605-3da1-a4f8-3ad53abb28ba',
        text: 'Dimensi paket maks. 40 cm',
      },
      {
        id: '58694a0f-3da1-a4f8-bd96-145571e29d72',
        text: 'Bisa untuk bingkiran ukuran besar, tas, lukisan, dll',
      },
    ],
  ];

  const getData = data[select - 1];

  const renderItem = ({item: {text}}) => <Item text={text} />;

  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <View style={{padding: 20}}>
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
          <Text style={[styles.title]}>Ketentuan</Text>
        </View>
        <View style={styles.divider} />
        <SafeAreaView style={{padding: 20}}>
          <FlatList
            data={getData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', padding: 20}}>
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
