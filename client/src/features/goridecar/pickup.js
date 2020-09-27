import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import MapView, {Marker} from 'react-native-maps';
import IconOct from 'react-native-vector-icons/Octicons';
import BackIcon from '../../components/BackIcon';
import GpsIcon from '../../components/GpsIcon';
import fetchCityName from './fetchCityName';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GoridecarPickup = ({route, navigation}) => {
  const [region, setRegion] = useState({
    latitude: -6.890762,
    longitude: 107.617165,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [address, setAddress] = React.useState({
    subdistrict: '',
    formatted_address: '',
  });

  const {destination} = route.params;

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      fetchCityName({
        latitude: region.latitude,
        longtitude: region.longitude,
        setAddress: setAddress,
      });
    }, 3000);
    return () => clearTimeout(timeout);
  }, [region]);

  const {Order2} = route.params;
  console.log(Order2 + 'ketiga');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapView
          style={{width, height: height * 0.8}}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}>
          <Marker coordinate={region} />
        </MapView>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <BackIcon goBack={() => navigation.goBack()} />
        <GpsIcon setRegion={setRegion} />
      </View>
      <Animatable.View style={styles.footer1} animation="fadeInUpBig">
        <View>
          <View style={{marginTop: 20, marginLeft: 25}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Set Pickup Location
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 40,
              marginHorizontal: 20,
            }}>
            <View>
              <Image
                source={require('../../img/pickup-logo-small.png')}
                style={{width: 50, height: 50}}
              />
            </View>
            <View style={{marginLeft: 10, flex: 1}}>
              <Text
                style={{
                  color: 'black',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginBottom: 7,
                }}>
                {address.subdistrict}
              </Text>

              <Text
                ellipsizeMode="tail"
                numberOfLines={2}
                style={{
                  color: 'black',
                  fontSize: 13,
                  color: 'grey',
                }}>
                {address.formatted_address}
              </Text>
            </View>
          </View>

          <View style={styles.containerTextInput}>
            <View style={styles.sectionStyle}>
              <View style={{marginRight: 10, marginLeft: 15}}>
                <IconOct name="note" size={30} color="green" />
              </View>
              <TextInput
                style={{flex: 1}}
                placeholder="Add notes for your driver"
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Summary', {
                  Order3: Order2,
                  destination: destination,
                  pickup: address.subdistrict,
                })
              }
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
                Set pickup location
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default GoridecarPickup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  footer1: {
    flex: 3.2,
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
  containerTextInput: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    height: 50,
    width: '95%',
    borderRadius: 50,
    margin: 10,
  },
});
