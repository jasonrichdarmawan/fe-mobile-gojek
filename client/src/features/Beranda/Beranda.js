import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    maxHeight: 50,
    maxWidth: 50,
    margin: 10,
  },
  hover: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: 'white',
    backgroundColor: 'white',
    elevation: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

const ButtonIconText = ({icon: {name}, text, onPress}) => (
  <TouchableOpacity style={{alignItems: 'center'}} onPress={onPress}>
    <View style={styles.button}>
      <FontAwesome5Icon
        style={{alignSelf: 'center'}}
        name={name}
        size={24}
        color="white"
      />
    </View>
    <Text>{text}</Text>
  </TouchableOpacity>
);

// TODO: get GoJek news API.
const CardContent = ({onPress}) => (
  <TouchableOpacity
    style={{
      width: 320,
      height: 240,
      borderWidth: 1,
      borderColor: 'white',
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      elevation: 1,
    }}
    onPress={onPress}>
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/GoPay.jpg')}
        imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        style={styles.image}>
        <Text
          style={[
            styles.title,
            {color: 'white', position: 'absolute', bottom: 20, left: 20},
          ]}></Text>
      </ImageBackground>
    </View>
    <View style={{padding: 10}}>
      <Text style={styles.title}>Mau transfer GoPay?</Text>
      <Text>
        Nikmati transfer GoPay ke Bank makin mudah dengan biaya admin yang lebih
        murah. Cobain
      </Text>
    </View>
  </TouchableOpacity>
);

export default function Beranda({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, {marginVertical: 20}]}>
          Konten buat kamu
        </Text>
        <CardContent onPress={() => navigate('Konten')}/>
      </View>
      <View style={{flex: 1, padding: 20, justifyContent: 'flex-end'}}>
        <View style={styles.hover}>
          <ButtonIconText
            icon={{name: 'motorcycle'}}
            text="GoRide"
            onPress={() => console.log('GoRide')}
          />
          <ButtonIconText
            icon={{name: 'car'}}
            text="GoCar"
            onPress={() => console.log('GoCar')}
          />
          <ButtonIconText
            icon={{name: 'taxi'}}
            text="GoBlueBird"
            onPress={() => console.log('GoBlueBird')}
          />
          <ButtonIconText
            icon={{name: 'box'}}
            text="GoSend"
            onPress={() => console.log('GoSend')}
          />
        </View>
      </View>
    </View>
  );
}
