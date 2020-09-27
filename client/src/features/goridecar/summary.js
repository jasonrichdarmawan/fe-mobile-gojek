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
import BackIcon from '../../component/BackIcon';
import GpsIcon from '../../component/GpsIcon';
import SummaryModal from '../../component/SummaryModal';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const GoridecarSummary = ({route, navigation}) => {
  const [region, setRegion] = useState({
    latitude: -6.890762,
    longitude: 107.617165,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const {Order3, destination, pickup} = route.params;
  console.log(Order3 + 'ketiga');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MapView
          style={{width, height}}
          region={region}
          onRegionChangeComplete={(region) => setRegion(region)}>
          <Marker
            coordinate={region}
            // image={require('../../img/destination-logo-small.png')}
          />
        </MapView>
        <SummaryModal destination={destination} pickup={pickup} />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <BackIcon goBack={() => navigation.goBack()} />
        <GpsIcon setRegion={setRegion} />
      </View>
      <Animatable.View style={styles.footer1} animation="fadeInUpBig">
        <View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TopNavigator')}
              style={{
                borderWidth: 1,
                borderColor: 'grey',
                borderRadius: 50,
                marginTop: 30,
                padding: 15,
                alignItems: 'center',
                width: '90%',
                backgroundColor: '#009714',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginLeft: 10,
                }}>
                {Order3}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: 'bold',
                    paddingTop: 5,
                  }}>
                  Rp.26.000
                </Text>
                <View
                  style={{
                    borderRadius: 50,
                    marginLeft: 10,
                    width: 30,
                    height: 30,
                    backgroundColor: '#fff',
                    padding: 2,
                  }}>
                  <IconMatIc name="navigate-next" size={25} color="green" />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
};

export default GoridecarSummary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
  },
  footer1: {
    // flex: 1,
    paddingBottom: 20,
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
