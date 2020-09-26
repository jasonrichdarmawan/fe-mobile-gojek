import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius:
      Math.round(
        Dimensions.get('window').width + Dimensions.get('window').height,
      ) / 2,
    padding: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  button: {
    borderStyle: 'solid',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

const GoBackButton = ({goBack}) => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, left: 20}]}
    onPress={() => goBack()}>
    <Icon name="arrow-left" size={18} color="black" />
  </TouchableOpacity>
);

const SearchLocationButton = () => (
  <TouchableOpacity
    style={[styles.button, {position: 'absolute', top: 20, right: 20}]}
    // TODO: search location
    onPress={() => console.log('Search Location')}>
    {/* TODO: use gojek assets */}
    <Icon name="search-location" size={18} color="blue" />
  </TouchableOpacity>
);

const DestinationDetails = ({goBack, address}) => {
  console.log(address);
  return (
    <Animatable.View
      style={{
        position: 'absolute',
        top: Dimensions.get('window').height / 2,
        height: '50%',
        width: '100%',
        backgroundColor: 'white',
        padding: 20,
      }}
      animation="fadeInUp">
      <Text style={styles.title}>Detail pengiriman paket</Text>
      <View style={{marginTop: 20, flex: 1, flexDirection: 'row'}}>
        <View style={{marginRight: 16}}>
          <Icon name="box" size={24} color="orange" />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.title}>{address.subdistrict}</Text>
          <Text ellipsizeMode="tail" numberOfLines={2}>
            {address.formatted_address}
          </Text>
        </View>
      </View>
    </Animatable.View>
  );
};

export default function GoSendDestinationDetails({navigation: {goBack}}) {
  const [coordinate, setCoordinate] = React.useState({
    latitude: -6.1754,
    longitude: 106.8272,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const [address, setAddress] = React.useState({
    subdistrict: '',
    formatted_address: '',
  });

  const handleRegionChange = (region) => {
    setCoordinate(region);
  };

  const fetchCityName = ({latitude, longtitude}) => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longtitude}&key=AIzaSyBt7wxG0Y0nPWVY6MHbIyCaHA8GZ7239p0`,
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results[0];
        const address_components = results.address_components;
        const formatted_address = results.formatted_address;
        const getName = (zone) =>
          address_components.filter((item) =>
            item.types[0] === zone ? true : false,
          )[0].long_name;
        setAddress({
          subdistrict: getName('administrative_area_level_3'),
          formatted_address: formatted_address,
        });
      });
  };

  React.useEffect(() => {
    // only fetch once for every instance of coordinate changes.
    const timeout = setTimeout(() => {
      fetchCityName({
        latitude: coordinate.latitude,
        longtitude: coordinate.longitude,
      });
      // console.log('fetch')
    }, 3000);
    return () => clearTimeout(timeout);
  }, [coordinate]);

  // console.log('re-render')

  return (
    <View style={{flex: 1, height: '100%', width: '100%'}}>
      <View style={[styles.container, {height: '75%', width: '100%'}]}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={coordinate}
          onRegionChange={handleRegionChange}
        />

        {/* TODO: use gojek assets */}
        <Icon
          name="map-marker-alt"
          size={36}
          color="orange"
          style={{top: -20}}
        />

        <GoBackButton goBack={goBack} />
        <SearchLocationButton />
      </View>
      <DestinationDetails goBack={goBack} address={address} />
    </View>
  );
}
