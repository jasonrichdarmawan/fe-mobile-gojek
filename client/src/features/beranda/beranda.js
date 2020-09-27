import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Beranda = ({navigation}) => {
  // const VirusLogo = '../../img/virus-logo-small.png';
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('NewsScreen')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>News</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GoRideCar', {
            HomeText1: 'Brrm! GoRide is back at your service',
            HomeText2: `Must wear face masks.Personal helmets are  ${'\n'}advised`,
            MarginLeftNext: 0,
            Logo: 1,
            Order: 'Order GoRide',
          })
        }>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>GoRide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GoRideCar', {
            HomeText1: 'Travel with precautions',
            HomeText2: 'Click to learn the gojek J3K protocol',
            MarginLeftNext: 70,
            Logo: 2,
            Order: 'Order GoCar',
          })
        }>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>GoCar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('GoRideCar', {
            HomeText1: 'GoBluebird is for 2 only, and mask is...',
            HomeText2: `Please prepare your won mask before taking${'\n'}a GoBluebird`,
            MarginLeftNext: 0,
            Logo: 2,
            Order: 'Order GoBlueBird',
          })
        }>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>GoBlueBird</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('GoSend')}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>GoSend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Beranda;
