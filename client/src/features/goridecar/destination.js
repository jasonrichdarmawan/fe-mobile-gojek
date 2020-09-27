import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import MapView, {Marker} from 'react-native-maps';
import BackIcon from '../../component/BackIcon';

import GpsIcon from '../../component/GpsIcon';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GoridecarDestination = ({route, navigation}) => {
  const [region, setRegion] = useState({
    latitude: -6.890762,
    longitude: 107.617165,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const {Order1} = route.params;
  console.log(Order1 + 'kedua');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapView
          style={{width, height: height * 0.8}}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}>
          <Marker
            coordinate={region}
            // image={require('../../img/destination-logo-small.png')}
          />
        </MapView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <BackIcon goBack={() => navigation.goBack()} />
        <GpsIcon />
      </View>
      <Animatable.View style={styles.footer1} animation="fadeInUpBig">
        <View style={styles.footerContainer}>
          <View style={{marginTop: 20, marginLeft: 25}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Set Destination Location
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{marginLeft: 25}}>
              <Image
                source={require('../../img/destination-logo-small.png')}
                style={{width: 45, height: 45}}
              />
            </View>
            <View style={{marginLeft: 10}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginBottom: 7,
                }}>
                Jl. Dipati Ukur No.112-116
              </Text>

              <Text
                style={{
                  color: 'black',
                  fontSize: 13,
                  color: 'grey',
                }}>
                Jl. Dipati Ukur No.112-116, Lebakgede, Kecamatan Coblong, Kota
                Bandung, Jawa Barat 40132
              </Text>
            </View>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Pickup', {Order2: Order1})}
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 50,
                marginTop: 30,
                padding: 15,
                alignItems: 'center',
                width: '90%',
                backgroundColor: '#009714',
              }}>
              <Text style={{color: '#fff', fontSize: 15}}>
                Set destination location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default GoridecarDestination;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  footer1: {
    flex: 1.5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'white',
    marginTop: 5,
  },
  iconContainer: {
    marginTop: '43%',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
