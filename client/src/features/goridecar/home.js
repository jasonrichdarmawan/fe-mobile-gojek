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

import IconMatIc from 'react-native-vector-icons/MaterialIcons';
import BackIcon from '../../components/BackIcon';
import GpsIcon from '../../components/GpsIcon';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GoridecarHome = ({route, navigation}) => {
  const [region, setRegion] = useState({
    latitude: -6.890762,
    longitude: 107.617165,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [urLimage, setUrlImage] = useState();
  const {Order} = route.params;
  const {HomeText1} = route.params;
  const {HomeText2} = route.params;
  const {MarginLeftNext} = route.params;
  const {Logo} = route.params;
  console.log(Order + 'kesatu');
  console.log(Logo);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapView
          style={{width, height: height * 0.5}}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}>
          <Marker coordinate={region} />
        </MapView>
      </View>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <BackIcon goBack={() => navigation.goBack()} />
          <GpsIcon setRegion={setRegion} />
        </View>
      </View>
      <Animatable.View style={styles.footer1} animation="fadeInUpBig">
        <View
          style={{
            paddingLeft: 27,
            marginBottom: 10,
            flexDirection: 'row',
          }}>
          <View style={{paddingTop: 30}}>
            {Logo === 1 && (
              <Image
                style={styles.logo}
                source={require('../../img/goride-small-icon.png')}
              />
            )}
            {Logo === 2 && (
              <Image
                style={styles.logo}
                source={require('../../img/virus-logo-small.png')}
              />
            )}
          </View>

          <View
            style={{marginLeft: 10, paddingTop: 10, paddingRight: 5, flex: 1}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: 'white',
                fontSize: 17,
                paddingTop: 5,
                paddingBottom: 2,
                paddingLeft: 5,
              }}>
              {HomeText1}
            </Text>

            <Text
              style={{
                color: 'white',
                fontSize: 15,
                padding: 5,
              }}>
              {HomeText2}
            </Text>
          </View>

          <View
            style={{
              paddingTop: 30,
              marginLeft: MarginLeftNext,
            }}>
            <IconMatIc name="navigate-next" size={25} color="white" />
          </View>
        </View>

        <Animatable.View style={styles.footer2} animation="fadeInUpBig">
          <Text style={styles.title}>Where would you like to go?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('Destination', {Order1: Order})}>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 50,
                marginTop: 20,
                flexDirection: 'row',
              }}>
              <View style={{padding: 10}}>
                <Image
                  style={styles.logo}
                  source={require('../../img/destination-logo-small.png')}
                />
              </View>
              <Text style={{padding: 15, color: 'grey', fontSize: 15}}>
                Search for a destination
              </Text>
            </View>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Image
              source={require('../../img/thumb-icon.png')}
              style={{width: 100, height: 100}}
            />
            <View style={{paddingTop: 10, flex: 1}}>
              <Text style={{fontWeight: 'bold', fontSize: 19}}>
                That's right, order Gojek now
              </Text>
              <Text style={{fontSize: 15, color: 'black'}}>
                less stress on the road, more joy on the ride. Aaahhh
              </Text>
            </View>
          </View>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
};

export default GoridecarHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  footer1: {
    flex: 5,
    backgroundColor: '#009714',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footer2: {
    height: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  title: {
    color: 'black',
    fontSize: 23,
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
  logo: {
    width: 30,
    height: 30,
  },
});
